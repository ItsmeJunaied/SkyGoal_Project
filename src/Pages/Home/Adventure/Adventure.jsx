import React from 'react';
import './Adventure.css';
import sampleImg1 from '../../../../public/images/sampleimg1.png';
const Adventure = () => {
    return (
        <div className='  lg:mx-[300px] '>
            <div className=' flex flex-col lg:flex-row justify-center lg:py-20 lg:mx-0 mx-[15px]'>
                {/* container1 */}

                <div data-aos="fade-right" className=' lg:w-1/2 w-full flex flex-col justify-center py-10 lg:py-36'>
                    <div className=' flex flex-row w-[360px] h-[120px] p-[25px] mt-[50px] rounded-[18px] box-with-shadow'>
                        <div className=' w-[150px] '>
                            <img className=' w-[80px] h-[80px] object-cover rounded-[50px]' src={sampleImg1} alt="" />
                        </div>
                        <div className=' '>
                            <h1 className="text-black text-lg  adventure_text mb-2 font-extrabold">Jenny Wilson</h1>
                            <p className=" w-[220px] text-black text-base adventure_text leading-snug tracking-wide ">Lorem ipsum dolor sit amet, consectetur adipiscing...</p>
                        </div>
                    </div>

                   
                    <div className=' flex flex-row w-[360px] h-[120px] p-[25px] mt-[50px] rounded-[18px] box-with-shadow'>
                        <div className=' w-[150px] '>
                            <img className=' w-[80px] h-[80px] object-cover rounded-[50px]' src={sampleImg1} alt="" />
                        </div>
                        <div className=' '>
                            <h1 className="text-black text-lg  adventure_text mb-2 font-extrabold">Jenny Wilson</h1>
                            <p className=" w-[220px] text-black text-base adventure_text leading-snug tracking-wide ">Lorem ipsum dolor sit amet, consectetur adipiscing...</p>
                        </div>
                    </div>

                   
                    <div className=' flex flex-row w-[360px] h-[120px] p-[25px] mt-[50px] rounded-[18px] box-with-shadow'>
                        <div className=' w-[150px] '>
                            <img className=' w-[80px] h-[80px] object-cover rounded-[50px]' src={sampleImg1} alt="" />
                        </div>
                        <div className=' '>
                            <h1 className="text-black text-lg  adventure_text mb-2 font-extrabold">Jenny Wilson</h1>
                            <p className=" w-[220px] text-black text-base adventure_text leading-snug tracking-wide ">Lorem ipsum dolor sit amet, consectetur adipiscing...</p>
                        </div>
                    </div>

                   

                </div>

                {/* container2 */}
                <div data-aos="fade-left" className=' lg:w-1/2 '>

                    <div className=' flex justify-end lg:mx-[120px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="168" height="168" viewBox="0 0 168 168" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M84 168C130.392 168 168 130.392 168 84C168 37.6081 130.392 0 84 0C37.6081 0 0 37.6081 0 84C0 130.392 37.6081 168 84 168ZM84 130C109.405 130 130 109.405 130 84C130 58.5949 109.405 38 84 38C58.5949 38 38 58.5949 38 84C38 109.405 58.5949 130 84 130Z" fill="#87CC81" fill-opacity="0.2" />
                        </svg>
                    </div>

                    <div className=' flex flex-row'>
                        {/* container 1 */}
                        <div className=' w-fit '>
                            <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47" fill="none">
                                <path d="M0 46.5C0 40.3935 1.20276 34.3469 3.5396 28.7052C5.87645 23.0636 9.30161 17.9375 13.6195 13.6195C17.9375 9.30161 23.0636 5.87644 28.7052 3.5396C34.3469 1.20276 40.3935 -2.66922e-07 46.5 0L46.5 13.95C42.2255 13.95 37.9928 14.7919 34.0437 16.4277C30.0945 18.0635 26.5062 20.4611 23.4837 23.4837C20.4611 26.5062 18.0635 30.0945 16.4277 34.0437C14.7919 37.9928 13.95 42.2255 13.95 46.5H0Z" fill="#BE554B" />
                            </svg>
                        </div>

                        {/* container 2 */}
                        <div className='mt-12 lg:ml-10 ml-0'>
                            <div>
                                <div className='  flex flex-col justify-center w-full container mx-auto '>
                                    <div>
                                        <span className="text-black text-[40px] font-semibold font-['Inter']">Tropical Adventure<br /></span><span className="text-black text-3xl font-normal font-['Inter']">for Students.</span></div>
                                    <p className="text-black text-xl font-medium font-['Inter'] mb-[20px]">Student Tropical Vacation: Relax and Recharge</p>

                                    <li className="text-black text-base font-normal font-['Inter'] leading-loose">Lorem ipsum dolor sit amet</li>
                                    <li className="text-black text-base font-normal font-['Inter'] leading-loose">Massa quis natoque sit quam</li>
                                    <li className="text-black text-base font-normal font-['Inter'] leading-loose">Eros non pellentesque elit </li>
                                    <li className="text-black text-base font-normal font-['Inter'] leading-loose">tortor id euismod habitant</li>
                                    <li className="text-black text-base font-normal font-['Inter'] leading-loose">Sed suspendisse id in ultrices</li>

                                </div>

                                <div className=' flex justify-center lg:justify-start  mt-[60px] w-60 lg:w-full'>
                                    <button className="text-white text-base font-normal font-['Inter'] bg-[#F27A44] lg:px-[50px] px-[30px]  lg:py-[16px] py-[12px] rounded-[30px] lg:w-[165px] w-[150px]">SIGN UP</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Adventure;