import React, { useEffect } from 'react';
import banner_1 from '../../public/banner-1.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { TypeAnimation } from 'react-type-animation';


const Banner = () => {
    useEffect(() => {
        AOS.init({
            delay: 100,
            
        }); // Initialize AOS
      }, []);
    return (
        <div className=''>
            <div className="carousel w-full">
                <div className=" w-full bg-cyan-50 ">
                    <div className=' lg:flex justify-around'>
                        <div className=' my-auto w-1/3'>
                            {/* <h1 className=' font-bold text-[45px] '>Toy Marketplace</h1> */}
                            <TypeAnimation 
                                sequence={[
                                    // Same substring at the start will only be typed once, initially
                                    'This is Toy Market Place',
                                    1000,
                                    'This is Toy Zone',
                                    1000,
                                    'This is Toy Car Zone',
                                    1000,
                                    'This is Toy Bike Zone',
                                    1000,
                                    'This is Toy Truck Zone',
                                    1000,
                                    'This is Universe of Toy',
                                    1000,
                                ]}
                                speed={50}
                                style={{ fontSize: '2em', fontWeight: 'bold' }}
                                repeat={Infinity}
                            />
                            <p className='my-5 text-[12px] text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quaerat accusantium placeat! Tempore assumenda, saepe, molestias doloremque vel dolore temporibus, est neque rem veniam quisquam inventore accusamus?</p>
                            <button className='btn btn-accent text-black mt-5'>Order Now</button>
                        </div>
                        <div className='' data-aos="flip-right" data-aos-duration="1000">
                            <img src={banner_1} className='w-[400px] h-[400px] mask mask-hexagon mx-0 px-0 ' alt="" />

                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

                    </div>
                </div>

            </div>

        </div>
    );
};

export default Banner;