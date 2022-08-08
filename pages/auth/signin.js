import Head from "next/head";
import Image from "next/image";
import {getProviders, useSession} from "next-auth/react";

export default function Signin({providers}) {
    const {data} = useSession();

    return (
        <div className="bg-black h-screen flex flex-col items-center pt-40 space-y-8">
            <Head>
                <title>Login - Spotify</title>
            </Head>
            <Image
                height={250}
                width={600}
                src="https://rb.gy/y9mwtb"
                objectFit="contain"
                className="animate-pulse"
            />

            {Object.values(providers).map((provider) => (
                <div key={provider.name}>
                    <button
                        className="text-white py-4 px-6 rounded-full bg-[#1db954] transition duration-300 ease-out border border-transparent uppercase font-bold text-xs md:text-base tracking-wider hover:scale-105 hover:bg-[#0db146]"
                    >
                        Sign in with {provider.name}
                    </button>
                </div>
            ))}
        </div>
    )

}

export async function getServerSideProps() {
    const providers = await getProviders();
    return {
        props: {providers},
    };
}