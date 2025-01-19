import React from 'react'
import Designodata from './../data/designodata/Designodata';
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
function Navber() {
  return (
    <div className=' '>
        {/* top nav */}
        <div className='top_nav'>
            {/* input main div */}
            
            <div className='input_main_div '>
            <CiSearch  className=' text-primary text-[24px] '/>
                <input className='input' type="text" placeholder='Search...' />
            </div>
            
{/* right main div */}
            <div className='flex gap-x-3'>
                {/* child 1 */}
            <div className='notification_div'>
                <IoIosNotificationsOutline className='w-10 h-6 shadow-md rounded-md' /></div>
                {/* child 2 */}
              <div>
              <img src="img/profile.png" alt="" />
              </div>
                {/* child 3 */}
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

        {/* sight nav  */}
        <div className='w-[223px] h-screen bg-navber py-4 px-6  '>
            <div className=''>
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
                             <a className=' font-inter font-medium size-3' href={data.path}> {data.label}</a>
                             </div>
                        </div>
                            
                    )
                })
            }
            </div>
        </div>



    </div>
  )
}

export default Navber


