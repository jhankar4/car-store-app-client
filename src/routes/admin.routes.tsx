import About from "../pages/about";
import Contact from "../pages/contact";
import Dashboard from "../pages/Dashboard";

const adminRoutes = [
    {
        index: true,
        element: <Dashboard />
    },
    {
        path: 'dashboard',
        element: <Dashboard />
    },
    {
        path: 'about',
        element: <About />
    },
    {
        path: 'contact',
        element: <Contact />
    },
]



export default adminRoutes ;