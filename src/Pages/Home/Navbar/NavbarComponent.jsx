import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faBarsStaggered, faCalendarDays, faCaretDown, faHouse, faMoneyCheckDollar, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const NavbarComponent = () => {
    return (
        <div className=' bg-black w-full'>


            <div className="drawer ">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col  ">
                    {/* Navbar */}
                    <div className="w-full flex flex-col navbar bg-white border border-b-2 border-[#FFF]">

                        {/* Navbar */}
                        <div className="navbar nv-bg text-black flex justify-between container mx-auto  md:w-full  md:px-[68px]">
                            <div className='flex lg:hidden '>
                                <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost ">
                                    <p><FontAwesomeIcon icon={faBarsStaggered} size="2xl" /></p>
                                </label>
                            </div>

                            <div className=' lg:flex hidden gap-[40px] '>
                                <NavLink className="text-neutral-800 text-base font-medium font-['Inter']">Home</NavLink>
                                <NavLink className="text-neutral-800 text-base font-medium font-['Inter']">About</NavLink>
                                <NavLink className="text-neutral-800 text-base font-medium font-['Inter']">Schedules</NavLink>
                                <NavLink className="text-neutral-800 text-base font-medium font-['Inter']">Membership</NavLink>
                                <NavLink className="text-neutral-800 text-base font-medium font-['Inter']">Pricing</NavLink>
                            </div>

                            <div className=' flex gap-10'>
                                <NavLink className="text-zinc-500 text-base font-medium font-['Inter']">Offers</NavLink>
                                <button className=' px-[32px] py-[16px] rounded-[38px] bg-[#F27A44]'>
                                    <p className="text-white text-base font-normal font-['Inter']">
                                        Courses
                                    </p>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="drawer-side z-50  md:hidden fixed" >
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay w-80 fixed "></label>
                    <ul className="menu p-4 df w-80 h-screen bg-[#F27A44] fixed ">
                        {/* Sidebar */}
                        <div className=' flex flex-col'>
                            <div className=' flex justify-between p-5'>
                                <div>
                                    <h1 className="text-[#1E3050] text-2xl font-bold font-['Inter']">Menu <FontAwesomeIcon icon={faCaretDown} /></h1>
                                </div>
                                <div>
                                    <button
                                        className=' flex justify-end'
                                        onClick={() => { document.getElementById('my-drawer-3').click(); }}
                                    >
                                        <FontAwesomeIcon className='text-[30px]' icon={faBarsStaggered} style={{ color: "#ffffff" }} />
                                    </button>
                                </div>
                            </div>
                            <div className=' p-5 flex flex-col gap-3'>
                                <NavLink className="text-white text-xl font-medium font-['Inter']"> <FontAwesomeIcon icon={faHouse} style={{ color: "#183153", }} /> Home</NavLink>
                                <NavLink className="text-white text-xl font-medium font-['Inter']"><FontAwesomeIcon icon={faAddressCard} style={{ color: "#183153", }} /> About</NavLink>
                                <NavLink className="text-white text-xl font-medium font-['Inter']"><FontAwesomeIcon icon={faCalendarDays} style={{ color: "#183153", }} /> Schedules</NavLink>
                                <NavLink className="text-white text-xl font-medium font-['Inter']"><FontAwesomeIcon icon={faUserPlus} style={{ color: "#183153", }} /> Membership</NavLink>
                                <NavLink className="text-white text-xl font-medium font-['Inter']"><FontAwesomeIcon icon={faMoneyCheckDollar} style={{ color: "#183153", }} /> Pricing</NavLink>
                            </div>
                        </div>
                    </ul>
                </div>


            </div >
        </div >
    );
};

export default NavbarComponent;