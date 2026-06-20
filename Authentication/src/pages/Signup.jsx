import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [signupVal, setSignupVal] = useState({
    firstName: "",
    email: "",
    password: "",
    phone: "",
  });

  const SignupHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupVal),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Signup Successful!");
        console.log(data);

        navigate("/login");
      } else {
        alert("Signup Failed");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={SignupHandler}
        className="flex flex-col gap-4 border p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold text-center">Signup</h2>

        <input
          type="text"
          placeholder="First Name"
          className="border p-2 rounded"
          value={signupVal.firstName}
          onChange={(e) =>
            setSignupVal({ ...signupVal, firstName: e.target.value })
          }
        />

        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded"
          value={signupVal.email}
          onChange={(e) =>
            setSignupVal({ ...signupVal, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 rounded"
          value={signupVal.password}
          onChange={(e) =>
            setSignupVal({ ...signupVal, password: e.target.value })
          }
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="border p-2 rounded"
          value={signupVal.phone}
          onChange={(e) =>
            setSignupVal({ ...signupVal, phone: e.target.value })
          }
        />

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded"
        >
          Signup
        </button>

        <p>
          Already have an account?{" "}
          <Link to="/login" className="text-pink-600">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;