import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Home } from "../components/Home";
import { Heroes } from "../components/Heroes";
import { RQHero } from "../components/RQHero";

export const Main = () => (
    <BrowserRouter>
        <React.Fragment>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/heroes" element={<Heroes />} />
                <Route path="/rqhero" element={<RQHero />} />
            </Routes>
        </React.Fragment>
    </BrowserRouter>
);


