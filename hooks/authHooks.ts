import { useRouter } from "next/router";
import { signIn, signOut, getSession } from "next-auth/client";

export const useAuth = () => {
  const router = useRouter();

  const handleSignIn = async (formData) => {
    try {
      const signInResponse = await signIn("credentials", {
        ...formData,
        redirect: false,
      });

      const session = await getSession();

      if (signInResponse?.error) {
        alert(signInResponse.error);
      } else {
        if (session?.role === "user") {
          router.push("/dashboard");
        } else if (session?.role === "admin") {
          router.push("/superAdmin");
        }
      }
    } catch (error) {
      console.error("Error during sign-in:", error);
      console.log("Error Response:", error?.response?.data);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut({ redirect: false });
      const session = await getSession();
      console.log("Session:", session);
      router.push("/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return { handleSignIn, handleSignOut };
};
