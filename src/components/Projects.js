import React from 'react'
import ProjectItem from './ProjectItem'
import img1 from '../assets/Pastedimage.jpg'
import img2 from '../assets/react.jpeg'
import img3 from '../assets/backend.jpg'
import img4 from '../assets/Fox.jpg'

const projects=[
  {
    id:"1",
    name:"Html Dashboard",
    image:img1,
    linkUrl:"https://admin-dashboard-hrh.netlify.app/",
    gitLink:"https://github.com/hrh2/admin_dash_html_js_css",
    linkname2:"Live Demo"
  },
  {
    id:"2",
    name:"React Dashboard",
    image:img2,
    linkUrl:"https://hrh-react-admin-dashboard.netlify.app/",
    gitLink:"https://github.com/hrh2/dashboard_react",
    linkname2:"Live Demo",
  },
  {
    id:"3",
    name:"Backend APIs ExpressJs",
    image:img3,
    linkUrl:"https://app.swaggerhub.com/apis/GAKUNDOHOPE5/your-api/1.1.0",
    gitLink:"https://github.com/hrh2/backend_express",
    linkname2:"Swagger"
  },
  {
    id:"4",
    name:"Dashboard Design",
    image:img4,
    linkUrl:"https://admin-dashboard-hrh.netlify.app/",
    gitLink:"https://dribbble.com/shots/22311901-dashboard?added_first_shot=true",
    linkname2:"Dribble"
  },

]

export default function Projects() {
  return (
    <div id='portfolio' className='text-white text-center py-5'>
        <h5 className='text-white pt-14 opacity-80'>My Recently Work</h5>
        <h2 className='text-blue-500 text-4xl pb-14 font-extrabold'>Portfolio</h2>
        <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4'>
          {projects.map(({id,image,linkUrl,gitLink,linkname2,name})=>(
            <ProjectItem name={name} image={image} linkUrl={linkUrl} gitLink={gitLink} linkname2={linkname2}/>
          ))}
        </div>
    </div>
  )
}
