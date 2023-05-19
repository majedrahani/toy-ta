import React from 'react';
import Banner from './Banner';
import Gallery from './Gallery';
import ShopByCtgry from './ShopByCtgry';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCtgry></ShopByCtgry>
        </div>
    );
};

export default Home;