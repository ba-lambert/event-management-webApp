import { Outlet } from "react-router-dom";
import Navbar from "../componets/AppComponents/Navbar.tsx";

const MainLayout = () => {
    return (
        <div className='relative '>
            <Navbar />
            <div className=''>
                <Outlet />
            </div>
        </div>
    );
}

export default MainLayout;
