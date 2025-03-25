import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";

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
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const auth = getAuth();
  const db = getFirestore();

  const checkEmailExists = async (email) => {
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("email", "==", email));
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
  };

  const onSubmit = async (data) => {
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const emailExists = await checkEmailExists(data.email);

      if (!emailExists) {
        setErrorMessage("No user found with this email.");
      } else {
        await sendPasswordResetEmail(auth, data.email);
        setSuccessMessage("Password reset link has been sent to your email.");
      }
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again.", error);

    }

    setLoading(false);
  };

  return (
    <div className="container mt-5 p-4 shadow rounded bg-white" style={{ maxWidth: "28rem" }}>
      <h2 className="text-center fw-bold mb-3">Forgot Password</h2>

      {successMessage && <p className="text-success text-center">{successMessage}</p>}
      {errorMessage && <p className="text-danger text-center">{errorMessage}</p>}

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
