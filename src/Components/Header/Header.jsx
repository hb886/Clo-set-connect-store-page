import React from "react";
import { HeaderWraper } from "./Hearer.styled";

const Header = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100vw", marginBottom:"10px", overflow:'hidden',}}>

      <HeaderWraper>
        <img style={{width:"60px"}} src="https://storagefiles.clo-set.com/public/connect/common/connect-desktop-header-bi.svg" />
      </HeaderWraper>
    </div>
  );
};

export default Header;
