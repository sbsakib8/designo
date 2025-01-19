
import React from 'react'
import { CiSearch } from "react-icons/ci";
function Assignments() {
  return (
   <div className='  text-wrap flex flex-1 w-full'>
    {/* main div */}
      <div>
        {/* child 1 */}
        <div className='flex justify-between flex-1 w-full'>
          <div>
            <h3 className='Assignments_title'>Assignments</h3>
            <p className='Assignments_p'>View and manage your course assignments</p>
          </div>
          <div className='flex gap-x-3 items-center'>
           <div className='Assignments_CiSearch'>
            <CiSearch className='text-[20px]'/>
            </div>
           <p className='Assignments_p'>Filter by <span className='text-primary'>dates</span> | <span className='text-primary'>Status</span></p>
          </div>
        </div>
        {/* child 2 */}
        <div></div>
        {/* child 3 */}
        <div></div>

      </div>
   </div>
  )
}

export default Assignments