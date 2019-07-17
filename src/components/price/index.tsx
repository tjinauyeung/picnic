import React from "react";
import utils from "../../utils";
import "./styles.scss";

const DEFAULT_LOCALE = "nl-NL";
const DEFAULT_CURRENCY = "EUR";
const SEPERATOR = ",";

const Price = ({ className = "", price, locale = DEFAULT_LOCALE, currency = DEFAULT_CURRENCY }) => {
  const formatter = new Intl.NumberFormat(locale, {
    style: "decimal",
    currency,
    minimumFractionDigits: 2
  });
  const [euros, cents] = formatter.format(Number(price / 100)).split(SEPERATOR);
  return (
    <div className={utils.extendClassName("price", className)}>
      <span className="price--euros">{euros}</span>
      <span className="price--cents">,{cents}</span>
    </div>
  );
};

export default Price;
