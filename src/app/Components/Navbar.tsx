"use client"
import Image from "next/image";
import Link from "next/link";
import { Search } from 'lucide-react';
import { useState } from "react";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="flex justify-between p-6 relative">
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
</Link>      </div>

      {/* Desktop Navigation */}
      <div className="nav-items hidden md:flex">
        <ul className="flex space-x-5 items-center ">
          <li>
            <Link href="/" className="hover:text-blue-500 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-blue-500 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-blue-500 transition-colors">
            Contact
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-blue-500 transition-colors">
            <Search />
            </Link>
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
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg z-50">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <Link href="#" className="hover:text-blue-500 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-500 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-500 transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-500 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
