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
  <div
    className="min-h-screen bg-cover bg-center flex items-center justify-center relative"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600')",
    }}
  >
    {/* Overlay */}
    {/* <div className="absolute inset-0 bg-black/50"></div> */}

    {/* Signup Form */}
    <form
      onSubmit={SignupHandler}
      className="relative z-10 w-[420px] rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl shadow-2xl"
    >
      <h2 className="mb-2 text-center text-4xl font-bold text-white">
        Create Account
      </h2>

      <p className="mb-8 text-center text-gray-200">
        Join us and get started today
      </p>

      {/* First Name */}
      <div className="mb-4">
        <label className="mb-2 block text-white font-medium">
          First Name
        </label>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full rounded-xl border border-white/30 bg-white/20 p-3 text-white placeholder:text-gray-300 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400"
          value={signupVal.firstName}
          onChange={(e) =>
            setSignupVal({
              ...signupVal,
              firstName: e.target.value,
            })
          }
        />
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="mb-2 block text-white font-medium">
          Email
        </label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full rounded-xl border border-white/30 bg-white/20 p-3 text-white placeholder:text-gray-300 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400"
          value={signupVal.email}
          onChange={(e) =>
            setSignupVal({
              ...signupVal,
              email: e.target.value,
            })
          }
        />
      </div>

      {/* Password */}
      <div className="mb-4">
        <label className="mb-2 block text-white font-medium">
          Password
        </label>
        <input
          type="password"
          placeholder="Create a password"
          className="w-full rounded-xl border border-white/30 bg-white/20 p-3 text-white placeholder:text-gray-300 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400"
          value={signupVal.password}
          onChange={(e) =>
            setSignupVal({
              ...signupVal,
              password: e.target.value,
            })
          }
        />
      </div>

      {/* Phone */}
      <div className="mb-6">
        <label className="mb-2 block text-white font-medium">
          Phone Number
        </label>
        <input
          type="tel"
          placeholder="Enter phone number"
          className="w-full rounded-xl border border-white/30 bg-white/20 p-3 text-white placeholder:text-gray-300 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400"
          value={signupVal.phone}
          onChange={(e) =>
            setSignupVal({
              ...signupVal,
              phone: e.target.value,
            })
          }
        />
      </div>

      {/* Signup Button */}
      <button
        type="submit"
        className="w-full rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
      >
        Create Account
      </button>

      {/* Login Link */}
      <p className="mt-6 text-center text-gray-200">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-semibold text-yellow-300 hover:text-yellow-400"
        >
          Login
        </Link>
      </p>
    </form>
  </div>
);
};

export default Signup;