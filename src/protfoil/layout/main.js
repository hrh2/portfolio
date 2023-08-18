import React from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Contact from '../components/Contact'
import Testmony from '../components/Testmony'
import Footer from '../components/Footer'
import Experience from '../components/Experience'
import Services from '../components/Services'
import Projects from '../components/Projects'
import MostlyUse from '../components/MostlyUse'
import MenuBar from '../components/MenuBar'

export default function main() {
  return (
    <div className='bg-gradient-to-b max-w-full  p-0 from-purple-600 to-blue-950 to-black'>
      <MenuBar/>
      <div className=''> 
        <Header />
        <About />
        <Experience />
        <MostlyUse />
        <Projects />
        <Services />
        {/* <Testmony/> */}
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
