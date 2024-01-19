import React,{useState,useContext,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import menu from '../Images/menu.png'
import close from '../Images/close.png'
 import iqralogo from '../Images/iqralogo.png'
import { ContractContext } from '../ContextApi/ContractContext';
import Navbar from './Navbar'

function Forms(){
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const {contract} = useContext(ContractContext);
const {userAddress} = useContext(ContractContext)
const [address,setAddress]=useState('')
const {Adminaddress} = useContext(ContractContext)

console.log("kakakaka",Adminaddress)

const handleNavigation = () => {
  if (userAddress == Adminaddress) {
    navigate('/ViewAdmin');
  } else {
    console.log('Condition is false. Not navigating.');
  }
};



// Applicaant Data


 const [formData, setFormObj] =useState({
   applicantID:"",
    firstName:"",
    lastName:"",
    dateOfBirth:"",
    gender:"",
    contactNumber:"",
    email:"",
    _address:""
});
const handleInputChange = (e) => {
  setFormObj({...formData, [e.target.name]: e.target.value })    
}

const ApplicantForm = async () => {
  try {
    console.log("applicant",formData)
let tx = await contract.addApplicant(formData.applicantID,formData.firstName,formData.lastName,formData.dateOfBirth,formData.gender,formData.contactNumber,formData.email,formData._address)
await tx.wait();
  } catch (error){
    console.log(error)
  }

}


                        //Acedmic qualificatin data
                                            
  const [AcedmicData, setAcedmicData] =useState({
  qualifcationID:"",
  applicantID:"",
  degreeName:"",
  instituteName:"",
  yearOfPassing:"",
  gpa:"",
  degree_docs:""
});

const AcedmicForm = (e) => {
  setAcedmicData({...AcedmicData, [e.target.name]: e.target.value })    
}

 const AcedemicFormbtn = async () => {
console.log(AcedmicData)
  try {
    console.log("Acedmic",AcedmicForm)
let tx = await contract.addAcademicQualification(AcedmicData.qualifcationID,AcedmicData.applicantID,AcedmicData.degreeName,AcedmicData.instituteName,AcedmicData.yearOfPassing,AcedmicData.gpa,AcedmicData.degree_docs)
await tx.wait();
  } catch (error){
    console.log(error)
  }
}


                            //Course data
const [CourseData, setCourseData] =useState({
  courseID:"",
  courseName:"",
  duration:"",
  fee:""
});

const CourseForm = (e) => {
  setCourseData({...CourseData, [e.target.name]: e.target.value })    
}

 const CourseFormbtn = async () => {
  console.log("course",CourseData)
  try {
let tx = await contract.addCourse(CourseData.courseID,CourseData.courseName,CourseData.duration,CourseData.fee)
await tx.wait();
  } catch (error){
    console.log(error)
  }
}



                       // Academic Qualifications
const [QualifData, setQualifData] =useState({
admissionID:"",
applicantID:"",
courseID:"",
admissionDate:"",
status:""
});

const QualificatinForm = (e) => {
setQualifData({...QualifData, [e.target.name]: e.target.value })    
   }
                      
const QualifFormbtn = async () => {
  console.log("Qualification",QualifData)
 try {
 let tx = await contract.addAdmission(QualifData.admissionID,QualifData.applicantID,QualifData.courseID,QualifData.admissionDate,QualifData.status)
 await tx.wait();
 } catch (error){
  console.log(error)
  }
  }


 


  return (
    <section className='w-full max-h-screen'  >

                   {/* Navbar */}
    <Navbar/>

    {/* Applicant form */}
    <div className='w-full'>
    <h1 className='mx-auto w-[300px]  text-center text-4xl font-bold mb-4 pb-4 mt-4 bg-white'>
        Applicants
    </h1>
    <form class="w-full max-w-4xl mx-auto  p-4 bg-gray-400 shadow-2xl rounded-xl" >
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-1/2 md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2">
          ApplicanID
        </label>
        <input class="appearance-none block w-full bg-gray-200 text-black  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="text" name="applicantID" value={formData.applicantID} onChange={handleInputChange} placeholder="Applicant Id"/>
      </div>
      <div class="w-1/2 md:w-1/3 px-3 mb-6">
        <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2">
          First Name
        </label>
        <input class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text"  name="firstName" value={formData.firstName}  onChange={handleInputChange} placeholder="First Name"/> 
      </div>
      <div class="w-1/2 md:w-1/3 px-3 mb-4 md:mb-0">
        <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2">
          Last Name
        </label>
        <input class="appearance-none block w-full bg-gray-200 text-black  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Last Name"/>
      </div>
      <div class="w-1/2 md:w-1/3 px-3 mb-4">
        <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2">
          Date of Birth
        </label>
        <input class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text"  name="dateOfBirth" value={formData.dateOfBirth} onChange={handleInputChange}  placeholder="Date of Birth"/> 
      </div>
      <div class="w-1/2 md:w-1/3 px-3 mb-4 md:mb-0">
        <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2">
          Gender
        </label>
        <input class="appearance-none block w-full bg-gray-200 text-black  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="text"  name="gender" value={formData.gender} onChange={handleInputChange} placeholder="Gender"/>
      </div>
      <div class="w-1/2 md:w-1/3 px-3">
        <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2">
          Contact Number
        </label>
        <input class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text"  name="contactNumber" value={formData.contactNumber} onChange={handleInputChange}  placeholder="Contact Number"/>
      </div>
      <div class="w-1/2 md:w-1/3 px-3 mb-4 md:mb-0">
        <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2">
          Email Address
        </label>
        <input class="appearance-none block w-full bg-gray-200 text-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="email"  name="email" value={formData.email} onChange={handleInputChange} placeholder="Email Address"/>
      </div>
      <div class="w-1/2 md:w-1/3 px-3 mb-4">
        <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2">
          Address
        </label>
        <input class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text"  name="_address" value={formData._address} onChange={handleInputChange}  placeholder="Address"/>
      </div>
    </div>
    <div className='w-full  flex  justify-center  '>
    <button className="w-56 h-14 select-none rounded-lg bg-green-500 py-3 px-6 text-center align-middle font-sans text-xl font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button"  onClick={ApplicantForm}>Summit</button>
      </div>
  </form>
 
                         {/* Accedmic Qualificaiton */}
    
     <h1 className='text-center text-4xl font-bold mb-4   mt-12 bg-white'>
        Academic Qualifications
    </h1>
    <form class="w-full max-w-4xl mx-auto p-4  rounded-xl bg-gray-400 shadow-2xl">
    <div class="flex flex-wrap -mx-3 mb-4">
      <div class="w-1/2 md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2">
          Qualification ID
        </label>
        <input class="appearance-none block w-full bg-gray-200 text-black  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="text" name='qualifcationID' value={AcedmicData.qualifcationID} onChange={AcedmicForm}  placeholder="Qualification Id"/>
      </div>
      <div class="w-1/2 md:w-1/3 px-3 mb-4">
        <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2">
          Applicant ID
        </label>
        <input class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="applicantID" value={AcedmicData.applicantID} onChange={AcedmicForm} placeholder="Applicant Id"/>
      </div>
      <div class="w-1/2 md:w-1/3 px-3 mb-4 ">
        <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2">
          Degree Name
        </label>
        <input class="appearance-none block w-full bg-gray-200 text-black  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" name='degreeName' value={AcedmicData.degreeName} onChange={AcedmicForm} placeholder="Degree Name"/>
      </div>
      <div class="w-1/2 md:w-1/3 px-3 mb-4">
        <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2">
          Institute Name
        </label>
        <input class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text" name='instituteName' value={AcedmicData.instituteName} onChange={AcedmicForm}  placeholder="Institute Name"/>
      </div>
      <div class="w-1/2 md:w-1/3 px-3 mb-4 ">
        <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2">
          Year of Passing
        </label>
        <input class="appearance-none block w-full bg-gray-200 text-black  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="text" name='yearOfPassing' value={AcedmicData.yearOfPassing} onChange={AcedmicForm} placeholder="Year of Passing"/>
      </div>
      <div class="w-1/2 md:w-1/3 px-3 mb-4">
        <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2">
          GPA
        </label>
        <input class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" name='gpa' value={AcedmicData.gpa} onChange={AcedmicForm}  placeholder="GPA"/>
      </div>
      <div class="w-1/2 md:w-1/3 px-3 mb-4">
        <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2">
          Degree_docs
        </label>
        <input class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" name='degree_docs' value={AcedmicData.degree_docs} onChange={AcedmicForm}  placeholder="degree doc"/>
      </div>
    </div>
    <div className='w-full  flex  justify-center  '>
    <button className="w-56 h-14 select-none rounded-lg bg-green-500 py-3 px-6 text-center align-middle font-sans text-xl font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button" onClick={AcedemicFormbtn}>Summit</button>
      </div>
  </form>
                                  {/* Courses */}

 <h1 className='text-center text-4xl font-bold mb-4 mt-12 bg-white'>
        Courses
    </h1>
    <form class="w-full max-w-4xl mx-auto p-4 bg-gray-400 shadow-xl rounded-2xl">
    <div class="flex flex-wrap -mx-3 mb-4">
      <div class="w-1/2 md:w-1/3 px-3 mb-4 md:mb-0">
        <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2">
          Course ID
        </label>
        <input class=" appearance-none block w-full bg-gray-200 text-black  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="text" name='courseID' value={CourseData.courseID} onChange={CourseForm} placeholder="Course Id"/>
      </div>
      <div class="w-1/2 md:w-1/3 px-3 mb-4">
        <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2">
          Course Name
        </label>
        <input class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" name='courseName' value={CourseData.courseName} onChange={CourseForm} placeholder="Course Name"/>
      </div>
      <div class="w-1/2 md:w-1/3 px-3 mb-4 md:mb-0">
        <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2">
          Duration
        </label>
        <input class="appearance-none block w-full bg-gray-200 text-black  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" name='duration' value={CourseData.duration} onChange={CourseForm} placeholder="Duration"/>
      </div>
      <div class="w-1/2 md:w-1/3 px-3 mb-4">
        <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2">
          Fee
        </label>
        <input class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text" name='fee' value={CourseData.fee} onChange={CourseForm} placeholder="Fee"/>
      </div>
    </div>
    <div className='w-full  flex  justify-center  '>
    <button className="w-56 h-14 select-none rounded-lg bg-green-500 py-3 px-6 text-center align-middle font-sans text-xl font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button"  onClick={CourseFormbtn}>Summit</button>
      </div>
  </form>
  
                            {/* Admission */}

 <h1 className='text-center text-4xl font-bold mb-2 mt-12  '>
        Academic Qualifications
    </h1>
    <form class="w-full max-w-4xl mx-auto p-4 bg-gray-400 shadow-xl rounded-2xl">
    <div class="flex flex-wrap -mx-3 mb-4">
      <div class="w-1/2 md:w-1/3 px-3 mb-4 md:mb-0">
        <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2">
          Addmission ID
        </label>
        <input class="appearance-none block w-full bg-gray-200 text-black  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  name="admissionID" value={QualifData.admissionID} onChange={QualificatinForm} placeholder="Applicant Id" />
      </div>
      <div class="w-1/2 md:w-1/3 px-3 mb-4">
        <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2">
          Applicant ID
        </label>
        <input class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" name="applicantID" value={QualifData.applicantID} onChange={QualificatinForm} placeholder="Applicant Id" />
      </div>
      <div class="w-1/2 md:w-1/3 px-3 mb-4 md:mb-0">
        <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2">
          Course Id
        </label>
        <input class="appearance-none block w-full bg-gray-200 text-black  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" name='courseID' value={QualifData.courseID} onChange={QualificatinForm} placeholder="Course Id"/>
      </div>
      <div class="w-1/2 md:w-1/3 px-3 mb-4">
        <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2">
          Admission Date
        </label>
        <input class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name='admissionDate' value={QualifData.admissionDate} onChange={QualificatinForm} type="text" placeholder="Admission Date"/>
      </div>
      <div class="w-1/2 md:w-1/3 px-3 mb-4 md:mb-0">
        <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2">
          Status
        </label>
        <input class="appearance-none block w-full bg-gray-200 text-black  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="text" name='status' value={QualifData.status} onChange={QualificatinForm} placeholder="Status"/>
      </div>
    </div>
    <div className='w-full  flex  justify-center  '>
    <button className="w-56 h-14 select-none rounded-lg bg-green-500 py-3 px-6 text-center align-middle font-sans text-xl font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button" onClick={QualifFormbtn}>Summit</button>
      </div>
  </form>
  </div>
  </section>
  )
}

export default Forms
