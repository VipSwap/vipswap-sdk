import JSBI from 'jsbi'

import {ChainId, SolidityType} from '../constants'
import { validateSolidityTypeInstance } from '../utils'

/**
 * A currency is any fungible financial instrument on Ethereum, including Ether and all ERC20 tokens.
 *
 * The only instance of the base class `Currency` is Ether.
 */
export class Currency {
  public readonly decimals: number
  public readonly symbol?: string
  public readonly name?: string

  /**
   * The only instance of the base class `Currency`.
   */
  public static readonly ETHER: Currency = new Currency(18, 'BNB', 'Ether')
  public static readonly OKT: Currency = new Currency(18, 'OKT', 'okt')
  public static readonly INT: Currency = new Currency(18, 'INT', 'int')

  /**
   * Constructs an instance of the base class `Currency`. The only instance of the base class `Currency` is `Currency.ETHER`.
   * @param decimals decimals of the currency
   * @param symbol symbol of the currency
   * @param name of the currency
   */
  protected constructor(decimals: number, symbol?: string, name?: string) {
    validateSolidityTypeInstance(JSBI.BigInt(decimals), SolidityType.uint8)

    this.decimals = decimals
    this.symbol = symbol
    this.name = name
  }
}

const ETHER = Currency.ETHER
const OKT = Currency.OKT
const INT = Currency.INT
const CurrencyArr:{[index:number]:any} = {
  [ChainId.BSCNET]: ETHER,
  [ChainId.BSCMAINNET]: ETHER,
  [ChainId.OKTTEST]: OKT,
  [ChainId.INTTEST]: INT,
  [ChainId.INTMAIN]: INT,
}
export { ETHER, OKT, INT,CurrencyArr }
