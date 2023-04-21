import Image from 'next/image'
import { Inter } from 'next/font/google'
import Profile from '@/compnents/profile'
import Highlights from '@/compnents/highligths'
import Nfts from '@/compnents/nfts'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <div className="h-[100vh] flex items-center justify-center bg-[#1A1A1A]">
  <div className='h-80 w-[95%] flex justify-evenly '>
  <Profile/>
  <div className='h-[87%] w-[75%]  box-border flex flex-col justify-between bg-[#1A1A1A]'>
  <Highlights/>
  <Nfts/>
  </div>
  </div>
 </div>
  )
}
