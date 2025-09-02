import React from "react";
import { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AppContext";

const Login = () => {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setToken, setUser } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/api/users/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setToken(res.data.token);
      setUser(res.data.user);

      alert("login succesfully!");
      Navigate("/home");
      
    } catch (error) {
      alert(error.response?.data?.message || "login failed");
    }
  };
  return (
    <div className=" flex justify-center bg-gradient-to-r from-blue-100 via-white to-blue-50">
      <div className="flex flex-col w-80 h-90 mt-10 mb-10 p-5 gap-2 rounded-4xl bg-white shadow-2xl">
        <div>
          <h2 className="text-2xl text-center">Login</h2>
          <p className="text-sm text-center mb-4">
            Please login to book appointment
          </p>
        </div>

        <label htmlFor="fullname">Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          value={email}
          id="email"
          placeholder="abc@gmail.com"
          className="border-2 rounded-md border-gray-300 p-1"
        />
        <label htmlFor="password">Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          value={password}
          id="password"
          placeholder="Enter your password"
          className="border-2 rounded-md border-gray-300 p-1"
        />

        <button
          onClick={handleLogin}
          className="bg-blue-400 text-white p-2 rounded-2xl mt-3 "
        >
          Login
        </button>
        <p className="text-sm text-center">
          New to Medicore?{" "}
          <a href="/create-account" className="text-blue-800 underline mb-5">
            Create account
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
