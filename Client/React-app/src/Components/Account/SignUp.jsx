import React from "react";
import sign from "../../Assets/Sign.png";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { HideLoading, ShowLoading } from "../../Redux/LoaderReducer";
import {
  SetAuthenticated,
  SetUnauthenticated,
} from "../../Redux/AuthenticateReducer";

function SignUp() {
  const dispatch = useDispatch();
  const navigateto = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = async (values) => {
    try {
      console.log(values);
      dispatch(ShowLoading());

      const response = await axios.post(
        "http://localhost:4000/register",
        values
      );

      dispatch(SetAuthenticated());
      dispatch(HideLoading());

      if (response.data.success) {
        toast.success(response.data.message);
        toast("Redirecting to the Login Page");
        navigateto("/Login");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 lg:px-0">
        <div className="flex flex-col py-4">
          <div className="flex items-center justify-between font-poppins">
            <div className="font-bold text-2xl">Healio+</div>
            <div>
              <Link to="/Login">
                <button className="bg-[#37BFC4] hover:bg-[#ff7974] text-white font-bold py-2 px-4 text-sm rounded">
                  Go Back
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="lg:flex lg:flex-row items-center justify-between lg:mx-20">
          <div className="hidden lg:block">
            <img
              src={sign}
              style={{ height: "550px", width: "550px" }}
              className="mt-10"
            />
          </div>

          <div className="flex flex-col items-center justify-center mt-14 rounded-lg w-full max-w-md">
            <h1 className="text-center font-poppins font-bold text-2xl mb-8">
              Create an Account
            </h1>

            <form
              className="w-full max-w-sm font-poppins items-center justify-center "
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="mb-4">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  className="border border-b-4 border-b-[#37BFC4]  focus:border focus:border-zinc-500 focus:border-b-4 focus:border-b-[#267c7e]  rounded w-full py-3 px-3 text-black focus:outline-none focus:shadow-outline"
                  {...register("name", {
                    required: "Name is required",
                    minLength: {
                      value: 3,
                      message: "Name must be at least 3 characters long",
                    },
                  })}
                />

                {errors.name && (
                  <p className="errorMsg">{errors.name.message}</p>
                )}
              </div>

              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="border border-b-4 border-b-[#37BFC4]  focus:border focus:border-zinc-500 focus:border-b-4 focus:border-b-[#267c7e] rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                      message: "Email is not Valid",
                    },
                  })}
                />
                {errors.email && (
                  <p className="errorMsg">{errors.email.message}</p>
                )}
              </div>

              <div className="mb-4">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  className="border border-b-4 border-b-[#37BFC4]  focus:border focus:border-zinc-500 focus:border-b-4 focus:border-b-[#267c7e]  rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters long",
                    },
                  })}
                />
                {errors.password && (
                  <p className="errorMsg">{errors.password.message}</p>
                )}
              </div>

              <div className="mb-4">
                <input
                  type="password"
                  id="ConfirmPassword"
                  name="ConfirmPassword"
                  placeholder="Confirm Password"
                  className="border border-b-4 border-b-[#37BFC4]  focus:border focus:border-zinc-500 focus:border-b-4 focus:border-b-[#267c7e]  rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  {...register("ConfirmPassword", {
                    required: "Confirm Password is required",
                    validate: (value) =>
                      value === watch("password") || "Passwords Do Not Match",
                  })}
                />
                {errors.ConfirmPassword && (
                  <p className="errorMsg">{errors.ConfirmPassword.message}</p>
                )}
              </div>

              {/* <div className="flex items-center justify-center">
                  <button
                    type="submit"
                    className="hover:bg-[#319fa1] text-black font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline my-4 border border-b-2 border-[#37BFC4]"
                  >
                    Upload Your Photo
                  </button>
                </div> */}

              {/* <div className="flex flex-row items-center justify-center">
                  <label>Are you a</label>
                  <div>
                    <input type="radio" className="ml-4" />
                    <span className="ml-2 ">Doctor</span>
                  </div>
                  <div>
                    <input type="radio" className="ml-4" />
                    <span className="ml-2 ">Patient</span>
                  </div>
                </div> */}

              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="bg-[#37BFC4] hover:bg-[#ff7974] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-4"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <span className=" text-sm lg:text-base text-black mt-4 space-x-10 font-poppins text-center">
              Already Have an Account?{" "}
              <Link to="/Login">
                <span className="text-[#ff7974]">Login Now!</span>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
