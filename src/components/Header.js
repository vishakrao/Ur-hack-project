import { Button } from "@mantine/core";
import React, {useState} from "react";
import "./Header.css";
import { useVarsContext } from "../contexts/VarsContext";

const Header = () => {
  const { provider } = useVarsContext()

  const [address, setAddress] = useState("")

  const cW = async () =>{
    try{
      setAddress(await provider.send("eth_requestAccounts", []))
    }
    catch(err){
      console.log(err)
      //Catch Errors or add other features

    }
  }


  return(<>
  
    <Button onClick={cW}>Connect Wallet</Button>
    {address}
  <div className="header">
    <img
      src="https://static.tumblr.com/xdvjbmg/r5ondl91w/anime-04.png"
      alt="Tesla"
    />
  </div>
  
  </>)

}
export default Header;
