
import { BrowserRouter, Outlet } from "react-router-dom";
import NavBar from "./components/Navbar";
import RoutesProvider from "./RoutesProvider";
import Layout from "./components/Layout";


const Application = () => {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Layout>
                    <RoutesProvider />
                    <Outlet />
                </Layout>
            </BrowserRouter>
        </>
    );
};

export default Application;