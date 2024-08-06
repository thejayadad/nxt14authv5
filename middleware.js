
import { authconfig } from "./authconfig";
import NextAuth from "next-auth";

const {auth} = NextAuth(authconfig)

export default auth((req) => {
    const isLoggedIn = !!req.auth;
    console.log("Is logged in ", isLoggedIn)
})

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
  };