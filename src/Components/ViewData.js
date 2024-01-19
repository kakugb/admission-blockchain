import { ContractContext } from '../ContextApi/ContractContext'; 
import React,{useState,useContext, useEffect} from 'react'
import { Link } from 'react-router-dom'
import iqralogo from '../Images/iqralogo.png'
import menu from '../Images/menu.png'
import close from '../Images/close.png'
import Navbar from './Navbar'

function ViewData() {
    const [toggle, setToggle] = useState(false);
    const [applicantData, setApplicantData] = useState([]);
    const [academicData, setAcademicData] = useState([]);
    const [courseData, setCourseData] = useState([]);
    const [admissionData, setAdmissionData] = useState([]);
  
  const { contract } = useContext(ContractContext);

  const readData = async () => {
    try {
      const [applicant, academic, course, admission] = await contract.getAllApplications();

      setApplicantData(processData(applicant));
      setAcademicData(processData(academic));
      setCourseData(processData(course));
      setAdmissionData(processData(admission));
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
  console.log('Course Data:', courseData);
  console.log('Admission Data:', admissionData);
//   useEffect(() => {
   
//   }, [applicantData, academicData, courseData, admissionData]);

 

  return (


<>


{/* Navbar */}
<Navbar/>
    
    <div class="w-full md:w-9/12  h-64 shadow-2xl mx-auto">
                
    
                
                <div class=" p-3  rounded-sm ">
                    <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">                       
                        <span class="text-3xl font-bold text-center w-full  py-4 bg-blue-gray-900 text-white">Applicant</span>
                    </div>
           
                    <div class="text-black bg-gray-400">
                        <div class="grid md:grid-cols-2 text-sm">
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-bold ">Applicant Id</div>
                                <div class="px-4 py-2 font-bold">20-arid-589</div>
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
                        
                    {   
                        
                        academicData.map((ele)=>{
                    return( 
                         <div class="grid md:grid-cols-2 text-sm">
                        
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-bold">Qualification Id</div>
                                <div class="px-4 py-2 font-bold">{parseInt(ele[0])}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-bold">Applicant Id</div>
                                <div class="px-4 py-2 font-bold">{parseInt(ele[1])}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-bold">Degree Name</div>
                                <div class="px-4 py-2 font-bold">{ele[2]}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-bold">Institute Name</div>
                                <div class="px-4 py-2 font-bold">{ele[3]}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-bold">Year of Passing</div>
                                <div class="px-4 py-2 font-bold">{parseInt(ele[4])}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-bold">GPA</div>
                                <div class="px-4 py-2 font-bold">{parseInt(ele[5])}</div>
                            </div>
                        </div>
                        
        )})
        
                        }
                    </div>
                </div>



                      {/* Course */}



                      <div class="bg-white p-3  rounded-sm shadow-2xl">
                    <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                       
                        <span class="w-full text-3xl font-bold text-center py-4 bg-gray-900 text-white">Course</span>
                    </div>

{
    courseData.map((ele)=>{
        return(

                    <div class="text-black bg-gray-400">
                        <div class="grid md:grid-cols-2 text-sm">
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-bold">Course Id</div>
                                <div class="px-4 py-2 font-bold">{parseInt(ele[0])}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-bold">Course Name</div>
                                <div class="px-4 py-2 font-bold">{ele[1]}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-bold">Duration</div>
                                <div class="px-4 py-2 font-bold">{parseInt(ele[2])}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-bold">Fee</div>
                                <div class="px-4 py-2 font-bold">{parseInt(ele[3])}</div>
                            </div>
                        </div>
                    </div>

                    )
    })
}
                </div>




                   {/* Admision */}





                   <div class="bg-white p-3  rounded-sm drop-shadow-2xl">
                    <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                       
                        <span class="w-full text-3xl font-bold text-center py-4 bg-blue-gray-900 text-white">Admission</span>
                    </div>

{
    admissionData.map((ele)=>{
        return(


                    <div class="text-black bg-gray-400">
                        <div class="grid md:grid-cols-2 text-sm">
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-bold">Admission Id</div>
                                <div class="px-4 py-2 font-bold">{parseInt(ele[0])}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-bold">Applicant Id</div>
                                <div class="px-4 py-2 font-bold">{parseInt(ele[1])}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-bold">Course Id</div>
                                <div class="px-4 py-2 font-bold">{parseInt(ele[2])}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-bold">Addmision Date</div>
                                <div class="px-4 py-2 font-bold">{parseInt(ele[3])}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-bold">Status</div>
                                <div class="px-4 py-2 font-bold">{ele[4]}</div>
                            </div>
                        </div>
                    </div>

                    )
    })
}
                </div>
               
           </div>     
           </>
              )
}

export default ViewData
