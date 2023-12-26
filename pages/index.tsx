import React, { useState } from "react";
import { useRouter } from "next/router";

const UnauthorizedPage = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center transition-transform duration-300 transform hover:translate-x-4">
        <h1 className="text-4xl font-bold text-red-500 mb-4">
          Unauthorized Access
        </h1>
        <p className="text-gray-600 mb-8">
          Oops! It seems like you don't have permission to access this page.
        </p>
        <button
          onClick={() => {
            router.push("/login");
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default UnauthorizedPage;
