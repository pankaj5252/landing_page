import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
});

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const auth = getAuth();

  const onSubmit = async (data) => {
    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      await sendPasswordResetEmail(auth, data.email);
      setMessage({
        type: "success",
        text: "Password reset link has been sent to your email.",
      });
    } catch (error) {
      let errorMsg = "Something went wrong. Please try again.";
      if (error.code === "auth/user-not-found") {
        errorMsg = "No user found with this email.";
      } else if (error.code === "auth/invalid-email") {
        errorMsg = "Invalid email format.";
      }
      setMessage({ type: "error", text: errorMsg });
    }

    setLoading(false);
  };

  return (
    <div className="container mt-5 p-4 shadow rounded bg-white" style={{ maxWidth: "28rem" }}>
      <h2 className="text-center fw-bold mb-3">Forgot Password</h2>

      {message.text && (
        <p className={`text-${message.type === "success" ? "success" : "danger"} text-center`}>
          {message.text}
        </p>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <input
            {...register("email")}
            type="email"
            className="form-control"
            placeholder="Enter your email"
          />
          {errors.email && <p className="text-danger">{errors.email.message}</p>}
        </div>

        <button type="submit" className="btn btn-success w-100 text-white" disabled={loading}>
          {loading ? "Sending..." : "Reset Password"}
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
