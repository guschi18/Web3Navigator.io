import Image from "next/image"
import sparrow from "../../../images/sparrow.jpg"
import Link from "next/link";




export default function Roadmap() {

return (
    <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
    <div className="lg:col-span-4 bg-gradient-to-r from-orange-900 via-slate-50 to-amber-900">
    <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
      <div className="bg-gradient-to-br from-black to-stone-500 p-2 rounded-xl">
      <Link href="/exclusive-content">
        <Image className="w-44 rounded-xl object-cover lg:h-92 lg:w-72"
        src={sparrow}
        alt="NFT-Logo" /></Link>
        </div>
        <div className="text-center p-5 spaye-y-2">
          <h2 className="text-xl text-black">
            Blog || Roadmap
          </h2>
        </div>
    </div>
    </div>
    <div className="flex flex-1 flex-col p-12 lg:col-span-6">
    <header className="flex items-center justify-between">
      <h1 className="w-52 cursor-pointer text-2xl font-extralight sm:w-80">{" "}<Link href="/exclusive-content">
        <span className="font-extrabold underline decoration-black">BLOG</span></Link> Roadmap
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
    <h6 className="-mt-2 text-lg font-semibold">Basic project structure and integration of Next.js and Tailwind (Completed)✔️</h6>
    <p className="text-sm text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600">April, 2023</p>
    <p className="mb-4 mt-2 text-neutral-600 dark:text-neutral-300">
    The Shita-kiri-Suzume Blog project begins by creating the basic framework using Next.js and configuring Tailwind as the styling framework. The directory structure is established, files are set up, and the functionality of the basic structure is tested to ensure everything works smoothly.
    </p>
      <Link href="/" >
      <button
        type="button"
        className="inline-block rounded bg-primary px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        data-te-ripple-init
        data-te-ripple-color="light">
        Go to homepage
      </button></Link>
    </div>
  </li>
  <li>
    <div className="flex-start flex items-center">
      <div
        className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-primary dark:bg-primary-500"></div>
      <h6 className="-mt-2 text-xl font-semibold">Integration of the blog with Sanity backend (Completed)✔️</h6>
    </div>
    <div className="mb-6 ml-6 pb-6">
    <p className="text-sm text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
        >April, 2023</p>
      <p className="mb-4 mt-2 text-neutral-600 dark:text-neutral-200">
      Create a Sanity project, configure it, design the data model for the blog post, and implement the integration with Next.js to display the blog post and ensure all pages and components are functioning correctly.
      </p>
      <Link href="post/suzume">
      <button
        type="button"
        className="inline-block rounded bg-primary px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        data-te-ripple-init
        data-te-ripple-color="light">
        First blog
      </button>
      </Link>
    </div>
  </li>
  <li>
    <div className="flex-start flex items-center">
      <div
        className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-primary dark:bg-primary-500"></div>
      <h6 className="-mt-2 text-xl font-semibold">Integration of Thirdweb for secure Web3 authentication (Completed)✔️</h6>
    </div>
    <div className="mb-6 ml-6 pb-6">
    <p className="text-sm text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
        >April, 2023</p>
      <p className="mb-4 mt-2 text-neutral-600 dark:text-neutral-200">
      Enable Web3 authentication for exclusive content by integrating Thirdweb, implementing the necessary functions, and successfully testing to ensure users can log in with their Shita-Kiri-Suzume Blog NFT.
      </p>
    </div>
  </li>
  <li>
    <div className="flex-start flex items-center">
      <div
        className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-primary dark:bg-primary-500"></div>
      <h6 className="-mt-2 text-xl font-semibold">Creation of the NFT minting page (Completed)✔️</h6>
    </div>
    <div className="mb-6 ml-6 pb-6">
    <p className="text-sm text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
        >May, 2023</p>
      <p className="mb-4 mt-2 text-neutral-600 dark:text-neutral-200">
      Develop a user-friendly NFT minting page to enable users to mint Web3Navigator Login NFTs. Integrate necessary technologies such as Thirdweb SDK, smart contracts, and blockchain interaction, and conduct extensive testing to ensure smooth functioning of NFT minting.
      </p>
      <Link href="nft/mint">
      <button
        type="button"
        className="inline-block rounded bg-primary px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        data-te-ripple-init
        data-te-ripple-color="light">
        Mint Site
      </button>
      </Link>
    </div>
  </li>
  <li>
    <div className="flex-start flex items-center">
      <div
        className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-primary dark:bg-primary-500"></div>
      <h6 className="-mt-2 text-xl font-semibold">Creation of the members area with NFT authentication (Completed)✔️</h6>
    </div>
    <div className="mb-6 ml-6 pb-6">
    <p className="text-sm text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
        >May, 2023</p>
      <p className="mb-4 mt-2 text-neutral-600 dark:text-neutral-200">
      Develop an exclusive members area specifically for holders of the Shita-Kiri-Suzume NFT by implementing an authentication method that verifies whether the user owns the NFT. Integrate the necessary Thirdweb SDK to support the authentication process, ensuring that only authorized users can access the members area.
      </p>
      <Link href="/login">
      <button
        type="button"
        className="inline-block rounded bg-primary px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        data-te-ripple-init
        data-te-ripple-color="light">
        Exclusive Content Login
      </button>
      </Link>
    </div>
  </li>
  <li>
    <div className="flex-start flex items-center">
      <div
        className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-primary dark:bg-primary-500"></div>
      <h6 className="-mt-2 text-xl font-semibold">Integration of Mailchimp newsletter (Completed)✔️</h6>
    </div>
    <div className="mb-6 ml-6 pb-6">
    <p className="text-sm text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
        >May, 2023</p>
      <p className="mb-4 mt-2 text-neutral-600 dark:text-neutral-200">
      Set up a Mailchimp account and create a mailing list for the Web3Navigator newsletter. Integrate the Mailchimp API to allow users to subscribe to the newsletter. Create a sign-up form and perform extensive testing to ensure users can successfully sign up and receive the newsletter emails.
      </p>
    </div>
  </li>
</ol>
</div>
    </div>
    
</div>
  );
};
