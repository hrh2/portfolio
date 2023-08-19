import React from 'react';
import '../animations/NeonLight.css';
import '../animations/Text3D.css';
import '../animations/metal.css';
import { FiGithub, FiLinkedin, FiDribbble } from 'react-icons/fi';
import '../animations/CardFlip.css';

export default function Header() {
  return (
    <div id='hrh' className='grid grid-cols-1 md:grid-cols-2 p-2 text-white text-center w-[100vw]'>
      <div className='relative'>
        <p className='neon text-3xl md:text-5xl p-4 ' data-text="Hello I 'm" >Hello I 'm </p>
        <h1 className=' md:text-6xl font-extrabold text-left md:w-3/4 mx-auto py-3 text-2xl absolute md:top-[30%] top-[70%] left-14  text'>
          HIRWA Rukundo Hope
        </h1>
        <div className='relative'>
          <h1 className="metalHeader w-full text-xs md:text-xl absolute md:left-[15%] md:top-[8rem] top-16">
            <span className='absolute top-[30%]'>FullStack Developer</span>
            <span className=' absolute top-[30%]'>FullStack Developer</span>
          </h1>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className='md:w-4/6 mx-auto'>
          <div className='cardBox'>
            <div className='card relative aspect-square rounded-full'>
              <div className='card-front aspect-square bg-cover bg-center rounded-full'>
              </div>
              <div className='card-back aspect-square bg-cover bg-center rounded-lg'>
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-rows-3 md:px-8 py-3 px-4 gap-4 font-extrabold md:text-center'>
          <a href='/https://github.com/hrh2' className='md:ml-auto'><FiGithub size={"2rem"} /></a>
          <a href='/https://www.linkedin.com/in/hirwa-hope-114153265/' className='md:ml-auto'><FiLinkedin size={"2rem"} /></a>
          <a href='/https://dribbble.com/hirwa22' className='md:ml-auto'><FiDribbble size={"2rem"} /></a>
        </div>
      </div>
    </div>
  );
}
