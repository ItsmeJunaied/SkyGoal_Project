import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarComponent from '../Pages/Home/Navbar/NavbarComponent';
import Banner from '../Pages/Home/Banner/Banner';
import Adventure from '../Pages/Home/Adventure/Adventure';
import Destination from '../Pages/Home/Destination/Destination';
import Discount from '../Pages/Home/Discount/Discount';
import Booking from '../Pages/Home/Booking/Booking';
import Testimonials from '../Pages/Home/Testimonials/Testimonials';
import Footer from '../Pages/Home/Footer/Footer';

const Main = () => {
    return (
        <div>
            <NavbarComponent></NavbarComponent>
            <Banner></Banner>
            <Adventure></Adventure>
            <Destination></Destination>
            <Discount></Discount>
            <Booking></Booking>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Main;