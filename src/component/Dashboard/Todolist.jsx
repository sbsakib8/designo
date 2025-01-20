import {Checkbox} from "@heroui/react";


 function Todolist() {
  return (
   <div className=" w-[288px] h-[277px] space-y-3 snap-y overflow-y-auto py-6 px-5">
    <h1 className=" font-semibold text-[16px]">To do List</h1>
     <div className="">
     <Checkbox defaultSelected lineThrough>
      <h5 className=" font-medium text-[14px] text-[#121212] leading-[21px]">Human Interaction Designs</h5>
      
    </Checkbox>
    <p className=" px-10 font-poppins font-normal text-[12px] text-paragraphColor">Tuesday, 30 June 2024</p> 
     </div>
     <div className="">
     <Checkbox defaultSelected lineThrough>
      <h5 className=" font-medium text-[14px] text-[#121212] leading-[21px]">Human Interaction Designs</h5>
      
    </Checkbox>
    <p className=" px-10 font-poppins font-normal text-[12px] text-paragraphColor">Tuesday, 30 June 2024</p> 
     </div>
     <div className="">
     <Checkbox defaultSelected lineThrough>
      <h5 className=" font-medium text-[14px] text-[#121212] leading-[21px]">Human Interaction Designs</h5>
      
    </Checkbox>
    <p className=" px-10 font-poppins font-normal text-[12px] text-paragraphColor">Tuesday, 30 June 2024</p> 
     </div>
     <div className="">
     <Checkbox defaultSelected lineThrough>
      <h5 className=" font-medium text-[14px] text-[#121212] leading-[21px]">Human Interaction Designs</h5>
      
    </Checkbox>
    <p className=" px-10 font-poppins font-normal text-[12px] text-paragraphColor">Tuesday, 30 June 2024</p> 
     </div>
     <div className="">
     <Checkbox defaultSelected lineThrough>
      <h5 className=" font-medium text-[14px] text-[#121212] leading-[21px]">Human Interaction Designs</h5>
      
    </Checkbox>
    <p className=" px-10 font-poppins font-normal text-[12px] text-paragraphColor">Tuesday, 30 June 2024</p> 
     </div>
     
   </div>
  );
}
export default Todolist;
