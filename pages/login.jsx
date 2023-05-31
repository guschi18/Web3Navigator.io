import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Link from "next/link";
import Image from "next/image";
import logo from "../images/logo.png";
import tor from "../images/tor.jpg";
import Head from 'next/head';


export default function Login() {
  const address = useAddress(); // Get the user's address

  return (
      <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
        <Head>
        <title>Shita-Kiri-Suzume Blog</title>
        <meta name="description" content="Shita-Kiri-Suzume Blog" />
      </Head>
    <div className="lg:col-span-4 bg-gradient-to-r from-red-400 via-pink-800 to-red-500">
    <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
      <div className="bg-white p-2 rounded-xl">
        <Image className="w-44 rounded-xl object-cover lg:h-96 lg:w-72"
        src={tor}
        alt="NFT-Logo" />
        </div>
        <div className="text-center p-5 spaye-y-2">
          <h2 className="text-xl text-gray-300">
          Login Collection Exclusive Content
          </h2>
        </div>
    </div>
    </div>
    <div className="flex flex-1 flex-col p-12 lg:col-span-6">
    <header className="flex flex-col items-center justify-center sm:flex-row sm:items-center sm:justify-between">
  <h1 className="w-52 cursor-pointer text-2xl font-extralight sm:w-80">{" "}<Link href="/">
    <span className="font-extrabold underline decoration-black">Shita-Kiri-Suzume Blog</span></Link><br /> Login Page
  </h1>
  <ConnectWallet btnTitle="Login" className="!rounded-full !bg-black !py-2 !mt-4 !px-1 !text-sm !font-bold !text-white !lg:px-5 !lg:py-3 !lg:text-base"/>
</header>
      <hr className="my-2 border" />
      {address && (<p className="text-center text-lg text-black">Connected with wallet: {address.substring(0, 5)}...{address.substring(address.length - 5)}</p>)}
      <div className="mt-28 flex flex-1 flex-col items-center space-y-6 text-center lg:space-y-0 lg:justify-start">
      <div className="bg-gradient-to-bl from-black via-neutral-400 to-stone-100 p-2 rounded-xl">
      <Image className="w-auto rounded-xl object-cover lg:h-96 lg:w-76" 
      src={logo}
      alt="NFT-Monkey" />
      </div>
      <h1 className="text-3xl p-5 font-bold lg:text-4xl lg:font-extrabold">Shita-Kiri-Suzume Blog | <Link href="/exclusive-content">
        <span className="font-extrabold underline decoration-black">Exclusive Content</span></Link></h1>
        <p className="text-xl p-5 font-bold lg:text-xl lg:font-bold">Log in and Sign in with your NFT to access exclusive content🖤</p>
      </div>
      </div>
    </div>
  );
}