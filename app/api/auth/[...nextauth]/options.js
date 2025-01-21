import NextAuth from "next-auth";
import { NextResponse } from "next/server";
import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';


export const options = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
       GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        CredentialsProvider({
            name: "Creditials",
            credentials: {
                username: {
                    type: "text",
                    label: "Username",
                    placeholder: "Enter Name"
                },
                password: {
                    type: "password",
                    label: "Password",
                    placeholder: "Enter Name"
                }
            },
            async authorize(credentials){
                const { username, password } = credentials;

                // Example authentication logic
                if (username === "admin" && password === "password123") {
                return { id: 1, name: "Admin User", email: "admin@example.com" };
                }
                throw new Error("Invalid credentials");
            }
        })
    ],
    
}