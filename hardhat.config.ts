require("dotenv").config();
import { HardhatUserConfig, task } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { send } from "./scripts/Old/sendUserOPPaymasterKeywise"

const {PRIVATE_KEY, API_URL_ALCHEMY, poligonScan} = process.env;

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
})
const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    matic: {
      url: API_URL_ALCHEMY,
      accounts: [`${PRIVATE_KEY}`],

    }
  },
  etherscan: {

    apiKey: poligonScan
  }


};

export default config;
