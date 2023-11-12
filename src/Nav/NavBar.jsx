import { NavLink } from "react-router-dom";


const NavBar = () => {
    const navLink = <>
        <NavLink  to={'/'}><li className="btn btn-sm  ">Home</li></NavLink>
        <NavLink to={'/addCoffee'}><li className="btn btn-sm">Add Coffee</li></NavLink>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 ">
                    { navLink}

                </ul>
            </div>
        </div>
    );
};

export default NavBar;