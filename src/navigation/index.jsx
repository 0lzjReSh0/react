import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Addrecord from "../pages/Addrecord"
import Home from "../pages/Home"
import Chart from "../Chart/index.jsx"
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
                <Route path="/Chart" element={<Chart />} />
                <Route path="/Balance" element={<Balance />} />
                <Route path="*" element={"Error: Page Not Found"} />
            </Routes>
            <FooterBar />
        </Router>
        
    )
}

export default Navigation;