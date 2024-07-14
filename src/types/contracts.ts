import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Nouns
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x896a41C0f29efC73EB9E1B2571F4E541A80a3836)
 */
export const nounsAbi = [
  {
    type: 'event',
    inputs: [
      { name: 'owner', type: 'address', indexed: true },
      { name: 'spender', type: 'address', indexed: true },
      { name: 'value', type: 'uint256', indexed: false },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    inputs: [
      { name: 'from', type: 'address', indexed: true },
      { name: 'to', type: 'address', indexed: true },
      { name: 'value', type: 'uint256', indexed: false },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'spender', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'sender', type: 'address' },
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ type: 'bool' }],
    stateMutability: 'nonpayable',
  },
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

/**
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x896a41C0f29efC73EB9E1B2571F4E541A80a3836)
 */
export const nounsAddress = {
  84532: '0x896a41C0f29efC73EB9E1B2571F4E541A80a3836',
} as const

/**
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x896a41C0f29efC73EB9E1B2571F4E541A80a3836)
 */
export const nounsConfig = { address: nounsAddress, abi: nounsAbi } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PredictionBattle
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xA6b4D42E3Aa095532327950A83DF88B9eab92558)
 */
export const predictionBattleAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_bettingToken', internalType: 'address', type: 'address' },
      {
        name: '_soulboundReputation',
        internalType: 'address',
        type: 'address',
      },
      { name: '_commitmentSchema', internalType: 'address', type: 'address' },
      { name: '_fundingPool', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'SPONSOR_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_roundId', internalType: 'uint256', type: 'uint256' },
      { name: '_name', internalType: 'string', type: 'string' },
    ],
    name: 'addProject',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'bettingToken',
    outputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'commitmentSchema',
    outputs: [
      { name: '', internalType: 'contract CommitmentSchema', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_startTime', internalType: 'uint256', type: 'uint256' },
      { name: '_endTime', internalType: 'uint256', type: 'uint256' },
      { name: '_resolutionTime', internalType: 'uint256', type: 'uint256' },
      { name: '_lowBetCap', internalType: 'uint256', type: 'uint256' },
      { name: '_highBetCap', internalType: 'uint256', type: 'uint256' },
      {
        name: '_prizeDistribution',
        internalType: 'uint256[]',
        type: 'uint256[]',
      },
    ],
    name: 'createRound',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'currentRoundId',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'fundingPool',
    outputs: [
      { name: '', internalType: 'contract FundingPool', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_roundId', internalType: 'uint256', type: 'uint256' },
      { name: '_projectId', internalType: 'uint256', type: 'uint256' },
      { name: '_amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'placeBet',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'callerConfirmation', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_roundId', internalType: 'uint256', type: 'uint256' }],
    name: 'resolveMarket',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_roundId', internalType: 'uint256', type: 'uint256' },
      { name: '_projectId', internalType: 'uint256', type: 'uint256' },
      { name: '_amount', internalType: 'uint256', type: 'uint256' },
      { name: '_nonce', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'revealBet',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'rounds',
    outputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'startTime', internalType: 'uint256', type: 'uint256' },
      { name: 'endTime', internalType: 'uint256', type: 'uint256' },
      { name: 'resolutionTime', internalType: 'uint256', type: 'uint256' },
      { name: 'lowBetCap', internalType: 'uint256', type: 'uint256' },
      { name: 'highBetCap', internalType: 'uint256', type: 'uint256' },
      { name: 'projectCount', internalType: 'uint256', type: 'uint256' },
      { name: 'totalBets', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'soulboundReputation',
    outputs: [
      {
        name: '',
        internalType: 'contract SoulboundReputation',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'roundId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'better',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'projectId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'BetPlaced',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'roundId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'projectId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      { name: 'name', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'ProjectAdded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'roundId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'startTime',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'endTime',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'RoundCreated',
  },
  { type: 'error', inputs: [], name: 'AccessControlBadConfirmation' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'neededRole', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'AccessControlUnauthorizedAccount',
  },
] as const

/**
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xA6b4D42E3Aa095532327950A83DF88B9eab92558)
 */
export const predictionBattleAddress = {
  84532: '0xA6b4D42E3Aa095532327950A83DF88B9eab92558',
} as const

/**
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xA6b4D42E3Aa095532327950A83DF88B9eab92558)
 */
export const predictionBattleConfig = {
  address: predictionBattleAddress,
  abi: predictionBattleAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsAbi}__
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x896a41C0f29efC73EB9E1B2571F4E541A80a3836)
 */
export const useReadNouns = /*#__PURE__*/ createUseReadContract({
  abi: nounsAbi,
  address: nounsAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsAbi}__ and `functionName` set to `"allowance"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x896a41C0f29efC73EB9E1B2571F4E541A80a3836)
 */
export const useReadNounsAllowance = /*#__PURE__*/ createUseReadContract({
  abi: nounsAbi,
  address: nounsAddress,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsAbi}__ and `functionName` set to `"balanceOf"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x896a41C0f29efC73EB9E1B2571F4E541A80a3836)
 */
export const useReadNounsBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: nounsAbi,
  address: nounsAddress,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsAbi}__ and `functionName` set to `"decimals"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x896a41C0f29efC73EB9E1B2571F4E541A80a3836)
 */
export const useReadNounsDecimals = /*#__PURE__*/ createUseReadContract({
  abi: nounsAbi,
  address: nounsAddress,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsAbi}__ and `functionName` set to `"name"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x896a41C0f29efC73EB9E1B2571F4E541A80a3836)
 */
export const useReadNounsName = /*#__PURE__*/ createUseReadContract({
  abi: nounsAbi,
  address: nounsAddress,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsAbi}__ and `functionName` set to `"symbol"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x896a41C0f29efC73EB9E1B2571F4E541A80a3836)
 */
export const useReadNounsSymbol = /*#__PURE__*/ createUseReadContract({
  abi: nounsAbi,
  address: nounsAddress,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsAbi}__ and `functionName` set to `"totalSupply"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x896a41C0f29efC73EB9E1B2571F4E541A80a3836)
 */
export const useReadNounsTotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: nounsAbi,
  address: nounsAddress,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsAbi}__
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x896a41C0f29efC73EB9E1B2571F4E541A80a3836)
 */
export const useWriteNouns = /*#__PURE__*/ createUseWriteContract({
  abi: nounsAbi,
  address: nounsAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsAbi}__ and `functionName` set to `"approve"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x896a41C0f29efC73EB9E1B2571F4E541A80a3836)
 */
export const useWriteNounsApprove = /*#__PURE__*/ createUseWriteContract({
  abi: nounsAbi,
  address: nounsAddress,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsAbi}__ and `functionName` set to `"transfer"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x896a41C0f29efC73EB9E1B2571F4E541A80a3836)
 */
export const useWriteNounsTransfer = /*#__PURE__*/ createUseWriteContract({
  abi: nounsAbi,
  address: nounsAddress,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsAbi}__ and `functionName` set to `"transferFrom"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x896a41C0f29efC73EB9E1B2571F4E541A80a3836)
 */
export const useWriteNounsTransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: nounsAbi,
  address: nounsAddress,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsAbi}__ and `functionName` set to `"mint"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x896a41C0f29efC73EB9E1B2571F4E541A80a3836)
 */
export const useWriteNounsMint = /*#__PURE__*/ createUseWriteContract({
  abi: nounsAbi,
  address: nounsAddress,
  functionName: 'mint',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsAbi}__
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x896a41C0f29efC73EB9E1B2571F4E541A80a3836)
 */
export const useSimulateNouns = /*#__PURE__*/ createUseSimulateContract({
  abi: nounsAbi,
  address: nounsAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsAbi}__ and `functionName` set to `"approve"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x896a41C0f29efC73EB9E1B2571F4E541A80a3836)
 */
export const useSimulateNounsApprove = /*#__PURE__*/ createUseSimulateContract({
  abi: nounsAbi,
  address: nounsAddress,
  functionName: 'approve',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsAbi}__ and `functionName` set to `"transfer"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x896a41C0f29efC73EB9E1B2571F4E541A80a3836)
 */
export const useSimulateNounsTransfer = /*#__PURE__*/ createUseSimulateContract(
  { abi: nounsAbi, address: nounsAddress, functionName: 'transfer' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsAbi}__ and `functionName` set to `"transferFrom"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x896a41C0f29efC73EB9E1B2571F4E541A80a3836)
 */
export const useSimulateNounsTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nounsAbi,
    address: nounsAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsAbi}__ and `functionName` set to `"mint"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x896a41C0f29efC73EB9E1B2571F4E541A80a3836)
 */
export const useSimulateNounsMint = /*#__PURE__*/ createUseSimulateContract({
  abi: nounsAbi,
  address: nounsAddress,
  functionName: 'mint',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nounsAbi}__
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x896a41C0f29efC73EB9E1B2571F4E541A80a3836)
 */
export const useWatchNounsEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: nounsAbi,
  address: nounsAddress,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nounsAbi}__ and `eventName` set to `"Approval"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x896a41C0f29efC73EB9E1B2571F4E541A80a3836)
 */
export const useWatchNounsApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nounsAbi,
    address: nounsAddress,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nounsAbi}__ and `eventName` set to `"Transfer"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x896a41C0f29efC73EB9E1B2571F4E541A80a3836)
 */
export const useWatchNounsTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nounsAbi,
    address: nounsAddress,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link predictionBattleAbi}__
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xA6b4D42E3Aa095532327950A83DF88B9eab92558)
 */
export const useReadPredictionBattle = /*#__PURE__*/ createUseReadContract({
  abi: predictionBattleAbi,
  address: predictionBattleAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link predictionBattleAbi}__ and `functionName` set to `"ADMIN_ROLE"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xA6b4D42E3Aa095532327950A83DF88B9eab92558)
 */
export const useReadPredictionBattleAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: predictionBattleAbi,
    address: predictionBattleAddress,
    functionName: 'ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link predictionBattleAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xA6b4D42E3Aa095532327950A83DF88B9eab92558)
 */
export const useReadPredictionBattleDefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: predictionBattleAbi,
    address: predictionBattleAddress,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link predictionBattleAbi}__ and `functionName` set to `"SPONSOR_ROLE"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xA6b4D42E3Aa095532327950A83DF88B9eab92558)
 */
export const useReadPredictionBattleSponsorRole =
  /*#__PURE__*/ createUseReadContract({
    abi: predictionBattleAbi,
    address: predictionBattleAddress,
    functionName: 'SPONSOR_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link predictionBattleAbi}__ and `functionName` set to `"bettingToken"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xA6b4D42E3Aa095532327950A83DF88B9eab92558)
 */
export const useReadPredictionBattleBettingToken =
  /*#__PURE__*/ createUseReadContract({
    abi: predictionBattleAbi,
    address: predictionBattleAddress,
    functionName: 'bettingToken',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link predictionBattleAbi}__ and `functionName` set to `"commitmentSchema"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xA6b4D42E3Aa095532327950A83DF88B9eab92558)
 */
export const useReadPredictionBattleCommitmentSchema =
  /*#__PURE__*/ createUseReadContract({
    abi: predictionBattleAbi,
    address: predictionBattleAddress,
    functionName: 'commitmentSchema',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link predictionBattleAbi}__ and `functionName` set to `"currentRoundId"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xA6b4D42E3Aa095532327950A83DF88B9eab92558)
 */
export const useReadPredictionBattleCurrentRoundId =
  /*#__PURE__*/ createUseReadContract({
    abi: predictionBattleAbi,
    address: predictionBattleAddress,
    functionName: 'currentRoundId',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link predictionBattleAbi}__ and `functionName` set to `"fundingPool"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xA6b4D42E3Aa095532327950A83DF88B9eab92558)
 */
export const useReadPredictionBattleFundingPool =
  /*#__PURE__*/ createUseReadContract({
    abi: predictionBattleAbi,
    address: predictionBattleAddress,
    functionName: 'fundingPool',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link predictionBattleAbi}__ and `functionName` set to `"getRoleAdmin"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xA6b4D42E3Aa095532327950A83DF88B9eab92558)
 */
export const useReadPredictionBattleGetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: predictionBattleAbi,
    address: predictionBattleAddress,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link predictionBattleAbi}__ and `functionName` set to `"hasRole"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xA6b4D42E3Aa095532327950A83DF88B9eab92558)
 */
export const useReadPredictionBattleHasRole =
  /*#__PURE__*/ createUseReadContract({
    abi: predictionBattleAbi,
    address: predictionBattleAddress,
    functionName: 'hasRole',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link predictionBattleAbi}__ and `functionName` set to `"rounds"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xA6b4D42E3Aa095532327950A83DF88B9eab92558)
 */
export const useReadPredictionBattleRounds =
  /*#__PURE__*/ createUseReadContract({
    abi: predictionBattleAbi,
    address: predictionBattleAddress,
    functionName: 'rounds',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link predictionBattleAbi}__ and `functionName` set to `"soulboundReputation"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xA6b4D42E3Aa095532327950A83DF88B9eab92558)
 */
export const useReadPredictionBattleSoulboundReputation =
  /*#__PURE__*/ createUseReadContract({
    abi: predictionBattleAbi,
    address: predictionBattleAddress,
    functionName: 'soulboundReputation',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link predictionBattleAbi}__ and `functionName` set to `"supportsInterface"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xA6b4D42E3Aa095532327950A83DF88B9eab92558)
 */
export const useReadPredictionBattleSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: predictionBattleAbi,
    address: predictionBattleAddress,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link predictionBattleAbi}__
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xA6b4D42E3Aa095532327950A83DF88B9eab92558)
 */
export const useWritePredictionBattle = /*#__PURE__*/ createUseWriteContract({
  abi: predictionBattleAbi,
  address: predictionBattleAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link predictionBattleAbi}__ and `functionName` set to `"addProject"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xA6b4D42E3Aa095532327950A83DF88B9eab92558)
 */
export const useWritePredictionBattleAddProject =
  /*#__PURE__*/ createUseWriteContract({
    abi: predictionBattleAbi,
    address: predictionBattleAddress,
    functionName: 'addProject',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link predictionBattleAbi}__ and `functionName` set to `"createRound"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xA6b4D42E3Aa095532327950A83DF88B9eab92558)
 */
export const useWritePredictionBattleCreateRound =
  /*#__PURE__*/ createUseWriteContract({
    abi: predictionBattleAbi,
    address: predictionBattleAddress,
    functionName: 'createRound',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link predictionBattleAbi}__ and `functionName` set to `"grantRole"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xA6b4D42E3Aa095532327950A83DF88B9eab92558)
 */
export const useWritePredictionBattleGrantRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: predictionBattleAbi,
    address: predictionBattleAddress,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link predictionBattleAbi}__ and `functionName` set to `"placeBet"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xA6b4D42E3Aa095532327950A83DF88B9eab92558)
 */
export const useWritePredictionBattlePlaceBet =
  /*#__PURE__*/ createUseWriteContract({
    abi: predictionBattleAbi,
    address: predictionBattleAddress,
    functionName: 'placeBet',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link predictionBattleAbi}__ and `functionName` set to `"renounceRole"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xA6b4D42E3Aa095532327950A83DF88B9eab92558)
 */
export const useWritePredictionBattleRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: predictionBattleAbi,
    address: predictionBattleAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link predictionBattleAbi}__ and `functionName` set to `"resolveMarket"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xA6b4D42E3Aa095532327950A83DF88B9eab92558)
 */
export const useWritePredictionBattleResolveMarket =
  /*#__PURE__*/ createUseWriteContract({
    abi: predictionBattleAbi,
    address: predictionBattleAddress,
    functionName: 'resolveMarket',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link predictionBattleAbi}__ and `functionName` set to `"revealBet"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xA6b4D42E3Aa095532327950A83DF88B9eab92558)
 */
export const useWritePredictionBattleRevealBet =
  /*#__PURE__*/ createUseWriteContract({
    abi: predictionBattleAbi,
    address: predictionBattleAddress,
    functionName: 'revealBet',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link predictionBattleAbi}__ and `functionName` set to `"revokeRole"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xA6b4D42E3Aa095532327950A83DF88B9eab92558)
 */
export const useWritePredictionBattleRevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: predictionBattleAbi,
    address: predictionBattleAddress,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link predictionBattleAbi}__
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xA6b4D42E3Aa095532327950A83DF88B9eab92558)
 */
export const useSimulatePredictionBattle =
  /*#__PURE__*/ createUseSimulateContract({
    abi: predictionBattleAbi,
    address: predictionBattleAddress,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link predictionBattleAbi}__ and `functionName` set to `"addProject"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xA6b4D42E3Aa095532327950A83DF88B9eab92558)
 */
export const useSimulatePredictionBattleAddProject =
  /*#__PURE__*/ createUseSimulateContract({
    abi: predictionBattleAbi,
    address: predictionBattleAddress,
    functionName: 'addProject',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link predictionBattleAbi}__ and `functionName` set to `"createRound"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xA6b4D42E3Aa095532327950A83DF88B9eab92558)
 */
export const useSimulatePredictionBattleCreateRound =
  /*#__PURE__*/ createUseSimulateContract({
    abi: predictionBattleAbi,
    address: predictionBattleAddress,
    functionName: 'createRound',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link predictionBattleAbi}__ and `functionName` set to `"grantRole"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xA6b4D42E3Aa095532327950A83DF88B9eab92558)
 */
export const useSimulatePredictionBattleGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: predictionBattleAbi,
    address: predictionBattleAddress,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link predictionBattleAbi}__ and `functionName` set to `"placeBet"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xA6b4D42E3Aa095532327950A83DF88B9eab92558)
 */
export const useSimulatePredictionBattlePlaceBet =
  /*#__PURE__*/ createUseSimulateContract({
    abi: predictionBattleAbi,
    address: predictionBattleAddress,
    functionName: 'placeBet',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link predictionBattleAbi}__ and `functionName` set to `"renounceRole"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xA6b4D42E3Aa095532327950A83DF88B9eab92558)
 */
export const useSimulatePredictionBattleRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: predictionBattleAbi,
    address: predictionBattleAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link predictionBattleAbi}__ and `functionName` set to `"resolveMarket"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xA6b4D42E3Aa095532327950A83DF88B9eab92558)
 */
export const useSimulatePredictionBattleResolveMarket =
  /*#__PURE__*/ createUseSimulateContract({
    abi: predictionBattleAbi,
    address: predictionBattleAddress,
    functionName: 'resolveMarket',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link predictionBattleAbi}__ and `functionName` set to `"revealBet"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xA6b4D42E3Aa095532327950A83DF88B9eab92558)
 */
export const useSimulatePredictionBattleRevealBet =
  /*#__PURE__*/ createUseSimulateContract({
    abi: predictionBattleAbi,
    address: predictionBattleAddress,
    functionName: 'revealBet',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link predictionBattleAbi}__ and `functionName` set to `"revokeRole"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xA6b4D42E3Aa095532327950A83DF88B9eab92558)
 */
export const useSimulatePredictionBattleRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: predictionBattleAbi,
    address: predictionBattleAddress,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link predictionBattleAbi}__
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xA6b4D42E3Aa095532327950A83DF88B9eab92558)
 */
export const useWatchPredictionBattleEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: predictionBattleAbi,
    address: predictionBattleAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link predictionBattleAbi}__ and `eventName` set to `"BetPlaced"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xA6b4D42E3Aa095532327950A83DF88B9eab92558)
 */
export const useWatchPredictionBattleBetPlacedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: predictionBattleAbi,
    address: predictionBattleAddress,
    eventName: 'BetPlaced',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link predictionBattleAbi}__ and `eventName` set to `"ProjectAdded"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xA6b4D42E3Aa095532327950A83DF88B9eab92558)
 */
export const useWatchPredictionBattleProjectAddedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: predictionBattleAbi,
    address: predictionBattleAddress,
    eventName: 'ProjectAdded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link predictionBattleAbi}__ and `eventName` set to `"RoleAdminChanged"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xA6b4D42E3Aa095532327950A83DF88B9eab92558)
 */
export const useWatchPredictionBattleRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: predictionBattleAbi,
    address: predictionBattleAddress,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link predictionBattleAbi}__ and `eventName` set to `"RoleGranted"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xA6b4D42E3Aa095532327950A83DF88B9eab92558)
 */
export const useWatchPredictionBattleRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: predictionBattleAbi,
    address: predictionBattleAddress,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link predictionBattleAbi}__ and `eventName` set to `"RoleRevoked"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xA6b4D42E3Aa095532327950A83DF88B9eab92558)
 */
export const useWatchPredictionBattleRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: predictionBattleAbi,
    address: predictionBattleAddress,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link predictionBattleAbi}__ and `eventName` set to `"RoundCreated"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xA6b4D42E3Aa095532327950A83DF88B9eab92558)
 */
export const useWatchPredictionBattleRoundCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: predictionBattleAbi,
    address: predictionBattleAddress,
    eventName: 'RoundCreated',
  })
