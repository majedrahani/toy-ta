import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const AddToy = () => {
    const {user} = useContext(AuthContext);

    const handleUpload = (event) => {
        event.preventDefault();

        const form = event.target;
        const photo = form.photo.value;
        const description = form.description.value;
        const ratting = form.ratting.value;
        const price = form.price.value;
        const sub_category = form.sub_category.value;
        const email = form.email.value;
        const seller_name = form.seller_name.value;
        const quantity = form.quantity.value;
        const toy_name = form.toy_name.value;

        const uploadInfo = {
            img: photo,
            Toy_name: toy_name,
            category: sub_category,
            seller_name: seller_name,
            email: email,
            price: price,
            ratting: ratting,
            quantity: quantity,
            description: description
        }
        console.log(uploadInfo);
        fetch('http://localhost:5000/uploads',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(uploadInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })

        // form.reset()
    }

    return (
        <div className=' '>
            <form onSubmit={handleUpload} className=' w-3/4 bg-cyan-50 mx-auto my-20 p-12'>
                {/* picture */}
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Toy image URL</span>
                    </label>
                    <input type="text" name='photo' placeholder="Image URL" className="input input-bordered w-full " />
                </div>

                {/* Toy name and available quantity */}
                <div className=' grid grid-cols-3 gap-4'>
                    <div className="form-control w-full col-span-2 ">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <input type="text" name='toy_name' placeholder="Toy name" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="text" name='quantity' placeholder="" className="input input-bordered w-full " />
                    </div>
                </div>

                {/* seller name and email */}
                <div className=' flex gap-4'>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" name='seller_name' defaultValue={user?.displayName} placeholder="seller name" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input type="text" name='email' defaultValue={user?.email} placeholder="seller email" className="input input-bordered w-full " />
                    </div>
                </div>

                {/* sub category, price , ratting */}
                <div className=' flex gap-4'>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Sub Category</span>
                        </label>
                        <input type="text" name='sub_category' placeholder="Sub Category" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type='text' name='price' placeholder="$ price" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Ratting</span>
                        </label>
                        <input type="text" name='ratting' placeholder="" className="input input-bordered w-full " />
                    </div>
                </div>

                {/* text aria */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea name='description' className="textarea textarea-bordered h-24" placeholder="write your description"></textarea> 
                </div>

                {/* button */}
                <button className="btn btn-accent w-full mt-10">Upload</button>
            </form>
        </div>
    );
};

export default AddToy;