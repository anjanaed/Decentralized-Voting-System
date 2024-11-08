require("@nomiclabs/hardhat-ethers");
require('dotenv').config();

const {API_URL, PRIVATE_KEY} = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {
    },
    sepolia: {
      url: "https://sepolia.infura.io/v3/adeb998662214eae96a12f2195600607",
      accounts: [{PRIVATE_KEY}]
    }
  }
};
