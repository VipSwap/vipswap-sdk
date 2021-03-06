import JSBI from 'jsbi';
export declare type BigintIsh = JSBI | bigint | string;
export declare enum ChainId {
    MAINNET = 1,
    ROPSTEN = 3,
    RINKEBY = 4,
    GÖRLI = 5,
    KOVAN = 42,
    BSCNET = 97,
    BSCMAINNET = 56,
    OKTTEST = 65,
    INTTEST = 2048,
    INTMAIN = 2047
}
export declare enum TradeType {
    EXACT_INPUT = 0,
    EXACT_OUTPUT = 1
}
export declare enum Rounding {
    ROUND_DOWN = 0,
    ROUND_HALF_UP = 1,
    ROUND_UP = 2
}
export declare const FACTORY_ADDRESS = "0xb34019c1f32b77a926f78530fcd601aeab232fe5";
export declare const FACTORY_ADDRESS_ARRAY: {
    [index: number]: string;
};
export declare const INIT_CODE_HASH = "0xa8cb4c9a1390d228f8517ced99d258da89f116f417342723549ee7b5d101bf26";
export declare const INIT_CODE_HASH_ARRAY: {
    [index: number]: string;
};
export declare const MINIMUM_LIQUIDITY: JSBI;
export declare const ZERO: JSBI;
export declare const ONE: JSBI;
export declare const TWO: JSBI;
export declare const THREE: JSBI;
export declare const FIVE: JSBI;
export declare const TEN: JSBI;
export declare const _100: JSBI;
export declare const _997: JSBI;
export declare const _1000: JSBI;
export declare enum SolidityType {
    uint8 = "uint8",
    uint256 = "uint256"
}
export declare const SOLIDITY_TYPE_MAXIMA: {
    uint8: JSBI;
    uint256: JSBI;
};
