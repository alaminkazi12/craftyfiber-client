import { Link, NavLink } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
// import { useContext } from "react";
// import { AuthContext } from "../../Context/AuthProvider";

const Navbar = () => {
  //   const { user, logOut } = useContext(AuthContext);
  const links1 = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "font-bold border-2 border-[#C9B38F] rounded-xl px-5 py-2 text-[#3D5A80]"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/gallery"
          className={({ isActive }) =>
            isActive
              ? "font-bold border-2 border-[#C9B38F] rounded-xl px-5 py-2 text-[#3D5A80]"
              : ""
          }
        >
          Gallery
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            isActive
              ? "font-bold border-2 border-[#C9B38F] rounded-xl px-5 py-2 text-[#3D5A80]"
              : ""
          }
        >
          Shop
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "font-bold border-2 border-[#C9B38F] rounded-xl px-5 py-2 text-[#3D5A80]"
              : ""
          }
        >
          About Us
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 mt-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <TiThMenu />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links1}
          </ul>
        </div>
        <h1 className=" text-sm md:text-xl  lg:text-3xl cursor-pointer text-[#B08D74] font-semibold">
          <Link to="/">CraftyFiber.com</Link>
        </h1>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="flex gap-8">{links1}</ul>
      </div>
      <div className="navbar-end">
        {/* {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className=" w-8 md:w-10 rounded-full">
                <img
                  alt={user?.displayName || "Image Not Found"}
                  src={user?.photoURL || "https://i.ibb.co/bX4Qscm/images.png"}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  {user?.displayName || "Not Found"}
                </Link>
              </li>
              <li>
                <Link to="/update_profile">Update Profile</Link>
              </li>
              <li onClick={logOut}>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login" className="btn ">
            Login
          </Link>
        )} */}

        <Link to="/login" className="btn ">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
