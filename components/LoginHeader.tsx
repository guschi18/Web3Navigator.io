import Link from "next/link";
import logo from "../images/logo.png"
import Image from 'next/image'



function LoginHeader() {
  return (
    <header className='flex justify-around p-5 mx-auto'>
     <div className='flex items-center space-x-5'>
        <Link href="/mitgliederbereich">
            <Image
            className="w-44 object-contain cursor-pointer" 
            src={logo}
            alt="logo" />
        </Link>
        </div>
        <div className="md:inline-flex items-center space-x-5">
        <Link href="/"><h3 className='text-white bg-gradient-to-br from-black via-cyan-900 to-green-800  px-4 py-1 rounded-full cursor-pointer'>Ausloggen</h3></Link>
          <Link href="https://twitter.com/web3lernen"><h3 className='text-white bg-blue-600 px-4 py-1 rounded-full cursor-pointer'>Twitter</h3></Link>
          <Link href="https://www.instagram.com/web3navigator.io/"><h3 className='text-white bg-gradient-to-r from-orange-500 to-pink-500 px-4 py-1 rounded-full cursor-pointer'>Instagram</h3></Link>
        </div>
    </header>
  );
}

export default LoginHeader;