import React from 'react';
import Banner from './Banner';
import Gallery from './Gallery';
import ShopByCtgry from './ShopByCtgry';
import Follow from './Follow';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCtgry></ShopByCtgry>
            <Follow></Follow>
        </div>
    );
};

export default Home;