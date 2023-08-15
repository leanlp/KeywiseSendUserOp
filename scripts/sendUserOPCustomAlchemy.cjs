const options = {
  method: 'POST',
  headers: {accept: 'application/json', 'content-type': 'application/json'},
  body: JSON.stringify({
    id: 1,
    jsonrpc: '2.0',
    method: 'eth_sendUserOperation',
    params: [
      {
        sender: '0xcf3c09ae6124ddc24e1970314308ee6869ab39f2',
        nonce: '0x2a',
        initCode: '0x',
        callData: '0xb61d27f60000000000000000000000000be71941d041a32fe7df4a61eb2fcff3b03502c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000004d087d28800000000000000000000000000000000000000000000000000000000',
        callGasLimit: '0xfffffffffffffffffffffffffffffff0000000000000000000000000000000007aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1c',
        verificationGasLimit: '0xfffffffffffffffffffffffffffffff0000000000000000000000000000000007aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1c',
        preVerificationGas: '0xfffffffffffffffffffffffffffffff0000000000000000000000000000000007aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1c',
        maxFeePerGas: '0',
        maxPriorityFeePerGas: '0',
        signature: '0xfffffffffffffffffffffffffffffff0000000000000000000000000000000007aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1c',
        paymasterAndData: ""
      },
      '0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789'
    ]
  })
};

fetch("https://polygon-mumbai.g.alchemy.com/v2/0-55NPGkslreDxIVJ9gXoLrq9U8ia-t_", options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));