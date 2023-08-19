import React from 'react'
export default function ProjectItem(props) {
  return (
      <div className='w-5/6 mx-auto round bg-blue-950 p-2 rounded-xl'>
          <div
              style={{
                  backgroundImage: `url(${props.image})`,
              }}
              className='bg-cover aspect-ratio min-h-[18em] rounded-lg bg-center'
          >
          </div>
          <div className='text-center'>
              <h1 className='text-2xl font-extrabold'>{props.name}</h1>
              <div className='px-2 py-2 grid grid-cols-2'>
                  <a href={props.gitLink} className='p-2 rounded-lg'>Github</a>
                  <a href={props.linkUrl} className='p-2 bg-blue-500 rounded-lg'>{props.linkname2}</a>
              </div>
          </div>
      </div>
  )
}
