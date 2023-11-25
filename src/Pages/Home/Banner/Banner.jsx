import React from 'react';
import bannerImg from '../../../../public/images/bannerimg.png';
import elipsImg from '../../../../public/images/Ellipse 46.svg';

const Banner = () => {
    return (
        <div className=' w-full  bg-[#F8F1D340] '>
            <div data-aos="fade-right" className=' flex flex-col-reverse lg:flex-row  lg:container xl:container xl:mx-auto lg:mx-auto lg:px-0 px-[30px] lg:py-[200px] py-[30px] w-full'>

                <div className=' flex flex-col  lg:w-1/2 gap-2 lg:gap-0'>
                    <div className=' lg:h-[100px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                            <path d="M0 64C0 55.5954 1.65541 47.2731 4.87171 39.5083C8.08801 31.7434 12.8022 24.6881 18.7452 18.7452C24.6881 12.8022 31.7434 8.08801 39.5083 4.87171C47.2731 1.65541 55.5954 -3.67377e-07 64 0V19.2C58.1168 19.2 52.2912 20.3588 46.8558 22.6102C41.4204 24.8616 36.4817 28.1616 32.3216 32.3216C28.1616 36.4817 24.8616 41.4204 22.6102 46.8558C20.3588 52.2912 19.2 58.1168 19.2 64H0Z" fill="#BE554B" />
                        </svg>
                    </div>

                    <h1 className="text-neutral-800 text-md lg:text-xl font-semibold font-['Inter']">Discover the beauty of the tropics</h1>
                    <h1 className=' lg:w-[522px] w-[200px] text-[#1F2027] font-poppins text-[35px] lg:text-[85px] lg:leading-[100px]'>
                        <span className='font-bold'>Tropical Destinations</span> For Student
                    </h1>

                    <p className="text-zinc-600 text-base font-normal font-['Inter'] lg:w-[636px] py-[15px] lg:py-[30px]">Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum integer rutrum nisi. A nec nisl vitae </p>

                    <div className=' flex justify-center lg:justify-start'>
                        <button className="text-white text-base font-normal font-['Inter'] bg-[#F27A44] lg:px-[50px] px-[30px]  lg:py-[16px] py-[12px] rounded-[30px] lg:w-[165px] w-[150px]">SIGN UP</button>
                    </div>
                </div>

                <div data-aos="fade-left" className=' lg:w-1/2 flex justify-center align-top items-start '>
                    <img className=' lg:h-[650px] lg:w-[600px] w-[250px]  ' src={bannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;