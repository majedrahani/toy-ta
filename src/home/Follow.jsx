import React from 'react';

const Follow = () => {
    return (
        <div className=' p-20'>
            <h2 className=' text-center text-[40px] mb-5 font-bold'>Follow Us</h2>
            <div className="carousel rounded-box carousel-end relative">
                <div className="carousel-item ">
                    <img src="https://i.ibb.co/M9xS4F5/2.png" className="rounded-box w-80 h-80" />
                   
                </div>
                <div className="carousel-item">
                    <img src="https://i.ibb.co/jknNRGB/3.png" className="rounded-box w-80 h-80" />
                </div>
                <div className="carousel-item">
                    <img src="https://i.ibb.co/pKxJJXY/4.png" className="rounded-box w-80 h-80" />
                </div>
                <div className="carousel-item">
                    <img src="https://i.ibb.co/NWyVDVY/5.png" className="rounded-box w-80 h-80" />
                </div>
                <div className="carousel-item">
                    <img src="https://i.ibb.co/4Yz1k4z/6.png" className="rounded-box w-80 h-80" />
                </div>
                <div className="carousel-item">
                    <img src="https://i.ibb.co/sgvGtqh/7.png" className="rounded-box w-80 h-80" />
                </div>
                <div className="carousel-item">
                    <img src="https://i.ibb.co/7QT356k/8.png" className="rounded-box w-80 h-80" />
                </div>
                <div className="carousel-item">
                    <img src="https://i.ibb.co/mNHff2v/9.png" className="rounded-box w-80 h-80" />
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>

            </div>
        </div>
    );
};

export default Follow;