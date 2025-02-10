import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login";
import Signup from "../pages/signup";
import App from "../App";
import userRoutes from "./user.routes";
import adminRoutes from "./admin.routes";
import ProtectedRoute from "../components/layout/ProtectedRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: userRoutes 
    },
    {
        path: '/admin',
        element: <ProtectedRoute> <App /> </ProtectedRoute>,
        children: adminRoutes 
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