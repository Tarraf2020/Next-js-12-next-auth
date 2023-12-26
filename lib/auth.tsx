// import { getSession } from 'next-auth/client';

// export const withAuth = (handler) => async (context) => {
//   const session = await getSession(context);

//   if (!session) {
//     return {
//       redirect: {
//         destination: '/test', // Redirect to the login page
//         permanent: false,
//       },
//     };
//   }

//   return handler(context);
// };

// -----------------------------------------------------------------------

// import React, { useState, useEffect } from 'react';
// import { getSession } from 'next-auth/client';

// export const withAuth = (handler) => (PageComponent) => {
//   const Wrapper = (props) => {
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//       const checkAuth = async () => {
//         const session = await getSession();

//         if (!session) {
//           // Redirect to login page if not authenticated
//           window.location.href = '/login';
//         } else {
//           setLoading(false);
//         }
//       };

//       checkAuth();
//     }, []);

//     return loading ? <div>Loading...</div> : <PageComponent {...props} />
//   };

//   return Wrapper;
// };

// ----------------------------------------------------------------

// import React, { useState, useEffect } from "react";
// import { getSession } from "next-auth/client";
// import FullPageLoading from "../components/FullpageLoading";

// export const withAuth =
//   (requiredRoles = []) =>
//   (PageComponent) => {

// // usage of this function : export default withAuth(["user"])(categories);

//     const Wrapper = (props) => {
//       const [loading, setLoading] = useState(true);
//       const [isAuthorized, setIsAuthorized] = useState(false);

//       useEffect(() => {
//         const checkAuth = async () => {
//           const session: any = await getSession();

//           if (!session) {

//             // Redirect to login page if not authenticated
//             window.location.href = "/login";
//           } else {
//             const userRole = (session?.data.data.user.role || null) as
//               | string
//               | null;

//             if (
//               requiredRoles.length === 0 ||
//               requiredRoles.includes(userRole)
//             ) {
//               // User has the required role(s)
//               setIsAuthorized(true);
//             } else {
//               // Redirect to unauthorized page or handle accordingly
//               window.location.href = "/login";
//             }

//             setLoading(false);
//           }
//         };

//         checkAuth();
//       }, [requiredRoles]);

//       return loading ? (
//         <FullPageLoading />
//       ) : isAuthorized ? (
//         <PageComponent {...props} />
//       ) : null;
//     };

//     return Wrapper;
//   };

