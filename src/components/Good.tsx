import React from "react";

export type GoodType = {
  productName: string;
  price: string;
};

interface GoodProps {
  productName: string;
  price: string;
}
export default function Good(props: GoodProps) {
  const { productName, price } = props;

  return (
    <div>
      <p>{productName}</p>
      <p>{price}</p>
    </div>
  );
}
