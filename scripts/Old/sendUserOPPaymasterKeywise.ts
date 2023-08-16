import { SimpleSmartContractAccount, SimpleSmartAccountOwner, LocalAccountSigner } from "@alchemy/aa-core";
import { config as dotenvConfig } from "dotenv";
import { Address, toHex } from "viem";
import { mnemonicToAccount } from "viem/accounts";
import { polygonMumbai } from "viem/chains";
import { AlchemyProvider } from "@alchemy/aa-alchemy";
import { any } from "hardhat/internal/core/params/argumentTypes";

dotenvConfig();
const API_KEY_ALCHEMY = process.env.API_KEY_ALCHEMY as Address;
const PRIVATE_KEY2 = process.env.PRIVATE_KEY2 as string;

// if (walletArgIndex === -1 || walletArgIndex + 1 >= process.argv.length) {
//     throw new Error("Wallet address argument is missing or not correctly formatted!");
// }

const [walletAddress] = process.argv.slice(-1);

console.log("Received Wallet Address:", walletAddress);
const inputWalletAddress = walletAddress
const SIMPLE_ACCOUNT_FACTORY_ADDRESS: Address = "0x9406Cc6185a346906296840746125a0E44976454";
const chain = polygonMumbai;
const { PRIVATE_KEY, API_URL_ALCHEMY  } = process.env;
const PRIVATE_KEY3: `0x${string}`  = `0x${PRIVATE_KEY2}`;
const ENTRYPOINT_ADDRESS: Address = "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789";
const PAYMASTER_POLICY_ID: string = "756be215-365f-41db-bcb8-a9e1c05a6b75";

const owner = LocalAccountSigner.privateKeyToAccountSigner(PRIVATE_KEY3);


export async function send(inputWalletAddress: Address): Promise<string> {  
    let provider = new AlchemyProvider({
        apiKey: API_KEY_ALCHEMY,
        chain,
        entryPointAddress: ENTRYPOINT_ADDRESS,
    }).connect(rpcClient => 
        new SimpleSmartContractAccount({
            entryPointAddress: ENTRYPOINT_ADDRESS,
            chain: polygonMumbai,
            owner,
            accountAddress: inputWalletAddress,
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
        target:  "0xef9ccA0D749A362AAaEbaaC1e7434D861153F51d",
        data: "0xa9059cbb000000000000000000000000f53eefd2f5e0b8235d8b0b9fae4efa74c98786f000000000000000000000000000000000000000000000000000000000000186a0", 
        value: 0n,
        // paymasterMiddleware: "0xC03Aac639Bb21233e0139381970328dB8bcEeB67", // fixed to a string
    });
    return hash; 
}

send(inputWalletAddress as `${Address}`);
