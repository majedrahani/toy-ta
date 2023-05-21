import React from 'react';
import Banner from './Banner';
import Gallery from './Gallery';

import Follow from './Follow';
import NewArrivals from './NewArrivals';
import ToyCategory from './ToyCategory';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ToyCategory></ToyCategory>
            <NewArrivals></NewArrivals>
            <Follow></Follow>
            
        </div>
    );
};

export default Home;