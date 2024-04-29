import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Helmet } from "react-helmet";

const Root = () => {
  return (
    <div>
      <Helmet>
        <title> Home | CraftyFiber.com </title>
      </Helmet>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
