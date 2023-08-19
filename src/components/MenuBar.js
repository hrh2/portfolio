import React from 'react'
import {ImProfile} from 'react-icons/im'
import { RxDashboard } from 'react-icons/rx'
import { FcHome,FcServices } from 'react-icons/fc'
import {TbMessageCircle2Filled} from 'react-icons/tb'
import './Contact.css'

export default function MenuBar() {
  return (
    <div className=' fixed top-[90%] left-[17%] md:left-[37.3%] mx-auto  text-yellow-500  grid grid-cols-5 p-3  rounded-2xl bg-purple-950 gap-4 w-4/6 md:w-1/4 z-10'>
        <a className='w-4/5  m-auto ' href='#about' ><ImProfile size={"2em"} className='nav-links'/></a>
        <a className='w-4/5  m-auto ' href='#hrh' ><FcHome size={"2em"} className='nav-links'/></a>
        <a className='w-4/5  m-auto ' href='#services' ><FcServices size={"2em"} className='nav-links'/></a>
        <a className='w-4/5  m-auto ' href='#portfolio' ><RxDashboard size={"2em"} className='nav-links'/></a>
        <a className='w-4/5  m-auto ' href='#contact' ><TbMessageCircle2Filled size={"2em"} className='nav-links'/></a>
     </div>
  )
}
