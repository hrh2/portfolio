import React from 'react'
import './Services.css'
import { FaCheck} from 'react-icons/fa'

export default function Services() {
  return (
    <div className='text-white text-center'>
      <h5 className='text-white pt-14 opacity-80'>What I Offer</h5>
      <h2 className='text-blue-500 text-4xl pb-14 font-extrabold'>Services</h2>
      <div className='grid grid-cols-1 md:grid-cols-3  sm:grid-cols-2 lg:grid-cols-3 p-2 '>
        <div className='w-5/6 mx-auto relative pb-2 services_box h-auto hover:bg-blue-950 rounded-b-2xl'>
          <div className='w-full rounded-b-2xl  bg-blue-500 '>
            <h1 className='py-4'>UI/UX Design</h1>
          </div>
          <div className='services_item '>
            <p className='flex gap-3 px-7 py-3'><FaCheck size={"1.1em"}/>Design Principles </p>
            <p className='flex gap-3 px-7 py-3'><FaCheck size={"1.1em"} />WireFraming</p>
            <p className='flex gap-3 px-7 py-3'><FaCheck size={"1.1em"} /> Prototyping </p>
            <p className='flex gap-3 px-7 py-3'><FaCheck size={"1.1em"} /> Usability Testing </p>
            <p className='flex gap-3 px-7 py-3'><FaCheck size={"1.1em"} /> Design Tools</p>
            <p className='flex gap-3 px-7 py-3'><FaCheck size={"1.1em"} /> Design Thinking</p>
            <p className='flex gap-3 px-7 py-3'><FaCheck size={"1.1em"} /> Responsive Design </p>
            <p className='flex gap-3 px-7 py-3'><FaCheck size={"1.1em"} /> Accessibility </p>
            <p className='flex gap-3 px-7 py-3'><FaCheck size={"1.1em"} /> Visual Design </p>
            <p className='flex gap-3 px-7 py-3'><FaCheck size={"1.1em"} /> Information Architecture </p>
            <p className='flex gap-3 px-7 py-3'><FaCheck size={"1.1em"} /> Design Trends </p>
          </div>
        </div>
        <div className='w-5/6 mx-auto relative pb-2 services_box h-auto hover:bg-blue-950 rounded-b-2xl'>
          <div className='w-full rounded-b-2xl  bg-blue-500 '>
            <h1 className='py-4'>Web/Mobile Development</h1>
          </div>
          <div className='services_item '>
            <p className='flex gap-3 px-7 py-3'><FaCheck size={"1.1em"} /> Frontend Development </p>
            <p className='flex gap-3 px-7 py-3'><FaCheck size={"1.1em"} /> Backend Development </p>
            <p className='flex gap-3 px-7 py-3'><FaCheck size={"1.1em"} /> Full-stack Development </p>
            <p className='flex gap-3 px-7 py-3'><FaCheck size={"1.1em"} /> Mobile App Development</p>
            <p className='flex gap-3 px-7 py-3'><FaCheck size={"1.1em"} /> Database Management </p>
            <p className='flex gap-3 px-7 py-3'><FaCheck size={"1.1em"} /> Web APIs </p>
            <p className='flex gap-3 px-7 py-3'><FaCheck size={"1.1em"} /> Authentication and Authorization</p>
            <p className='flex gap-3 px-7 py-3'><FaCheck size={"1.1em"} /> Deployment and Hosting </p>
            <p className='flex gap-3 px-7 py-3'><FaCheck size={"1.1em"} /> Performance Optimization </p>
            <p className='flex gap-3 px-7 py-3'><FaCheck size={"1.1em"} /> Testing and Debugging </p>
            <p className='flex gap-3 px-7 py-3'><FaCheck size={"1.1em"} /> Version Control (Git) </p>
            <p className='flex gap-3 px-7 py-3'><FaCheck size={"1.1em"} /> Security Best Practices </p>
            <p className='flex gap-3 px-7 py-3'><FaCheck size={"1.1em"} /> Web/Mobile Design Integration </p>
            <p className='flex gap-3 px-7 py-3'><FaCheck size={"1.1em"} /> Progressive Web Apps (PWAs) </p>
            <p className='flex gap-3 px-7 py-3'><FaCheck size={"1.1em"} /> Hybrid App Development </p>
          </div>
        </div>
        <div className='w-5/6 mx-auto relative pb-2 services_box h-auto hover:bg-blue-950 rounded-b-2xl'>
          <div className='w-full rounded-b-2xl  bg-blue-500 '>
            <h1 className='py-4'>Content Creation</h1>
          </div>
          <div className='services_item '>
            <p className='flex gap-3 px-7 py-3'><FaCheck size={"1.1em"} /> Email Newsletters </p>
            <p className='flex gap-3 px-7 py-3'><FaCheck size={"1.1em"} /> Production Description </p>
            <p className='flex gap-3 px-7 py-3'><FaCheck size={"1.1em"} /> Content Editing and Proofreading </p>
            <p className='flex gap-3 px-7 py-3'><FaCheck size={"1.1em"} /> SEO Content Writing </p>
            <p className='flex gap-3 px-7 py-3'><FaCheck size={"1.1em"} /> Content Strategy </p>
            <p className='flex gap-3 px-7 py-3'><FaCheck size={"1.1em"} /> Content Ideation </p>
            <p className='flex gap-3 px-7 py-3'><FaCheck size={"1.1em"} /> Content Promotion </p>
            <p className='flex gap-3 px-7 py-3'><FaCheck size={"1.1em"} /> Content Curation </p>
            <p className='flex gap-3 px-7 py-3'><FaCheck size={"1.1em"} /> Infographics and Visual Content  </p>
            <p className='flex gap-3 px-7 py-3'><FaCheck size={"1.1em"} /> Podcast Scripts </p>
          </div>
        </div>
      </div>
    </div>
  )
}
