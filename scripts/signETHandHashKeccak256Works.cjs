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
// mi firma=    0x8c23dbb379190db5d44ebb46f763b9cfd5a53426ba2d5190ee4a4049b77ddd6336d071ab00aadca7c2ded1f8b4497cf639bc6bfc200520bef4d9c1aad32f23901b
//signatureMM   0xa32540486660d920595a3a9abb78d649475975b460aa353252f35d1e16a93d043fa94eaf5809e7ad014977c7caef457677051f289a4dce678053934cff2b8ba91c
//      MM2     0xe8a88b50b3bc9765848f0684a3618b2be6c35bbb40d7a1f1a78e1fe533815e5b1b3a294cae9d31f0c1bbcac60a1224ff2d845c3b2150d9a946ccce053dada4cf1c
// messageEncode="0x19457468657265756d205369676e6564204d6573736167653a0a000000000000000000000000000000000000000000000000000000000000000b68656c6c6f77776f726c64";
m="0xe934190743152d33454ad4010e3acdb88b7fe9418b64e7e5b42ea90d6f206323"
m2="0x94ad68c10d3ca68e3f7aa38b3becdd4bbd8dbe0ee624afe51e77dea7bf844f3e"
const encodedMessage = encodeEthereumMessage(m);
// const msgHashBuffer = Buffer.from(keccak256(encodedMessage), 'hex');
const msgHash =  keccak256(encodedMessage)
// (encodedMessage);

console.log("Hash of the Message pre sign(encode):", msgHash);
// h="0xe4d3212eff0380503e565995fdb753e81f272149e93990a130e5dfae67c961b8"
const msgHashBuffer = Buffer.from(m2)
// Sign the message
const signature = keyPair.sign(m2)
// (msgHashBuffer);
const r = signature.r.toString(16);
const s = signature.s.toString(16);
let v = signature.recoveryParam + 27;  // Adjusting for Ethereum's v value
// console.log((signature))
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

// console.log("Signature Bytes:", signatureBytes);



// Verify the signature
const isValid = keyPair.verify(msgHashBuffer, { r: r, s: s });
console.log(isValid ? "Valid signature!" : "Invalid signature.");




// Private Key= 69146a0bfc6fba5c472b487b46d71dc5fb8286efee133f35f099b2baa25f369b
// Public Key= 04394ff48c369db655bf99888051bd4c5504daef414b5812ad1af334932e9c2a3730d7bbc8192bf2e1e459353aaf019487304521af12b688d32e9b2ca5dce173f9
// AddressBTC=19SbTWGt6PJQpFZMHJasHAe1TbUmawmpWG
// Signature R= d30462942ebca39c8a3c80bb0f51a00200aa2a8eab96214e162e5fcf1e9a9201
// Signature S= c42ddcd119994ed1ce8586ffbaf65e716d8e1afe551d84160ec9c61459acc035

raw="0xf86c808504a817c8008252089435ef55f06f1f829a5d884f0cfeff7b6dbb8e371802ea0df709ad5b19fb4d45f5367ef7b7d4caa95e2e7560bb8336a0c6a7ed4d5f5e29a0c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470"
sEC="0x02f8608080808080943a085fa64b3d4df98e3bf4a869ea0d6e3082d8c30180c080a02d86943e6dfad5cf1599d5057acadc7602868e22c7ca0c44f376a367bc4e4f82a038c59804430c7a762c7e509afd322f580b91bb6ee60de373dac335dcc5f2b55f"

hashsha256="3045022100c07e781b973c01885c2a47145e6759087a4ff65a4ce78ebaba88ffaee7af8df702204e6df8dacfe3916f73e27df8a17191ecce8b3c26a3d9372b9ef17b257d5b9bf4"

               30848827712021293731208415302456569301499384654877289245795786476741155372082