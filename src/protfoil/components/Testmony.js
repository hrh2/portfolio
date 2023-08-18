import React from 'react';
import image from "../assets/image1.png";
import './testmoy.css'; // Make sure the filename matches

import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        avatar: image,
        name: 'Tina Snow',
        review: 'lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet lore mauris   sed diam non pro id el met     else temp id elit lore mauris sed diam non pro id'
    },
    // ... (other data entries)
];

export default function Testmony() {
    return (
        <section id='Testimonials' className='text-white text-center'>
            <h5 className='text-white pt-14 opacity-80'>Review from clients</h5>
            <h2 className='text-blue-500 text-4xl pb-14 font-extrabold'>Testimonials</h2>
            <Swiper
                className='container testimonials_container'
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {data.map(({ avatar, name, review }, _) => (
                    <SwiperSlide key={name} className='testimonial bg-blue-500 p-2 rounded-2xl'>
                        <img src={avatar} className='client_avatar' alt='avatar' />
                        <h5 className='client_name text-center'>{name}</h5>
                        <small className='client_review'>
                            {review}
                        </small>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
