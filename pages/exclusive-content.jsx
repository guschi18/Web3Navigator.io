import React, { useEffect } from "react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { useLogout,useUser } from "@thirdweb-dev/react";
import { getUser } from "../auth.config";
import checkBalance from "../util/checkBalance";
import { useRouter } from "next/router";
import LoginBanner from "../components/LoginBanner"
import LoginFooter from "../components/LoginFooter"
import LoginHeader from '@/components/LoginHeader';
import { groq } from "next-sanity";
import { client } from "../lib/sanity.client";
import BlogList2 from "../components/BlogList2";
import Subscribe from "../components/Subscribe";
import Head from 'next/head';




function User({ posts }) {
  const { logout } = useLogout();
  const { isLoggedIn, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      router.push("/");
    }
  }, [isLoading, isLoggedIn, router]);

  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Shita-Kiri-Suzume Blog</title>
        <meta name="description" content="Shita-Kiri-Suzume Blog" />
      </Head>
     <LoginHeader />
      <LoginBanner />
      <BlogList2 posts={posts} />
      <Subscribe />
      <LoginFooter />
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps(context) {
  const user = await getUser(context.req);

  if (!user) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  // Ensure we are able to generate an auth token using our private key instantiated SDK
  const PRIVATE_KEY = process.env.THIRDWEB_AUTH_PRIVATE_KEY;
  if (!PRIVATE_KEY) {
    throw new Error("You need to add an PRIVATE_KEY environment variable.");
  }

  // Instantiate our SDK
  const sdk = ThirdwebSDK.fromPrivateKey(
    process.env.THIRDWEB_AUTH_PRIVATE_KEY,
    "mumbai"
  );

  // Check to see if the user has an NFT
  const hasNft = await checkBalance(sdk, user.address);

  // If they don't have an NFT, redirect them to the login page
  if (!hasNft) {
    console.log("User", user.address, "doesn't have an NFT! Redirecting...");
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  // Finally, return the props
  const query = groq`
  *[_type == "post" && references(categories._ref, "c6fb47ba-735f-4bd2-9ba0-bf4309037d2a", "690f205a-be57-4488-b8fd-f11452dbab33")] {
    ...,
    author->,
    categories[]->,
  }
  | order(_createdAt asc)
`;

  const posts = await client.fetch(query);

  return {
    props: { posts },
  };
}

export default User;
