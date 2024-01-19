import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Main = () => {
    return (
        <>
            <div className="min-h-screen">
            <Navbar></Navbar> 
            <Outlet></Outlet>
            <div className="sticky top-[100vh]">
            <Footer></Footer>
            </div>
            </div>
        </>
    );
};

export default Main;