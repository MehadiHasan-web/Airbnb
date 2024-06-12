import { createBrowserRouter } from "react-router-dom";
import Master from "../Frontend/Master/Master";
import Home from "../Frontend/Partials/Home/Home";

const ProjectRouter = createBrowserRouter([
    {
        path: '/',
        element: <Master />,
        children: [
            {
                path: '/',
                element: <Home />,
            }
        ]
    }
]);

export default ProjectRouter