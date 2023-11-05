import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const SingleNav = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => console.log('user logged out.'))
            .catch(error => console.log(error.message))
    }
    const navlink = <div className='flex '>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/allfood'>All Food</NavLink></li>
        <li><NavLink to='/blog'>Blog</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
        {/* <li><NavLink to = '/login'>Login</NavLink></li> */}

    </div>
    return (
        <div>
            <div className=' bg-gradient-to-r from-black/40 via-black/10 to-black/40'>
                <div className="drawer">
                    <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-row ">
                        {/* Navbar */}
                        <div className="w-full navbar ">
                            <div className="flex-none lg:hidden">
                                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                </label>
                            </div>
                            {/* <div className="flex-1 px-2 mx-2">Navbar Title</div> */}
                            <div className="flex    ">
                                <ul className="menu menu-horizontal ">
                                    {/* Navbar menu content here */}
                                    {navlink}

                                </ul>
                                {
                                    user ? <div>
                                        <div className="dropdown dropdown-end">
                                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                                <div className="w-10 rounded-full">
                                                    <img src={user.photoURL} />
                                                </div>
                                            </label>
                                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-xl dropdown-content bg-base-100 rounded-box w-62">
                                                <li className="p-2">{user.displayName}</li>
                                                <li className="p-2">{user.email}</li>

                                                <button onClick={handleLogout} className="btn btn-outline btn-success w-full">Log Out</button>

                                            </ul>
                                        </div>
                                    </div> : <Link to='/login'>
                                        <button className="btn btn-sm btn-ghost">Login</button>
                                    </Link>
                                }
                            </div>
                        </div>
                        {/* Page content here */}
                        {/* Content */}
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu  p-4 w-96 text-black min-h-full bg-base-200">
                            {/* Sidebar content here */}
                            <li className='w-full'><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/allfood'>All Food</NavLink></li>
                            <li><NavLink to='/blog'>Blog</NavLink></li>
                            <li><NavLink to='/contact'>Contact</NavLink></li>
                            <li>
                                {
                                    user ? <div>
                                        <div className="dropdown dropdown-end">
                                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                                <div className="w-10 rounded-full">
                                                    <img src={user.photoURL} />
                                                </div>
                                            </label>
                                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-xl dropdown-content bg-base-100 rounded-box w-62">
                                                <li className="p-2">{user.displayName}</li>
                                                <li className="p-2">{user.email}</li>

                                                <button onClick={handleLogout} className="btn btn-outline btn-success w-full">Log Out</button>

                                            </ul>
                                        </div>
                                    </div> : <Link to='/login'>
                                        Login
                                    </Link>
                                }
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleNav;