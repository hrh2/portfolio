import React from 'react'
import ProjectItem from './ProjectItem'
import img1 from '../assets/image2.png'

export default function Projects() {
  return (
    <div className='text-white text-center py-5'>
        <h5 className='text-white pt-14 opacity-80'>My Recently Work</h5>
        <h2 className='text-blue-500 text-4xl pb-14 font-extrabold'>Portfolio</h2>
        <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4'>
        <ProjectItem image={img1}/>
        <ProjectItem image={img1} />
        <ProjectItem image={img1} />
        <ProjectItem image={img1} />
        </div>
    </div>
  )
}
