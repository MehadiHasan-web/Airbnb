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
            <div className="fixed top-0  right-0 h-screen content-center">

                <div className="flex flex-col justify-center space-x-4 mb-8 gap-1">
                    <FacebookShareButton
                        url="https://yourwebsite.com"
                        quote="Check out this amazing content!"
                        hashtag="#react"
                    >
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                            <SlSocialFacebook />
                        </button>
                    </FacebookShareButton>
                    <TwitterShareButton
                        url="https://yourwebsite.com"
                        title="My awesome article"
                    >
                        <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
                            Twitter
                        </button>
                    </TwitterShareButton>
                    <EmailShareButton
                        url="https://yourwebsite.com"
                        subject="Don't miss this!"
                        body="This is a must-read!"
                    >
                        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                            Email
                        </button>
                    </EmailShareButton>
                </div>


            </div>
        </div>
    )
}

export default Master
