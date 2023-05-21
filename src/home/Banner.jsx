import React from 'react';
import banner_1 from '../../public/banner-1.png'

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full bg-cyan-50">
                    <div className='  mx-20 lg:flex justify-around'>
                        <div className=' my-auto w-1/2'>
                            <h1 className=' font-bold text-[45px] '>New Collection</h1>
                            <button className='btn btn-warning'>Order Now</button>
                        </div>
                        <img src={banner_1} className='w-[600px] h-[600px]' alt="" />
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
               
            </div>

        </div>
    );
};

export default Banner;