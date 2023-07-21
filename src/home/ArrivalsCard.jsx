import React from 'react';

const ArrivalsCard = ({data}) => {
    console.log(data);
    const { picture, name, price, rating } = data;
    return (
        <div className=' '>
            {/* <div className="card  bg-base-100 shadow-xl">
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-warning">Buy Now</button>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default ArrivalsCard;