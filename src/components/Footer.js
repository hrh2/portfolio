import React from 'react'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

export default function Footer() {
  return (
       <footer id='services' className='text-center py-3 bg-blue-500'>
     <a href='#hrh' className='py-3 font-extrabold text-2xl'>HRH</a>
     <ul className=' lg:flex md:flex  grid grid-cols-2 mx-auto py-4 font-bold text-xl md:w-[45rem]'>
          <li className='p-3 w-full text-center '><a href='/#'>Home</a></li>
          <li className='p-3'><a href='#about'>About</a></li>
          <li className='p-3'><a href='#experience'>Experience</a></li>
          <li className='p-3'><a href='#services'>Services</a></li>
          <li className='p-3'><a href='#portfolio'>PortFolio</a></li>
          <li className='p-3'><a href='#testimonial'>Testimonials</a></li>
          <li className='p-3 col-span-2'><a href='#contact'>contact</a></li>
     </ul>
     <div className='flex gap-2 justify-center mx-auto md:w-1/4 sm:2/5 w-4/5  text-white py-2 pb-20'>
          <a href='https://www.facebook.com/hirwa.hope.9/' className='bg-slate-950 rounded-lg p-1'><FaFacebookF size={"2em"} className=''/></a>
          <a href='https://www.instagram.com/__.hirwa.__2/' className='bg-slate-950 rounded-lg p-1'><FiInstagram size={"2em"}/></a>
          <a href='https://twitter.com/hirwa_2' className='bg-slate-950 rounded-lg  p-1'> <IoLogoTwitter size={"2em"}/></a>
     </div>
     <div className=' items-center text-center'>
          <small>
                     Hirwa Rukundo Hope  &copy; 2023
          </small>
     </div>
    </footer>
  )
}
