import React from 'react';
import Banner from './Banner';
import Benefit from './Benefit';
import Footer from './Footer';
import Challenge from './Challenge';
import BussinessSummary from './BussinessSummary';
import ComputerParts from './ComputerParts';
import Reviews from './Reviews';
const Home = () => {
    return (
        <div className='m-8'>
            <Banner></Banner>
            <ComputerParts></ComputerParts>
            <BussinessSummary></BussinessSummary>
            <Reviews></Reviews>
            <Benefit></Benefit>
            <Challenge></Challenge>
            <Footer></Footer>
        </div>
    );
};

export default Home;