import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Define an array of users with their credentials
const users = [
  {
    id: 1,
    username: "user1",
    password: "password1",
    status: "success",
    role: "admin",
  },
  {
    id: 2,
    username: "user2",
    password: "password2",
    status: "success",
    role: "user",
  },
];

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        const { username, password } = credentials;
        console.log({ AUTH_SECRET: process.env.AUTH_SECRET });
        const user = users.find(
          (u) => u.username === username && u.password === password
        );

        if (user?.status === "success") {
          // Any object returned will be saved in `user` property of the JWT
          return Promise.resolve(user);
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          // return {status: user.data.status, error: user.data.message};
          throw new Error("Wrong credentials");
        }
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
  session: {
    jwt: true,
  },
  callbacks: {
    async session(session, user) {
      // Custom session logic if needed
      Object.assign(session, user);
      // console.log("session", { session, user });
      return session;
    },
    async jwt(token, user, account, profile, isNewUser) {
      // Custom JWT logic from your existing implementation
      // You might want to merge data from your existing JWT with the new user token

      Object.assign(token, user);
      return token;
    },
    async signIn({ user, account, profile }: any) {
      if (user) {
        return user;
      } else {
        return null;
      }
    },
  },
});
