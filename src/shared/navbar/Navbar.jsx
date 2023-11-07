
import { useContext } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => console.log('user logged out.'))
            .catch(error => console.log(error.message))
    }

    const navlink = <>
        <li className=''><NavLink to='/'>Home</NavLink></li>
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
                        <Link to = '/dashboard'><li className="p-2 hover:text-blue-600 font-bold hover:underline">See Your Profile</li></Link>
                            <li className="p-2">{user.email}</li>

                            <button onClick={handleLogout} className="btn btn-outline btn-sm btn-success w-full">Log Out</button>

                        </ul>
                    </div>
                </div> : <Link to='/login'>
                    Login
                </Link>
            }
        </li>

    </>

    return (
        <div className='relative bg-gradient-to-r from-black/40 via-black/10 to-black/40 px-5 pb-5 text-white'>
            <div className="flex flex-col space-y-4 mb-5 md:flex-row justify-between items-center">
                <div>
                    <p>915 Oakville Cross Rd, Oakville, CA 94562</p>
                    <p>+132 145 6987, info@erema.com</p>
                    <p>Monday - Sunday: 8 AM - 9 PM</p>
                </div>
                <img className="h-[120px] w-[150px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXgZF6F3PDNl4-i26PWrlHEBIvs_FZCWboeg&usqp=CAU" alt="" />
                <div className='flex  gap-4 '>
                    <div className='border-2 border-red-600 rounded-full p-2 cursor-pointer hover:scale-125'>
                        <FaFacebookF></FaFacebookF>
                    </div>
                    <div className='border-2 border-red-600 rounded-full p-2 cursor-pointer hover:scale-125'>
                        <FaInstagram></FaInstagram>
                    </div>
                    <div className='border-2 border-red-600 rounded-full p-2 cursor-pointer hover:scale-125'>
                        <FaLinkedin></FaLinkedin>
                    </div>
                    <div className='border-2 border-red-600 rounded-full p-2 cursor-pointer hover:scale-125'>
                        <FaTwitter></FaTwitter>
                    </div>

                </div>
            </div>
            <div className=' bg-gradient-to-r from-black/40 via-black/10 to-black/40 rounded'>
                <div className="drawer ">
                    <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-row ">
                        {/* Navbar */}
                        <div className="w-full navbar ">
                            <div className="flex-none  lg:hidden ">
                                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                </label>
                            </div>
                            {/* <div className="flex-1 px-2 mx-2">Navbar Title</div> */}
                            <div className="flex-none hidden lg:block ">
                                <ul className="menu menu-horizontal ">
                                    {/* Navbar menu content here */}
                                    {navlink}

                                </ul>
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
                                        <div className="dropdown md:dropdown-end">
                                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                                <div className="w-10 rounded-full">
                                                    <img src={user.photoURL} />
                                                </div>
                                            </label>
                                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-xl dropdown-content bg-base-100 rounded-box w-62">
                                                <Link to = '/dashboard'><li className="p-2 
                                                hover:text-blue-600 font-bold hover:underline">See Your Profile</li></Link>
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

export default Navbar;