import About from "../pages/about";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import Checkout from "../pages/Checkout";
// import Contact from "../pages/contact";
import Home from "../pages/Home";
import OrderDetails from "../pages/OrderDetails";
import ProductDetails from "../pages/ProductDetails";
import Shop from "../pages/Shop";

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
    // {
    //     path: 'contact',
    //     element: <Contact />
    // },
    {
        path: 'blog',
        element: <Blog />
    },
    {
        path: 'blog/:slug',
        element: <BlogDetails />
    },
    {
        path: 'shop',
        element: <Shop />
    },
    {
        path: 'shop/:id',
        element: <ProductDetails />
    },
    {
        path: 'checkout',
        element: <Checkout />
    },
    {
        path: 'order/details',
        element: <OrderDetails />
    },
    
]



export default userRoutes ;