import { Contract, ethers } from "ethers";
import React, { useState } from "react";
import ABI from '../contract/contract.json';
export const ContractContext = React.createContext();

const ContractProvider = ({ children }) => {
  const [provider, setProvider] = useState("");
  const [signer, setSigner] = useState("");
  const [contract, setContract] = useState(null);
  const login = async () => {
    try {
        if (window.ethereum) {
            let _provider = new ethers.BrowserProvider(window.ethereum);
            let _signer = await _provider.getSigner();

            setProvider(_provider);
            setSigner(_signer);

            let _contract = new Contract("0x58A2B8DAe0a731579c8EDa73A3Dc6CBDf4936746", ABI, _signer);
            setContract(_contract);
        }
        else {
            alert("Please install metamask");
        }
    } catch (error) {
        console.log(error);
    }
  };

  
  return (
    <ContractContext.Provider value={{ signer, provider, login, contract }}>
      {children}
    </ContractContext.Provider>
  );
};

export default ContractProvider;
