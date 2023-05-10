import React from "react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { useLogout } from "@thirdweb-dev/react";
import { getUser } from "@/auth.config";
import checkBalance from "../../util/checkBalance";

export default function Home() {
    const logout = useLogout();

    return (
        <div>Moin Moin du bist ein Member
        <button onClick={logout}>Logout</button>
        </div>
    )



}

export async function getServerSideProps(context) {
    const user = await getUser(context.req);

    if (!user) {
        return {
            redirect: {
                destination: "/nftlogin/login",
                permanent: false,
            },
        };
    }

    const PRIVATE_KEY = process.env.THIRDWEB_AUTH_PRIVATE_KEY;
    if (!PRIVATE_KEY) {
        throw new Error("You need to add an PRIVATE_KEY enviroment variable.");
    }

    const sdk = ThirdwebSDK.fromPrivateKey(
        process.env.THIRDWEB_AUTH_PRIVATE_KEY,
        "mumbai"
    );

    const hasNft = await checkBalance(sdk, user.address);

    console.log("User", user.address, "doenst have an NFT! Redirecting...");
    if (!hasNft) {
        return {
            redirect: {
                destination: "login",
                permanent:false,
            },
        };
    }

    return {
        props: {},
    };

}