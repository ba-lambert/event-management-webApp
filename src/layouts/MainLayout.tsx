import { Outlet } from "react-router-dom";
import Navbar from "../componets/AppComponents/Navbar.tsx";
import Footer     from "../common/Footer.tsx";

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar/>
            <div className='flex-grow'>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
}

export default MainLayout;
