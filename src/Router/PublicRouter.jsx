import { createBrowserRouter } from "react-router-dom";
import Master from "../Frontend/Master/Master";
import Home from "../Frontend/Partials/Home/Home";
import SingleProduct from "../Frontend/Partials/SinglePost/SingleProduct";

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
            }
        ],
    }
]);

export default ProjectRouter