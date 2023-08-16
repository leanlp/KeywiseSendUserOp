require("dotenv").config();
const { Wallet, utils } = require('ethers');
const ethers = require("ethers");



const {API_KEY_ALCHEMY, PRIVATE_KEY, API_URL_ALCHEMY } =
  process.env;



async function main() {
  // Connect to the network
  const provider = new ethers.AlchemyProvider(80001, API_KEY_ALCHEMY);
 

 
  let wallet1 = new ethers.Wallet(PRIVATE_KEY);
   // Connect the wallet to the provider
  wallet = wallet1.connect(provider);


  address= wallet.getAddress()
console.log(address)
  // The transaction data
messege2="0xf4592e1bfecea37f196b63200a34ab900c27a14b7764a6a4039ba2dfaa221143";
message="hellowworld"

  // let transaction = {
      // to: "0xB3E1275Be2649E8cf8e4643da197d6F7B309626A",
      // value: 1, 
  // };
// 0x8549f77d309e62400e14039305f7035b570d27d6e34be6210018c67d9e7a94d11ea1119ccb829472410029f0725a50e09d609c2949dc6df6b96d0b5a186c2f451c
  // Sign the transaction
  // let signedTransaction = await wallet.signTransaction(transaction);
  let signedTransaction = await wallet.signMessage(message);
  console.log("hashsign",signedTransaction)
  // ethers.verifyMessage(message, wallet)
  // console.log(veri)

  // Send the transaction
  // let tx = await wallet.sendTransaction(transaction);
  // console.log(tx.hash);

// // Sign a dummy message
// const message = "Dummy message for public key derivation";
// const signature = await wallet.signMessage(message);

// // Recover the public key from the signature
// const messageHash = ethers.hashMessage(message);
// const publicKey = ethers.recoverPublicKey(messageHash, signature);

// console.log("Public Key:", publicKey);

}

main();