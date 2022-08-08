import NextAuth from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify"
export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        SpotifyProvider({
            clientId: 'bb0b27767e2b46908699517c9c4e1606',
            clientSecret: '4e636bd424884c38bff59ebe5e12685f',
        }),
        // ...add more providers here
    ],
    pages: {
        signIn: '/auth/signin',
    }
})