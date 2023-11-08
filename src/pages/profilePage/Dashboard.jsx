import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import ContentLoader from 'react-content-loader';
import {Helmet} from "react-helmet";

const Dashboard = () => {

    const {user, loading} = useContext(AuthContext);

    if(loading){
        return   <ContentLoader viewBox="0 0 380 70">
        {/* Only SVG shapes */}    
        <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
        <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
        <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
      </ContentLoader>
    }

    return (
        <div>
            
            <Helmet>
                <title>Dashboard</title>
            </Helmet>
            <div>
                <h2 className="text-3xl font-bold underline-offset-2 py-4 text-center
                bg-gradient-to-r from-slate-300 via-slate-200 to-slate-300">Profiles of {user.displayName}</h2>
            </div>
            <div className="lg:flex max-h-fit w-full pb-10 ">
            <div className="bg-slate-300 lg:w-1/3 p-10 border-2">
            <Link to = '/dashboard/additem'><button className="btn w-full mb-5 ">Add Food Items</button></Link>
            <Link to = '/dashboard/allAddedItems'><button className="btn w-full mb-5 ">All added items</button></Link>
            <Link to = '/dashboard/allOrderedItems'><button className="btn w-full mb-5">My Ordered Items</button></Link>
            <Link to = '/'><button className="btn w-full">Go To Home Page</button></Link>
            </div>
            <div className="bg-slate-200 lg:w-2/3  p-5">
                <h2 className="text-xl font-bold">Email: {user.email}</h2>
               <Outlet></Outlet>
            </div>
        </div>
        </div>
    );
};

export default Dashboard;