import React from 'react'
import Calendars from '../component/Dashboard/Calendar'
import Recent from '../component/Dashboard/Recent-course'
import { MdColorize } from "react-icons/md";
import Png from '../component/Dashboard/Png';
import Hours from '../component/Dashboard/Hours';
import Performance from '../component/Dashboard/Performance';
import Todolist from '../component/Dashboard/Todolist';
import Upcoming from '../component/Dashboard/Upcoming';
import { PiStudentDuotone } from "react-icons/pi";
import { MdOutlineAccessTime } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaFigma } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";

function Deshboard() {
  return (
    <div className=' container py-4 snap-y-auto overflow-y-auto relative '>
         <h3 className=' font-bold text-[33px] text-[#211C37]'>Hello Harsh 👋🏻</h3>
         <p className=' font-normal text-[20px] text-paragraphColor leading-[24px]'>Lets learn something new today!</p>
{/* main div */} 
         <div className='w-full mt-5 '>
          {/* colam 1 */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full justify-items-center '>
              {/* row 1 */}
              <div className='border-1 border-[#E4E4E4] shadow-md  w-[300px] h-[250px] rounded-lg py-5 px-3'>
                <h3 className='my-3'>Recent enrolled course</h3>
               <div className='py-5 px-3 border-1 border-[#E4E4E4] rounded-lg space-y-3 '> 
               <p className='w-[27px] h-[28px] shadow-md rounded-md flex justify-center items-center'><MdColorize/></p>
                <p>Product Design Course</p>
                <Recent/>
               </div>
              </div>
              {/* row 2 */}
              <div  className=' shadow-md rounded-lg  py-4 px-5 bg-white border-1 border-[#E4E4E4] w-[309px]  md:w-[300px] lg:w-[420px] h-[250px] flex flex-col justify-between'>
               <h4>Your Resources</h4>
    {/* png upload div */}
               <div className='flex justify-between items-center gap-3 mt-3'>
                 <img src="img/png3.png" alt="" />
                 <Png/>
               </div>
               {/* png div 2 */}
               <div className='flex justify-between items-center gap-3 mt-3'>
                 <img src="img/png1.png" alt="" />
                 <Png/>
               </div>
                {/* png div 3 */}
                <div className='flex justify-between items-center gap-3 mt-3'>
                 <img src="img/png2.png" alt="" />
                 <Png/>
               </div>
               <button className='bg-[#FF4B000F] text-primary rounded-2xl mt-2'>see more</button>
              </div>
              {/* row 3 */}
              <div  >
                <Calendars className=' shadow-md bg-gray-300 w-[285px] h-[288px]'/>
              </div>
            </div>
            {/* colam 2 */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full justify-items-center mt-6'>
              {/* row 1 */}
            <div className=' w-[350px] h-[271px] shadow-lg px-5 border-1 border-gray-200'>
              <h5 className=" font-semibold text-[16px]">Hours Spent</h5>
              <Hours/>
              </div>
              {/* row 2 */}
              <div  className=' w-[240px] md:w-[300px] lg:w-[420px] h-[271px] shadow-lg py-6 px-3 border-1 border-gray-200'>
                <h4 className=" font-semibold text-[16px]">Performance</h4>
               <Performance/>
              </div>
              {/* row 3 */}
              <div className=' w-[288px] h-[271px] shadow-lg border-1 border-gray-200'>
                <Todolist/>
              </div>
            </div>
            {/* colam 3 */}
            <div className='grid grid-cols-1 md:grid-cols-2  gap-4 w-full justify-items-center mt-6  '>
              {/* row 1 */}
              <div className=' w-full h-[270px] rounded-lg shadow-lg border-1 border-gray-200 space-y-3 py-3 px-4 bg-gray-100 overflow-x-auto'>
                <div className=' flex justify-between'>
                  <div>
                    <h5 className=" font-semibold text-[16px]">Recent enrolled classes</h5>
                    </div>
                    <div className=' flex gap-3 items-center'>
                      <h5 className=" font-semibold text-[16px]">All</h5>
                       <div className='w-[33px] h-[33px] flex justify-center items-center bg-gray-200 text-[20px] rounded-full'><CiSearch/></div>
                    </div>
                </div>
                <div className=' flex w-[470px] h-[93px] rounded-lg bg-white shadow-md py-2 px-5 gap-7'>
                  <div className='w-[40px] h-[40px] rounded-md bg-gray-200 flex justify-center items-center'>
                    <FaFigma/>
                  </div>
                  <div>
                    <div >
                      <h6 className=' font-bold text-primary text-[16px] '>User Experience UX Design</h6>
                    </div>
                    <div className='flex justify-between py-2 space-x-4'>
                      <div className='flex gap-2 items-center'>
                        <MdOutlineAccessTime/>
                        <p>5:30hrs</p>
                      </div>
                      <div className='flex gap-2 items-center'>
                        <FaRegFileAlt/>
                        <p>03 Lessons</p>
                      </div>
                      <div className='flex gap-2 items-center'>
                        <MdOutlineAccessTime/>
                        <p>Assignments</p>
                      </div>
                      
                    </div>
                  </div>
                </div>
                <div className=' flex w-[470px] h-[93px] rounded-lg bg-white shadow-md py-2 px-5 gap-7'>
                  <div className='w-[40px] h-[40px] rounded-md bg-gray-200 flex justify-center items-center'>
                    <FaFigma/>
                  </div>
                  <div>
                    <div >
                      <h6 className=' font-bold text-primary text-[16px] '>User Experience UX Design</h6>
                    </div>
                    <div className='flex justify-between py-2 space-x-4'>
                      <div className='flex gap-2 items-center'>
                        <MdOutlineAccessTime/>
                        <p>5:30hrs</p>
                      </div>
                      <div className='flex gap-2 items-center'>
                        <FaRegFileAlt/>
                        <p>03 Lessons</p>
                      </div>
                      <div className='flex gap-2 items-center'>
                        <MdOutlineAccessTime/>
                        <p>Assignments</p>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
              {/* row 2 */}
              <div className=' w-full h-[270px] rounded-lg shadow-lg border-1 border-gray-200 space-y-3 py-3 px-4 bg-gray-100'>
              <h5 className=" font-semibold text-[16px]">Upcoming Lesson</h5>
                <Upcoming title='UX Design Fundamentals' icon= {<PiStudentDuotone className=" w-[35px] h-[35px]"/>} time='5:30pm' />
                
                <Upcoming title='Interaction Design' icon= {<MdOutlineAccessTime className=" w-[35px] h-[35px]"/>} time='9:00pm' />
                <Upcoming title='Interaction Design' icon= {<MdOutlineAccessTime className=" w-[35px] h-[35px]"/>} time='9:00pm' />
                
              </div>
            </div>
            
         </div>
        
    </div>
  )
}

export default Deshboard