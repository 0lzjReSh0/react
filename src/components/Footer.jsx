import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import logo from '../pages/Balance/azusa.jpg'
export const Footer = () => {
    // const navigate = useNavigate();
    
    return (
        <nav id="header" className="text-white">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                <div className="logo-wrapper pl-4 flex items-center">
                    <Link to="/" className="toggleColor text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
                        <img src={logo} alt="logo"  className="w-40 h-40 object-cover"/>
                    </Link>
                </div>
                <div className="nav-menu-wrapper flex items-center justify-between space-x-10">
                    <Link to="/" >Home   |</Link>
                    <Link to="/login" >    login|</Link>
                    <Link to="/Addrecord">  Addrecord |</Link>
                    <Link to="/Chart">  Chart</Link>
                </div>
                <div className="py-6 px-4 bg-gray-700 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-300 sm:text-center">© 2022 zwy. All Rights Reserved.
                </span>
            </div>
            </div>
        </nav>
    )
}