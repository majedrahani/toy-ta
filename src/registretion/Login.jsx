import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero min-h-screen ">


            <div className="card flex-shrink-0 w-full max-w-sm shadow-xl bg-cyan-50">
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <p href="#" className="label-text-alt link link-hover">New to this world
                                <Link to='/register' className=' pl-2 font-bold text-yellow-600' >
                                    Register
                                </Link>
                            </p>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-warning">Login</button>
                    </div>

                    <div className="flex flex-col w-full border-opacity-50">

                        <div className="divider">OR</div>

                    </div>

                    <div className="form-control mt-6">
                        <label className="label">
                            <span className="label-text">Sign in with</span>
                        </label>
                        <button className="btn btn-outline btn-accent">Google</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;