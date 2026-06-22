import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState({
    username: "",
    password: "",
  });

  async function HandleLogin(e) {
    e.preventDefault();

    try {
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });

      const data = await res.json();

      console.log(data);

      if (res.ok) {
        localStorage.setItem("token", data.accessToken);
        localStorage.setItem("username", data.username);

        alert("Login Successful!");
        navigate("/");
      } else {
        alert(data.message || "Login Failed");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  }

  const imageUrl =
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe";

 return (
  <div
    style={{
      backgroundImage: `url(${imageUrl})`,
    }}
    className="min-h-screen bg-cover bg-center flex items-center justify-center"
  >
    <div className="absolute inset-0 bg-black/40"></div>

    <form
      onSubmit={HandleLogin}
      className="relative z-10 w-[400px] rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl shadow-2xl"
    >
      <h1 className="mb-2 text-center text-4xl font-bold text-white">
        Welcome Back
      </h1>

      <p className="mb-8 text-center text-gray-200">
        Login to continue
      </p>

      {/* Username */}
      <div className="mb-5">
        <label className="mb-2 block text-sm font-medium text-white">
          Username
        </label>

        <input
          type="text"
          placeholder="Enter username"
          value={value.username}
          onChange={(e) =>
            setValue({ ...value, username: e.target.value })
          }
          className="w-full rounded-xl border border-white/30 bg-white/20 p-3 text-white placeholder:text-gray-300 outline-none transition-all focus:border-blue-400 focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Password */}
      <div className="mb-6">
        <label className="mb-2 block text-sm font-medium text-white">
          Password
        </label>

        <input
          type="password"
          placeholder="Enter password"
          value={value.password}
          onChange={(e) =>
            setValue({ ...value, password: e.target.value })
          }
          className="w-full rounded-xl border border-white/30 bg-white/20 p-3 text-white placeholder:text-gray-300 outline-none transition-all focus:border-blue-400 focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Login Button */}
      <button
        type="submit"
        className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
      >
        Login
      </button>

      {/* Signup Link */}
      <p className="mt-6 text-center text-gray-200">
        Don't have an account?{" "}
        <Link
          to="/Signup"
          className="font-semibold text-yellow-300 transition hover:text-yellow-400"
        >
          Signup
        </Link>
      </p>
    </form>
  </div>
);
};

export default Login;