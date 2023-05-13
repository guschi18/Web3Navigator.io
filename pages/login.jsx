import { ConnectWallet, useAddress, Web3Button } from "@thirdweb-dev/react";
import Link from "next/link";
import Image from "next/image"
import monkey from "../images/monkey.png"
import logo from "../images/logo.png"


export default function Login() {
  const address = useAddress(); // Get the user's address

  return (
      <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
    <div className="lg:col-span-4 bg-gradient-to-br from-cyan-800 to-rose-500">
    <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
      <div className="bg-gradient-to-br from-yellow-400 to-purple-600 p-2 rounded-xl">
        <Image className="w-44 rounded-xl object-cover lg:h-96 lg:w-72"
        src={monkey}
        alt="NFT-Logo" />
        </div>
        <div className="text-center p-5 spaye-y-2">
          <h2 className="text-xl text-gray-300">
            Login Collection zum Mitgliederbereich
          </h2>
        </div>
    </div>
    </div>
    <div className="flex flex-1 flex-col p-12 lg:col-span-6">
    <header className="flex items-center justify-between">
      <h1 className="w-52 cursor-pointer text-2xl font-extralight sm:w-80">Die{" "}<Link href="/">
        <span className="font-extrabold underline decoration-red-600/90">Web3Navigator</span></Link><br /> Login Page
      </h1>
      <ConnectWallet btnTitle="Login" className="!rounded-full !bg-red-600/90 !py-2 !px-1 !text-sm !font-bold !text-white !lg:px-5 !lg:py-3 !lg:text-base"/>
      </header>
      <hr className="my-2 border" />
      {address && (<p className="text-center text-lg text-red-600/90">Du bist connected mit dem Wallet {address.substring(0, 5)}...{address.substring(address.length - 5)}</p>)}
      <div className="mt-28 flex flex-1 flex-col items-center space-y-6 text-center lg:space-y-0 lg:justify-start">
      <div className="bg-gradient-to-bl from-black via-neutral-400 to-stone-100 p-2 rounded-xl">
      <Image className="w-auto rounded-xl object-cover lg:h-auto" 
      src={logo}
      alt="NFT-Monkey" />
      </div>
      <h1 className="text-3xl p-5 font-bold lg:text-4xl lg:font-extrabold"> Der Web3Navigator Ape Club | <Link href="/mitgliederbereich">
        <span className="font-extrabold underline decoration-red-600/90">Mitgliederbereich</span></Link></h1>
        <p className="text-xl p-5 font-bold lg:text-xl lg:font-bold">Logge dich mit deinem NFT ein um exklusiven Content im <Link href="/mitgliederbereich">
        <span className="font-extrabold underline decoration-red-600/90">Mitgliederbereich</span></Link> zu erhalten🖤</p>
      </div>
      </div>
    </div>
  );
}