require("@nomiclabs/hardhat-ethers");
require('@openzeppelin/hardhat-upgrades');
require("@nomicfoundation/hardhat-verify");
require("dotenv").config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const PRIVATE_KEY1 = process.env.PRIVATE_KEY1;

module.exports = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      forking: {
        url: 'https://arb-mainnet.g.alchemy.com/v2/7eOLHZwz5cGdg809c3NDqfFT1cBSUMYx',
        blockNumber: 261417880,
      },
      allowUnlimitedContractSize: true,
    },
    arbitrum: {
      url: 'https://arb-mainnet.g.alchemy.com/v2/7eOLHZwz5cGdg809c3NDqfFT1cBSUMYx',  // Replace with your Alchemy API URL for Arbitrum
      accounts: [`0x${PRIVATE_KEY}`],
      chainId: 42161,  // Arbitrum Mainnet chain ID
    },
  },
};


//npx hardhat run scripts/deploy_proxy.js --network arbitrum
