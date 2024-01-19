import React,{useState,useContext} from 'react'
import iqralogo from '../Images/iqralogo.png'
import menu from '../Images/menu.png'
import close from '../Images/close.png'
import {Link} from 'react-router-dom'
import { ContractContext } from '../ContextApi/ContractContext';



const Navbar = () => {
const {Adminaddress} = useContext(ContractContext)
const {userAddress} = useContext(ContractContext)



    const [toggle, setToggle] = useState(false);
  return (
    <div>   <nav className='w-full flex py-6 justify-between md:justify-around items-center navbar'>
    <img src={iqralogo} alt="hoobank" className='w-[124px] h-[32px] md:h-24 md:w-[500px]' />   
    <div className="hidden sm:hidden w-full md:block md:w-auto ">
  <ul className=" font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
    <li className=" text-xl font-bold block py-2 px-3 text-white  rounded md:bg-transparent md:text-gray-900 md:p-0  dark:text-white md:hover:text-blue-500" aria-current="page"><Link to="/Forms">Home</Link></li>
    <li className=" text-xl font-bold block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><Link to="/View">View</Link></li>
    {
        Adminaddress === userAddress ? <li className=" text-xl font-bold block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><Link to="/ViewAdmin">View As Admin</Link></li> : null
    }
    {/* <li className=" text-xl font-bold block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><Link to="/ViewAdmin">View As Admin</Link></li> */}
  </ul>
</div>
<div className='sm:hidden flex flex-1 justify-end items-center'>
<img src={toggle ? close : menu}
alt='menu'
className='w-[28px] h-[28px] object-contain'
onClick={()=> setToggle((prev)=>!prev)}
/>
<div
className={`${toggle ? 'flex' : 'hidden'} p-6  absolute top-5 z-10 right-0 mx-4
my-2 min-w[140px] rounded-xl`}>
<ul className='w-[150px] h-[100px] list-none flex flex-col  items-center bg-blue-gray-500  rounded-lg '>       
    <li className={`w-full h-8 text-center mx-auto mt-2  font-poppins font-normal cursor-pointer text-[16px]  text-white mr-10`}><Link to="/Forms">Home</Link></li>
    <li className={`w-full h-8 text-center mx-auto  font-poppins font-normal cursor-pointer text-[16px]  text-white mr-10`}><Link to="/View">View</Link></li>
    <li className={`w-full h-8 text-center mx-auto font-poppins font-normal cursor-pointer text-[16px]  text-white mr-10`}><Link to="/ViewAdmin">View As Admin</Link></li>
  </ul>
</div>
</div>  
</nav></div>
  )
}

export default Navbar