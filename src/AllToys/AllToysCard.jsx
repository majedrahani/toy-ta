import React from 'react';

const AllToysCard = ({allToy}) => {
    console.log(allToy);
    const { email, seller_name, ratting, quantity, price, img, description, category, Toy_name } = allToy;
    return (
        <div>
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* head */}
               
                <tbody>
                    
                    {/* row 1 */}
                    <tr>
                        <th>
                            <label>
                                
                            </label>
                        </th>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-24 h-24">
                                        <img src={img} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">{Toy_name}</div>
                                    <div className="text-sm opacity-50">{price}</div>
                                    <div className="text-sm opacity-50">{ratting}</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            {seller_name}
                            <br />
                            <span className="badge badge-ghost badge-sm">{email}</span>
                        </td>
                        <td>{category}</td>
                        <th>
                            <button className="btn btn-ghost btn-xs">details</button>
                        </th>
                    </tr>
                   
                </tbody>
               
            </table>
        </div>
    </div>
    );
};

export default AllToysCard;