import { createBrowserRouter } from "react-router-dom";
import Master from "../Frontend/Master/Master";
import Home from "../Frontend/Partials/Home/Home";
import SingleProduct from "../Frontend/Partials/SinglePost/SingleProduct";
import MyJobs from "../Frontend/Partials/MyJob/MyJobs";
import HouseHolder from "../Frontend/Partials/Badiowala/HouseHolder";
import Map from "../Frontend/Partials/Map/Map";

const ProjectRouter = createBrowserRouter([
    {
        path: '/',
        element: <Master />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/product",
                element: <SingleProduct />,
            },
            {
                path: "/myjobs",
                element: <MyJobs />,
            },
            {
                path: "/HouseHolder",
                element: <HouseHolder />,
            },
            {
                path: "/map",
                element: <Map />
            }
        ],
    }
]);

export default ProjectRouter