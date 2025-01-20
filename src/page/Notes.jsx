import React from 'react'
import { MdOutlineSort } from "react-icons/md";
import { CiFilter } from "react-icons/ci";
import { IoIosAdd } from "react-icons/io";
import Cards from '../component/Notes/Card';

function Notes() {
  return (
    <div className='container '>
      {/* add notes nav main div */}

      <div className='flex flex-col gap-4 md:flex-row  justify-between flex-1 w-full '>
        <div className='notes'>Notes</div>
        {/* button div */}
        <div className='flex gap-x-3 items-center'>
          <div className='notes_button'>
            <MdOutlineSort />
            <button>Sort By</button>
            </div>
          <div className='notes_button'>
            <CiFilter />
            <button>Filter </button>
            </div>
          <div className='notes_button add_notes'>
            <IoIosAdd  className=' w-4 h-10'/>
            <button>ADD NOTES</button>
            </div>
        </div>
      </div>


      {/* main section div */}
      <div className=' snap-y overflow-y-auto h-screen mt-6'>
        <div className=' space-y-5'>
          {/* row 1 */}
          <div>
              <Cards/>
            </div>
            {/* row 2 */}
            <div>
              <Cards/>
            </div>
            {/* row 3 */}
            <div>
              <Cards/>
            </div>
            {/* row 4 */}
            <div>
              <Cards/>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Notes