import Image from "next/image"
import ape from "../../images/ape.png"
import monkey from "../../images/monkey.png"
import { useAddress, useConnect, useDisconnect, metamaskWallet } from "@thirdweb-dev/react";
import Link from "next/link";


export default function NFTPage() {
  const connect = useConnect();
  const metamask = metamaskWallet();
  const address = useAddress();
  const disconnect = useDisconnect();

console.log(address)

  return (
    <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
    <div className=" lg:col-span-4 bg-gradient-to-br from-cyan-800 to-rose-500">
    <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen ">
      <div className="bg-gradient-to-br from-yellow-400 to-purple-600 p-2 rounded-xl">
        <Image className="w-44 rounded-xl object-cover lg:h-96 lg:w-72"
        src={ape}
        alt="NFT-Logo" />
        </div>
        <div className="text-center p-5 spaye-y-2">
          <h1 className="text-4xl font-bold text-white" >
            Web3Navigator
          </h1>
          <h2 className="text-xl text-gray-300">
            Login Collection zum Mitgliederbereich
          </h2>
        </div>
    </div>
    </div>

    <div className="flex flex-1 flex-col p-12 lg:col-span-6">
    {/*Header*/}
    <header className="flex items-center justify-between">
      <h1 className="w-52 cursor-pointer text-2xl font-extralight sm:w-80">Der {' '}<Link href="/">
        <span className="font-extrabold underline decoration-red-600/90">Web3Navigator</span></Link>{' '} NFT Marktplatz
      </h1>
      <button onClick={() => (address ? disconnect() : connect(metamask))} 
      className="rounded-full bg-red-600/90 py-2 px-1 text-sm font-bold text-white lg:px-5 lg:py-3 lg:text-base"  
      >
      {address ? 'Logout Metamask' : 'Login MetaMask'}
      </button>
    </header>

    <hr className="my-2 border" />
    {address && (<p className="text-center text-lg text-red-600/90">Du bist eingeloggt mit dem Wallet{address.substring(0, 5)}...{address.substring(address.length - 5)}</p>)}
    {/*Content*/}
    <div className="mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:space-y-0 lg:justify-center">
      <Image className="w-80 object-cover pb-10 lg:h-72" 
      src={monkey}
      alt="NFT-Monkey" />
      <h1 className="text-3xl font-bold lg:text-5xl lg:font-extrabold"> Der Web3Navigator Ape Club | NFT Drop</h1>

    <p className="pt-2 text-xl text-green-500"> 21 / 1000 NFT's gemintet</p>

    </div>

    {/*Mintbutton*/}
        <button className="mt-10 h-16 bg-red-600/90 w-full text-white rounded-full font-bold">
          Mint NFT (0.01 ETH)
        </button>
      </div>
    </div>
  )
}