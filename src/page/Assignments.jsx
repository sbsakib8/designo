
import React from 'react'
import { CiSearch } from "react-icons/ci";
import Assignmentdata from '../data/assignmentsdata/Assigntdata';
import Paginations from '../component/Assignment/Pagination';
function Assignments() {
  return (
   <div className=' container snap-y-auto overflow-y-auto'>
    {/* main div */}
      <div className='w-full mt-5'>
        {/* child 1 */}
        <div className='flex flex-col gap-4 md:flex-row  justify-between flex-1 w-full'>
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
        <div className='w-full mt-7'>
          
        <div className='snap-x-auto overflow-x-auto'>
          <table className='lg:w-full'>
             <thead>
                <tr className=' bg-gray-300 mt-2 p-10 border-1 border-gray-300'>
                  <th>Assignment</th>
                  <th>Course</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Submit</th>
                </tr>
             </thead>
             {
              Assignmentdata.map((data)=>{
                  return(
                    <tbody> 
                    <tr className='border-1 border-gray-300'>
                     <td >{data.title}</td>
                     <td>{data.course}</td>
                     <td>{data.date}</td>
                     <td>{data.Status}</td>
                     <td>{data.Submit}</td>
                    </tr>
                  </tbody>
                  )
              })
             }
          </table>
        </div>
          
        </div>
        {/* child 3 */}
        <div className='w-full mt-9 gap-4 flex flex-col lg:flex-row justify-between'>
          <div className='flex gap-x-3 items-center'> 
            <p>Show</p>
            <select className='border-1 border-gray-300 p-2'>
              <option>10</option>
              <option>20</option>
              <option>30</option>
            </select>
            <p>Row</p>
          </div>
          <div> <Paginations/></div>
        </div>
      
      </div>
   </div>
  )
}

export default Assignments