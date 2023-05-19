import React from 'react';

const AddToy = () => {
    return (
        <div className=' '>
            <div className=' w-3/4 bg-cyan-50 mx-auto my-20 p-12'>
                {/* picture */}
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Toy image URL</span>
                    </label>
                    <input type="text" placeholder="Image URL" className="input input-bordered w-full " />
                </div>

                {/* Toy name and available quantity */}
                <div className=' grid grid-cols-3 gap-4'>
                    <div className="form-control w-full col-span-2 ">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <input type="text" placeholder="Toy name" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="text" placeholder="" className="input input-bordered w-full " />
                    </div>
                </div>

                {/* seller name and email */}
                <div className=' flex gap-4'>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" placeholder="seller name" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input type="text" placeholder="seller email" className="input input-bordered w-full " />
                    </div>
                </div>

                {/* sub category, price , ratting */}
                <div className=' flex gap-4'>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Sub Category</span>
                        </label>
                        <input type="text" placeholder="Sub Category" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type='text' placeholder="$ price" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Ratting</span>
                        </label>
                        <input type="text" placeholder="" className="input input-bordered w-full " />
                    </div>
                </div>

                {/* text aria */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-24" placeholder="write your description"></textarea> 
                </div>

                {/* button */}
                <button className="btn btn-accent w-full mt-10">Upload</button>
            </div>
        </div>
    );
};

export default AddToy;