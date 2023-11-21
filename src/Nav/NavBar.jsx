import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../Provider/AuthProvider";
import defoultUser from "../../src/assets/user.png";

const NavBar = () => {
    const {user, logOut} = useContext(authContext);
    const link = <>
         <li><NavLink to={'/'}>Home</NavLink></li>
        {user && <li><NavLink to={'/addCoffee'}>Add Coffee</NavLink></li>}
        <li><NavLink to={'/About'}>About Us</NavLink></li>
        {user? "" :<>
        <li><NavLink to={'/singUp'}>Sing UP</NavLink></li>
        <li className="text-red-600 font-bold"><NavLink to={'/login'}>Log in</NavLink></li>
        </>}
        
    </>
    const hendalSingOut = () =>{
        logOut();
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {link}


                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}

                </ul>
            </div>
            <div className="navbar-end">
            <h1 className="hidden md:visible uppercase font-bold ">{user?.displayName || user?.email}</h1>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                
                    <div className="w-10 rounded-full">
                        <img src={user?.photoURL || defoultUser} />
                        
                    </div>
                    
                </label>
                
                {
                    user ? <button onClick={hendalSingOut} className="btn btn-sm bg-red-500 text-white hover:text-black">Log Out</button> 
                    :<Link to='/LogIn'><button className="btn btn-sm">Log IN</button></Link>
                }
                
            </div>
        </div>
    );
};

export default NavBar;