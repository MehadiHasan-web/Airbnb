import { Outlet } from "react-router-dom"
import Navbar from "../Modules/Navbar"


const Master = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default Master
