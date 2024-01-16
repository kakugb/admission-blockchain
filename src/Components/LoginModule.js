import React, {useContext,  useEffect } from 'react'
import iqralogo from '../Images/iqralogo.png'
import { useNavigate } from "react-router-dom";
import { ContractContext } from '../ContextApi/ContractContext';
function LoginModule() {
  const navigate = useNavigate();
  const {login, contract} = useContext(ContractContext);

  useEffect(() => {
    if(contract !== null){
      navigate("/forms");
      console.log(contract)
    }
  },[contract])
  return (
    <div>

    <div className='md:ml-36 md:mt-6 sm:ml-10 sm:mt-6 '>
    <img src={iqralogo} className="h-24  " alt="University Logo" />
    </div>
    <section className='w-full h-screen  flex items-center justify-center '>
   
  <button
    class="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-extrabold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
    type="button" onClick={login}>
    Login With MetaMask
    <img src="https://docs.material-tailwind.com/icons/metamask.svg" alt="metamask" class="w-10 h-10 ml-4" />
  </button>    
</section>
    </div>
  )
}

export default LoginModule
