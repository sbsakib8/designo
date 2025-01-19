import React, { useState } from 'react'
import Designodata from './../data/designodata/Designodata';
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink, Outlet } from 'react-router-dom';

function Navber() {
   const [openmanu ,setopenmanu] =useState(false);
   const togglemenu = () => {
       setopenmanu(!openmanu);
   }
  return (
    <div className=' w-full'>
      <div className=' flex w-full' >
        {/* slideber  */}
        <div className={`w-[223px] h-screen bg-navber   ${openmanu ? 'hidden' : 'block'} transition-all duration-500 ease-in-out`}>
        <div className=' mt-5 px-2'>
                <img src="img/designo.png" alt="" />
                
            </div>
            <div className='mt-10'>
            
            {
                Designodata.map((data) => {
                    return (
                        <div key={data.key} className='nav_item'>
                            <div>
                             {data.icon}
                            </div>
                             <div>
                             <NavLink className=' font-inter font-medium size-3' to={data.path}> {data.label}</NavLink>
                             </div>
                        </div>
                            
                    )
                })
            }
            </div>
           </div>

           {/* top ber */}
        <div className=' w-full '>

          {/* top ber */}
         <div className='w-full h-20 bg-white p-3 flex flex-1 justify-between gap-5'> 
            <div onClick={togglemenu} className=' md:hidden flex items-center cursor-pointer '>
              <RxHamburgerMenu className='text-[27px]'/>
            </div>

            <div className='input_main_div '>
            <CiSearch  className=' text-primary text-[24px] '/>
                <input className='input' type="text" placeholder='Search...' />
            </div>

            <div className='flex gap-x-3 items-center'>
                   {/* child 1 */}
            <div className='notification_div'>
                <IoIosNotificationsOutline className='w-10 h-6 shadow-md rounded-md' /></div>
                {/* child 2 */}
                <div>
              <img src="img/profile.png" alt="" />
              </div>
              <div>
                <select>
                    <option value="Harsh">Harsh</option>
                    <option value="Harsh">Harsh</option>
                    <option value="DE">DE</option>
                    <option value="IT">IT</option>
                </select>
              </div>
            </div>

         </div>
         
          <div className=' w-full'> <Outlet/></div>
        </div>
      </div>
    </div>
  )
}

export default Navber


