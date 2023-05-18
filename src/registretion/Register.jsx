import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext)

    const handleRegister = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photo, email, password);

        createUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error => {
            console.log(error.message);
        })


    }
    return (
        <div className="hero min-h-screen ">


            <form onSubmit={handleRegister} className="card flex-shrink-0 w-full max-w-sm shadow-xl bg-cyan-50">
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <p href="#" className="label-text-alt link link-hover">All ready have an account?
                                <Link to='/login' className=' pl-2 font-bold text-yellow-600' >
                                    Login
                                </Link>
                            </p>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-warning">Register</button>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default Register;