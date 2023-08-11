require("dotenv").config();
const { Wallet, utils } = require('ethers');
const ethers = require("ethers");
const { json } = require("hardhat/internal/core/params/argumentTypes");


const {API_KEY_ALCHEMY, PRIVATE_KEY, API_URL_ALCHEMY } =
  process.env;



async function main() {
  // Connect to the network
  const provider = new ethers.AlchemyProvider(80001, API_KEY_ALCHEMY);
 

 
  let wallet = new ethers.Wallet(PRIVATE_KEY);
   // Connect the wallet to the provider
  wallet = wallet.connect(provider);

  // The transaction data

  let transaction = {
      to: "0xB3E1275Be2649E8cf8e4643da197d6F7B309626A",
      value: 1, 
  };

  // Sign the transaction
  let signedTransaction = await wallet.signTransaction(transaction);
  console.log("hashsign",signedTransaction)

  // Send the transaction
  let tx = await wallet.sendTransaction(transaction);
  console.log(tx.hash);

  

// // Replace this with your private key
// jferi= ethers.HDNodeWallet.fromMnemonic("sauce soccer exclude dirt believe text survey lemon note employ slight bullet")


// // Sign a dummy message
// const message = "Dummy message for public key derivation";
// const signature = await wallet.signMessage(message);

// // Recover the public key from the signature
// const messageHash = ethers.hashMessage(message);
// const publicKey = ethers.recoverPublicKey(messageHash, signature);

// console.log("Public Key:", publicKey);

}

main();