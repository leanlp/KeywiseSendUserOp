require("dotenv").config();

const ethers = require("ethers");


const {API_KEY_ALCHEMY, PRIVATE_KEY, API_URL_ALCHEMY } =
  process.env;



async function main() {
  // Connect to the network
  // const provider = new ethers.AlchemyProvider(80001, API_KEY_ALCHEMY);
 

 
  // let wallet = new ethers.Wallet(PRIVATE_KEY);
  //  // Connect the wallet to the provider
  // wallet = wallet.connect(provider);

  // console.log(provider)
  // // The transaction data

  let transaction = {
      to: "0x3a085Fa64b3d4DF98e3BF4a869Ea0d6E3082d8c3",
      value: 1, 
  };

  // // Sign the transaction
  // let signedTransaction = await wallet.signTransaction(transaction);

  // // Send the transaction
  // let tx = await wallet.sendTransaction(transaction);
  // console.log(tx.hash);


// Convert the transaction object to a string
let txString = JSON.stringify(transaction);


  const crypto = require('crypto');
  const { ec } = require('elliptic');
  const ellipticCurve = new ec('secp256k1');
  

  const msgHash = crypto.createHash('sha256').update(txString).digest();
  console.log(msgHash)
  // 2. Sign the hashed message with ECDSA
// PKBTC=L19QsARRsXzbp6zorHK2ECPw2EEbkHCnpx47vLn4eCL1TtEFbDkg;
// BTCAddress=19SbTWGt6PJQpFZMHJasHAe1TbUmawmpWG;

             

  const privateKey = "0x69146a0bfc6fba5c472b487b46d71dc5fb8286efee133f35f099b2baa25f369b" //"YOUR_PRIVATE_BTC"; 
  const key = ellipticCurve.keyFromPrivate(privateKey, 'hex');
  const signature = key.sign(msgHash);
  const signatureHex = signature.toDER('hex');
console.log(signatureHex)

}

main();