import React, { useState } from 'react';
import ArrivalsCard from './ArrivalsCard';

const NewArrivals = ({ toys }) => {
    // const [toy, setToy] = useState([])
    // const {picture, name, price} = toys
 console.log(toys?.name);
    return (
        
            
            <div className="card  bg-base-100 shadow-xl">
                <figure><img src={toys?.picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{toys?.name}</h2>
                    <p>{toys?.price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-warning">Buy Now</button>
                    </div>
                </div>
            </div>
        
    );
};

export default NewArrivals;