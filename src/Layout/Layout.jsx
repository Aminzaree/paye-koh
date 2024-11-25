import { Outlet } from "react-router-dom";
import MainNavbar from "./Navbar/Navbar";

export default function Layout(){
    return(
        <>
            <MainNavbar />
            <Outlet />
        </>
    );
};