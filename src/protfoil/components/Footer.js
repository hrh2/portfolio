import React from 'react'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

export default function Footer() {
  return (
       <footer className='text-center py-3 bg-blue-500'>
     <a href='/#' className='py-3 font-extrabold text-2xl'>HRH</a>
     <ul className=' lg:flex md:flex  grid grid-cols-2 mx-auto py-4 font-bold text-xl md:w-[45rem]'>
          <li className='p-3 w-full text-center '><a href='/#'>Home</a></li>
          <li className='p-3'><a href='#about'>About</a></li>
          <li className='p-3'><a href='#experience'>Experience</a></li>
          <li className='p-3'><a href='#services'>Services</a></li>
          <li className='p-3'><a href='#portfolio'>PortFolio</a></li>
          <li className='p-3'><a href='#testimonial'>Testimonials</a></li>
          <li className='p-3 col-span-2'><a href='#contact'>contact</a></li>
     </ul>
     <div className='grid grid-cols-3 w-1/4 mx-auto text-white py-2'>
          <a href='https://facebook.com' className='bg-slate-950 rounded-lg w-10 h-10 p-1'><FaFacebookF size={"2em"}/></a>
          <a href='https://instagram.com' className='bg-slate-950 rounded-lg w-10 h-10 p-1'><FiInstagram size={"2em"}/></a>
          <a href='https://twitter.com' className='bg-slate-950 rounded-lg w-10 h-10 p-1'> <IoLogoTwitter size={"2em"}/></a>
     </div>
     <div className=' items-center text-center'>
          <small>
                     Hirwa Rukundo Hope  &copy; 2023
          </small>
     </div>
    </footer>
  )
}
