import { useState, useEffect } from "react";

// Custom hook for handling cookies
const useCookies = () => {
  const [cookies, setCookies] = useState("");

  useEffect(() => {
    setCookies(typeof window !== "undefined" ? document.cookie : "");
  }, []); // Run this effect only once on mount

  const setCookieAndUpdate = (name, value, days) => {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + days);

    const serializedValue = JSON.stringify(value);

    const cookieString = `${name}=${encodeURIComponent(
      serializedValue
    )}; expires=${expirationDate.toUTCString()}; path=/`;

    document.cookie = cookieString;
    setCookies(typeof window !== "undefined" ? document.cookie : "");
  };

  const getCookieByName = (name) => {
    const cookiesArray =
      typeof window !== "undefined" ? document.cookie.split("; ") : [];

    for (const cookie of cookiesArray) {
      const [cookieName, cookieValue] = cookie.split("=");

      if (cookieName === name) {
        try {
          const deserializedValue = JSON.parse(decodeURIComponent(cookieValue));
          return deserializedValue;
        } catch (error) {
          return null;
        }
      }
    }

    return null;
  };

  const deleteCookieAndUpdate = (name) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    setCookies(typeof window !== "undefined" ? document.cookie : "");
  };

  return {
    cookies,
    setCookie: setCookieAndUpdate,
    getCookie: getCookieByName,
    deleteCookie: deleteCookieAndUpdate,
  };
};

export default useCookies;

// usage

// pages/index.tsx

// import React from 'react';
// import useCookies from '../hooks/useCookies';

// const HomePage = () => {
//   const { cookies, setCookie, getCookie, deleteCookie } = useCookies();

//   const handleSetCookie = () => {
//     setCookie('user', 'JohnDoe', 7);
//   };

//   const handleGetCookie = () => {
//     const user = getCookie('user');
//     console.log('User:', user);
//   };

//   const handleDeleteCookie = () => {
//     deleteCookie('user');
//   };

//   return (
//     <div>
//       <h1>Hello, Next.js TypeScript!</h1>
//       <button onClick={handleSetCookie}>Set Cookie</button>
//       <button onClick={handleGetCookie}>Get Cookie</button>
//       <button onClick={handleDeleteCookie}>Delete Cookie</button>
//       <p>Current Cookies: {cookies}</p>
//     </div>
//   );
// };

// export default HomePage;
