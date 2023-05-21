import React from 'react';
import Banner from './Banner';
import Gallery from './Gallery';
import ShopByCtgry from './ShopByCtgry';
import Follow from './Follow';
import NewArrivals from './NewArrivals';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCtgry></ShopByCtgry>
            <Follow></Follow>
            <NewArrivals></NewArrivals>
        </div>
    );
};

export default Home;