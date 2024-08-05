import { createBrowserRouter } from "react-router-dom";
import CheckoutPage from '../pages/checkout/CheckoutPage';
import ItemDetailPage from '../pages/itemdetails/ItemDetailPage'
import BaseLayout from "../layout/BaseLayout";
import Home from "../pages/home/Home";

const router = createBrowserRouter([

  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: 'checkout',
        element: <CheckoutPage />
      },
      {
        path: 'itemdetail',
        element: <ItemDetailPage />
      }
    ]
  },
]);


export default router;