import Link from "next/link";
import { FaBars } from "react-icons/fa";

const Navbar = () => {

  return (
    <div className="relative mx-auto flex max-w-screen-lg items-center justify-between flex-col py-4 sm:flex">
      <a className="flex items-center text-2xl font-bold text-gray-800">
        <span className="mr-2 ">
        <Link href="/">🍞 Sweet Bakes</Link>
      </span>
     </a><input className="peer hidden " type="checkbox" id="navbar-open" /><label className="absolute mt-1 text-xl cursor-pointer bg-black " for='navbar-open'>
        <FaBars className="w-37 h-37" />
      </label>
      <nav className="peer-checked:block hidden py-4 sm:block sm:py-0">

        <ul className="hidden md:flex space-x-6 text-lg text-gray-700">
          <li>
            <Link href="/" className="hover:text-orange-500">Home</Link>
          </li>
          <li>
            <Link href="/menu" className="hover:text-orange-500">Menu</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-orange-500">About</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-orange-500">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
