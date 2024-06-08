import { Outlet } from "react-router-dom";
import Navbar from "../componets/AppComponents/Navbar.tsx";
import Footer     from "../common/Footer.tsx";

const MainLayout = () => {
    return (
        <div className='relative '>
            <Navbar />
            <div className=''>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default MainLayout;
