import About from "../pages/about";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import Contact from "../pages/contact";
import Home from "../pages/Home";

const userRoutes = [
    {
        index: true,
        element: <Home />
    },
    {
        path: 'home',
        element: <Home />
    },
    {
        path: 'about',
        element: <About />
    },
    {
        path: 'contact',
        element: <Contact />
    },
    {
        path: 'blog',
        element: <Blog />
    },
    {
        path: 'blog/:slug',
        element: <BlogDetails />
    },
]



export default userRoutes ;