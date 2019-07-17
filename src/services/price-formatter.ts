const DEFAULT_LOCALE = "nl-NL";
const DEFAULT_CURRENCY = "EUR";
const SEPERATOR = ",";

const DEFAULT_NUMBER_FORMAT_OPTIONS = {
  minimumFractionDigits: 2,
  style: "decimal"
};

interface PriceFormatterOptions {
  currency?: string;
  locale?: string;
}

class PriceFormatter {
  formatter: Intl.NumberFormat;

  constructor(options: PriceFormatterOptions = {}) {
    const formatterOptions: any = DEFAULT_NUMBER_FORMAT_OPTIONS;
    formatterOptions.currency = options.currency || DEFAULT_CURRENCY;
    this.formatter = new Intl.NumberFormat(options.locale || DEFAULT_LOCALE, formatterOptions);
  }

  /**
   * receives price and returns and array with two values
   * example:
   * getPrice(500) => [5, 00]
   * getPrice(1622) => [16, 22]
   * @returns value[0] is euro
   * @returns value[1] is cents
   */
  getPrice(price: number): string[] {
    return this.formatter.format(Number(price / 100)).split(SEPERATOR);
  }
}
