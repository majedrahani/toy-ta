import React from 'react';

const Category_1 = ({ categoryData_1 }) => {
    // console.log(categoryData_1);
    const { picture, name, price, rating } = categoryData_1;
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

export default Category_1;