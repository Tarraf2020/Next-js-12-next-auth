import React from "react";
import { useRouter } from "next/router";
import NavBar from "@/components/SideNav";
import AdminNav from "@/components/AdminNav";
import useCookies from "../../hooks/useCookies";

const Layout = ({ children }) => {
  const router = useRouter();

  const { getCookie } = useCookies();
  // console.log({ JWT: getCookie("jwt-token") });

  return (
    <>
      {router.pathname.includes("/dashboard") ? (
        <NavBar>{children}</NavBar>
      ) : router.pathname.includes("/superAdmin") ? (
        <AdminNav>{children}</AdminNav>
      ) : (
        children
      )}
    </>
  );
};

export default Layout;
