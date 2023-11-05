import { NavLink } from "react-router-dom";

const SingleNav = () => {
    const navlink = <div className='flex '>
    <li><NavLink to = '/'>Home</NavLink></li>
    <li><NavLink to = '/allfood'>All Food</NavLink></li>
    <li><NavLink to = '/blog'>Blog</NavLink></li>
    <li><NavLink to = '/contact'>Contact</NavLink></li>
    <li><NavLink to = '/login'>Login</NavLink></li>
    
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
                            <div className="flex-none hidden lg:block ">
                                <ul className="menu menu-horizontal">
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
                            {navlink}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleNav;