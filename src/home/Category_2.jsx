import React from 'react';

const Category_2 = ({categoryData_2}) => {
    // console.log(categoryData_2);
    const { picture, name, price, rating } = categoryData_2;
    return (
        <div className=' '>
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Category_2;