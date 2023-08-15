const { 
  SimpleSmartContractAccount, 
  SimpleSmartAccountOwner, 
  LocalAccountSigner 
} = require("@alchemy/aa-core");

require("dotenv").config({ path: '../.env' });
const { toHex } = require("viem");
const { mnemonicToAccount } = require("viem/accounts");
const { polygonMumbai } = require("viem/chains");
const { AlchemyProvider } = require("@alchemy/aa-alchemy");

const SIMPLE_ACCOUNT_FACTORY_ADDRESS = "0x9406Cc6185a346906296840746125a0E44976454";
chain= polygonMumbai
const {API_KEY_ALCHEMY, PRIVATE_KEY, API_URL_ALCHEMY } =
  process.env;

  ENTRYPOINT_ADDRESS="0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789"
  PAYMASTER_POLICY_ID="756be215-365f-41db-bcb8-a9e1c05a6b75"

  const owner = LocalAccountSigner.privateKeyToAccountSigner
  (
    process.env.PRIVATE_KEY
    );

// 2. initialize the provider and connect it to the account
let provider = new AlchemyProvider({
  apiKey: API_KEY_ALCHEMY,
  chain,
  entryPointAddress: ENTRYPOINT_ADDRESS,
}).connect((rpcClient) => 
  new SimpleSmartContractAccount({
    entryPointAddress: ENTRYPOINT_ADDRESS,
    chain: polygonMumbai,
    owner,
    accountAddress: "0xcf3C09Ae6124Ddc24e1970314308ee6869Ab39f2",
    factoryAddress: SIMPLE_ACCOUNT_FACTORY_ADDRESS,
    rpcClient,
  })
);
console.log(polygonMumbai)
// [OPTIONAL] Use Alchemy Gas Manager
provider = provider.withAlchemyGasManager({
  provider: provider.rpcClient,
  policyId: PAYMASTER_POLICY_ID,
  entryPoint: ENTRYPOINT_ADDRESS,
});


async function send(){
  const { hash } = await provider.sendUserOperation({
    target:  "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889", //matic  "0xcf3C09Ae6124Ddc24e1970314308ee6869Ab39f2", // Uniswap V2 Router       // 
    data: "0xa9059cbb000000000000000000000000b3e1275be2649e8cf8e4643da197d6f7b309626a00000000000000000000000000000000000000000000000000000002540be400", 
    value: 0, // value: bigint or undefined
    paymasterMiddleware: "0xC03Aac639Bb21233e0139381970328dB8bcEeB67",
   
  }); }
  send()