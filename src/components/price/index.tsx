import React from "react";
import utils from "../../utils";
import priceFormatter from "../../services/price-formatter";
import "./styles.scss";

interface PriceProps {
  className?: string;
  formatter?: typeof priceFormatter;
  price: number | string;
}

const Price = ({ className, price, formatter = priceFormatter }: PriceProps) => {
  const { euros, cents } = formatter.format(price);
  return (
    <div className={utils.extendClassName("price", className)}>
      <span className="price--euros">{euros}</span>
      <span className="price--cents">,{cents}</span>
    </div>
  );
};

export default Price;
