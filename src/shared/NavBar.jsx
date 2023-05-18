import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }
    return (
        <div className="navbar bg-cyan-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                        <li className='font-bold'><Link to='/'>Home</Link></li>
                        <li className='font-bold'><Link>All Toys</Link></li>
                        <li className='font-bold'><Link>My Toys</Link></li>
                        <li className='font-bold'><Link>Add a Toys</Link></li>
                        <li className='font-bold'><Link>Blogs</Link></li>
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl">daisyUI</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className='font-bold'><Link to='/'>Home</Link></li>
                    <li className='font-bold'><Link>All Toys</Link></li>
                    <li className='font-bold'><Link>My Toys</Link></li>
                    <li className='font-bold'><Link>Add a Toys</Link></li>
                    <li className='font-bold'><Link>Blogs</Link></li>
                </ul>
            </div>
            <div className="navbar-end flex gap-4">
                {
                    user &&
                    <div className="tooltip tooltip-open tooltip-left" data-tip={user && user.displayName}>
                        {user && <img src={user.photoURL} alt="" className='w-[40px] my-5 h-[40px] rounded-full' />} </div>
                }
                {
                    user ?
                        <Link onClick={handleLogOut} className='btn btn-warning'>Logout</Link>
                        : <Link to="/login" className='btn btn-warning'>Login</Link>
                }

            </div>
        </div>
    );
};

export default NavBar;