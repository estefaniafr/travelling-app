
import { BrowserRouter, Outlet } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import RoutesProvider from "./RoutesProvider";


const Application = () => {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <RoutesProvider />
                <Outlet />
            </BrowserRouter>
        </>
    );
};

export default Application;