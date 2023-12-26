// components/LoginPage.js

import React, { useState } from "react";
import { useAppContext } from "@/context/state";
import { useAuth } from "../hooks/authHooks";

const LoginPage = () => {
  const appData = useAppContext();
  const { setUser } = appData;
  const { handleSignIn } = useAuth();

  const [formData, setFormData] = useState({
    username: "user1",
    password: "password1",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleSignIn(formData);
    } catch (error) {
      if (error) {
        switch (error.type) {
          case "CredentialsSignin":
            return "Invalid credentials.";
          default:
            return "Something went wrong.";
        }
      }
      throw error;
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-96 text-center">
        <h2 className="text-2xl font-semibold mb-6">Login Form</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="block text-gray-600 text-sm">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full p-2 border rounded"
              value={formData.username}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-600 text-sm">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-2 border rounded"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white p-2 rounded"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
