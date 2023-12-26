import axios from "axios";

// const getCookieByName = (name) => {
//   const cookiesArray =
//     typeof window !== "undefined" ? document.cookie.split("; ") : [];

//   for (const cookie of cookiesArray) {
//     const [cookieName, cookieValue] = cookie.split("=");

//     if (cookieName === name) {
//       try {
//         const deserializedValue = JSON.parse(decodeURIComponent(cookieValue));
//         return deserializedValue;
//       } catch (error) {
//         return null;
//       }
//     }
//   }

//   return null;
// };

const api = axios.create({
  baseURL: "http://localhost:8000/api/v1",
  timeout: 10000,
  withCredentials: true,
});

// Add a request interceptor to include the token in the headers
// api.interceptors.request.use(
//   (config) => {
//     const token = getCookieByName("jwt-token");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default api;
