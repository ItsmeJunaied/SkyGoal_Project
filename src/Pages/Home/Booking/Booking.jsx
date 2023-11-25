import React, { useEffect, useState } from 'react';
import './Booking.css';
import img from '../../../../public/images/sampleimg3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Booking = () => {

    const [star, setStar] = useState(0);
    const [room, setRoom] = useState(0);
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {

        data.star = star
        data.room = room
        if (data.city === '') {
            alert('Fill the city Name')
        } else if (data.arrival === '') {
            alert('Fill the arrival date')
        } else if (data.departure === '') {
            alert('Fill the departure date')
        } else if (data.star === 0) {
            alert('Increase the Star Number')
        } else if (data.room === 0) {
            alert('Increase the Star Number')
        }
        else {
            toast.success('Booking Successfull !', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            reset();
            setStar(0);
            setRoom(0);
        }


    }


    const handleStarIncrease = (e) => {
        e.preventDefault();
        setStar(star + 1)
    }

    const handleStarDecrease = (e) => {
        e.preventDefault();
        if (star != 0) {
            setStar(star - 1)
        }
    }

    const handleRoomIncrease = (e) => {
        e.preventDefault();
        setRoom(room + 1)
    }


    const handleRoomDecrease = (e) => {
        e.preventDefault();
        if (room != 0) {
            setRoom(room - 1)
        }
    }

    return (
        <div className=' lg:container lg:mx-auto mx-[20px] mt-[100px] lg:mt-[200px] '>
            <div className=' flex flex-col lg:flex-row justify-between '>
                <div className='lg:w-1/2 relative'>
                    <div className='relative z-20'>
                        <img className='lg:h-[700px] h-[400px] w-[350px] lg:w-[600px]' src={img} alt="" />

                        {/* container 1 */}
                        <div className='absolute top-0 -right-3 lg:right-20'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="113" height="113" viewBox="0 0 113 113" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M56.5 113C87.7041 113 113 87.7041 113 56.5C113 25.2959 87.7041 0 56.5 0C25.2959 0 0 25.2959 0 56.5C0 87.7041 25.2959 113 56.5 113ZM56.5 87.4405C73.588 87.4405 87.4405 73.588 87.4405 56.5C87.4405 39.412 73.588 25.5595 56.5 25.5595C39.412 25.5595 25.5595 39.412 25.5595 56.5C25.5595 73.588 39.412 87.4405 56.5 87.4405Z" fill="#F8E27E" fillOpacity="0.2" />
                            </svg>
                        </div>
                    </div>

                    {/* container 2 */}
                    <div className='absolute top-52 -right-4 lg:top-96 lg:right-32 z-0'>
                        <div className="lg:w-80 w-40 lg:h-20 h-16 origin-top-left rotate-[1.67deg] bg-orange-400"></div>
                    </div>
                </div>


                <div className=' lg:w-1/2 flex justify-center'>
                    <div className=' booking-box-with-shadow lg:w-[430px] w-[350px]'>
                        <div>
                            <div className="  p-7 flex-col justify-start items-start gap-3 inline-flex">
                                <div className="text-black text-3xl font-extrabold font-['Roboto']">Book now</div>
                                <div className=" h-10 text-zinc-800 text-[18px] font-normal font-['Roboto'] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                            </div>
                        </div>

                        <div className=''>
                            <form onSubmit={handleSubmit(onSubmit)} className="lg:w-96  p-7 flex-col justify-start items-start gap-4 inline-flex">
                                <div className="self-stretch h-20 flex-col justify-center items-start gap-1.5 flex">
                                    <div className="text-black text-xs font-medium font-['Roboto'] uppercase leading-relaxed tracking-wide">
                                        <p>City</p>
                                    </div>

                                    <input
                                        {...register("city",)}
                                        type="text"
                                        className=" bg-[#F3F3F3] text-sm font-normal font-['Roboto'] lg:w-[360px] w-[280px] h-[50px] lg:h-[52px] rounded-[12px] px-5 outline-none"
                                        placeholder='Placeholder' />

                                </div>


                                <div className=' flex flex-row justify-between gap-3'>
                                    <div>
                                        <div className="text-black text-xs font-medium font-['Roboto'] uppercase leading-relaxed tracking-wide mb-1">
                                            <p>Arrival</p>
                                        </div>

                                        <input
                                            {...register("arrival",)}
                                            type="text"
                                            className=" bg-[#F3F3F3] text-sm font-normal font-['Roboto'] lg:w-[175px] lg:h-[52px] w-[135px] h-[50px] rounded-[12px] px-5 outline-none"
                                            placeholder='Placeholder' />
                                    </div>
                                    <div>
                                        <div className="text-black text-xs font-medium font-['Roboto'] uppercase leading-relaxed tracking-wide mb-1">
                                            <p>Departure</p>
                                        </div>

                                        <input
                                            {...register("departure",)}
                                            type="text"
                                            className=" bg-[#F3F3F3] text-sm font-normal font-['Roboto'] lg:w-[175px] lg:h-[52px] w-[135px] h-[50px] rounded-[12px] px-5 outline-none"
                                            placeholder='Placeholder' />
                                    </div>
                                </div>

                                <div className=' flex flex-row justify-between gap-3'>
                                    <div>
                                        <div className="text-black text-xs font-medium font-['Roboto'] uppercase leading-relaxed tracking-wide mb-1">
                                            <p>STAR</p>
                                        </div>

                                        <div className=' flex flex-row lg:h-[52px] h-[50px]  '>

                                            <button onClick={handleStarIncrease}
                                                className=' bg-[#EBEBEB] lg:w-[44px] w-[30px] flex justify-center align-middle items-center rounded-l-lg'>
                                                <FontAwesomeIcon icon={faPlus} />
                                            </button>

                                            <div
                                                className=" bg-[#F3F3F3] lg:w-[91px] w-[75px] flex justify-center align-middle items-center text-slate-500 text-sm font-normal font-['Roboto'] leading-relaxed tracking-wide">
                                                <p>{star}</p>
                                            </div>

                                            <button onClick={handleStarDecrease}
                                                className=' bg-[#EBEBEB] lg:w-[44px] w-[30px] flex justify-center align-middle items-center rounded-r-lg'>
                                                <FontAwesomeIcon icon={faMinus} />
                                            </button>

                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-black text-xs font-medium font-['Roboto'] uppercase leading-relaxed tracking-wide mb-1">
                                            <p>Room</p>
                                        </div>

                                        <div className=' flex flex-row lg:h-[52px] h-[50px]  '>
                                            <button onClick={handleRoomIncrease}
                                                className=' bg-[#EBEBEB] lg:w-[44px] w-[30px] flex justify-center align-middle items-center rounded-l-lg'>
                                                <FontAwesomeIcon icon={faPlus} />
                                            </button>
                                            <div
                                                className=" bg-[#F3F3F3] lg:w-[80px] w-[75px] flex justify-center align-middle items-center text-slate-500 text-sm font-normal font-['Roboto'] leading-relaxed tracking-wide">
                                                <p>{room}</p>
                                            </div>
                                            <button onClick={handleRoomDecrease}
                                                className=' bg-[#EBEBEB] lg:w-[44px] w-[30px] flex justify-center align-middle items-center rounded-r-lg'>
                                                <FontAwesomeIcon icon={faMinus} />
                                            </button>

                                        </div>
                                    </div>
                                </div>


                                <button type='submit' className="px-5 mt-[30px] lg:mt-[40px] py-3.5 bg-black rounded justify-center items-center flex">
                                    <div className=" lg:w-[88px] lg:h-[18px] rounded-[4px] text-center text-white text-[15px] font-bold font-['Roboto'] uppercase tracking-wider">BOOK NOW</div>
                                </button>


                            </form>

                        </div>


                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Booking;