import { Outlet } from "react-router-dom"
import Navbar from "../Modules/Navbar"
import MobileNav from "../../Components/MobileNav"
import { FacebookShareButton, TwitterShareButton, EmailShareButton } from 'react-share';
import { SlSocialFacebook } from "react-icons/sl";


const Master = () => {
    return (
        <div className="relative">
            <Navbar />
            <Outlet />
            <MobileNav></MobileNav>
        </div>
    )
}

export default Master
