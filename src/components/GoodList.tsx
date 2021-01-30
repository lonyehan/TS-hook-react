import React from "react";

// components
import Good from "../components/Good";

// types
import type { GoodType } from "../components/Good";

interface ListProps {
  contents: Array<GoodType>;
}

export default function List(props: ListProps) {
  const { contents } = props;
  const Goods = contents.map((obj) => (
    <Good productName={obj.productName} price={obj.price} />
  ));

  return <ul>{Goods}</ul>;
}
