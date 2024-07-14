import { defineConfig } from '@wagmi/cli'
import { foundry, react } from '@wagmi/cli/plugins'
import type { Address } from 'viem'
import { erc20Abi } from 'viem'
import { baseSepolia } from 'viem/chains'

const predictionBattleDeployments = {
    [baseSepolia.id]: '0x' as Address, // github commit: null,
}

const nounsDeployments = {
    [baseSepolia.id]: '0x' as Address,
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
