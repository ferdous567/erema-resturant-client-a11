import { Outlet } from "react-router-dom";
import BottomNav from "../shared/bottomNav/BottomNav";

const MainLayout = () => {

   
    return (
        <div>
            
           <Outlet></Outlet> 
           <BottomNav></BottomNav>
        </div>
    );
};

export default MainLayout;