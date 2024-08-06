import NextAuth from "next-auth"
import authconfig from "./authconfig"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "./lib/prisma"
import Google from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";


const login = async (credentials) => {
    try {
        const user = await prisma.user.findUnique({
            where:{
                email: credentials.email
            }
        })
        if(!user){
            throw new Error("Wrong Credentials")
        }
        const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            user.password
          );
      
          if (!isPasswordCorrect) throw new Error("Wrong credentials!");
      
          return user;
    } catch (error) {
        console.log("Login Error " + error);
        throw new Error("Failed to login!");
    }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authconfig,
  adapter: PrismaAdapter(prisma),
  session: {strategy: "jwt"},
  providers: [Google ({
    allowDangerousEmailAccountLinking: true

  }),
    CredentialsProvider({
        async authorize(credentials){
             try {
                const user = await login(credentials);
                console.log("User LoggedIn " + user)
                return user;
             } catch (error) {
                console.log("Provider Error " + error)
                return null
             }
        }
    })
  ],
  callbacks:{
    async session({token, session}){
      console.log({
        sessionToke: token
      })
      if(token.sub && session.user){
        session.user.id = token.sub;
      }
      if(token.role && session.user){
        session.user.role = token.role
      }
      return session  
    },
    async jwt({token}){
      if(!token.sub) return token;
      const existingUser = await prisma.user.findUnique({
        where:{
          id: token.sub
        }
      })
      if(!existingUser) return token
      token.role = existingUser.role
      return token
    }
  }
//   callbacks: {
//     async session({token, session}){
//         if(token.sub && session.user){
//             session.user.id = token.sub
//         }
//         if(token.role && session.user){
//             session.user.role = token.role
//         }
//         return session
//     }
//   }
})