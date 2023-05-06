import Link from 'next/link';

function Footer() {
  return (
    <div>
    <div className="flex items-center justify-center pt-2 h-20 border-t border-black space-x-4" >
      <Link href="/ueberuns2"><h3 className="text-white bg-black px-4 py-1 rounded-full cursor-pointer opacity-90">Über uns</h3></Link>
          <Link href="/impressum2"><h3 className="text-white bg-black px-4 py-1 rounded-full cursor-pointer opacity-90">Impressum</h3></Link>
          <Link href="/datenschutz2"><h3 className="text-white bg-black px-4 py-1 rounded-full cursor-pointer opacity-90">Datenschutzerklärung</h3></Link>
    </div>
    <div><p className="content-center m-0 p-0 text-sm">© 2023 | HINWEIS ZUM URHEBERRECHT: Die Rechte an den Fotos und Texten liegen, so nicht anderweitig gekennzeichnet, bei Web3Navigator.io
    und dürfen nicht ohne unsere ausdrückliche Zustimmung verwendet werden.</p></div>
    </div>
  )
}

export default Footer