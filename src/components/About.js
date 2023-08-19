import React from 'react'
import { FaUserFriends,FaProjectDiagram } from 'react-icons/fa'
import { MdWork } from 'react-icons/md'
import Image from '../assets/image1.png'
import '../animations/alter.css'
import'../animations/border.css'
export default function About() {
  return (
    <div id='about' className='h-[auto] vw-10 mt-20'>
         <h1 className='text-blue-500 text-center py-5 text-4xl font-extrabold'>About Me</h1> 
         <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-2 '>
          <div className='p-3 relative min-h-[22em]'>
               <div 
                           className='w-[20em] h-[20em] aspect-ratio z-0 sm:w-3/4 relative  bg-blue-950 bg-cover bg-center rounded-2xl containers'
               style={{
                    backgroundImage: `url(${Image})`,
                }}
               >   
               </div>
          </div>
          <div className='gird grid-rows-3 px-6 text-white'>
          <div className='w-full relative py-3 grid gap-4 md:grid-cols-3 sm:grid-cols-2 '>
               <div className='rounded-lg py-2 relative flex md:aspect-square mx-auto w-5/6 min-h-[10rem] box-container justify-center items-center text-center'>
                    <div className='inner-box w-[99%] h-[99%] bg-blue-950'>
                         <MdWork size={"2em"} className='text-blue-600 mx-auto my-2' />
                         <h2 className='mt-8 font-bold'>Experience</h2>
                         <p className='my-3'>1+years working</p>
                    </div>
               </div>
               <div className='rounded-lg py-2 relative flex md:aspect-square mx-auto w-5/6 min-h-[10rem] box-container justify-center items-center text-center'>
                    <div className='inner-box w-[99%] h-[99%] bg-blue-950'>
                         <FaUserFriends size={"2em"} className='text-blue-600 mx-auto my-2' />
                         <h2 className='mt-8 font-bold'>Clients</h2>
                         <p className='my-3'>5 worldwide</p>
                    </div>
               </div>
               <div className='rounded-lg py-2 relative flex md:aspect-square mx-auto w-5/6 min-h-[10rem] box-container justify-center items-center text-center'>
                    <div className='inner-box w-[99%] h-[99%] bg-blue-950'>
                         <FaProjectDiagram size={"2em"} className='text-blue-600 mx-auto my-2' />
                         <h2 className='mt-8 font-bold'>Projects</h2>
                         <p className='my-3'>9+completed</p>
                    </div>
               </div>
          </div>
          <div className='pb-4'>
          <p className='py-3 '>
               I am a motivated and results-oriented 
               professional with one year of experience in 
               providing quality services to clients. I have 
               successfully completed nine projects in various domains, 
               such as web development, graphic design, and content writing. 
               I have a strong work ethic, excellent communication skills, 
               and a passion for learning new things. I enjoy working in a 
               team as well as independently, and I always strive to exceed the expectations of my clients.
          </p> 
          <a href='#contact' className='p-3  rounded-xl bg-blue-500' >Let's Talk</a>
          </div>
          </div>
         </div>
    </div>
  )
}
