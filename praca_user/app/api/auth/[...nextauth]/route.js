import NextAuth  from "next-auth/next/index.js";
import { CredentialsProvider } from "next-auth/providers/credentials.js";

const NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                telefone: { label: 'telefone', type: 'tel' },
                password: { label: 'password', type: 'password' }
            },

            async authorize(credentials, req) {
                const response = await fetch('url', {
                    method: 'POST',
                    headers:{
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: credentials?.email,
                        password: credentials?.password
                    })
                })
                const user = await response.json()
                if (user && response.ok) {
                    return user
                }
                return null
            }
        })
    ],
    pages:{
        login: '/login'
    }
}

const handler = NextAuth(NextAuthOptions)

export { handler as GET, handler as POST, NextAuthOptions}