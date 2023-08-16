require("dotenv").config();

const ethers = require("ethers");
const abi = require('../ABIERC20.json');
const abiUniV2 = require('../ABIUniSwapRouterV2.json');


const iface = new ethers.Interface(abi);


const arg1 = "0xf53eefD2f5E0B8235D8B0b9FAE4eFA74c98786f0";  // staking contract
const arg2 = "100000"; // second argument

const encodedABI = iface.encodeFunctionData("transfer", [arg1, arg2]);

console.log(encodedABI);




//WMATIC address= 0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889
//UniswapV2= 0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff
//AA=0xcf3C09Ae6124Ddc24e1970314308ee6869Ab39f2
// MM=0x6f6eb030334642D3D1527B3D1b05fb08C16852d5

