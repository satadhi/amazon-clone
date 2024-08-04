import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CheckoutPage from '../pages/checkout/CheckoutPage';
import ItemDetailPage from '../pages/itemdetails/ItemDetailPage'

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
        path: 'checkout',
        element: <CheckoutPage />
    },
    {
      path: 'itemdetail',
      element: <ItemDetailPage />
    }

  ]);


  export default router;