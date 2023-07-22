import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Checkout from "../page/Checkout";
import ProductDetails from "../page/ProductDetails";
import Products from "../page/Products";
import Home from "../page/home";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/home',
                element: <Home />,

            },
            {
                path: '/products',
                element: <Products />
            },
            {
                path: "product-details/:id",
                element: <ProductDetails />
            },
            {
                path: '/check-out',
                element: <Checkout />
            }
        ]
    },


])

export default routes