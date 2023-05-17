import Image from "next/image"
import w3nbtceth from "../../../images/w3nbtceth.png"
import Link from "next/link";




export default function Roadmap() {

return (
    <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
    <div className="lg:col-span-4 bg-gradient-to-tr from-amber-500 via-yellow-500 to-yellow-500">
    <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
      <div className="bg-gradient-to-br from-black to-stone-500 p-2 rounded-xl">
      <Link href="mitgliederbereich">
        <Image className="w-44 rounded-xl object-cover lg:h-96 lg:w-72"
        src={w3nbtceth}
        alt="NFT-Logo" /></Link>
        </div>
        <div className="text-center p-5 spaye-y-2">
          <h2 className="text-xl text-stone-500">
            Blog || Web3 Roadmap
          </h2>
        </div>
    </div>
    </div>
    <div className="flex flex-1 flex-col p-12 lg:col-span-6">
    <header className="flex items-center justify-between">
      <h1 className="w-52 cursor-pointer text-2xl font-extralight sm:w-80">Die{" "}<Link href="/mitgliederbereich">
        <span className="font-extrabold underline decoration-stone-500/90">Web3Navigator</span></Link> Roadmap
      </h1>
    </header>
    <hr className="my-2 border" />
    <div className="mt-4">
    <ol className="border-l-2 border-primary dark:border-primary-500">
 
    <li>
  <div className="flex-start flex items-center">
    <div className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-primary dark:bg-primary-500"></div>
    <h4 className="-mt-2 text-2xl font-semibold">The Journey Begins</h4>
  </div>
  <div className="mb-6 ml-6 pb-6">
    <br/>
    <h6 className="-mt-2 text-lg font-semibold">Grundlegende Projektstruktur und Integration von Next.js und Tailwind (Abgeschlossen)✔️</h6>
    <p className="text-sm text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600">April, 2023</p>
    <p className="mb-4 mt-2 text-neutral-600 dark:text-neutral-300">
      Das Web3Navigator-Projekt beginnt mit der Erstellung des Grundgerüsts unter Verwendung von Next.js und der Konfiguration von Tailwind als Styling-Framework. Die Verzeichnisstruktur wird festgelegt, Dateien werden eingerichtet und die Funktionalität der Grundstruktur wird getestet, um sicherzustellen, dass alles einwandfrei funktioniert.
    </p>
      <Link href="/" >
      <button
        type="button"
        className="inline-block rounded bg-primary px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        data-te-ripple-init
        data-te-ripple-color="light">
        Zur Startseite
      </button></Link>
    </div>
  </li>
  <li>
    <div className="flex-start flex items-center">
      <div
        className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-primary dark:bg-primary-500"></div>
      <h6 className="-mt-2 text-xl font-semibold">Integration des Blogs mit Sanity Backend (Abgeschlossen)✔️</h6>
    </div>
    <div className="mb-6 ml-6 pb-6">
    <p className="text-sm text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
        >April, 2023</p>
      <p className="mb-4 mt-2 text-neutral-600 dark:text-neutral-200">
      Ein Sanity-Projekt erstellen, es konfigurieren, dass Datenmodell für den Blogbeitrag &quot;Was ist das Web3?&quot; entwerfen und die Integration mit Next.js implementieren, um den Blogbeitrag anzuzeigen und sicherzustellen, dass alle Seiten und Komponenten funktionieren.
      </p>
      <Link href="post/was-ist-das-web3-ein-anfaengerleitfaden-zur-naechsten-generation-des-internets">
      <button
        type="button"
        className="inline-block rounded bg-primary px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        data-te-ripple-init
        data-te-ripple-color="light">
        Zum ersten Blog
      </button>
      </Link>
    </div>
  </li>
  <li>
    <div className="flex-start flex items-center">
      <div
        className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-primary dark:bg-primary-500"></div>
      <h6 className="-mt-2 text-xl font-semibold">Integration Thirdweb für sichere Web3-Authentifizierung (Abgeschlossen)✔️</h6>
    </div>
    <div className="mb-6 ml-6 pb-6">
    <p className="text-sm text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
        >April, 2023</p>
      <p className="mb-4 mt-2 text-neutral-600 dark:text-neutral-200">
      Web3-Authentifizierung für den Mitgliederbereich ermöglichen, durch Integration von Thirdweb, Implementierung der erforderlichen Funktionen und erfolgreich testen, um sicherzustellen, dass der Benutzer sich mit dem Web3Navigator NFT anmelden können.
      </p>
    </div>
  </li>
  <li>
    <div className="flex-start flex items-center">
      <div
        className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-primary dark:bg-primary-500"></div>
      <h6 className="-mt-2 text-xl font-semibold">Erstellung der NFT-Mint-Seite (Abgeschlossen)✔️</h6>
    </div>
    <div className="mb-6 ml-6 pb-6">
    <p className="text-sm text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
        >Mai, 2023</p>
      <p className="mb-4 mt-2 text-neutral-600 dark:text-neutral-200">
      Eine benutzerfreundliche NFT-Mint-Seite entwickeln, um Benutzern das Minten der Web3Navigator Login - NFTs zu ermöglichen. 
      Dafür erforderliche Technologien wie Thirdweb SDK, Smart Contracts und Blockchain-Interaktion integrieren, und umfangreiche Tests durchführen, um sicherzustellen, dass das NFT-Minting reibungslos funktioniert.
      </p>
      <Link href="nft/web3navigator">
      <button
        type="button"
        className="inline-block rounded bg-primary px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        data-te-ripple-init
        data-te-ripple-color="light">
        Zur Mint-Seite
      </button>
      </Link>
    </div>
  </li>
  <li>
    <div className="flex-start flex items-center">
      <div
        className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-primary dark:bg-primary-500"></div>
      <h6 className="-mt-2 text-xl font-semibold">Erstellung des Mitgliederbereichs mit NFT-Authentifizierung (Abgeschlossen)✔️</h6>
    </div>
    <div className="mb-6 ml-6 pb-6">
    <p className="text-sm text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
        >Mai, 2023</p>
      <p className="mb-4 mt-2 text-neutral-600 dark:text-neutral-200">
      Einen Mitgliederbereich exklusiv für Inhaber des Web3Navigator NFTs entwickeln, indem eine Authentifizierungsmethode implementiert wird, die überprüft, ob der Benutzer im Besitz des NFTs ist. 
      Die erforderliche Thirdweb SDK integrieren, um die Authentifizierung zu unterstützen, dass nur berechtigte Benutzer auf den Mitgliederbereich zugreifen können.
      </p>
      <Link href="login">
      <button
        type="button"
        className="inline-block rounded bg-primary px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        data-te-ripple-init
        data-te-ripple-color="light">
        Zum Mitgliederbereich
      </button>
      </Link>
    </div>
  </li>
  <li>
    <div className="flex-start flex items-center">
      <div
        className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-primary dark:bg-primary-500"></div>
      <h6 className="-mt-2 text-xl font-semibold">Integration des Mailchimp-Newsletters (Abgeschlossen)✔️</h6>
    </div>
    <div className="mb-6 ml-6 pb-6">
    <p className="text-sm text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
        >Mai, 2023</p>
      <p className="mb-4 mt-2 text-neutral-600 dark:text-neutral-200">
      Mailchimp-Konto einrichten und eine Mailingliste für den Web3Navigator-Newsletter erstellen. Die Mailchimp-API integriert, um Benutzern die Anmeldung zum Newsletter zu ermöglichen. 
      Ein Anmeldeformular erstellen und umfangreiche Tests durchführen, um sicherzustellen, dass Benutzer sich erfolgreich anmelden können und die Newsletter-E-Mails erhalten.
      </p>
    </div>
  </li>
</ol>
</div>
    </div>
    
</div>
  );
};
