const { ec } = require('elliptic');
const ellipticCurve = new ec('secp256k1');
const keccak256 = require('js-sha3').keccak256;
const { ethers, toUtf8Bytes } = require('ethers');

const privateKey = "92a5e29859943108a04a53a86f14e0d4c5307c381c192a3a3cdb8d94717659b0";
const keyPair = ellipticCurve.keyFromPrivate(privateKey);

function encodeEthereumMessage(m) {
    const messageBytes = toUtf8Bytes(m);
    const length = messageBytes.length;
    const prefix = `\x19Ethereum Signed Message:\n${length}`;
    return Buffer.concat([toUtf8Bytes(prefix), messageBytes]);
}

//signatureMM   0xb7e380c5b4e359d489859c8641c805b1717f398b66810c9dd0301d94fb41e4ab789f4591860c08b08141a8df407d78a7690d85b499cd9b09f3e16d43b06ecbd91c
messageEncode="0x19457468657265756d205369676e6564204d6573736167653a0a000000000000000000000000000000000000000000000000000000000000000b68656c6c6f77776f726c64";
const m = "hellowworld";
const encodedMessage = encodeEthereumMessage(m);
const msgHashBuffer = Buffer.from(keccak256(encodedMessage), 'hex');
const msgHash = '0x' + keccak256(messageEncode)
// (encodedMessage);

console.log("Hash of the Message:", msgHash);
h="0x4a2bbd37d162bdb4b60030f93d2d12e601f70b295dc81f144325dca3b6cbc7cf"
// Sign the message
const signature = keyPair.sign(h)
// (msgHashBuffer);
const r = signature.r.toString(16);
const s = signature.s.toString(16);
let v = signature.recoveryParam + 27;  // Adjusting for Ethereum's v value
// console.log(pa(signature))
console.log("Signature V:", v);
console.log("Signature R:", r);
console.log("Signature S:", s);

// Convert signature components to bytes
const rBytes = Buffer.from(r, 'hex');
const sBytes = Buffer.from(s, 'hex');
const vBytes = Buffer.from(v.toString(16), 'hex');

// Concatenate and hash the signature
const signatureBytes = Buffer.concat([rBytes, sBytes, vBytes]);

const rPadded = r.padStart(64, '0');
const sPadded = s.padStart(64, '0');
const vPadded = v.toString(16).padStart(2, '0');

// Concatenate r, s, and v to get the full signature in hex format
const signatureHex = '0x' + rPadded + sPadded + vPadded;

console.log("Signature in Hex:", signatureHex);

console.log("Signature Bytes:", signatureBytes);



// Verify the signature
const isValid = keyPair.verify(msgHashBuffer, { r: r, s: s });
console.log(isValid ? "Valid signature!" : "Invalid signature.");


function hashEthereumMessage(message) {
    // Convert message to byte representation
    const messageBytes = Buffer.from(message, 'utf8');
    
    // Prefix with special Ethereum prefix and message length
    const prefix = `\x19Ethereum Signed Message:\n${messageBytes.length}`;
    const prefixedMessage = Buffer.concat([Buffer.from(prefix, 'utf8'), messageBytes]);
    
    // Hash the prefixed message using Keccak256
    return keccak256(prefixedMessage);
}

const message = "hellowworld";
const hashedMessage = hashEthereumMessage(message);
console.log("Hashed Message:", hashedMessage);