import { Outlet } from 'react-router-dom';
import Cart from '../components/Cart';
import NavBar from "../components/NavBar";

const MainLayout = () => {
    return (
        <div>



            <div className="drawer drawer-end ">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">

                    <div className="border-b border-gray-300 sticky top-0 shadow-sm  backdrop-blur-lg z-10">
                        <NavBar />
                    </div>
                    <div className="">
                        <Outlet />
                    </div>
                </div>
                <div className="drawer-side z-30">
                    <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        <Cart />
                    </ul>
                </div>
            </div>


        </div>
    );
};

export default MainLayout;