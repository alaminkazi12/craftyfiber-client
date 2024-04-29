import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="mt-10">
      <Helmet>
        <title>Profile | CraftyFiber.com</title>
      </Helmet>
      <h2 className="  lg:text-3xl font-bold text-center text-[#B08D74]">
        User Profile
      </h2>
      <div className="flex flex-col items-center mt-10 space-y-4">
        <div className="avatar">
          <div className=" w-12 md:w-24 rounded-full">
            <img src={user?.photoURL} />
          </div>
        </div>
        <p>
          <span className="font-bold">Name:</span> {user?.displayName}
        </p>
        <p>
          <span className="font-bold">Email:</span> {user?.email}
        </p>
        <Link to="/update_profile">
          <button className="btn bg-[#B08D74] text-white">
            Update Profile
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
