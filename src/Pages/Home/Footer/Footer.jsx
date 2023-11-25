import React from 'react';

const Footer = () => {
    return (
        <div className=' lg:mt-[230px] mt-[120px] lg:mx-0 mx-10'>
            <h1 className="w-full text-center text-black lg:text-4xl text-3xl font-semibold font-['Inter']">
                Student Special: Discounted rates <br /> on tropical getaways!
            </h1>
            <p className="w-full text-center text-black font-normal text-[12px] lg:text-[16px] font-['Inter'] leading-snug mt-[32px] mb-[52px]">Let’s embody your beautiful ideas together, simplify the <br /> way you visualize your next big things.</p>

            <div className=' flex lg:flex-row flex-col lg:justify-center gap-[33px]'>
                <div className=' flex justify-between lg:gap-[46px] gap-2'>
                    <p className="text-zinc-800 text-base text-[10px] lg:text-[16px] font-['Inter']">Privacy Policy</p>
                    <p className="text-zinc-800 text-base text-[10px] lg:text-[16px] font-['Inter']">Terms of Use</p>
                    <p className="text-zinc-800 text-base text-[10px] lg:text-[16px] font-['Inter']">Sales and Refunds</p>
                    <p className="text-zinc-800 text-base text-[10px] lg:text-[16px] font-['Inter']">Legal</p>
                </div>

                <div className=' flex justify-between lg:gap-[46px] gap-2'>
                    <p className="text-zinc-800 text-base font-semibold text-[10px] lg:text-[16px] font-['Inter']">About</p>
                    <p className="text-zinc-800 text-base font-semibold text-[10px] lg:text-[16px] font-['Inter']">Schedules</p>
                    <p className="text-zinc-800 text-base font-semibold text-[10px] lg:text-[16px] font-['Inter']">Pricing</p>
                    <p className="text-zinc-800 text-base font-semibold text-[10px] lg:text-[16px] font-['Inter']">Membership</p>
                    <p className="text-zinc-800 text-base font-semibold text-[10px] lg:text-[16px] font-['Inter']">Joins</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;