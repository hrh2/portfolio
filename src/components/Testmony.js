import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import img1 from "../assets/test3.png";
import img2 from "../assets/test1.jpeg"
import img3 from "../assets/test2.jpeg";
import './testmoy.css'; // Make sure the filename matches


const data = [
    {
        id:1,
        avatar: img2,
        name: 'Raymond Terrence',
        review: `Absolutely blown away by the e-commerce website you've created! The user interface is sleek and intuitive, making shopping a breeze. I'm impressed by how seamlessly the graphic design elements integrate, giving the website a modern and professional look. The integration of various web APIs has taken the functionality to a whole new level. From seamless payment processing to real-time inventory updates, everything works like a charm. Kudos to your team for delivering a top-notch project that exceeds expectations!`
    },
    {
        id:2,
        avatar: img1,
        name: 'Riley Charile',
        review: `I couldn't be happier with the e-commerce website you've designed and developed. The attention to detail in the graphic design is evident, creating a visually appealing and cohesive brand identity. The way you've harnessed the power of web APIs is truly impressive; the site's responsiveness and smooth navigation showcase a seamless integration. The checkout process, powered by the APIs, is a joy to use. It's evident that your team's expertise has resulted in a high-quality, professional project that will undoubtedly drive online business growth."`
    },
    {
        id:2,
        avatar: img3,
        name: 'Altamasi Yassine',
        review: `⭐️⭐️⭐️⭐️⭐️ Standing ovation for the exceptional work you've put into our e-commerce project! The graphic design is a true work of art, capturing our brand's essence perfectly. The way you've harnessed various web APIs has elevated the user experience significantly. From dynamic product recommendations to real-time shipping updates, the functionality is cutting-edge and user-friendly. Your team's dedication to crafting a seamless and visually appealing website shines through every detail. I am beyond satisfied with the end result and am confident that this project will propel our online presence to new heights.`
    },
    // ... (other data entries)
];

export default function Testmony() {
    return (
        <section id='testimonials' className='text-white text-center md:w-[60rem!important] mx-auto'>
            <h5 className='text-white pt-14 opacity-80'>Review from clients</h5>
            <h2 className='text-blue-500 text-4xl pb-14 font-extrabold'>Testimonials</h2>
            <Swiper
                className='container testimonials_container mx-auto '
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {data.map(({ id,avatar, name, review }, index) => (
                    <SwiperSlide key={id} className='testimonial bg-blue-500 p-2 rounded-2xl grid grid-flow-row'>
                        <div className='w-[4rem] aspect-square rounded-[50%] mx-auto border-white border bg-cover bg-center' style={{backgroundImage:`url(${avatar})`}}></div>
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
