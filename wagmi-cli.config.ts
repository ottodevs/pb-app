import { defineConfig } from '@wagmi/cli'
import { foundry, react } from '@wagmi/cli/plugins'
import type { Address } from 'viem'
import { erc20Abi } from 'viem'
import { baseSepolia } from 'viem/chains'

const predictionBattleDeployments = {
    [baseSepolia.id]: '0xA6b4D42E3Aa095532327950A83DF88B9eab92558' as Address, // github commit: null,
}

const nounsDeployments = {
    [baseSepolia.id]: '0x896a41C0f29efC73EB9E1B2571F4E541A80a3836' as Address,
}

const nounsAbi = [
    ...erc20Abi,
    {
        type: 'function',
        inputs: [
            { name: 'to', internalType: 'address', type: 'address' },
            { name: 'amount', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'mint',
        outputs: [],
        stateMutability: 'nonpayable',
    },
] as const

export default defineConfig({
    out: 'src/types/contracts.ts',
    contracts: [
        {
            name: 'Nouns',
            abi: nounsAbi,
            address: nounsDeployments,
        },
    ],
    plugins: [
        foundry({
            project: 'contracts',
            include: ['PredictionBattle.json'],
            deployments: {
                PredictionBattle: predictionBattleDeployments,
                Nouns: nounsDeployments,
            },
        }),
        react(),
    ],
})
