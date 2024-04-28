import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import ErrorPage from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Gallery from "../pages/Gallery/Gallery";
import Shop from "../pages/Shop/Shop";
import About from "../pages/About/About";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";
import Profile from "../pages/Auth/Profile";
import UpdateProfile from "../pages/Auth/UpdateProfile";
import AddCraft from "../pages/AddCraft/AddCraft";
import UpdateCraft from "../pages/UpdateCraft/UpdateCraft";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/craft"),
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/sign_up",
        element: <SignUp></SignUp>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/update_profile",
        element: <UpdateProfile></UpdateProfile>,
      },
      {
        path: "/addcraft",
        element: <AddCraft></AddCraft>,
      },
      {
        path: "/updatecraft",
        element: <UpdateCraft></UpdateCraft>,
      },
    ],
  },
]);

export default router;
