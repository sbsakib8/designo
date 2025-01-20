import React from 'react'
import Calendars from '../component/Dashboard/Calendar'
import Recent from '../component/Dashboard/Recent-course'
import { MdColorize } from "react-icons/md";
import Png from '../component/Dashboard/Png';
import Hours from '../component/Dashboard/Hours';
import Performance from '../component/Dashboard/Performance';




function Deshboard() {
  return (
    <div className=' container py-4 snap-y-auto overflow-y-auto'>
         <h3>Hello Harsh 👋🏻</h3>
         <p>Lets learn something new today!</p>
{/* main div */}
         <div className='w-full mt-5'>
          {/* colam 1 */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full justify-items-center'>
              {/* row 1 */}
              <div className='border-1 border-[#E4E4E4] shadow-md  w-[300px] h-[208px] rounded-lg py-5 px-3'>
                <h3 className='my-3'>Recent enrolled course</h3>
               <div className='py-5 px-3 border-1 border-[#E4E4E4] rounded-lg space-y-3 '> 
               <p className='w-[27px] h-[28px] shadow-md rounded-md flex justify-center items-center'><MdColorize/></p>
                <p>Product Design Course</p>
                <Recent/>
               </div>
              </div>
              {/* row 2 */}
              <div  className=' shadow-md rounded-lg  py-4 px-5 bg-white border-1 border-[#E4E4E4] w-[309px] h-[208px] flex flex-col justify-between'>
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
            <div className=' flex'>
              {/* row 1 */}
            <div className=' w-[314px] h-[212px]'>
              <Hours/>
              </div>
              {/* row 2 */}
              <div  className=' w-[314px] h-[212px]'>
               <Performance/>
              </div>
              {/* row 3 */}
              <div className=' w-[314px] h-[212px] p-24'>
                
              </div>
            </div>
            {/* colam 3 */}
            <div></div>
            
         </div>
        
    </div>
  )
}

export default Deshboard