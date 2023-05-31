import Link from "next/link";

function LoginButton() {
    return (
          <div className="md:inline-flex items-center space-x-5">
            <Link href="/login"><h3 className='text-white bg-gradient-to-br from-black to-amber-900/90  px-4 py-1 rounded-full cursor-pointer'>Exclusive Content</h3></Link>
            </div>
    );
  }
  
  export default LoginButton;