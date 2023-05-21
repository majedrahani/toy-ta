import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryDetails = () => {
    const details = useLoaderData();
    const { picture, name, price, rating, _id ,category} = details;
    console.log(details);
    return (
        <div className='p-20'>
            <div className="card lg:card-side bg-cyan-50 shadow-xl">
                <figure><img src={picture} /></figure>
                <div className="card-body">
                    <h2 className="card-title text-[35px] font-bold">{name}</h2>
                    <h2 className=' text-gray-600'>Category: {category}</h2>
                   
                   
                    <hr className=' pb-20' />
                    
                    <h2>Retting: {rating}</h2>
                    <h2>Price : {price}</h2>

                </div>
            </div>
        </div>
    );
};

export default CategoryDetails;