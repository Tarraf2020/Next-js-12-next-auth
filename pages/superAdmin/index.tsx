import React from "react";
import useAuthServerSideProps from "../../hooks/useAuth";

function superAdmin({ session }) {
  return <div>superAdmin - {session.username}</div>;
}

export const getServerSideProps = useAuthServerSideProps(["admin"]);

export default superAdmin;
