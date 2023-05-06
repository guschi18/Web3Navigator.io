import Link from "next/link";

function LoginButton() {
    return (
          <div className="md:inline-flex items-center space-x-5">
            <Link href="/signin"><h3 className='text-white bg-gradient-to-r from-indigo-500 to-emerald-500  px-4 py-1 rounded-full cursor-pointer'>Mitgliederbereich</h3></Link>
            </div>
    );
  }
  
  export default LoginButton;