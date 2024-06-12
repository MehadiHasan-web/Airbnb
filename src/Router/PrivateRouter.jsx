import { createBrowserRouter } from "react-router-dom";
import Master from "../Frontend/Master/Master";

const PrivateRouter = createBrowserRouter([
    {
        path: '/',
        element: <Master />,
        children: [
            {
                path: '/now',
                element: <Master />,
            }
        ]
    }
]);

export default PrivateRouter