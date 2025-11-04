import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Headphones from "./pages/Headphones";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphones";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "headphones",
        element: <Headphones />,
      },
      {
        path: "speakers",
        element: <Speakers />,
      },
      {
        path: "earphones",
        element: <Earphones />,
      },
      {
        path: "earphones",
        element: <Earphones />,
      },
      {
        path: "products/:productId",
        element: <ProductDetail />,
      },
      { path: "checkout", element: <Checkout /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
