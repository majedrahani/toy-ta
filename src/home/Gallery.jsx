import React from 'react';
import Gallery_1 from '../../public/gallery-1.png'
import Gallery_2 from '../../public/gallery-2.png'
import Gallery_3 from '../../public/gallery-3.png'
import Gallery_4 from '../../public/gallery-4.png'

const Gallery = () => {
    return (
        <div>
            <div className='w-[100%]'>
                <h2 className=' text-[60px] font-bold text-center my-6'>Gallery</h2>
            </div>
            <div className=' flex gap-4 w-[900px] h-[550px] mx-auto my-10'>
                <div className='bg-slate-400 h-[100%] w-[50%]'>
                    <img src={Gallery_1} alt="" />
                </div>
                <div className='flex flex-col gap-4 h-[100%]  w-[75%]'>
                    <div className='bg-slate-400 h-[50%]'>
                        <img src={Gallery_2} alt="" />
                    </div>
                    <div className='flex gap-4 h-[50%]'>
                        <div className='bg-slate-400 h-[100%] w-full'>
                            <img src={Gallery_3} alt="" />
                        </div>
                        <div className='bg-slate-400 h-[100%] w-full'>
                            <img src={Gallery_4} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;