import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@heroui/react";
import Notesdata from "../../data/Notes/Notesdata";
import { div } from "framer-motion/client";
 function Cards() {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {
            Notesdata.slice(0,3).map((data,index)=>{
                return(
                    <Card key={index} className="max-w-[400px] ">
      <CardHeader className="flex gap-3">
        
        <div className="flex gap-3">
          <p className="text-md text-[#259800] w-[72px] h-[23px] rounded-lg text-center  bg-[#EEF5F0]">{data.Weekly}</p>
          <p className="text-md text-[#3083FF] w-[72px] h-[23px] rounded-lg text-center  bg-[#EEF5F0]">{data.Product}</p>
        </div>
      </CardHeader>
      <h3 className="px-4 text-[20px] font-medium">{data.title}</h3>
      <CardBody>
       <ul className="list-disc px-3"><li>{data.itme1}</li></ul>
       <ul className="list-disc px-3"><li>{data.itme2}</li></ul>
      </CardBody>
      <Divider />
      <CardFooter className=" flex gap-2 justify-between">
        <div className=" flex gap-2">
        <img src={data.img} alt="" />
        <h5>{data.names}</h5>
        </div>
        <div>
            <p>{data.date}</p>
        </div>
      </CardFooter>
    </Card>
                )
            })
        }
    </div>
  );
}
export default Cards;