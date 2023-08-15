require("dotenv").config();

const ethers = require("ethers");
const abi = require('./ABIERC20.json');
const abiUniV2 = require('./ABIUniSwapRouterV2.json');


const iface = new ethers.Interface(abi);


const arg1 = "0xB3E1275Be2649E8cf8e4643da197d6F7B309626A";  // Target 1 Wmatic contract // 2do UniswapV2
const arg2 = "10000000000"; // second argument

const encodedABI = iface.encodeFunctionData("transfer", [arg1, arg2]);

console.log(encodedABI);




//WMATIC address= 0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889
//UniswapV2= 0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff
//AA=0xcf3C09Ae6124Ddc24e1970314308ee6869Ab39f2
// MM=0x6f6eb030334642D3D1527B3D1b05fb08C16852d5




// function encodePacked(params = []){

//     let types = []
//     let values = []

//     params.forEach(itemArray => {
//         types.push(itemArray[0])
//         values.push(itemArray[1])
//     })

//     return ethers.solidityPacked(types, values)
//   }


// console.log(encodePacked([
// ["address", "0x2924a6C59115299A5945cA1dF6D73ABA526C97bd"],
// ["uint256", 15]
// ]))