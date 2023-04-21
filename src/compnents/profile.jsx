import profilepic from "../assets/profilepic.svg"
import twitter from "../assets/twitter.svg"
import globe from "../assets/globe.svg"
import Image from "next/image"
import community1 from "../assets/community1.svg"
import community2 from "../assets/community2.svg"
import community3 from "../assets/community3.svg"
import community4 from "../assets/community4.svg"
export default function Profile(){
    return(
        <div className="profile w-20 h-100  bg-[black] rounded-2xl flex flex-col justify-evenly pt-[0.5em] pl-[1em]" >
            <div className="profile-1 w-70 h-[18%]  flex items-center">
                <div className="w-40 h-100 flex flex-col items-center justify-evenly">
                    <Image src={profilepic} className="w-100 h-[62%]"/> 
                    <div className="w-[43%] h-[24%]  rounded-[2.75rem] bg-yellow-lvl text-[#FFC148] text-[0.75rem] text-center font-semibold leading-[1.5rem] max-h-[31px]">Lvl 2</div>
                </div>
                <div className="h-50 w-[55%]">
                <div className=" text-[white] text-[1.15rem] font-medium">
                     dingaling.eth
                </div>
                <div className="w-80 text-[#A2A2A2] text-[0.75rem]" >0xadgf....jkld</div>
                </div>
            </div>
            <div className="profile-2 h-[5%] w-[59%]  flex justify-between">
              <div className="w-[72%] h-100 rounded-3xl bg-[#1A1A1A] flex justify-evenly items-center">
              <Image src={twitter} className="h-[50%] w-[17%]"/>
              <div className="text-[white] font-normal text-[0.75rem] ">@dingalingts</div>
              </div>
              <Image src={globe} className="w-[11%] h-100" />
            </div>
            <div className="profile-3 h-[11%] w-[84%]  text-[#A2A2A2] text-[0.87rem] font-normal  flex flex-wrap">
            An Investor / Collector of #NFTs and OG enthusiast. Co-Founder and owner of 📦  @nftboxes
            </div>
            <div className="profile-4 h-[11.8%] w-[89%] box-border flex flex-col justify-between" >
             <div className="h-[26%] text-[#A2A2A2]">Common communties (3)</div>
                <div className="flex h-[60%]">
                <Image src={community1} className="h-100 w-[18%]"/>
                <Image src={community2} className="h-100 w-[18%]"/>
                <Image src={community3} className="h-100 w-[18%]"/>
                <Image src={community4} className="h-100 w-[18%]"/>
                </div>
            </div>
            <div className="profile-5 h-[15%] w-[80%]  flex flex-wrap">
             <div className="h-[28%] rounded-[2.5rem] border border-[#FFC148] text-[#FFC148] pt-[0.1em] pr-2 pl-2 text-[0.75rem] font-medium max-h-[31px] mr-[0.5em] ">Art 12%</div>
             <div className="h-[28%] rounded-[2.5rem] border border-[#FFC148] text-[#FFC148]  pt-[0.1em] pr-2 pl-2 text-[0.75rem] font-medium max-h-[31px] mr-[0.5em]">Utility 12%</div>
             <div className="h-[28%] rounded-[2.5rem] border border-[#1A1A1A] text-[#A2A2A2]  pt-[0.1em] pr-2 pl-2 text-[0.75rem] font-medium max-h-[31px] mr-[0.5em]">PFP 12%</div>
             <div className="h-[28%] rounded-[2.5rem] border border-[#1A1A1A] text-[#A2A2A2]  pt-[0.1em] pr-2 pl-2 text-[0.75rem] font-medium max-h-[31px] mr-[0.5em]">Metaverse 12%</div>
             <div className="h-[28%] rounded-[2.5rem] border border-[#1A1A1A] text-[#A2A2A2]  pt-[0.1em] pr-2 pl-2 text-[0.75rem] font-medium max-h-[31px] mr-[0.5em]">Gaming 12%</div>
             <div className="h-[28%] rounded-[2.5rem] border border-[#1A1A1A] text-[#A2A2A2]  pt-[0.1em] pr-2 pl-2 text-[0.75rem] font-medium max-h-[31px] mr-[0.5em]">PFP 12%</div>
             <div className="h-[28%] rounded-[2.5rem] border border-[#1A1A1A] text-[#A2A2A2]  pt-[0.1em] pr-2 pl-2 text-[0.75rem] font-medium max-h-[31px] mr-[0.5em]">ens 12%</div>
            </div>
            <div className="profile-6 h-[6.8%]">
                <button className="profile-6-btn h-100 w-[89%] border border-[white] rounded-3xl text-[white] text-[0.875rem] font-normal ">
                    Subscribe &gt;&gt;
                </button>
            </div>
        </div>
    )
}