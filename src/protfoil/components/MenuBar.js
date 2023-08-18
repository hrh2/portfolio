import React from 'react'
import {FaHome,FaUser,FaInbox} from 'react-icons/fa'
import { AiFillProject } from 'react-icons/ai'
import { FcServices } from 'react-icons/fc'
import './Contact.css'

export default function MenuBar() {
  return (
    <div className=' fixed top-[90%] left-[17%] md:left-[34.5%] mx-auto   grid grid-cols-5 p-3  rounded-2xl bg-blue-600 gap-4 w-4/6 md:w-1/4 z-10'>
        <a className='w-4/5  m-auto ' href='/' ><FaUser size={"2em"} className='nav-links'/></a>
        <a className='w-4/5  m-auto ' href='/' ><FaHome size={"2em"} className='nav-links'/></a>
        <a className='w-4/5  m-auto ' href='/' ><FcServices size={"2em"} className='nav-links'/></a>
        <a className='w-4/5  m-auto ' href='/' ><AiFillProject size={"2em"} className='nav-links'/></a>
        <a className='w-4/5  m-auto ' href='/' ><FaInbox size={"2em"} className='nav-links'/></a>
     </div>
  )
}
