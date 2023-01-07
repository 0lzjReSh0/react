import { BrowserRouter, Route, Routes } from "react-router-dom"
import Addrecord from "../pages/Addrecord"
import Home from "../pages/Home"
import { Footer } from "../components/Footer"
import Chart from "../pages/Chart"
import Balance from "../pages/Balance"

const Navigation = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Addrecord" element={<Addrecord />} />
                <Route path="/Chart" element= {<Chart />} />
                <Route path="Balance" element={<Balance />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Navigation;