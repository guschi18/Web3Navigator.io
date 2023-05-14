import Image from 'next/image';
import web3 from "../images/web3.jpg";


function Banner() {
  return (
    <div>

    <div className="flex justify-between items-center border-y border-black py-10 lg:py-0">
      <div className="px-10 space-y-5">
        <h1 className="text-5xl max-w-xl font-serif"><span className="underline decoraction-4">WEB3 Navigator</span>{" "} deine Platform, um sicher im Web 3 zu navigieren und Blockchain zu verstehen! </h1>
        <h2 className="text-lg font-serif">Entdecke die Welt vom Web3 und lerne, wie du Blockchain-Technologie und dezentrale Anwendungen nutzen kannst.</h2>
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