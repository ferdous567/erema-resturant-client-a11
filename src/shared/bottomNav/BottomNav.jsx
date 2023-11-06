import { FaBlog } from 'react-icons/fa';
import { AiOutlineContacts } from "react-icons/ai";
import { Link } from 'react-router-dom';

const BottomNav = () => {
    return (
        <div className='mt-10'>
            {/* second section */}
            <div>
                <div className="btm-nav">
                    
                        <button className="bg-pink-200 text-pink-600 active">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                            <Link to = '/'><span className="btm-nav-label">Home</span></Link>
                        </button>
                    
                    <button className=" bg-blue-200 text-blue-600 border-blue-600">
                        <FaBlog></FaBlog>
                        <Link to = '/blog'><span className="btm-nav-label">Blog</span></Link>
                    </button>
                    <button className="bg-teal-200 text-teal-600">
                        <AiOutlineContacts></AiOutlineContacts>
                        <span className="btm-nav-label">Contact</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BottomNav;