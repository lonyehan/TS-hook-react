import React from "react";

type HeaderProps = {
  //   logo: string;
};
export default function Header(props: HeaderProps) {
  //   const { logo } = props;
  return (
    <div className="headerContainer">
      <header className="headerContent">
        <div className="titleContainer"></div>
        {/* <div className="headerMenuButton">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="headerTitle"></div>
        <div className="headerLogin">登出</div> */}
      </header>
    </div>
  );
}
