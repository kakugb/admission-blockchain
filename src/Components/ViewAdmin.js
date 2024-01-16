import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import iqralogo from '../Images/iqralogo.png'
import {Dialog,DialogHeader,DialogBody,DialogFooter,} from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import menu from '../Images/menu.png'
import close from '../Images/close.png'
function ViewAdmin() {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState(false);
 
  const handleOpen = () => setOpen(!open);
 
  const navigat=()=>{ navigate("/Viewdata")}
  return (
    <div>
            
  <nav className='w-full flex py-6 justify-between md:justify-around items-center navbar'>
        <img src={iqralogo} alt="hoobank" className='w-[124px] h-[32px] md:h-24 md:w-[500px]' />   
        <div className="hidden sm:hidden w-full md:block md:w-auto ">
      <ul className=" font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
        <li className=" text-xl font-bold block py-2 px-3 text-white  rounded md:bg-transparent md:text-gray-900 md:p-0  dark:text-white md:hover:text-blue-500" aria-current="page"><Link to="/Forms">Home</Link></li>
        <li className=" text-xl font-bold block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><Link to="/View">View</Link></li>
        <li className=" text-xl font-bold block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><Link to="/ViewAdmin">View As Admin</Link></li>
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
my-2 min-w[140px] rounded-xl slidebar`}>
<ul className='w-[150px] h-[100px] list-none flex flex-col  items-center bg-blue-gray-500  rounded-lg '>       
        <li className={`w-full h-8 text-center mx-auto mt-2  font-poppins font-normal cursor-pointer text-[16px]  text-white mr-10`}><Link to="/Forms">Home</Link></li>
        <li className={`w-full h-8 text-center mx-auto  font-poppins font-normal cursor-pointer text-[16px]  text-white mr-10`}><Link to="/View">View</Link></li>
        <li className={`w-full h-8 text-center mx-auto font-poppins font-normal cursor-pointer text-[16px]  text-white mr-10`}><Link to="/ViewAdmin">View As Admin</Link></li>
      </ul>
</div>
</div>  
 </nav>



               {/* Table */}

               <div className="relative flex flex-col w-full h-full  text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
  <table className="w-10/12 text-left table-auto min-w-max mx-auto mt-32 ">
    <thead className=' bg-[#6b7280]'>
      <tr>
        <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
          <p className="block font-sans text-xl  font-bold leading-none text-black ">
            Applicant Id
          </p>
        </th>
        <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
          <p className="block font-sans text-xl  font-bold leading-none text-black ">
            First Name
          </p>
        </th>
        <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
          <p className="block font-sans text-xl  font-bold leading-none text-black ">
            Date
          </p>
        </th>
        <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
          <p className="block font-sans text-xl  font-bold leading-none text-black ">
            Action
          </p>
        </th>
        <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
          <p className="block font-sans text-xl  font-bold leading-none text-black ">
            Status
          </p>
        </th>
       
      </tr>
    </thead>
    <tbody className='shadow-2xl'>
      <tr className="even:bg-blue-gray-50/50">
        <td className="p-4">
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            John Michael
          </p>
        </td>
        <td className="p-4">
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            Manager
          </p>
        </td>
        <td className="p-4">
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            Manager
          </p>
        </td>
        <td className="p-4">
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            23/04/18
          </p>
        </td>
        <td className="p-4 flex gap-5">
        <button className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">View</button>
        <button className="select-none rounded-lg bg-green-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">Change Status</button>
        </td>
      </tr>
      <tr className="even:bg-blue-gray-50/50">
        <td className="p-4">
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            Alexa Liras
          </p>
        </td>
        <td className="p-4">
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            Developer
          </p>
        </td>
        <td className="p-4">
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            Manager
          </p>
        </td>
        <td className="p-4">
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            23/04/18
          </p>
        </td>
        
        <td className="p-4 flex gap-5">
        <button className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">View</button>
        <button className="select-none rounded-lg bg-green-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">Change Status</button>
        </td>
      </tr>
      <tr className="even:bg-blue-gray-50/50">
        <td className="p-4">
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            Laurent Perrier
          </p>
        </td>
        <td className="p-4">
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            Executive
          </p>
        </td>
        <td className="p-4">
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            Manager
          </p>
        </td>
        <td className="p-4">
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            19/09/17
          </p>
        </td>
        <td className="p-4 flex gap-5">
        <button className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">View</button>
        <button className="select-none rounded-lg bg-green-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">Change Status</button>
        </td>
      </tr>
      <tr className="even:bg-blue-gray-50/50">
        <td className="p-4">
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            Michael Levi
          </p>
        </td>
        <td className="p-4">
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            Developer
          </p>
        </td>
        <td className="p-4">
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            Manager
          </p>
        </td>
        <td className="p-4">
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            24/12/08
          </p>
        </td>
        <td className="p-4 flex gap-5">
        <button className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">View</button>
        <button className="select-none rounded-lg bg-green-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">Change Status</button>
        </td>
      </tr>
      <tr className="even:bg-blue-gray-50/50">
        <td className="p-4">
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            Richard Gran
          </p>
        </td>
        <td className="p-4">
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            Manager
          </p>
        </td>
        <td className="p-4">
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            Manager
          </p>
        </td>
        <td className="p-4">
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            04/10/21
          </p>
        </td>
        <td className="p-4 flex gap-5">
        <button className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button" onClick={navigat}>View</button>
        <button className="select-none rounded-lg bg-green-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button"
        onClick={handleOpen} variant="gradient"
        >Change Status</button>
              <Dialog open={open} handler={handleOpen} className='bg-gray-300 '>
        <DialogHeader>Admin Approval</DialogHeader>
        <DialogBody>
        <div className='flex flex-row '>
        <ul>
          <li>Name</li>
          <li>Id</li>
          <li>Admision No</li>
        </ul>
        <div className="w-52 ml-[250px] ">
      <Select label="Select Version"  >
        <Option className='font-bold text-xl text-black'>Approved</Option>
        <Option className='font-bold text-xl text-black'>Rejected</Option>
      </Select>
    </div>
    </div>
        </DialogBody>
        <DialogFooter>
        <button
        class=" rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xl text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        Summit
      </button>
        </DialogFooter>
      </Dialog>




        </td>
      </tr>
    </tbody>
  </table>
  
  





</div>


    </div>
  )
}

export default ViewAdmin

























