import React from "react";
import Logo from "../assets/logo.png";

const NavbarTop = () => {
  return (
    <div className={" h-[80px] px-10 py-7 flex flex-row justify-between items-center"}>
      <img src={Logo} alt="logo" className={"h-[50px] "} />
      <div className={"flex flex-row gap-10 font-semibold text-[#008cff]"}>
        <a href="/catagories" className={"list-none"}>Catagories</a>
        <li className={"list-none"}>English</li>
        <li className={"list-none"}>Sign In</li>
      </div>
    </div>
  );
};

export default NavbarTop;
