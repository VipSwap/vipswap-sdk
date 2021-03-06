import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42,
  BSCNET = 97,
  BSCMAINNET = 56,
  OKTTEST= 65,
  INTTEST= 2048,
  INTMAIN= 2047

}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS = '0xb34019c1f32b77a926f78530fcd601aeab232fe5'
export const FACTORY_ADDRESS_ARRAY :{[index: number]: string}= {
  97: '0xf78e018dc1383c119628066f8546a8cf4c228fd7',
  56: '0xb34019c1f32b77a926f78530fcd601aeab232fe5',
  65: '0xb34019c1f32b77a926f78530fcd601aeab232fe5',
  2048: '0xb34019c1f32b77a926f78530fcd601aeab232fe5',
  2047: '0xb34019c1f32b77a926f78530fcd601aeab232fe5',
}

export const INIT_CODE_HASH = '0xa8cb4c9a1390d228f8517ced99d258da89f116f417342723549ee7b5d101bf26'
export const INIT_CODE_HASH_ARRAY :{[index: number]: string} = {
  97:'0xd1492cae04f23e8e5427c71f7f362b12b7c3daeaf2238212be1721f62b3f62cd',
  56:'0xa8cb4c9a1390d228f8517ced99d258da89f116f417342723549ee7b5d101bf26',
  65:'0x4b6d4707c715407ae64f3bc3e2bb13205da4094929c964a633d5cae158bcee31',
  2048: '0xc0f2ea4654a406688e6a940730eb9c196c2a4e47b10cc98c115eea16ab4a8e4a',
  2047: '0xc0f2ea4654a406688e6a940730eb9c196c2a4e47b10cc98c115eea16ab4a8e4a',
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
