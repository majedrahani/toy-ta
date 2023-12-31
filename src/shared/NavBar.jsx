import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import logo from '../../public/toy_logo.png'

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
                    <li className='font-bold'><Link to="/allToys">All Toys</Link></li>
                    {
                        user &&
                        <li className='font-bold'><Link to="/myToys">My Toys</Link></li>
                    }
                    {
                        user &&
                        <li className='font-bold'><Link to="/addToy">Add a Toys</Link></li>
                    }
                    <li className='font-bold'><Link to="/blog">Blogs</Link></li>
                    </ul>
                </div>
                <Link to='/' className="">
                    <img src={logo} alt="" className=' w-40' />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className='font-bold'><Link to='/'>Home</Link></li>
                    <li className='font-bold'><Link to="/allToys">All Toys</Link></li>
                    {
                        user &&
                        <li className='font-bold'><Link to="/myToys">My Toys</Link></li>
                    }
                    {
                        user &&
                        <li className='font-bold'><Link to="/addToy">Add a Toys</Link></li>
                    }
                    <li className='font-bold'><Link to="/blog">Blogs</Link></li>
                </ul>
            </div>
            <div className="navbar-end flex gap-4">
                {
                    user?.photoURL &&
                    <div className="tooltip hover:tooltip-open tooltip-left" data-tip={user && user?.displayName}>
                        {user && <img src={user?.photoURL} alt="" className='w-[40px] my-5 h-[40px] rounded-full' />} </div>
                }
                {
                    user ?
                        <Link onClick={handleLogOut} className='btn btn-accent text-white '>Logout</Link>
                        : <Link to="/login" className='btn btn-accent'>Login</Link>
                }

            </div>
        </div>
    );
};

export default NavBar;