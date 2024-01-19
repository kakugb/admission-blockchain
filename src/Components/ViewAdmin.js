import { ContractContext } from '../ContextApi/ContractContext'; 
import {useState,useContext, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import iqralogo from '../Images/iqralogo.png'
import {Dialog,DialogHeader,DialogBody,DialogFooter,} from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import menu from '../Images/menu.png'
import close from '../Images/close.png'
import Navbar from './Navbar'

function ViewAdmin() {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const navigat=()=>{ navigate("/Viewdata")}
  const [applicantData, setApplicantData] = useState([]);
  const [academicData, setAcademicData] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  // const [courseData, setCourseData] = useState([]);
  // const [admissionData, setAdmissionData] = useState([]);


  const { contract } = useContext(ContractContext);
  const {Adminaddress} = useContext(ContractContext)
const {userAddress} = useContext(ContractContext)

// check if the user is admin or not. if not, redirect to home page
  useEffect(() => {
    if (Adminaddress !== userAddress) {
      navigate("/forms");
    }
  }, [Adminaddress, userAddress, navigate]);


  const readData = async () => {
    try {
      const [applicant, academic, course, admission] = await contract.getAllApplications();
      console.log('Raw Applicant Data:', applicant);

     setApplicantData(processData(applicant));
      setAcademicData(processData(academic));
      // setCourseData(processData(course));
      // setAdmissionData(processData(admission));
    } catch (error) {
      console.error('Error reading data:', error);
    }
  };

  const processData = (data) => {
    return data.map((item) => {
      const values = Object.entries(item).map(([key, value]) => [key, value]);
      return Object.fromEntries(values);
    });
  };

  useEffect(() => {
    readData();
  }, []);

  console.log('Applicant Data:', applicantData);
  console.log('Academic Data:', academicData);
  // console.log('Course Data:', courseData);
  // console.log('Admission Data:', admissionData);
  

 


  return (
    <div>
      <Navbar/>            
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
            Contact Number
          </p>
        </th>
        <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
          <p className="block font-sans text-xl  font-bold leading-none text-black ">
            Date of Birth
          </p>
        </th>
        <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
          <p className="block font-sans text-xl  font-bold leading-none text-black ">
            Email
          </p>
        </th>
        <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
          <p className="block font-sans text-xl  font-bold leading-none text-black ">
            Degree
          </p>
        </th>
        <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
          <p className="block font-sans text-xl  font-bold leading-none text-black ">
            Institute Name
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
    { 
      applicantData.map((ele, index)=>{
        const academicInfo = academicData[index] || {};
        return(

        
      <tr className="even:bg-blue-gray-50/50">
        <td className="p-4">
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            {ele[0]}
          </p>
        </td>
        <td className="p-4">
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            {ele[1]}
          </p>
        </td>
        <td className="p-4">
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            {ele[4]}
          </p>
        </td>
        <td className="p-4">
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
          {parseInt(ele[2])}
          </p>
        </td>
        <td className="p-4">
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            {ele[5]}
          </p>
        </td>
        <td className="p-4">
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
          {academicInfo[2] || "N/A"}
          </p>
        </td>
        <td className="p-4">
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
          {academicInfo[3] || "N/A"}
          </p>
        </td>
        <td className="p-4 flex gap-5">
        <button className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button" onClick={navigat}>View</button>
        <button className="select-none rounded-lg bg-green-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button"
         onClick={() => {
          setCurrentUser(index); 
          handleOpen(); 
        }} variant="gradient">Change Status</button>
        </td>
     </tr>
     )
      })
    }
 
    </tbody>
   
    <Dialog open={open} handler={handleOpen} className='bg-gray-300 '>
        <DialogHeader>Admin Approval</DialogHeader>
        <DialogBody>
        <div className='flex flex-row '>
        <ul>
              <li>Name: {currentUser !== null ? `${applicantData[currentUser][0]} ${applicantData[currentUser][1]}` : "N/A"}</li>
              <li>Id: {currentUser !== null ? currentUser : "N/A"}</li>
              <li>Admission No: {currentUser !== null ? applicantData[currentUser][2] : "N/A"}</li>
            </ul>
        <div className="w-52 ml-[250px] ">
      <Select label="Select Version"  >
        <Option className='font-bold text-xl text-black' value='true'>Approved</Option>
        <Option className='font-bold text-xl text-black' value='false'>Rejected</Option>
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

  </table>
  
</div>


    </div>
  )
}

export default ViewAdmin
