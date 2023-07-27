require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-etherscan");
const { privateKey } = require("./secrets.json");

require('dotenv').config()

module.exports = {
  solidity: "0.8.4",
  networks: {
    sphinx: {
      url: "https://dapps.shardeum.org",
      chainId: 8081,
      accounts: [privateKey],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },

};