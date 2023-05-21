import React from 'react';
import { Link } from 'react-router-dom';

const Category_2 = ({ categoryData_2 }) => {
    // console.log(categoryData_2);
    const { picture, name, price, rating, _id } = categoryData_2;
    return (
        <div className=' '>
            <div className="card lg:w-96 bg-base-100 shadow-xl">
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{price}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/categoryDetails/${_id}`}>
                            <button className="btn btn-warning">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category_2;