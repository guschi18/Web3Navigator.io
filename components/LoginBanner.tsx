import Image from 'next/image';
import web3 from "../images/web3.jpg";


function Banner() {
  return (
    <div>

    <div className="flex justify-between items-center border-y border-black py-10 lg:py-0">
      <div className="px-10 space-y-5">
        <h1 className="text-5xl max-w-xl font-serif">
        Herzlich Willkommen im Mitgliederbereich von <span className="underline decoration-blck decoraction-4">WEB3 Navigator</span>   </h1>
        <h2 className="text-lg font-serif">Du hast dir erfolgreich dein erstes NFT gemintet und dich anschließend mit diesem eingeloggt!
        Im Mitgliederbereich warten weitere spannende Artikel auf dich, um das Web 3 zu erkunden.  </h2>
      </div>

    
    <Image className="hidden md:inline-flex object-scale-down h-54 w-96 mr-16 rounded-full" 
    src={web3} 
    alt="Bild Web3 Startseite" 
    />
    </div>
    </div>
  )
}

export default Banner