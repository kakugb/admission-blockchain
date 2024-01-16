import { ContractContext } from '../ContextApi/ContractContext'; 
import React,{useState,useContext, useEffect} from 'react'
import { Link } from 'react-router-dom'
import iqralogo from '../Images/iqralogo.png'
import menu from '../Images/menu.png'
import close from '../Images/close.png'
function ViewData() {
    const [toggle, setToggle] = useState(false);

 

    const {contract} = useContext(ContractContext);
    //let ReadContract=  contract.getAllApplications().then((res)=>{return res}).catch((error)=>console.log(error))
     
    async function readData() {
     try {
         const data = await contract.getAllApplications();
         console.log(data);
     } catch (error) {
         console.error('Error reading data:', error);
     }
 }
 
 useEffect(() => {
    readData()
 }, [])
 

  return (


<>


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

    
    <div class="w-full md:w-9/12  h-64 shadow-2xl mx-auto">
                <div class=" p-3  rounded-sm ">
                    <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                       
                        <span class="text-3xl font-bold text-center w-full  py-4 bg-blue-gray-900 text-white">Applicant</span>
                    </div>
                    <div class="text-black bg-gray-400">
                        <div class="grid md:grid-cols-2 text-sm">
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-bold ">Applicant Id</div>
                                <div class="px-4 py-2 font-bold">20-Arid-589</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-bold">First Name</div>
                                <div class="px-4 py-2 font-bold">Karamat</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-bold">Last Name</div>
                                <div class="px-4 py-2 font-bold">Ali</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-bold">Date of Birth</div>
                                <div class="px-4 py-2 font-bold">01-03-2002</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-bold">Gender</div>
                                <div class="px-4 py-2 font-bold">Male</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-bold">Contact Number</div>
                                <div class="px-4 py-2 font-bold">+923417676751</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-bold">Email Address</div>
                                <div class="px-4 py-2 font-bold">karamat.4101@gmail.com</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-bold">Address</div>
                                <div class="px-4 py-2 font-bold">Double Road rawalpindi</div>
                            </div>
                        </div>
                    </div>
                </div>
                


                   {/* Acedemic Qualification */}


                   <div class="bg-white p-3  rounded-sm shadow-2xl ">
                    <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                       
                        <span class="w-full text-3xl font-bold text-center py-4 bg-gray-900 text-white">Academic Qualification</span>
                    </div>
                    <div class="text-black bg-gray-400">
                        <div class="grid md:grid-cols-2 text-sm">
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-bold">Qualification Id</div>
                                <div class="px-4 py-2 font-bold">B-9KA-2020</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-bold">Applicant Id</div>
                                <div class="px-4 py-2 font-bold">20-arid-589</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-bold">Degree Name</div>
                                <div class="px-4 py-2 font-bold">BCSC 4years</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-bold">Institute Name</div>
                                <div class="px-4 py-2 font-bold">Arid Agriculture</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-bold">Year of Passing</div>
                                <div class="px-4 py-2 font-bold">2024</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-bold">GPA</div>
                                <div class="px-4 py-2 font-bold">2.961</div>
                            </div>
                        </div>
                    </div>
                </div>



                      {/* Course */}



                      <div class="bg-white p-3  rounded-sm shadow-2xl">
                    <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                       
                        <span class="w-full text-3xl font-bold text-center py-4 bg-gray-900 text-white">Course</span>
                    </div>
                    <div class="text-black bg-gray-400">
                        <div class="grid md:grid-cols-2 text-sm">
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-bold">Course Id</div>
                                <div class="px-4 py-2 font-bold">CS-20</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-bold">Course Name</div>
                                <div class="px-4 py-2 font-bold">BS computer Science</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-bold">Duration</div>
                                <div class="px-4 py-2 font-bold">4years</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-bold">Fee</div>
                                <div class="px-4 py-2 font-bold">Rs. 45500</div>
                            </div>
                        </div>
                    </div>
                </div>




                   {/* Admision */}





                   <div class="bg-white p-3  rounded-sm drop-shadow-2xl">
                    <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                       
                        <span class="w-full text-3xl font-bold text-center py-4 bg-blue-gray-900 text-white">Admission</span>
                    </div>
                    <div class="text-black bg-gray-400">
                        <div class="grid md:grid-cols-2 text-sm">
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-bold">Admission Id</div>
                                <div class="px-4 py-2 font-bold">CS-2020</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-bold">Applicant Id</div>
                                <div class="px-4 py-2 font-bold">20-Arid-589</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-bold">Course Id</div>
                                <div class="px-4 py-2 font-bold">CS-20</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-bold">Addmision Date</div>
                                <div class="px-4 py-2 font-bold">12 September 2020</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-bold">Status</div>
                                <div class="px-4 py-2 font-bold">Admitted</div>
                            </div>
                        </div>
                    </div>
                </div>
               
           </div>     
           </>
              )
}

export default ViewData
