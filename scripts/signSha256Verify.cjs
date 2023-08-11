const { ec } = require('elliptic');
const ellipticCurve = new ec('secp256k1');

let msgHash = "30460221008e5dd5ea2af18b0fc78720fdd6336cec097aa414adaa5a938bf2e220f88386aa022100c7fbcfaa3215e71a554696955a3af6ba694bfd0bad1e290f8684a52ac48f5898"; 
let signature = "0x69146a0bfc6fba5c472b487b46d71dc5fb8286efee133f35f099b2baa25f369b"; //
let publicKey = "04394ff48c369db655bf99888051bd4c5504daef414b5812ad1af334932e9c2a3730d7bbc8192bf2e1e459353aaf019487304521af12b688d32e9b2ca5dce173f9"; 


// Convert signature to a format suitable for elliptic
let sig = {
    r: signature.r.toString(16),
    s: signature.s.toString(16)
};

let key = ellipticCurve.keyFromPublic(publicKey, 'hex');
let isValid = key.verify(msgHash, sig);

console.log(isValid ? "Valid signature!" : "Invalid signature.");