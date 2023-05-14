import Link from 'next/link';
import btceth from "../images/btceth.png";
import Image from 'next/image'



const Footer = () => {
  return (
    <footer className="bg-white rounded-lg m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8" >
    <div className="sm:flex sm:items-center sm:justify-between">  
    <Link href="/" className="flex items-center mb-4 sm:mb-0">
            <Image
            className="w-44 object-contain cursor-pointer"
            src={btceth}
            alt="btc-eth Symbole" />
        </Link>
        <ul className="flex flex-wrap items-center mb-6 text-m font-medium sm:mb-0">
    <li><Link href="/roadmap"><h3 className="mr-4  text-yellow-500  hover:underline md:mr-6">Roadmap</h3></Link></li>
    <li><Link href="/ueberuns"><h3 className="mr-4 text-neutral-500 hover:underline md:mr-6">Über uns</h3></Link></li>
    <li><Link href="/impressum"><h3 className="mr-4 text-neutral-500 hover:underline md:mr-6">Impressum</h3></Link></li>
    <li><Link href="/datenschutz"><h3 className="mr-4 text-neutral-500 hover:underline md:mr-6">Datenschutzerklärung</h3></Link></li>
          </ul>
    </div>
    <hr className="my-6 border-black sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" className="hover:underline">Web3Navigator™</a>. Alle Rechte vorbehalten.</span>
    </div>
</footer>
)
}

export default Footer