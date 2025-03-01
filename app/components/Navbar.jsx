'use client'
import Link from "next/link";
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
            <nav className="flex-nowrap bg-slate-600 fixed  top-0 flex w-full items-center justify-between py-5 px-8 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10  lg:py-4">
                <Link href="/" className="text-black text-3xl font-bold">Bakery</Link>
                <div className="hidden md:flex space-x-6 justify-end ">
                    <Link href="/menu" className="text-black hover:text-yellow-400">Menu</Link>
                    <Link href="/about" className="text-black hover:text-yellow-400">About</Link>
                    <Link href="/contact" className="text-black hover:text-yellow-400">Contact</Link>
                </div>
                <button className="md:hidden text-black" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
                </button>
                {isOpen && (
                <div className="absolute transition-all translate-y-2 -translate-x-2 rounded-md top-16 right-0 w-1/4 bg-gradient-to-r from-indigo-500 to-pink-500 p-6 flex flex-col items-center space-y-4 text-white md:hidden">
                    <Link href="/menu" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Menu</Link>
                    <Link href="/about" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>About</Link>
                    <Link href="/contact" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Contact</Link>
                </div>
            )}
            </nav>
            
  );
};

export default Navbar;


/**'use client'

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {

  const [isOpen, setisOpen] = useState(false);

  return (
    <section className='flex relative'>
      <div className='flex'>
        <h1 className='text-3xl text-blue-950 gap-1'>Bakery</h1>
      </div>
      <div className='flex '>
        <ul className='flex absolute gap-2 right-0  sm:hidden  '>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Contact</li>
        </ul>
        <button onClick={() => setisOpen(!isOpen)} className='flex items-center inset-0 right-0 sm:hidden'>
          {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
        {isOpen && (
          <div className=''>
            <ul className='flex relative bg-gray-700 right-0 w-3/4 flex-col sm:hidden  '>
              <li>Home</li>
              <li>About</li>
              <li>Menu</li>
              <li>Contact</li>
            </ul>
          </div>
        )}
      </div>

    </section> */