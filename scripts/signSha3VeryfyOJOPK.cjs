const { ec } = require('elliptic');
const ellipticCurve = new ec('secp256k1');
const crypto = require('crypto');
// Generate a new key pair
const privateKey = "0x92a5e29859943108a04a53a86f14e0d4c5307c381c192a3a3cdb8d94717659b0";
const publicKey = "04e9fd3733395d4bd2f73619665cad94cd2f3563a9d2dd88c2ade0359a0efff1f5f68964be11860cbf61a467c767c4bd69951910b7f0cdcf3a98e6467807f4dfca";

// Create a key pair from the provided private key
const keyPair = ellipticCurve.keyFromPrivate(privateKey);
console.log("Private Key:", privateKey);
console.log("Public Key:", publicKey);

let transaction = {
    to: "0x3a085Fa64b3d4DF98e3BF4a869Ea0d6E3082d8c3",
    value: 1, 
};

// Convert the transaction object to a string
let txString = JSON.stringify(transaction);

const msgHashBuffer = crypto.createHash('sha256').update(txString).digest();
const msgHash = msgHashBuffer.toString('hex');



// Sign the message
const signature = keyPair.sign(msgHashBuffer);
const signatureHex = signature.toDER('hex');
const r = signature.r.toString(16);
const s = signature.s.toString(16);
let v = signature.recoveryParam;
console.log("hash", signatureHex)
console.log("Signature V:", v);
console.log("Signature R:", r);
console.log("Signature S:", s);

const hexToBytes = (hex) => {
    for (var bytes = [], c = 0; c < hex.length; c += 2)
    bytes.push(parseInt(hex.substr(c, 2), 16));
    return bytes;
};
console.log(hexToBytes)


const rBytes = hexToBytes(r);
const sBytes = hexToBytes(s);
// const signBytes = hexToBytes(signatureHex)
// console.log(rBytes, sBytes, signBytes)



// Verify the signature
const sig = { r: r, s: s };
const keyFromPublic = ellipticCurve.keyFromPublic(publicKey, 'hex');
const isValid = keyFromPublic.verify(msgHash, sig);

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