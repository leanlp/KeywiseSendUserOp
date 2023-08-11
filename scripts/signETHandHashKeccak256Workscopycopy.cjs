const { ec } = require('elliptic');
const { hashMessage, ethers } = require('ethers');
const ellipticCurve = new ec('secp256k1');
const keccak256 = require('js-sha3').keccak256;

const privateKey = "0x92a5e29859943108a04a53a86f14e0d4c5307c381c192a3a3cdb8d94717659b0";
const keyPair = ellipticCurve.keyFromPrivate(privateKey);

sig= new ethers.SigningKey(privateKey.toString())
console.log(sig)
// function hashEthereumMessage(message) {
//     // Convert message to byte representation
//     const messageBytes = Buffer.from(message, 'utf8');
    
//     // Prefix with special Ethereum prefix and message length
//     const prefix = `\x19Ethereum Signed Message:\n${messageBytes.length}`;
//     const prefixedMessage = Buffer.concat([Buffer.from(prefix, 'utf8'), messageBytes]);
    
//     // Hash the prefixed message using Keccak256
//     return keccak256(prefixedMessage);
// }
// mm "0xa9f0616a7c94ee5ca93580d33256634e3a5779ecc5e5cc6999d71c92108579597fd677a1416f511d1d9c9b500fe73944f363c10c35cda2e68fb349884f5ae7dc1c"
// const message = "hellowworld";
// const hashedMessage = hashEthereumMessage(message);
// console.log("Hashed Message:", hashedMessage);
hashedMessage= "0xabff416c243c0e0b1aef5de703667a1f145e0f48dc169daa338d01febda1b95a"
// Sign the hashed message
const signature = keyPair.sign(Buffer.from(hashedMessage));
const r = signature.r.toString(16);
const s = signature.s.toString(16);
let v = signature.recoveryParam + 27;  // Adjusting for Ethereum's v value

console.log("Signature V:", v);
console.log("Signature R:", r);
console.log("Signature S:", s);

// Convert signature components to bytes
const rBytes = Buffer.from(r, 'hex');
const sBytes = Buffer.from(s, 'hex');
const vBytes = Buffer.from(v.toString(16), 'hex');

// Concatenate r, s, and v to get the full signature in hex format
const signatureHex = '0x' + r.padStart(64, '0') + s.padStart(64, '0') + v.toString(16).padStart(2, '0');

console.log("Signature in Hex:", signatureHex);

// Verify the signature
const isValid = keyPair.verify(Buffer.from(hashedMessage, 'hex'), { r: r, s: s });
console.log(isValid ? "Valid signature!" : "Invalid signature.");