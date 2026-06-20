import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState({
    username: "",
    password: "",
  });

  const HandleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: value.username,
          password: value.password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.accessToken);
        localStorage.setItem("username", data.username);

        alert("Login Successful");
        navigate("/");
      } else {
        alert(data.message || "Invalid Credentials");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={HandleLogin}
        className="flex flex-col gap-4 border p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold text-center">Login</h2>

        <input
          type="text"
          placeholder="Username"
          className="border p-2 rounded"
          value={value.username}
          onChange={(e) =>
            setValue({ ...value, username: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 rounded"
          value={value.password}
          onChange={(e) =>
            setValue({ ...value, password: e.target.value })
          }
        />

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded"
        >
          Login
        </button>

        <p>
          Don't have an account?{" "}
          <Link to="/signup" className="text-pink-600">
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;