"use client";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { useState } from "react";
import { ModeToggle } from "./ModeToggle";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleClick = () => setShowSearch(!showSearch);

  return (
    <nav className="flex justify-between p-6 relative">
      {/* Logo Section */}
      <div className="logo flex items-center">
        <Image
          src="/images/Logo.png"
          alt="Zarrin Logo"
          width={30}
          height={30}
          className="mr-2"
          quality={100}
        />
        <Link href="/">
          <h1 className="text-xl font-bold">Zarrin</h1>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="nav-items hidden md:flex">
        <ul className="flex space-x-5 items-center">
          <li>
            <Link href="/" className="hover:text-blue-500 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/Read" className="hover:text-blue-500 transition-colors">
              Blogs
            </Link>
          </li>
          <li>
            <Link href="./contact" className="hover:text-blue-500 transition-colors">
              Contact
            </Link>
          </li>
          <li>
  {showSearch ? (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Search"
        className="border-2 border-gray-300 rounded-md p-1 mr-2"
      />
      <button onClick={() => setShowSearch(false)} className="text-gray-500 hover:text-red-500">
        ✖
      </button>
    </div>
  ) : (
    <div onClick={handleClick} className="cursor-pointer">
      <Search className="hover:text-blue-500 transition-colors" />
    </div>
  )}
</li>


          <li>
            <ModeToggle />
          </li>
        </ul>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-500 hover:text-black focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg z-50 dark:bg-gray-800">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <Link href="/" className="hover:text-blue-500 transition-colors dark:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/Read" className="hover:text-blue-500 transition-colors dark:text-white">
                Blogs
              </Link>
            </li>
           
            <li>
              <Link href="./contact" className="hover:text-blue-500 transition-colors dark:text-white">
                Contact
              </Link>
            </li>
            <li>
              <ModeToggle />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
