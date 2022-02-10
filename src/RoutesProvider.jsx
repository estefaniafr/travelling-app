import { BrowserRouter, Route, Routes } from "react-router-dom";

import React from 'react';
import Index from './core/pages/Index'

const RoutesProvider = () => {
    return (

        <>



            <Routes>
                <Route path="/" element={<Index />} />
                {/* <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/record/:user" element={<Record />} />
                <Route path="*" element={<Error />} /> */}
            </Routes>

        </>

    );
}

export default RoutesProvider; 