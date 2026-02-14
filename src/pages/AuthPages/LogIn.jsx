import React from "react";
import { Link, useLocation, useNavigate } from "react-router";
import authIMG from "../../assets/authImage.png";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const LogIn = () => {
  const { LoginUser, googleLogin } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleLogin = async (data) => {
    const { email, password } = data;
    const result = await LoginUser(email, password);
    if (result.user) {
      navigate(location?.state || "/")
      toast.success("User LogIn Successful!")
    }
    reset();
  }

  // google loin functionality
  const handleGoogleLog = async () => {
    const result = await googleLogin();
    if (result?.user) {
      await axiosSecure.post("/users", {
      name: result?.user?.displayName,
      email: result?.user?.email,
      image: result?.user?.photoURL
    })
      navigate(location?.state || "/")
      toast.success("Register using Google Successful!")
    } else {
      toast.error("Registration failed!")
    }
  }


  return (
    <section className="min-h-screen bg-white mt-10">
      <div className="grid lg:grid-cols-2 min-h-screen">
        <div className="flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold text-[#0b3b43]">Welcome Back</h2>
            <p className="text-sm text-gray-500 mt-1">Login with ZapShift</p>

            <form
              onSubmit={handleSubmit(handleLogin)}
              className="mt-6 space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", { required: "Email is required!" })}
                  placeholder="Email"
                  className="input input-bordered w-full mt-1"
                />
              </div>
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Password
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required!",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters long!",
                    },
                    pattern: {
                      value: /^(?=.*[A-Z])(?=.*\d).+$/,
                      message:
                        "Password must have 1 Uppercase and 1 integer at-least",
                    },
                  })}
                  placeholder="Password"
                  className="input input-bordered w-full mt-1"
                />
              </div>
              {errors.password && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}

              <button
                type="button"
                className="text-sm text-gray-500 hover:text-[#0b5b6a] text-left">
                Forget Password?
              </button>

              <button className="btn w-full bg-[#cfe86b] border-0 text-[#0b3b43] hover:bg-[#b8d95f]">
                Login
              </button>
            </form>

            <p className="text-sm text-gray-500 mt-3">
              Don’t have any account?{" "}
              <Link to="/register" state={location?.state} className="text-[#0b5b6a] font-semibold">
                Register
              </Link>
            </p>

            <div className="divider text-xs text-gray-400">Or</div>

            <button
              onClick={handleGoogleLog}
              className="btn btn-outline w-full">
              <span className="text-lg">G</span>
              Login with google
            </button>
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-center bg-[#f6f9e8]">
          <img src={authIMG} alt="Login illustration" className="w-3/5" />
        </div>
      </div>
    </section>
  );
};

export default LogIn;
