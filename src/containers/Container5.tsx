import React from "react";
import "../css/Container5.scss";

declare function require(path: string): string;
export default function Container4() {
  return (
    <div className="container">
      <div className="box-1">
        <img
          style={{ width: "100vh" }}
          src={require("../images/header.jpg")}
        ></img>
      </div>
      <div className="box-2">B</div>
      <div className="box-3">C</div>
      <div className="box-4">D</div>
      <div className="box-5">E</div>
      <div className="box-6">F</div>
    </div>
  );
}
