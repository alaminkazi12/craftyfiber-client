import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="mt-10">
      <h2 className="  lg:text-4xl font-bold text-center text-[#B08D74]">
        Login
      </h2>
      <div className="flex items-center justify-center gap-10 mt-10">
        <button className="btn btn-circle border-2 border-gray-400 text-3xl">
          <FcGoogle />
        </button>
        <button className="btn btn-circle border-2 border-gray-400 text-3xl">
          <FaGithub />
        </button>
      </div>
      <div className="divider">Or</div>
      <form className="card-body md:w-1/2 md:mx-auto bg-slate-100 rounded-2xl mt-10">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            name="email"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered"
            name="password"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#B08D74] ">Sign In</button>
        </div>
      </form>
      <p className="text-center">
        New to CraftyFiber.com? Quickly{" "}
        <Link to="/sign_up" className="text-[#B08D74] font-bold">
          Sign Up
        </Link>{" "}
        for an account now.
      </p>
    </div>
  );
};

export default Login;
