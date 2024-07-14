import { predictionBattleAddress } from './contracts'

declare global {
    type ChainId = keyof typeof predictionBattleAddress
}

export {}
