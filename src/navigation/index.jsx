import { BrowserRouter as Router, Route, Routes
    , } from "react-router-dom"
import Addrecord from "../pages/Addrecord"
import React from "react";
import Home from "../pages/Home"
import Chart from "../pages/Chart"
import Balance from "../pages/Balance"
import Logpage from "../pages/Login"
import { FooterBar } from "../components/FooterBar"
const Navigation = () => {

    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Logpage />} />
                <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Addrecord" element={<Addrecord />} />
                <Route path="/Chart" element={<Chart />} sda = {123} />
                <Route path="/Balance" element={<Balance />} />
                <Route path="*" element={"Error: Page Not Found"} />
            </Routes>
            <FooterBar />
        </Router>
        
    )
}

export default Navigation;