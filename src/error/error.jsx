import React from 'react';
import error from '../../public/404.png'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <div className='mx-auto'>
            <img src={error} className=' w-[500px] mx-auto' />
            <Link to='/' className=' text-center flex justify-center' >
                <button  className='btn btn-error mx-auto'>Back to home</button>
            </Link>
            </div>
            
        </div>
    );
};

export default Error;