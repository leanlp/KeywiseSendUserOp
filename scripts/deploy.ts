import { ethers } from "hardhat";
require("dotenv").config();

// const data = require("./arguments.js");
const {API_KEY_ALCHEMY, PRIVATE_KEY } =
  process.env;

const provider = new ethers.AlchemyProvider(80001, API_KEY_ALCHEMY);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY2 ??"");
const signer = wallet.connect(provider);



async function main() {

  const Factory = await ethers.getContractFactory("SimpleAccount");
  const factory = await Factory.deploy("0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789", "0x3a085Fa64b3d4DF98e3BF4a869Ea0d6E3082d8c3")
    // ["0x2924a6C59115299A5945cA1dF6D73ABA526C97bd","0x6f6eb030334642D3D1527B3D1b05fb08C16852d5","0xB3E1275Be2649E8cf8e4643da197d6F7B309626A"], 1); //arg()
  
  // const conect = await provider.getBalance(wallet)
  console.log(await factory.getAddress())
  // console.log(conect)
 
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
