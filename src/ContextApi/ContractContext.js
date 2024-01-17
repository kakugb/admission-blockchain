import { Contract, ethers } from "ethers";
import React, { useState,useEffect } from "react";
import ABI from '../contract/contract.json';
export const ContractContext = React.createContext();

const ContractProvider = ({ children }) => {
  const [provider, setProvider] = useState("");
  const [signer, setSigner] = useState("");
  const [userAddress, setUserAddress] = useState(null);
  const [contract, setContract] = useState(null);
  const [Adminaddress, setAdminAddress] = useState(null)
  const login = async () => {
    try {
        if (window.ethereum) {
          let _provider = new ethers.BrowserProvider(window.ethereum);
            let _signer = await _provider.getSigner();

            setProvider(_provider);
            setSigner(_signer);

            let _contract = new Contract("0x58A2B8DAe0a731579c8EDa73A3Dc6CBDf4936746", ABI, _signer);
            setContract(_contract);

   const address = await contract.admin();
   setAdminAddress(address)
        }
        else {
            alert("Please install metamask");
        }
    } catch (error) {
        console.log(error);
    }
  };


  useEffect(() => {
    // Check if MetaMask is installed and connected
    if (window.ethereum) {
      // Request account access if not already granted
      window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then((accounts) => {
          // Get the user's Ethereum address from the first account in the array
          setUserAddress(accounts[0]);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      console.error('MetaMask not detected!');
    }

  }, []);



  return (
    <ContractContext.Provider value={{ signer, provider, login, contract,userAddress,Adminaddress}}>
      {children}
    </ContractContext.Provider>
  );
};

export default ContractProvider;
