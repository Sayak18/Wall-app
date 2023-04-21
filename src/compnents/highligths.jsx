import Image from "next/image"
import highlight1 from "../assets/highlight-1.svg"
import highlight2 from "../assets/highlight-2.svg"
import highlight3 from "../assets/highlight-3.svg"
import highlight4 from "../assets/highlight-4.svg"
import highlight5 from "../assets/highlight-5.svg"

import union from "../assets/Union.png"
import { highlights } from "@/datas/data1"
export default function Highlights(){
    return(
        <div className="highlights h-[36%]  bg-[#1A1A1A] flex flex-col justify-between">
           <div className="text-[0.875rem] font-medium text-[#A2A2A2]">Highlights</div>
           <div className="highlights-cards h-[74%] flex justify-evenly">
           {highlights?.map((ele,i)=>{
            const img=(i===0)?highlight1:i===1?highlight2:i===2?highlight3:i===3?highlight4:highlight5
            return(
                <div className="card flex flex-col pt-[0.5em] pb-[1em] justify-between bg-[#111111] border border-[#111111] box-border w-[18%] rounded-2xl relative overflow-hidden">
                <div className={ele.theme[0]}>
     
                 </div>
                <div className="card-1 flex h-[37%] items-center">
                 <Image src={img} className="w-[42%] h-[93%] mr-[1em]"/>
                 <div className="card-1-el flex flex-col justify-between  w-[47%] h-[100%] ">
                  <div className="card-1-el-1 text-[0.875rem] font-medium text-[white]">
                  {ele.name}
                  </div>
                  <div className={ele.theme[1]}>
                 {ele.subhead}
                  </div>
                 </div>
                </div>
                <div className="card-1-el-2 h-[34%] w-[95%] flex justify-evenly flex-col">
                   <div className="card-1-el-2-el flex h-[40%] justify-evenly">
                     <div className="card-1-el-2-el-1 w-[51%] min-w-[101px] text-[0.75rem] font-medium text-[#A2A2A2]">
                    {ele.name2}
                     </div>
                     <div className="card-1-el-2-2l-2 w-[10%] text-[0.75rem] text-[white] flex justify-between items-center">
                       <span className="mr-[0.5em]">{ele.percent}</span>  
                      <Image src={union} className="h-70"/>
                     </div> 
                   </div>
                   <div className="card-1-el-2-el flex h-[40%] justify-evenly ">
                     <div className="card-1-el-2-el-1 w-[43%] text-[0.75rem] font-medium text-[#A2A2A2]">
                     {ele.timestamp}
                     </div>
                     <div className="card-1-el-2-2l-2 w-[10%] text-[0.75rem] text-[#19ED7B] font-normal flex justify-between items-center">
                      {ele.XP}
                     </div> 
                   </div>
                  </div>
                </div>
            )
           })}
           </div>
        </div>
    )
}