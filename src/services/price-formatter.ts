const DEFAULT_EURO_VALUE = "0";
const DEFAULT_CENTS_VALUE = "00";

interface PriceFormatted {
  cents: string;
  euros: string;
}

const PriceFormatter = {
  format(price?: number | string): PriceFormatted {
    const val = price ? String(price) : "";

    if (Number.isInteger(Number(val)) === false) {
      throw new Error(`${val} is not an integer`);
    }

    let euros = val.slice(0, val.length - 2);
    let cents = val.slice(-2);

    if (cents.length < 2) {
      cents = cents.padStart(2, DEFAULT_CENTS_VALUE);
    }

    if (euros.length < 1) {
      euros = DEFAULT_EURO_VALUE;
    }

    return {
      cents,
      euros
    };
  }
};

export default PriceFormatter;
