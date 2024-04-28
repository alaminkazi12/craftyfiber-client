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
import CraftDetail from "../components/CraftsItem/CraftDetail";
import PrivateRouter from "./PrivateRouter";
import MyCraft from "../pages/MyCraft/MyCraft";
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
        element: (
          <PrivateRouter>
            <Profile></Profile>
          </PrivateRouter>
        ),
      },
      {
        path: "/update_profile",
        element: (
          <PrivateRouter>
            <UpdateProfile></UpdateProfile>
          </PrivateRouter>
        ),
      },
      {
        path: "/addcraft",
        element: (
          <PrivateRouter>
            <AddCraft></AddCraft>
          </PrivateRouter>
        ),
      },
      {
        path: "/mycraft/:email",
        element: (
          <PrivateRouter>
            <MyCraft></MyCraft>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/usercraft/${params.email}`),
      },
      {
        path: "/craft/:id",
        element: (
          <PrivateRouter>
            <CraftDetail></CraftDetail>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/craft/${params.id}`),
      },
      {
        path: "/dcraft/:id",
        element: (
          <PrivateRouter>
            <UpdateCraft></UpdateCraft>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/craft/${params.id}`),
      },
    ],
  },
]);

export default router;
