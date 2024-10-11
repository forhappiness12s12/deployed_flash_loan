const { ethers, upgrades } = require("hardhat"); // Using CommonJS require
require('@openzeppelin/hardhat-upgrades'); // Use require instead of import

async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    // Get the contract factory for MyFlash
    const MyFlash = await ethers.getContractFactory("myFlash");

    // Deploy a proxy for the MyFlash contract, with the initializer set to 'initialize'
    const proxy = await upgrades.deployProxy(MyFlash, ["0xDc1D7DCd1D9Aa43310883725A7F12623ec15A353","0xb26EFe3292309C6d7406d1da80322CA62436C145"], { initializer: 'initialize' });
    
    // Wait for the proxy contract to be deployed
    await proxy.deployed();
  
    console.log("Proxy deployed to:", proxy.address);
}
  
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
