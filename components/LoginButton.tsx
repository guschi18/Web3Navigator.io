import Link from "next/link";

function LoginButton() {
    return (
          <div className="md:inline-flex items-center space-x-5">
            <Link href="/login"><h3 className='text-white bg-gradient-to-br from-black via-cyan-900 to-green-800  px-4 py-1 rounded-full cursor-pointer'>Mitgliederbereich</h3></Link>
            </div>
    );
  }
  
  export default LoginButton;