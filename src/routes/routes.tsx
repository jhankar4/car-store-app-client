import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login";
import Signup from "../pages/signup";
import App from "../App";
import userRoutes from "./user.routes";
import adminRoutes from "./admin.routes";

const user = 'user';
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: user === 'user' ? userRoutes : adminRoutes 
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/signup',
        element: <Signup />
    },
])

export default router