import React from 'react';

const MyToysCard = ({ myToy, handleDelete }) => {
    console.log(myToy);
    const { _id, email, seller_name, ratting, quantity, price, img, description, category, Toy_name } = myToy;

  



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
                                <button onClick={()=> handleDelete (_id)} className='btn btn-outline btn-error'>
                                    Delete
                                </button>
                            </th>
                        </tr>
                       
                    </tbody>
                   
                </table>
            </div>
        </div>
    );
};

export default MyToysCard;