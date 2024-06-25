import { Outlet } from "react-router-dom"
import Navbar from "../Modules/Navbar"
import MobileNav from "../../Components/MobileNav"

const Master = () => {
    return (
        <>

            {/* <Navbar /> */}
            <Outlet />
            {/* <MobileNav></MobileNav> */}
        </>
    )
}

export default Master
