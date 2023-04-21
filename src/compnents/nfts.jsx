import nftimg1 from "../assets/nftimg1.svg"
import nftimg2 from "../assets/nftimg2.svg"
import nftimg3 from "../assets/nftimg3.svg"
import nftimg4 from "../assets/nftimg4.svg"
import nftimg5 from "../assets/nftimg5.svg"
import Image from "next/image"
import union from "../assets/Union.png"
import { nfts } from "@/datas/data1"
export default function Nfts(){
    return(
        <div className="nfts h-[54%] bg-[#1A1A1A] flex justify-evenly">
         {nfts?.map((ele,i)=>{
            const img=(i===0)?nftimg1:i===1?nftimg2:i===2?nftimg3:i===3?nftimg4:nftimg5
            return(
                <div className="nft-card w-[18%] h-100 flex flex-col justify-between pb-[1em] border box-border rounded-lg bg-[#111111] border-[#111111]">
        <div className="nft-card-img h-[63%] w-100 relative">
        <Image src={img}
        className="object-cover h-100"
         fill
         />
        </div>
        <div className="nftcard-el h-[25%] flex flex-col justify-evenly box-border  pl-[0.5em]">
          <div className="nftcard-el-1 h-[26%] text-[white] font-medium text-[0.87rem]">
           {ele.name}
          </div>
          <div className="nftcard-el-2 h-[26%] w-[90%] flex justify-between">
          <div className="card-1-el-2-el-1 w-[51%] text-[0.75rem] font-medium text-[#A2A2A2]">
          Bought
                </div>
                <div className="card-1-el-2-2l-2 w-[10%] text-[0.75rem] text-[white] flex justify-between items-center">
                  <span className="mr-[0.5em]">98</span>  
                 <Image src={union} className="h-70"/>
                </div> 
          </div>
          <div className="nftcard-el-3 flex w-[80%] justify-between h-[26%]">
          <div className="card-1-el-2-el-1 w-[51%] text-[0.75rem] font-medium text-[#A2A2A2]">
          Floor
                </div>
                <div className="card-1-el-2-2l-2 w-[10%] text-[0.75rem] text-[white] flex justify-between items-center">
                  <span className="mr-[0.5em]">98</span>  
                 <Image src={union} className="h-70"/>
                </div> 
                <div className="w-[5%] text-[0.75rem] text-[#19ED7B]">
                    +21.6%
                </div>
          </div>

        </div>
        </div>
            )
         })}
        
        </div>
    )
}