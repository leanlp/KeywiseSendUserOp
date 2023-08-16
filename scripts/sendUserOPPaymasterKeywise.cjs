const { 
  SimpleSmartContractAccount, 
  SimpleSmartAccountOwner, 
  LocalAccountSigner 
} = require("@alchemy/aa-core");

require("dotenv").config()

const { toHex } = require("viem");
const { mnemonicToAccount } = require("viem/accounts");
const { polygonMumbai } = require("viem/chains");
const { AlchemyProvider } = require("@alchemy/aa-alchemy");


// const walletArgIndex = process.argv.indexOf('--wallet');



const walletAddress = process.argv[2];
console.log("Received Wallet Address:", walletAddress);


const SIMPLE_ACCOUNT_FACTORY_ADDRESS = "0x9406Cc6185a346906296840746125a0E44976454";
chain= polygonMumbai
const {API_KEY_ALCHEMY, PRIVATE_KEY, API_URL_ALCHEMY } =
  process.env;

  ENTRYPOINT_ADDRESS="0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789"
  PAYMASTER_POLICY_ID="756be215-365f-41db-bcb8-a9e1c05a6b75"

  const owner = LocalAccountSigner.privateKeyToAccountSigner
  (
   
    process.env.PRIVATE_KEY2
    );



    async function send(walletAddress) {  
let provider = new AlchemyProvider({
  apiKey: API_KEY_ALCHEMY,
  chain,
  entryPointAddress: ENTRYPOINT_ADDRESS,
}).connect((rpcClient) => 
  new SimpleSmartContractAccount({
    entryPointAddress: ENTRYPOINT_ADDRESS,
    chain: polygonMumbai,
    owner,
    accountAddress: walletAddress,
    factoryAddress: SIMPLE_ACCOUNT_FACTORY_ADDRESS,
    rpcClient,
  })
);

provider = provider.withAlchemyGasManager({
  provider: provider.rpcClient,
  policyId: PAYMASTER_POLICY_ID,
  entryPoint: ENTRYPOINT_ADDRESS,
});


  const { hash } = await provider.sendUserOperation({
    target:  "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889",//matic mumbai "0xef9ccA0D749A362AAaEbaaC1e7434D861153F51d", // Usdt mumbai
    data: "0x095ea7b3000000000000000000000000f53eefd2f5e0b8235d8b0b9fae4efa74c98786f0000000000000000000000000000000000000000000000000000000174876e800",
    // "0xa9059cbb000000000000000000000000f53eefd2f5e0b8235d8b0b9fae4efa74c98786f000000000000000000000000000000000000000000000000000000000000186a0", 
    value: 0, // value: bigint or undefined
    paymasterMiddleware: "0xC03Aac639Bb21233e0139381970328dB8bcEeB67",
   
  });
  return hash; 
 }

  send(walletAddress)