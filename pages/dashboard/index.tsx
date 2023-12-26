import React from "react";
import useAuthServerSideProps from "../../hooks/useAuth";

function admin({ session }) {
  return <div>admin - {session.username}</div>;
}

export const getServerSideProps = useAuthServerSideProps(["user"]);

export default admin;
