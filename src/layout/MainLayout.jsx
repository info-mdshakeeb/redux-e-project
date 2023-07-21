import { Outlet } from 'react-router-dom';
import NavBar from "../components/NavBar";

const MainLayout = () => {
    return (
        <div>
            <div className="border-b border-gray-300 sticky top-0 shadow-sm  backdrop-blur-lg z-10">
                <NavBar />
            </div>
            <Outlet />
        </div>
    );
};

export default MainLayout;