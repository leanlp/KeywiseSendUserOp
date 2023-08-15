


require("dotenv").config({ path: '../.env' });
const aaCore = require("@alchemy/aa-core");
const ethers = require("ethers");
const AlchemyProvider = require("@alchemy/aa-alchemy")


const {API_KEY_ALCHEMY, PRIVATE_KEY, API_URL_ALCHEMY } =
  process.env;


const SimpleSmartContractAccount = aaCore.SimpleSmartContractAccount;
const SmartAccountProvider = aaCore.SmartAccountProvider;
const SimpleSmartAccountOwner = aaCore.SimpleSmartAccountOwner;
const LocalAccountSigner = aaCore.LocalAccountSigner;

const mnemonicToAccount = require("viem/accounts").mnemonicToAccount;
const polygonMumbai = require("viem/chains").polygonMumbai;
const toHex = require("viem").toHex;

  const SIMPLE_ACCOUNT_FACTORY_ADDRESS =
    "0x9406Cc6185a346906296840746125a0E44976454";
  const owner = LocalAccountSigner.privateKeyToAccountSigner
  //  .mnemonicToAccountSigner
  (
    process.env.PRIVATE_KEY
    );

   

  const provider = new SmartAccountProvider
  (
    API_URL_ALCHEMY, //change path
    "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789", // entryPointAddress
    polygonMumbai // chain
  )
  .connect(
    (rpcClient) =>
      new SimpleSmartContractAccount({
        entryPointAddress: "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",
        chain: polygonMumbai,
        factoryAddress: SIMPLE_ACCOUNT_FACTORY_ADDRESS,
        rpcClient,
        owner,
        accountAddress: "0xcf3C09Ae6124Ddc24e1970314308ee6869Ab39f2",
        policyId: "756be215-365f-41db-bcb8-a9e1c05a6b75",
      })
  );
  prpvider = provider.withAlchemyGasManager({
    provider: provider.rpcClient,
    policyId: "756be215-365f-41db-bcb8-a9e1c05a6b75",
    entryPoint: "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",
  });

  
  // 3. send a UserOperation
  async function send(){
  const { hash } = await prpvider.sendUserOperation({
    target:  "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889", //matic  "0xcf3C09Ae6124Ddc24e1970314308ee6869Ab39f2", // Uniswap V2 Router       // 
    data: "0xa9059cbb000000000000000000000000b3e1275be2649e8cf8e4643da197d6f7b309626a00000000000000000000000000000000000000000000000000000002540be400", 
    value: 0, // value: bigint or undefined
    paymasterMiddleware: "0xC03Aac639Bb21233e0139381970328dB8bcEeB67",
   
  });


// const gas= await provider.paymasterDataMiddleware()
  // console.log(hash)
  // console.log(gas)

  // const options = {
  //   method: 'POST',
  //   headers: {accept: 'application/json', 'content-type': 'application/json'},
  //   body: JSON.stringify({
  //     id: 1,
  //     jsonrpc: '2.0',
  //     method: 'alchemy_requestGasAndPaymasterAndData',
  //     params: [
  //       {
  //         policyId: '756be215-365f-41db-bcb8-a9e1c05a6b75',
  //         entryPoint: '0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789',
  //         dummySignature: '0x04d500c9010f44a19a436f410cf7ae72bf67ce6ac59d79ccecc348bcf3fa476a78bfede89325f037d6cfc6254883b191d54bf79da0e4bedce21655fe0de67e551b',
  //         userOperation: {
  //           sender: '0xcf3C09Ae6124Ddc24e1970314308ee6869Ab39f2',
  //           nonce: "0x7f",
  //           initCode: '0x',
  //           callData: '0xa9059cbb000000000000000000000000b3e1275be2649e8cf8e4643da197d6f7b309626a00000000000000000000000000000000000000000000000000000002540be400'
  //         }
  //       }
  //     ]
  //   })
  // };
  
  
  // fetch("https://polygon-mumbai.g.alchemy.com/v2/0-55NPGkslreDxIVJ9gXoLrq9U8ia-t_", options)
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  //   .catch(err => console.error(err));
  



  }


send()


// address ERC20 = 0x0723c66f9526D88902513db069d1DD187521AA37
// walletAddressSDk1 0xf86d8f08602d1f9D1A5d9663616E21B3B4a1dAB5
// uniRouter = 0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff



// walletAddressMM3=0x4F8B8E57EA02c3A438B2d2A756b9D7360932172B
//walletAddressSDK3AlchemyNew=0x052800b6968284B4Fc30C0cb2D59505Eb2a3183d