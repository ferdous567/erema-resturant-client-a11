import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Dashboard = () => {

    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <h3>Loading....</h3>
    }

    return (
        <div>
            <div>
                <h2 className="text-3xl font-bold underline-offset-2 py-4 text-center
                bg-gradient-to-r from-slate-300 via-slate-200 to-slate-300">Profiles of {user.displayName}</h2>
            </div>
            <div className="flex h-screen w-full border-2">
            <div className="bg-slate-300 w-1/3 p-10 border-2">
            <Link to = '/dashboard/additem'><button className="btn w-full mb-5">Add Food Items</button></Link>
            <Link to = '/dashboard/allAddedItems'><button className="btn w-full mb-5">All added items</button></Link>
            <Link to = '/dashboard/allOrderedItems'><button className="btn w-full">My Ordered Items</button></Link>
            </div>
            <div className="bg-slate-200 w-2/3 border-2 p-5">
                <h2 className="text-xl font-bold">Email: {user.email}</h2>
               <Outlet></Outlet>
            </div>
        </div>
        </div>
    );
};

export default Dashboard;