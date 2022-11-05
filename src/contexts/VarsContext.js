import { createContext, useContext, useState } from "react";
import { ethers } from "ethers";
const myContext = createContext();

//Provider function - Wrap the whole component tree Ex: in index.js

export function VarsProvider({ children }) {

    //This is for the provider Metamask
    const [provider, setProvider] = useState(new ethers.providers.Web3Provider(window.ethereum))
    const [signer, setSigner] = useState(provider.getSigner())
 
    return ( 
    <>
    <myContext.Provider value={ { provider, signer}}>{children}</myContext.Provider>
    </>
    );
  }
  
//Consumer function - Use this to extract data from context 
  export function useVarsContext() {
    return useContext(myContext);
  }