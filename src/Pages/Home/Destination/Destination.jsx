import React from 'react';
import './Destination.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import cardimg1 from '../../../../public/images/card-image.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
const Destination = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    return (
        <div className=' lg:container lg:mx-auto mx-[20px] lg:py-0 py-10'>

            <div><p class="text-black text-4xl font-medium font-['Inter'] mb-[60px]">Our Destinations</p></div>
            <Slider {...settings}>
                <div>
                    <div className=' lg:lg:w-[360px] w-[340px]  shadow-lg'>
                        <div>
                            <div className=' '>
                                <img className=' w-full h-[367px] object-cover rounded-[18px]' src={cardimg1} alt="" />
                            </div>
                        </div>

                        <div className=''>
                            <h1 className="p-[25px] text-black text-3xl font-black font-['Roboto']">Harvard University</h1>
                        </div>

                        <div className=' flex flex-row justify-between p-[25px] align-middle items-center'>
                            <p className="text-black text-sm font-medium font-['Roboto']">Cambridge, Massachusetts, UK</p>
                            <div class="w-12 h-12 p-2.5 bg-zinc-100 rounded-3xl justify-center items-center gap-1 inline-flex"><FontAwesomeIcon icon={faEllipsis} /></div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className=' lg:w-[360px] w-[340px] shadow-lg'>
                        <div>
                            <div className=' '>
                                <img className=' w-full h-[367px] object-cover rounded-[18px]' src={cardimg1} alt="" />
                            </div>
                        </div>

                        <div className=''>
                            <h1 className="p-[25px] text-black text-center lg:text-start  text-3xl font-black font-['Roboto']">Harvard University</h1>
                        </div>

                        <div className=' flex flex-row justify-between p-[25px] align-middle items-center'>
                            <p className="text-black text-sm font-medium font-['Roboto']">Cambridge, Massachusetts, UK</p>
                            <div class="w-12 h-12 p-2.5 bg-zinc-100 rounded-3xl justify-center items-center gap-1 inline-flex"><FontAwesomeIcon icon={faEllipsis} /></div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className=' lg:w-[360px] w-[340px] shadow-lg'>
                        <div>
                            <div className=' '>
                                <img className=' w-full h-[367px] object-cover rounded-[18px]' src={cardimg1} alt="" />
                            </div>
                        </div>

                        <div className=''>
                            <h1 className="p-[25px] text-black text-3xl font-black font-['Roboto']">Harvard University</h1>
                        </div>

                        <div className=' flex flex-row justify-between p-[25px] align-middle items-center'>
                            <p className="text-black text-sm font-medium font-['Roboto']">Cambridge, Massachusetts, UK</p>
                            <div class="w-12 h-12 p-2.5 bg-zinc-100 rounded-3xl justify-center items-center gap-1 inline-flex"><FontAwesomeIcon icon={faEllipsis} /></div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className=' lg:w-[360px] w-[340px] shadow-lg'>
                        <div>
                            <div className=' '>
                                <img className=' w-full h-[367px] object-cover rounded-[18px]' src={cardimg1} alt="" />
                            </div>
                        </div>

                        <div className=''>
                            <h1 className="p-[25px] text-black text-3xl font-black font-['Roboto']">Harvard University</h1>
                        </div>

                        <div className=' flex flex-row justify-between p-[25px] align-middle items-center'>
                            <p className="text-black text-sm font-medium font-['Roboto']">Cambridge, Massachusetts, UK</p>
                            <div class="w-12 h-12 p-2.5 bg-zinc-100 rounded-3xl justify-center items-center gap-1 inline-flex"><FontAwesomeIcon icon={faEllipsis} /></div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className=' lg:w-[360px] w-[340px] shadow-lg'>
                        <div>
                            <div className=' '>
                                <img className=' w-full h-[367px] object-cover rounded-[18px]' src={cardimg1} alt="" />
                            </div>
                        </div>

                        <div className=''>
                            <h1 className="p-[25px] text-black text-3xl font-black font-['Roboto']">Harvard University</h1>
                        </div>

                        <div className=' flex flex-row justify-between p-[25px] align-middle items-center'>
                            <p className="text-black text-sm font-medium font-['Roboto']">Cambridge, Massachusetts, UK</p>
                            <div class="w-12 h-12 p-2.5 bg-zinc-100 rounded-3xl justify-center items-center gap-1 inline-flex"><FontAwesomeIcon icon={faEllipsis} /></div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className=' lg:w-[360px] w-[340px] shadow-lg'>
                        <div>
                            <div className=' '>
                                <img className=' w-full h-[367px] object-cover rounded-[18px]' src={cardimg1} alt="" />
                            </div>
                        </div>

                        <div className=''>
                            <h1 className="p-[25px] text-black text-3xl font-black font-['Roboto']">Harvard University</h1>
                        </div>

                        <div className=' flex flex-row justify-between p-[25px] align-middle items-center'>
                            <p className="text-black text-sm font-medium font-['Roboto']">Cambridge, Massachusetts, UK</p>
                            <button class="w-12 h-12 p-2.5 bg-zinc-100 rounded-3xl justify-center items-center gap-1 inline-flex"><FontAwesomeIcon icon={faEllipsis} /></button>
                        </div>
                    </div>
                </div>
            </Slider>

        </div>
    );
};

export default Destination;