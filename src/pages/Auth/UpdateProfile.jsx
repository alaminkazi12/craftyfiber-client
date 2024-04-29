import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { Helmet } from "react-helmet";

const UpdateProfile = () => {
  const { updateUserProfile } = useContext(AuthContext);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const profilePhoto = form.get("photoUrl");
    console.log(name, profilePhoto);

    // update profile
    updateUserProfile(name, profilePhoto).then(() => {});

    // reload
    location.reload();
  };

  return (
    <div className="mt-12">
      <Helmet>
        <title>UpdateProfile | CraftyFiber.com</title>
      </Helmet>
      <h2 className="  lg:text-3xl font-bold text-center text-[#B08D74]">
        Update Profile Information
      </h2>
      <form
        onSubmit={handleUpdateProfile}
        className="card-body md:w-1/2 md:mx-auto bg-slate-100 rounded-2xl mt-10"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Profile Photo</span>
          </label>
          <input
            type="text"
            placeholder="Photo Url"
            className="input input-bordered"
            name="photoUrl"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#B08D74] text-white">
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
