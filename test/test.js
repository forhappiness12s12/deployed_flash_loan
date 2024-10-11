const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("My Flash Loan Proxy Contract", function () {
  let owner, receiver, user, flashContract, FlashParams;

  before(async () => {
    [owner, user, receiver] = await ethers.getSigners();

    // Deploy the flash loan contract as a proxy
    const FlashContract = await ethers.getContractFactory("myFlash");
    flashContract = await upgrades.deployProxy(FlashContract, [owner.address, receiver.address], { initializer: 'initialize' });

    // Log contract owner
    const contractOwner = await flashContract.getOwner();
    console.log("Contract Owner:", contractOwner);
    console.log("Signer:", owner.address);

    // Initialize FlashParams
    FlashParams = {
      token: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
      pairtoken: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
      amount: ethers.utils.parseEther("1"), // starting value
      usePath: 0,
      path1: 5,
      path2: 6
    };
  });

  it("Should execute flash loan and profit for different amounts", async function () {
    // Loop FlashParams.amount from 0.1 to 2 ether
    for (let i = 0.1; i <= 2; i += 0.1) {
      FlashParams.amount = ethers.utils.parseEther(i.toString());
      console.log("Testing with amount:", FlashParams.amount.toString());

      await flashContract.connect(owner).callFlash(FlashParams);
      
      // Uncomment if you want to estimate profit after the flash loan
      // await flashContract.connect(owner).estimateProfit(FlashParams.token, FlashParams.amount, FlashParams.pairtoken);
    }
  });
});
