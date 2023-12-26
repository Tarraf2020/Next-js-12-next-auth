import { getSession } from "next-auth/client";

const useAuthServerSideProps =
  (requiredRoles = []) =>
  async (context) => {
    const session: any = await getSession(context);

    if (!session) {
      // Redirect to login page if not authenticated
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }

    const userRole: any = session?.role || null;
    // const userRole: any = session?.data?.data?.user?.role always use the question mark here

    if (requiredRoles.length > 0 && !requiredRoles.includes(userRole)) {
      // Redirect to unauthorized page or handle accordingly
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }

    return {
      props: {
        session,
      },
    };
  };

export default useAuthServerSideProps;
