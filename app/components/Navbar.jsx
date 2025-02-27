'use client'
import Link from "next/link";
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
            <nav className="absolute top-0 left-0 w-full bg-black/50 p-4 flex justify-between items-center z-50">
                <Link href="/" className="text-white text-2xl font-bold">Bakery</Link>
                <div className="hidden md:flex space-x-6">
                    <Link href="/menu" className="text-white hover:text-yellow-400">Menu</Link>
                    <Link href="/about" className="text-white hover:text-yellow-400">About</Link>
                    <Link href="/contact" className="text-white hover:text-yellow-400">Contact</Link>
                </div>
                <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
                </button>
                {isOpen && (
                <div className="absolute rounded-md top-16 right-0 w-1/4 bg-gradient-to-r from-indigo-500 to-pink-500 p-6 flex flex-col items-center space-y-4 text-white md:hidden">
                    <Link href="/menu" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Menu</Link>
                    <Link href="/about" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>About</Link>
                    <Link href="/contact" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Contact</Link>
                </div>
            )}
            </nav>
  );
};

export default Navbar;
