import React from 'react'
import '../animations/Cube.css'
import Nodejs from '../assets/image14.png'
import Php from '../assets/image16.png'
import ReactImg from '../assets/image2.png'
import Python from '../assets/image18.png'
export default function MostlyUse() {
  return (
    <div className='cube_container relative'>
          <div className='cube aspect-square'>
              <div className='top aspect-square'></div>
              <div>
                  <div 
                      style={{
                          backgroundImage: `url(${Nodejs})`,
                      }}
                      className='bg-cover bg-center'
                  ></div>
                  <div
                      style={{
                          backgroundImage: `url(${Php})`,
                      }}
                      className='bg-center bg-contain bg-no-repeat'
                  ></div>
                  <div
                      style={{
                          backgroundImage: `url(${Python})`,
                      }}
                      className='bg-cover bg-center'
                  ></div>
                  <div
                      style={{
                          backgroundImage: `url(${ReactImg})`,
                      }}
                      className='bg-cover bg-center'
                  ></div>
              </div>
          </div>
    </div>
  )
}
