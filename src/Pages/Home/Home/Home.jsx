import React from 'react';
import Banner from '../Banner/Banner';
import Adventure from '../Adventure/Adventure';
import Discount from '../Discount/Discount';

const Home = () => {
    return (
        <div className=' w-full'>
            <Banner></Banner>
            <Adventure></Adventure>
            <Discount></Discount>
        </div>
    );
};

export default Home;