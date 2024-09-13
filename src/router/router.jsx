import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Component/Home/Home";
import Errorpage from "../Component/Errorpgae/Errorpage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <Errorpage/>,
        children: [
            {
                path: '/',
                element: <Home/>
            }
        ]
    }
])

export default router;