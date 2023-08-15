const ethers = require("ethers");

async function up(){

const options = {
  method: 'POST',
  headers: {accept: 'application/json', 'content-type': 'application/json'},
  body: JSON.stringify({
    id: 1,
    jsonrpc: '2.0',
    method: 'alchemy_requestGasAndPaymasterAndData',
    params: [
      {
        policyId: '756be215-365f-41db-bcb8-a9e1c05a6b75',
        entryPoint: '0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789',
        dummySignature: '0xe8fe34b166b64d118dccf44c7198648127bf8a76a48a042862321af6058026d276ca6abb4ed4b60ea265d1e57e33840d7466de75e13f072bbd3b7e64387eebfe1b',
        userOperation: {
          sender: '0xcf3C09Ae6124Ddc24e1970314308ee6869Ab39f2',
          nonce:  new ethers.NonceManager(),
          initCode: '0x',
          callData: '0xb61d27f60000000000000000000000000be71941d041a32fe7df4a61eb2fcff3b03502c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000004d087d28800000000000000000000000000000000000000000000000000000000'
        }
      }
    ]
  })
};
const nonce= ethers.resolveProperties(options)
console.log(await ethers.NonceManager, nonce)

fetch("https://polygon-mumbai.g.alchemy.com/v2/0-55NPGkslreDxIVJ9gXoLrq9U8ia-t_", options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

}
up()
