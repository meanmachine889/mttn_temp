"use client"; // Add this line at the top of your file

import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

function Navbar() {
  const [selectedTab, setSelectedTab] = useState('home');
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black/80 backdrop-blur-xl fixed w-full top-0 start-0 shadow-xl z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/home" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src="/images/mttn.png" width={70} height={25} quality={100} priority={true} className="h-10" alt="MTTN Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white"></span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-gray-300 gap-3 flex items-center justify-center p-2 bg-zinc-900 hover:bg-zinc-700 transition-all focus:ring-4 focus:outline-none focus:ring-gray-300 font-semibold rounded-lg text-xl px-4 py-2 text-center"
          >
            Apply
            <ArrowUpRight className='h-7 w-7'/>
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen ? "true" : "false"}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? 'flex' : 'hidden'}`} id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-10 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 text-lg">
            <li>
              <a
                href="#"
                className="block py-2 px-4 text-white rounded hover:underline hover:decoration-2 hover:underline-offset-8 md:bg-transparent md:hover:bg-transparent md:text-white md:p-0"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 text-white rounded hover:underline hover:decoration-2 hover:underline-offset-8 md:bg-transparent md:hover:bg-transparent md:text-white md:p-0"
              >
                PaV
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 text-white rounded hover:underline hover:decoration-2 hover:underline-offset-8 md:bg-transparent md:hover:bg-transparent md:text-white md:p-0"
              >
                Articles
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 text-white rounded hover:underline hover:decoration-2 hover:underline-offset-8 md:bg-transparent md:hover:bg-transparent md:text-white md:p-0"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 text-white rounded hover:underline hover:decoration-2 hover:underline-offset-8 md:bg-transparent md:hover:bg-transparent md:text-white md:p-0"
              >
                Fresher&apos;s Guide
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
