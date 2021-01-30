import React from "react";
import "../css/Container1.scss";
// components
import List from "../components/List";
import Good from "../components/Good";
import GoodList from "../components/GoodList";

export default function Homepage() {
  return (
    <div className="container">
      <div className="box-1">Header</div>
      <div className="box-2">
        <GoodList
          contents={[
            { productName: "Exited Cat", price: "5,000" },
            { productName: "Exited Cat", price: "2,000" },
            { productName: "Exited Mouse", price: "5,000" },
            { productName: "Exited Dog", price: "3,000" },
            { productName: "Exited Cat", price: "5,000" },
          ]}
        />
      </div>
      <div className="box-3">Content</div>
    </div>
  );
}
