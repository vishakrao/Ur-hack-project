import { Button } from "@mantine/core";
import React, {useState} from "react";
import "./Header.css";
import { useVarsContext } from "../contexts/VarsContext";

const Header = () => {

  return(<>

  <div className="header">
    <img
      src="https://static.tumblr.com/xdvjbmg/r5ondl91w/anime-04.png"
      alt="Tesla"
    />
  </div>
  
  </>)

}
export default Header;
