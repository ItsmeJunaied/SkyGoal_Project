import React from 'react';
import bannerImg from '../../../../public/images/sampleimg2.png';
const Discount = () => {
    return (
        <div className=' w-full '>
            <div className=' flex flex-col-reverse lg:flex-row  lg:container xl:container xl:mx-auto lg:mx-auto lg:px-0 px-[30px] lg:py-[200px] py-[30px] w-full'>

                <div data-aos="zoom-in" className=' lg:w-1/2 '>

                    <div  className=' flex lg:justify-center justify-end lg:mx-[120px] mt-10'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M29.5 59C45.7924 59 59 45.7924 59 29.5C59 13.2076 45.7924 0 29.5 0C13.2076 0 0 13.2076 0 29.5C0 45.7924 13.2076 59 29.5 59ZM29.5 45.6548C38.422 45.6548 45.6548 38.422 45.6548 29.5C45.6548 20.578 38.422 13.3452 29.5 13.3452C20.578 13.3452 13.3452 20.578 13.3452 29.5C13.3452 38.422 20.578 45.6548 29.5 45.6548Z" fill="#F8E27E" fill-opacity="0.25" />
                        </svg>
                    </div>

                    <div  className=' flex flex-row'>
                        {/* container 1 */}
                        <div className=' w-fit '>
                            <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47" fill="none">
                                <path d="M0 46.5C0 40.3935 1.20276 34.3469 3.5396 28.7052C5.87645 23.0636 9.30161 17.9375 13.6195 13.6195C17.9375 9.30161 23.0636 5.87644 28.7052 3.5396C34.3469 1.20276 40.3935 -2.66922e-07 46.5 0L46.5 13.95C42.2255 13.95 37.9928 14.7919 34.0437 16.4277C30.0945 18.0635 26.5062 20.4611 23.4837 23.4837C20.4611 26.5062 18.0635 30.0945 16.4277 34.0437C14.7919 37.9928 13.95 42.2255 13.95 46.5H0Z" fill="#BE554B" />
                            </svg>
                        </div>

                        {/* container 2 */}
                        <div className='mt-12  '>
                            <div>
                                <div className='  flex flex-col justify-center w-full container mx-auto '>
                                    <div>
                                        <h1 className="text-neutral-800 text-md lg:text-xl font-semibold font-['Inter']">Get 20% off for student</h1>
                                        <span className="text-black text-[40px] font-semibold font-['Inter']">Student discounts available.<br /></span><span className="text-black text-3xl font-normal font-['Inter']">Get ready for some fun in the sun!</span>
                                    </div>
                                    

                                    <li className="text-black text-base font-normal font-['Inter'] leading-loose">Lorem ipsum dolor sit amet</li>
                                    <li className="text-black text-base font-normal font-['Inter'] leading-loose">Massa quis natoque sit quam</li>
                                    <li className="text-black text-base font-normal font-['Inter'] leading-loose">Eros non pellentesque elit </li>
                                    <li className="text-black text-base font-normal font-['Inter'] leading-loose">tortor id euismod habitant</li>
                                    <li className="text-black text-base font-normal font-['Inter'] leading-loose">Sed suspendisse id in ultrices</li>

                                </div>

                                <div className=' flex justify-center lg:justify-start  mt-[60px] w-60 lg:w-full'>
                                    <button className="text-white text-base lg:text-[16px] text-[12px] font-normal font-['Inter'] bg-[#F27A44] lg:px-[40px] px-[30px]  lg:py-[16px] py-[12px] rounded-[30px] lg:w-[180px] w-[180px]">Explore More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div data-aos="zoom-in-up" className=' lg:w-1/2 flex justify-center align-top items-start '>
                    <img className=' lg:h-[700px] lg:w-[600px]  ' src={bannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Discount;