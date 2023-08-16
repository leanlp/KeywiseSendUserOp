require("dotenv").config();

const ethers = require("ethers");
const abi = require('./ABIERC20.json');

const iface = new ethers.Interface(abi);


const arg1 = "0xf53eefD2f5E0B8235D8B0b9FAE4eFA74c98786f0";  // staking contract
const arg2 = "100000"; // second argument

const encodedABIApprove = iface.encodeFunctionData("approve", [arg1, arg2]);

console.log("Approve", encodedABIApprove);

const arg1T = "0xf53eefD2f5E0B8235D8B0b9FAE4eFA74c98786f0";  // staking contract
const arg2T = "100000"; // second argument

const encodedABITransfer = iface.encodeFunctionData("transfer", [arg1T, arg2T]);

console.log("Transfer", encodedABITransfer);
