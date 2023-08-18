import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import { AiFillMessage } from 'react-icons/ai'
export default function Contanct() {
  return (
    <section id='contact' className='text-center'>
     <h5 className='text-white pt-14 opacity-80'>Get In Touch</h5>
     <h2 className='text-blue-500 text-4xl pb-14 font-extrabold'>Contact Me</h2>
     <div className='container contact_container w-full mx-auto grid md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-4 '>
          <div className='contact_options flex flex-col gap-5 mx-auto py-2'>
               <article className='contact_option rounded-lg px-20 w-full h-[10em] bg-blue-500'>
                    <MdOutlineEmail className='mx-auto' size={"2em"}/>
                    <h4>Email</h4>
                    <h5>gakundohope5@gmail.com</h5>
                    <a href='mail:gakundohope5@gmail.com' target='blank'>Send a message</a>
               </article>
               <article className='contact_option rounded-lg px-20 w-full h-[10em] bg-blue-500'>
                    <BsWhatsapp className='mx-auto' size={"2em"}/>
                    <h4>WhatsApp</h4>
                    <h5>+250 794 976 100</h5>
                    <a href='mail:gakundohope5@gmail.com' target='blank'>Send a message</a>
               </article>
               <article className='contact_option rounded-lg px-20 w-full h-[10em] bg-blue-500'>
                    <AiFillMessage className='mx-auto' size={"2em"}/>
                    <h4>Messanger</h4>
                    <h5>Hirwa Hope</h5>
                    <a href='mail:gakundohope5@gmail.com' target='blank'>Send a message</a>
               </article>
          </div>
          <div>
          <form action='' className='flex flex-col gap-5 mx-auto w-2/3'>
               <input type ='text' name='name' placeholder='your full Name ' className=' sm:p-3 md:p-6' required/>
               <input type='email' name='email' placeholder='Your email address' className=' sm:p-3 md:p-6' required/>
               <textarea name='message' rows="7" placeholder='Your Message' className=' sm:p-3 md:p-6' required></textarea>
                <button type='submit' className='p-2 my-2 bg-blue-500 sm:w-full md:w-1/2 rounded-md md:p-6'>Send message</button>
          </form>
          </div>
     </div>
    </section>
  )
}
