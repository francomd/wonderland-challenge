import { createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent } from 'wagmi/codegen';

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DAI
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x1D70D57ccD2798323232B2dD027B3aBcA5C00091)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x1D70D57ccD2798323232B2dD027B3aBcA5C00091)
 */
export const daiAbi = [
  {
    type: 'constructor',
    inputs: [],
    stateMutability: 'nonpayable', 
  },
  {
    type: 'error',
    inputs: [],
    name: 'ECDSAInvalidSignature', 
  },
  {
    type: 'error',
    inputs: [
      {
        name: 'length',
        internalType: 'uint256',
        type: 'uint256', 
      },
    ],
    name: 'ECDSAInvalidSignatureLength',
  },
  {
    type: 'error',
    inputs: [
      {
        name: 's',
        internalType: 'bytes32',
        type: 'bytes32', 
      },
    ],
    name: 'ECDSAInvalidSignatureS',
  },
  {
    type: 'error',
    inputs: [
      {
        name: 'spender',
        internalType: 'address',
        type: 'address', 
      },
      {
        name: 'allowance',
        internalType: 'uint256',
        type: 'uint256', 
      },
      {
        name: 'needed',
        internalType: 'uint256',
        type: 'uint256', 
      },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address', 
      },
      {
        name: 'balance',
        internalType: 'uint256',
        type: 'uint256', 
      },
      {
        name: 'needed',
        internalType: 'uint256',
        type: 'uint256', 
      },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [
      {
        name: 'approver',
        internalType: 'address',
        type: 'address', 
      },
    ],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [
      {
        name: 'receiver',
        internalType: 'address',
        type: 'address', 
      },
    ],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address', 
      },
    ],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [
      {
        name: 'spender',
        internalType: 'address',
        type: 'address', 
      },
    ],
    name: 'ERC20InvalidSpender',
  },
  {
    type: 'error',
    inputs: [
      {
        name: 'deadline',
        internalType: 'uint256',
        type: 'uint256', 
      },
    ],
    name: 'ERC2612ExpiredSignature',
  },
  {
    type: 'error',
    inputs: [
      {
        name: 'signer',
        internalType: 'address',
        type: 'address', 
      },
      {
        name: 'owner',
        internalType: 'address',
        type: 'address', 
      },
    ],
    name: 'ERC2612InvalidSigner',
  },
  {
    type: 'error',
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address', 
      },
      {
        name: 'currentNonce',
        internalType: 'uint256',
        type: 'uint256', 
      },
    ],
    name: 'InvalidAccountNonce',
  },
  {
    type: 'error',
    inputs: [],
    name: 'InvalidShortString', 
  },
  {
    type: 'error',
    inputs: [
      {
        name: 'str',
        internalType: 'string',
        type: 'string', 
      },
    ],
    name: 'StringTooLong',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [],
    name: 'EIP712DomainChanged', 
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'from',
        internalType: 'address',
        type: 'address',
        indexed: true, 
      },
      {
        name: 'to',
        internalType: 'address',
        type: 'address',
        indexed: true, 
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [
      {
        name: '',
        internalType: 'bytes32',
        type: 'bytes32', 
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address', 
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address', 
      },
    ],
    name: 'allowance',
    outputs: [
      {
        name: '',
        internalType: 'uint256',
        type: 'uint256', 
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'spender',
        internalType: 'address',
        type: 'address', 
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256', 
      },
    ],
    name: 'approve',
    outputs: [
      {
        name: '',
        internalType: 'bool',
        type: 'bool', 
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address', 
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        name: '',
        internalType: 'uint256',
        type: 'uint256', 
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [
      {
        name: '',
        internalType: 'uint8',
        type: 'uint8', 
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'eip712Domain',
    outputs: [
      {
        name: 'fields',
        internalType: 'bytes1',
        type: 'bytes1', 
      },
      {
        name: 'name',
        internalType: 'string',
        type: 'string', 
      },
      {
        name: 'version',
        internalType: 'string',
        type: 'string', 
      },
      {
        name: 'chainId',
        internalType: 'uint256',
        type: 'uint256', 
      },
      {
        name: 'verifyingContract',
        internalType: 'address',
        type: 'address', 
      },
      {
        name: 'salt',
        internalType: 'bytes32',
        type: 'bytes32', 
      },
      {
        name: 'extensions',
        internalType: 'uint256[]',
        type: 'uint256[]', 
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_address',
        internalType: 'address',
        type: 'address', 
      },
      {
        name: '_value',
        internalType: 'uint256',
        type: 'uint256', 
      },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [
      {
        name: '',
        internalType: 'string',
        type: 'string', 
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address', 
      },
    ],
    name: 'nonces',
    outputs: [
      {
        name: '',
        internalType: 'uint256',
        type: 'uint256', 
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address', 
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address', 
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256', 
      },
      {
        name: 'deadline',
        internalType: 'uint256',
        type: 'uint256', 
      },
      {
        name: 'v',
        internalType: 'uint8',
        type: 'uint8', 
      },
      {
        name: 'r',
        internalType: 'bytes32',
        type: 'bytes32', 
      },
      {
        name: 's',
        internalType: 'bytes32',
        type: 'bytes32', 
      },
    ],
    name: 'permit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        name: '',
        internalType: 'string',
        type: 'string', 
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        name: '',
        internalType: 'uint256',
        type: 'uint256', 
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'to',
        internalType: 'address',
        type: 'address', 
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256', 
      },
    ],
    name: 'transfer',
    outputs: [
      {
        name: '',
        internalType: 'bool',
        type: 'bool', 
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'from',
        internalType: 'address',
        type: 'address', 
      },
      {
        name: 'to',
        internalType: 'address',
        type: 'address', 
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256', 
      },
    ],
    name: 'transferFrom',
    outputs: [
      {
        name: '',
        internalType: 'bool',
        type: 'bool', 
      },
    ],
    stateMutability: 'nonpayable',
  },
] as const;

/**
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x1D70D57ccD2798323232B2dD027B3aBcA5C00091)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x1D70D57ccD2798323232B2dD027B3aBcA5C00091)
 */
export const daiAddress = {
  80001: '0x1D70D57ccD2798323232B2dD027B3aBcA5C00091',
  11155111: '0x1D70D57ccD2798323232B2dD027B3aBcA5C00091',
} as const;

/**
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x1D70D57ccD2798323232B2dD027B3aBcA5C00091)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x1D70D57ccD2798323232B2dD027B3aBcA5C00091)
 */
export const daiConfig = {
  address: daiAddress,
  abi: daiAbi, 
} as const;

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// USDC
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47)
 */
export const usdcAbi = [
  {
    type: 'constructor',
    inputs: [],
    stateMutability: 'nonpayable', 
  },
  {
    type: 'error',
    inputs: [],
    name: 'ECDSAInvalidSignature', 
  },
  {
    type: 'error',
    inputs: [
      {
        name: 'length',
        internalType: 'uint256',
        type: 'uint256', 
      },
    ],
    name: 'ECDSAInvalidSignatureLength',
  },
  {
    type: 'error',
    inputs: [
      {
        name: 's',
        internalType: 'bytes32',
        type: 'bytes32', 
      },
    ],
    name: 'ECDSAInvalidSignatureS',
  },
  {
    type: 'error',
    inputs: [
      {
        name: 'spender',
        internalType: 'address',
        type: 'address', 
      },
      {
        name: 'allowance',
        internalType: 'uint256',
        type: 'uint256', 
      },
      {
        name: 'needed',
        internalType: 'uint256',
        type: 'uint256', 
      },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address', 
      },
      {
        name: 'balance',
        internalType: 'uint256',
        type: 'uint256', 
      },
      {
        name: 'needed',
        internalType: 'uint256',
        type: 'uint256', 
      },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [
      {
        name: 'approver',
        internalType: 'address',
        type: 'address', 
      },
    ],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [
      {
        name: 'receiver',
        internalType: 'address',
        type: 'address', 
      },
    ],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address', 
      },
    ],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [
      {
        name: 'spender',
        internalType: 'address',
        type: 'address', 
      },
    ],
    name: 'ERC20InvalidSpender',
  },
  {
    type: 'error',
    inputs: [
      {
        name: 'deadline',
        internalType: 'uint256',
        type: 'uint256', 
      },
    ],
    name: 'ERC2612ExpiredSignature',
  },
  {
    type: 'error',
    inputs: [
      {
        name: 'signer',
        internalType: 'address',
        type: 'address', 
      },
      {
        name: 'owner',
        internalType: 'address',
        type: 'address', 
      },
    ],
    name: 'ERC2612InvalidSigner',
  },
  {
    type: 'error',
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address', 
      },
      {
        name: 'currentNonce',
        internalType: 'uint256',
        type: 'uint256', 
      },
    ],
    name: 'InvalidAccountNonce',
  },
  {
    type: 'error',
    inputs: [],
    name: 'InvalidShortString', 
  },
  {
    type: 'error',
    inputs: [
      {
        name: 'str',
        internalType: 'string',
        type: 'string', 
      },
    ],
    name: 'StringTooLong',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [],
    name: 'EIP712DomainChanged', 
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'from',
        internalType: 'address',
        type: 'address',
        indexed: true, 
      },
      {
        name: 'to',
        internalType: 'address',
        type: 'address',
        indexed: true, 
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [
      {
        name: '',
        internalType: 'bytes32',
        type: 'bytes32', 
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address', 
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address', 
      },
    ],
    name: 'allowance',
    outputs: [
      {
        name: '',
        internalType: 'uint256',
        type: 'uint256', 
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'spender',
        internalType: 'address',
        type: 'address', 
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256', 
      },
    ],
    name: 'approve',
    outputs: [
      {
        name: '',
        internalType: 'bool',
        type: 'bool', 
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address', 
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        name: '',
        internalType: 'uint256',
        type: 'uint256', 
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [
      {
        name: '',
        internalType: 'uint8',
        type: 'uint8', 
      },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'eip712Domain',
    outputs: [
      {
        name: 'fields',
        internalType: 'bytes1',
        type: 'bytes1', 
      },
      {
        name: 'name',
        internalType: 'string',
        type: 'string', 
      },
      {
        name: 'version',
        internalType: 'string',
        type: 'string', 
      },
      {
        name: 'chainId',
        internalType: 'uint256',
        type: 'uint256', 
      },
      {
        name: 'verifyingContract',
        internalType: 'address',
        type: 'address', 
      },
      {
        name: 'salt',
        internalType: 'bytes32',
        type: 'bytes32', 
      },
      {
        name: 'extensions',
        internalType: 'uint256[]',
        type: 'uint256[]', 
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_address',
        internalType: 'address',
        type: 'address', 
      },
      {
        name: '_value',
        internalType: 'uint256',
        type: 'uint256', 
      },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [
      {
        name: '',
        internalType: 'string',
        type: 'string', 
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address', 
      },
    ],
    name: 'nonces',
    outputs: [
      {
        name: '',
        internalType: 'uint256',
        type: 'uint256', 
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address', 
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address', 
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256', 
      },
      {
        name: 'deadline',
        internalType: 'uint256',
        type: 'uint256', 
      },
      {
        name: 'v',
        internalType: 'uint8',
        type: 'uint8', 
      },
      {
        name: 'r',
        internalType: 'bytes32',
        type: 'bytes32', 
      },
      {
        name: 's',
        internalType: 'bytes32',
        type: 'bytes32', 
      },
    ],
    name: 'permit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        name: '',
        internalType: 'string',
        type: 'string', 
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        name: '',
        internalType: 'uint256',
        type: 'uint256', 
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'to',
        internalType: 'address',
        type: 'address', 
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256', 
      },
    ],
    name: 'transfer',
    outputs: [
      {
        name: '',
        internalType: 'bool',
        type: 'bool', 
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'from',
        internalType: 'address',
        type: 'address', 
      },
      {
        name: 'to',
        internalType: 'address',
        type: 'address', 
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256', 
      },
    ],
    name: 'transferFrom',
    outputs: [
      {
        name: '',
        internalType: 'bool',
        type: 'bool', 
      },
    ],
    stateMutability: 'nonpayable',
  },
] as const;

/**
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47)
 */
export const usdcAddress = {
  80001: '0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47',
  11155111: '0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47',
} as const;

/**
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47)
 */
export const usdcConfig = {
  address: usdcAddress,
  abi: usdcAbi, 
} as const;

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// erc20
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20Abi = [
  {
    type: 'event',
    inputs: [
      {
        name: 'owner',
        type: 'address',
        indexed: true, 
      },
      {
        name: 'spender',
        type: 'address',
        indexed: true, 
      },
      {
        name: 'value',
        type: 'uint256',
        indexed: false, 
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    inputs: [
      {
        name: 'from',
        type: 'address',
        indexed: true, 
      },
      {
        name: 'to',
        type: 'address',
        indexed: true, 
      },
      {
        name: 'value',
        type: 'uint256',
        indexed: false, 
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'owner',
        type: 'address', 
      },
      {
        name: 'spender',
        type: 'address', 
      },
    ],
    name: 'allowance',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'spender',
        type: 'address', 
      },
      {
        name: 'amount',
        type: 'uint256', 
      },
    ],
    name: 'approve',
    outputs: [{ type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'account',
        type: 'address', 
      },
    ],
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
      {
        name: 'recipient',
        type: 'address', 
      },
      {
        name: 'amount',
        type: 'uint256', 
      },
    ],
    name: 'transfer',
    outputs: [{ type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'sender',
        type: 'address', 
      },
      {
        name: 'recipient',
        type: 'address', 
      },
      {
        name: 'amount',
        type: 'uint256', 
      },
    ],
    name: 'transferFrom',
    outputs: [{ type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const;

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link daiAbi}__
 *
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x1D70D57ccD2798323232B2dD027B3aBcA5C00091)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x1D70D57ccD2798323232B2dD027B3aBcA5C00091)
 */
export const useReadDai = /* #__PURE__*/ createUseReadContract({
  abi: daiAbi,
  address: daiAddress,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link daiAbi}__ and `functionName` set to `"DOMAIN_SEPARATOR"`
 *
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x1D70D57ccD2798323232B2dD027B3aBcA5C00091)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x1D70D57ccD2798323232B2dD027B3aBcA5C00091)
 */
export const useReadDaiDomainSeparator = /* #__PURE__*/ createUseReadContract({
  abi: daiAbi,
  address: daiAddress,
  functionName: 'DOMAIN_SEPARATOR',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link daiAbi}__ and `functionName` set to `"allowance"`
 *
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x1D70D57ccD2798323232B2dD027B3aBcA5C00091)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x1D70D57ccD2798323232B2dD027B3aBcA5C00091)
 */
export const useReadDaiAllowance = /* #__PURE__*/ createUseReadContract({
  abi: daiAbi,
  address: daiAddress,
  functionName: 'allowance',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link daiAbi}__ and `functionName` set to `"balanceOf"`
 *
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x1D70D57ccD2798323232B2dD027B3aBcA5C00091)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x1D70D57ccD2798323232B2dD027B3aBcA5C00091)
 */
export const useReadDaiBalanceOf = /* #__PURE__*/ createUseReadContract({
  abi: daiAbi,
  address: daiAddress,
  functionName: 'balanceOf',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link daiAbi}__ and `functionName` set to `"decimals"`
 *
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x1D70D57ccD2798323232B2dD027B3aBcA5C00091)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x1D70D57ccD2798323232B2dD027B3aBcA5C00091)
 */
export const useReadDaiDecimals = /* #__PURE__*/ createUseReadContract({
  abi: daiAbi,
  address: daiAddress,
  functionName: 'decimals',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link daiAbi}__ and `functionName` set to `"eip712Domain"`
 *
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x1D70D57ccD2798323232B2dD027B3aBcA5C00091)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x1D70D57ccD2798323232B2dD027B3aBcA5C00091)
 */
export const useReadDaiEip712Domain = /* #__PURE__*/ createUseReadContract({
  abi: daiAbi,
  address: daiAddress,
  functionName: 'eip712Domain',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link daiAbi}__ and `functionName` set to `"name"`
 *
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x1D70D57ccD2798323232B2dD027B3aBcA5C00091)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x1D70D57ccD2798323232B2dD027B3aBcA5C00091)
 */
export const useReadDaiName = /* #__PURE__*/ createUseReadContract({
  abi: daiAbi,
  address: daiAddress,
  functionName: 'name',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link daiAbi}__ and `functionName` set to `"nonces"`
 *
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x1D70D57ccD2798323232B2dD027B3aBcA5C00091)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x1D70D57ccD2798323232B2dD027B3aBcA5C00091)
 */
export const useReadDaiNonces = /* #__PURE__*/ createUseReadContract({
  abi: daiAbi,
  address: daiAddress,
  functionName: 'nonces',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link daiAbi}__ and `functionName` set to `"symbol"`
 *
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x1D70D57ccD2798323232B2dD027B3aBcA5C00091)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x1D70D57ccD2798323232B2dD027B3aBcA5C00091)
 */
export const useReadDaiSymbol = /* #__PURE__*/ createUseReadContract({
  abi: daiAbi,
  address: daiAddress,
  functionName: 'symbol',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link daiAbi}__ and `functionName` set to `"totalSupply"`
 *
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x1D70D57ccD2798323232B2dD027B3aBcA5C00091)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x1D70D57ccD2798323232B2dD027B3aBcA5C00091)
 */
export const useReadDaiTotalSupply = /* #__PURE__*/ createUseReadContract({
  abi: daiAbi,
  address: daiAddress,
  functionName: 'totalSupply',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link daiAbi}__
 *
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x1D70D57ccD2798323232B2dD027B3aBcA5C00091)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x1D70D57ccD2798323232B2dD027B3aBcA5C00091)
 */
export const useWriteDai = /* #__PURE__*/ createUseWriteContract({
  abi: daiAbi,
  address: daiAddress,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link daiAbi}__ and `functionName` set to `"approve"`
 *
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x1D70D57ccD2798323232B2dD027B3aBcA5C00091)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x1D70D57ccD2798323232B2dD027B3aBcA5C00091)
 */
export const useWriteDaiApprove = /* #__PURE__*/ createUseWriteContract({
  abi: daiAbi,
  address: daiAddress,
  functionName: 'approve',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link daiAbi}__ and `functionName` set to `"mint"`
 *
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x1D70D57ccD2798323232B2dD027B3aBcA5C00091)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x1D70D57ccD2798323232B2dD027B3aBcA5C00091)
 */
export const useWriteDaiMint = /* #__PURE__*/ createUseWriteContract({
  abi: daiAbi,
  address: daiAddress,
  functionName: 'mint',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link daiAbi}__ and `functionName` set to `"permit"`
 *
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x1D70D57ccD2798323232B2dD027B3aBcA5C00091)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x1D70D57ccD2798323232B2dD027B3aBcA5C00091)
 */
export const useWriteDaiPermit = /* #__PURE__*/ createUseWriteContract({
  abi: daiAbi,
  address: daiAddress,
  functionName: 'permit',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link daiAbi}__ and `functionName` set to `"transfer"`
 *
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x1D70D57ccD2798323232B2dD027B3aBcA5C00091)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x1D70D57ccD2798323232B2dD027B3aBcA5C00091)
 */
export const useWriteDaiTransfer = /* #__PURE__*/ createUseWriteContract({
  abi: daiAbi,
  address: daiAddress,
  functionName: 'transfer',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link daiAbi}__ and `functionName` set to `"transferFrom"`
 *
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x1D70D57ccD2798323232B2dD027B3aBcA5C00091)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x1D70D57ccD2798323232B2dD027B3aBcA5C00091)
 */
export const useWriteDaiTransferFrom = /* #__PURE__*/ createUseWriteContract({
  abi: daiAbi,
  address: daiAddress,
  functionName: 'transferFrom',
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link daiAbi}__
 *
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x1D70D57ccD2798323232B2dD027B3aBcA5C00091)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x1D70D57ccD2798323232B2dD027B3aBcA5C00091)
 */
export const useSimulateDai = /* #__PURE__*/ createUseSimulateContract({
  abi: daiAbi,
  address: daiAddress,
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link daiAbi}__ and `functionName` set to `"approve"`
 *
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x1D70D57ccD2798323232B2dD027B3aBcA5C00091)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x1D70D57ccD2798323232B2dD027B3aBcA5C00091)
 */
export const useSimulateDaiApprove = /* #__PURE__*/ createUseSimulateContract({
  abi: daiAbi,
  address: daiAddress,
  functionName: 'approve',
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link daiAbi}__ and `functionName` set to `"mint"`
 *
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x1D70D57ccD2798323232B2dD027B3aBcA5C00091)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x1D70D57ccD2798323232B2dD027B3aBcA5C00091)
 */
export const useSimulateDaiMint = /* #__PURE__*/ createUseSimulateContract({
  abi: daiAbi,
  address: daiAddress,
  functionName: 'mint',
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link daiAbi}__ and `functionName` set to `"permit"`
 *
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x1D70D57ccD2798323232B2dD027B3aBcA5C00091)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x1D70D57ccD2798323232B2dD027B3aBcA5C00091)
 */
export const useSimulateDaiPermit = /* #__PURE__*/ createUseSimulateContract({
  abi: daiAbi,
  address: daiAddress,
  functionName: 'permit',
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link daiAbi}__ and `functionName` set to `"transfer"`
 *
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x1D70D57ccD2798323232B2dD027B3aBcA5C00091)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x1D70D57ccD2798323232B2dD027B3aBcA5C00091)
 */
export const useSimulateDaiTransfer = /* #__PURE__*/ createUseSimulateContract({
  abi: daiAbi,
  address: daiAddress,
  functionName: 'transfer',
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link daiAbi}__ and `functionName` set to `"transferFrom"`
 *
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x1D70D57ccD2798323232B2dD027B3aBcA5C00091)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x1D70D57ccD2798323232B2dD027B3aBcA5C00091)
 */
export const useSimulateDaiTransferFrom =
  /* #__PURE__*/ createUseSimulateContract({
    abi: daiAbi,
    address: daiAddress,
    functionName: 'transferFrom',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link daiAbi}__
 *
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x1D70D57ccD2798323232B2dD027B3aBcA5C00091)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x1D70D57ccD2798323232B2dD027B3aBcA5C00091)
 */
export const useWatchDaiEvent = /* #__PURE__*/ createUseWatchContractEvent({
  abi: daiAbi,
  address: daiAddress,
});

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link daiAbi}__ and `eventName` set to `"Approval"`
 *
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x1D70D57ccD2798323232B2dD027B3aBcA5C00091)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x1D70D57ccD2798323232B2dD027B3aBcA5C00091)
 */
export const useWatchDaiApprovalEvent =
  /* #__PURE__*/ createUseWatchContractEvent({
    abi: daiAbi,
    address: daiAddress,
    eventName: 'Approval',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link daiAbi}__ and `eventName` set to `"EIP712DomainChanged"`
 *
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x1D70D57ccD2798323232B2dD027B3aBcA5C00091)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x1D70D57ccD2798323232B2dD027B3aBcA5C00091)
 */
export const useWatchDaiEip712DomainChangedEvent =
  /* #__PURE__*/ createUseWatchContractEvent({
    abi: daiAbi,
    address: daiAddress,
    eventName: 'EIP712DomainChanged',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link daiAbi}__ and `eventName` set to `"Transfer"`
 *
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x1D70D57ccD2798323232B2dD027B3aBcA5C00091)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x1D70D57ccD2798323232B2dD027B3aBcA5C00091)
 */
export const useWatchDaiTransferEvent =
  /* #__PURE__*/ createUseWatchContractEvent({
    abi: daiAbi,
    address: daiAddress,
    eventName: 'Transfer',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdcAbi}__
 *
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47)
 */
export const useReadUsdc = /* #__PURE__*/ createUseReadContract({
  abi: usdcAbi,
  address: usdcAddress,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"DOMAIN_SEPARATOR"`
 *
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47)
 */
export const useReadUsdcDomainSeparator = /* #__PURE__*/ createUseReadContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'DOMAIN_SEPARATOR',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"allowance"`
 *
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47)
 */
export const useReadUsdcAllowance = /* #__PURE__*/ createUseReadContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'allowance',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"balanceOf"`
 *
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47)
 */
export const useReadUsdcBalanceOf = /* #__PURE__*/ createUseReadContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'balanceOf',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"decimals"`
 *
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47)
 */
export const useReadUsdcDecimals = /* #__PURE__*/ createUseReadContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'decimals',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"eip712Domain"`
 *
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47)
 */
export const useReadUsdcEip712Domain = /* #__PURE__*/ createUseReadContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'eip712Domain',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"name"`
 *
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47)
 */
export const useReadUsdcName = /* #__PURE__*/ createUseReadContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'name',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"nonces"`
 *
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47)
 */
export const useReadUsdcNonces = /* #__PURE__*/ createUseReadContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'nonces',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"symbol"`
 *
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47)
 */
export const useReadUsdcSymbol = /* #__PURE__*/ createUseReadContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'symbol',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"totalSupply"`
 *
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47)
 */
export const useReadUsdcTotalSupply = /* #__PURE__*/ createUseReadContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'totalSupply',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdcAbi}__
 *
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47)
 */
export const useWriteUsdc = /* #__PURE__*/ createUseWriteContract({
  abi: usdcAbi,
  address: usdcAddress,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"approve"`
 *
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47)
 */
export const useWriteUsdcApprove = /* #__PURE__*/ createUseWriteContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'approve',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"mint"`
 *
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47)
 */
export const useWriteUsdcMint = /* #__PURE__*/ createUseWriteContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'mint',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"permit"`
 *
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47)
 */
export const useWriteUsdcPermit = /* #__PURE__*/ createUseWriteContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'permit',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"transfer"`
 *
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47)
 */
export const useWriteUsdcTransfer = /* #__PURE__*/ createUseWriteContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'transfer',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"transferFrom"`
 *
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47)
 */
export const useWriteUsdcTransferFrom = /* #__PURE__*/ createUseWriteContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'transferFrom',
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdcAbi}__
 *
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47)
 */
export const useSimulateUsdc = /* #__PURE__*/ createUseSimulateContract({
  abi: usdcAbi,
  address: usdcAddress,
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"approve"`
 *
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47)
 */
export const useSimulateUsdcApprove = /* #__PURE__*/ createUseSimulateContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'approve',
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"mint"`
 *
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47)
 */
export const useSimulateUsdcMint = /* #__PURE__*/ createUseSimulateContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'mint',
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"permit"`
 *
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47)
 */
export const useSimulateUsdcPermit = /* #__PURE__*/ createUseSimulateContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'permit',
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"transfer"`
 *
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47)
 */
export const useSimulateUsdcTransfer = /* #__PURE__*/ createUseSimulateContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'transfer',
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"transferFrom"`
 *
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47)
 */
export const useSimulateUsdcTransferFrom =
  /* #__PURE__*/ createUseSimulateContract({
    abi: usdcAbi,
    address: usdcAddress,
    functionName: 'transferFrom',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link usdcAbi}__
 *
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47)
 */
export const useWatchUsdcEvent = /* #__PURE__*/ createUseWatchContractEvent({
  abi: usdcAbi,
  address: usdcAddress,
});

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link usdcAbi}__ and `eventName` set to `"Approval"`
 *
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47)
 */
export const useWatchUsdcApprovalEvent =
  /* #__PURE__*/ createUseWatchContractEvent({
    abi: usdcAbi,
    address: usdcAddress,
    eventName: 'Approval',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link usdcAbi}__ and `eventName` set to `"EIP712DomainChanged"`
 *
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47)
 */
export const useWatchUsdcEip712DomainChangedEvent =
  /* #__PURE__*/ createUseWatchContractEvent({
    abi: usdcAbi,
    address: usdcAddress,
    eventName: 'EIP712DomainChanged',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link usdcAbi}__ and `eventName` set to `"Transfer"`
 *
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47)
 */
export const useWatchUsdcTransferEvent =
  /* #__PURE__*/ createUseWatchContractEvent({
    abi: usdcAbi,
    address: usdcAddress,
    eventName: 'Transfer',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useReadErc20 = /* #__PURE__*/ createUseReadContract({ abi: erc20Abi });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"allowance"`
 */
export const useReadErc20Allowance = /* #__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'allowance',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadErc20BalanceOf = /* #__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'balanceOf',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"decimals"`
 */
export const useReadErc20Decimals = /* #__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'decimals',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"name"`
 */
export const useReadErc20Name = /* #__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'name',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"symbol"`
 */
export const useReadErc20Symbol = /* #__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'symbol',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadErc20TotalSupply = /* #__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'totalSupply',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useWriteErc20 = /* #__PURE__*/ createUseWriteContract({ abi: erc20Abi });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteErc20Approve = /* #__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'approve',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useWriteErc20Transfer = /* #__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'transfer',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteErc20TransferFrom = /* #__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'transferFrom',
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useSimulateErc20 = /* #__PURE__*/ createUseSimulateContract({ abi: erc20Abi });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateErc20Approve = /* #__PURE__*/ createUseSimulateContract({
  abi: erc20Abi,
  functionName: 'approve',
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateErc20Transfer = /* #__PURE__*/ createUseSimulateContract({
  abi: erc20Abi,
  functionName: 'transfer', 
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateErc20TransferFrom =
  /* #__PURE__*/ createUseSimulateContract({
    abi: erc20Abi,
    functionName: 'transferFrom',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__
 */
export const useWatchErc20Event = /* #__PURE__*/ createUseWatchContractEvent({ abi: erc20Abi });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchErc20ApprovalEvent =
  /* #__PURE__*/ createUseWatchContractEvent({
    abi: erc20Abi,
    eventName: 'Approval',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchErc20TransferEvent =
  /* #__PURE__*/ createUseWatchContractEvent({
    abi: erc20Abi,
    eventName: 'Transfer',
  });
