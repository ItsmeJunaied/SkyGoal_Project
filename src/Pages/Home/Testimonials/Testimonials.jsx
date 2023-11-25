import React from 'react';
import img1 from '../../../../public/images/testimonial_img1.png';
import img2 from '../../../../public/images/testimonial_img2.png';
import img3 from '../../../../public/images/testimonial_img3.png';
const Testimonials = () => {
    return (
        <div className=' lg:mt-[220px] mt-[100px]'>
            <h1 className="text-center text-black font-bold text-[40px] font-['Inter']">Testimonials</h1>

            <div className=' flex lg:flex-row flex-col lg:justify-evenly justify-center align-middle items-center lg:mt-[70px] mt-[60px] lg:gap-0 gap-10'>
                <div
                    data-aos="fade-right"
                    className="w-72 h-72 bg-white flex-col justify-center items-center gap-4 inline-flex">
                    <div className="justify-center items-center gap-4 inline-flex">
                        <div className="w-24 h-24 justify-center items-center flex">
                            <img className="w-24 h-24 rounded-full object-cover" src={img1} />
                        </div>
                    </div>

                    <div className="text-center text-zinc-800 text-base font-normal font-['Inter'] leading-snug">Corey Korsgaard</div>

                    <div className='flex justify-center'>
                        <div className='divider w-[126px] h-[1px] bg-[#A0CD9E]'></div>
                    </div>

                    <div className="h-28 py-4 flex-col justify-center items-center gap-4 flex">
                        <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                            <div className="grow shrink basis-0 text-center text-zinc-800 text-base font-normal font-['Inter'] leading-snug">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                        </div>
                    </div>
                </div>

                <div className="w-72 h-72 bg-white flex-col justify-center items-center gap-4 inline-flex">
                    <div className="justify-center items-center gap-4 inline-flex">
                        <div className="w-24 h-24 justify-center items-center flex">
                            <img className="w-24 h-24 rounded-full object-cover" src={img2} />
                        </div>
                    </div>

                    <div className="text-center text-zinc-800 text-base font-normal font-['Inter'] leading-snug">Corey Korsgaard</div>

                    <div className='flex justify-center'>
                        <div className='divider w-[126px] h-[1px] bg-[#A0CD9E]'></div>
                    </div>

                    <div className="h-28 py-4 flex-col justify-center items-center gap-4 flex">
                        <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                            <div className="grow shrink basis-0 text-center text-zinc-800 text-base font-normal font-['Inter'] leading-snug">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                        </div>
                    </div>
                </div>

                <div
                    data-aos="fade-left"
                    className="w-72 h-72 bg-white flex-col justify-center items-center gap-4 inline-flex">
                    <div className="justify-center items-center gap-4 inline-flex">
                        <div className="w-24 h-24 justify-center items-center flex">
                            <img className="w-24 h-24 rounded-full object-cover" src={img3} />
                        </div>
                    </div>

                    <div className="text-center text-zinc-800 text-base font-normal font-['Inter'] leading-snug">Corey Korsgaard</div>

                    <div className='flex justify-center'>
                        <div className='divider w-[126px] h-[1px] bg-[#A0CD9E]'></div>
                    </div>

                    <div className="h-28 py-4 flex-col justify-center items-center gap-4 flex">
                        <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                            <div className="grow shrink basis-0 text-center text-zinc-800 text-base font-normal font-['Inter'] leading-snug">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Testimonials;