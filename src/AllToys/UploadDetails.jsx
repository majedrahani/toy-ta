import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UploadDetails = () => {
    const details = useLoaderData();
    console.log(details);
    const { _id, email, seller_name, ratting, quantity, price, img, description, category, Toy_name } = details;
    return (
        <div className='p-20'>
            <div className="card lg:card-side bg-cyan-50 shadow-xl">
            <figure><img src={img} /></figure>
            <div className="card-body">
                <h2 className="card-title text-[35px] font-bold">{Toy_name}</h2>
                <h2 className=' text-gray-600'>Category: {category}</h2>
                <h2 className=' text-[18px] font-bold'>Seller : 
                <span className=' text-cyan-900 pl-3'>{seller_name}</span>
                </h2>
                <h2 className=' text-gray-500'>Contuct With seller : {email}</h2>
                <h2>Detail: {description}</h2>
                <hr className=' pt-20' />
                <h2 className=''>Available Quantity : {quantity}</h2>
                <h2>Retting: {ratting}</h2>
                <h2>Price : {price}</h2>
                
            </div>
        </div>
        </div>
    );
};

export default UploadDetails;