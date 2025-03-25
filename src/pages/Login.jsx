import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    setErrorMessage(""); 
    try {
      const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
      localStorage.setItem("userEmail", userCredential.user.email);
      
      alert("Login Successful!");
      navigate("/");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div>
      <div className="container p-4 mb-5 mt-4">
        <div className="row justify-content-center">
          <div className="col-md-4"></div>
          <div className="col-md-4 bg-white mt-5 rounded-3 p-4 shadow">
            <h2 className="text-center mb-4 mt-4">Login Now</h2>
            {errorMessage && <p className="text-danger text-center">{errorMessage}</p>}
            <form onSubmit={handleSubmit(onSubmit)}>
              <label className="form-label" htmlFor="email">
                Email:
              </label>
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  className="form-control bg-transparent"
                />
                {errors.email && (
                  <p className="text-danger">{errors.email.message}</p>
                )}
              </div>
              <label className="form-label" htmlFor="password">
                Password:
              </label>
              <div className="form-outline mb-4 position-relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  {...register("password")}
                  className="form-control bg-transparent"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="position-absolute top-50 end-0 translate-middle-y pe-3 cursor-pointer"
                >
                  {showPassword ? "Hide" : "Show"}
                </span>
                {errors.password && (
                  <p className="text-danger">{errors.password.message}</p>
                )}
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-success text-white btn-block mb-4"
                >
                  Sign in
                </button>
              </div>
              <div className="text-center pb-3">
                <p>
                  Not a member?{" "}
                  <Link to="/signup" className="text-primary">
                    Signup
                  </Link>
                </p>
                <p>
                  <Link to="/forgot-password" className="text-danger">
                    Forgot Password?
                  </Link>
                </p>
              </div>
            </form>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
