import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProductDetails from "../page/ProductDetails";
import Products from "../page/Products";
import Home from "../page/home";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
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
            }
        ]
    },


])

export default routes