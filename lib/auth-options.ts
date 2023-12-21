import { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { getNextAuthSecrets } from "./secrets";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "./db";
import { getServerSession } from "next-auth/next";
const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: getNextAuthSecrets().githubClientId,
      clientSecret: getNextAuthSecrets().githubClientSecret,
    }),
  ],
  callbacks: {
    jwt: async ({ user, token, session }) => {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (token) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: getNextAuthSecrets().secret,
  pages: {
    signIn: "/auth/login",
    signOut: "/user/logout",
  },
};

const getAuthSession = async () => {
  const session = await getServerSession(authOptions);
  return {session};
};

export { authOptions, getAuthSession };
