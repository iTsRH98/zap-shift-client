import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";
import axios from "axios";
import useAxios from "../../../hooks/useAxios/useAxios";

const Register = () => {
  const { createUser, updateUserProfile } = useAuth();
  const [profilePic, setProfilePic] = useState("");
  const axiosInstance = useAxios();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then(async (result) => {
        console.log(result);

        const userInfo = {
          email: data.email,
          role: "admin",
          created_at: new Date().toISOString(),
          last_log_in: new Date().toISOString(),
        };

        const userRes = await axiosInstance.post(`/users`, userInfo);

        const userProfile = {
          displayName: data.name,
          photoURL: profilePic,
        };
        updateUserProfile(userProfile)
          .then(() => {
            console.log("profile updated");
            navigate(from);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleImageUpload = async (e) => {
    e.preventDefault();
    const image = e.target.files[0];
    const formData = new FormData();
    formData.append("image", image);
    const imageUploadUrl = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_image_upload_key
    }`;
    const res = await axios.post(imageUploadUrl, formData);

    setProfilePic(res.data.data.url);
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Create An Account!</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="fieldset">
            {/* name field */}
            <label className="label">Your Name</label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="input"
              placeholder="Write your name here"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-500">Name is required!</p>
            )}

            {/* image field */}
            <label className="label">Your Image</label>
            <input
              onChange={handleImageUpload}
              type="file"
              className="input"
              placeholder="Your profile picture"
            />

            {/* email field */}
            <label className="label">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input"
              placeholder="Email"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-500">Email is required!</p>
            )}

            {/* password field */}
            <label className="label">Password</label>
            <input
              type="password"
              {...register("password", { required: true, minLength: 6 })}
              className="input"
              placeholder="Password"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-500">Password is required!</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-500">
                Password must be 6 character or longer!
              </p>
            )}

            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>

            <button className="btn btn-primary text-black mt-4">
              Register
            </button>
          </fieldset>
          <p>
            <small>
              Already have an account?
              <Link className="btn btn-link" to={`/login`}>
                Login
              </Link>
            </small>
          </p>
        </form>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Register;
