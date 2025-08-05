"use client";
import { SIGNIN_URL, SIGNUP_URL } from '@/config';
import Logo from '@/icons/Logo'
import { Button } from 'antd'
import Link from 'next/link'
import { useState } from 'react'


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="w-full max-w-full flex flex-wrap items-center justify-between py-[10px] px-4 sm:px-6 lg:px-16 backdrop-blur-lg fixed top-0 z-50 border-b border-white/10">
    {/* Left Section: Logo and Title */}
    <div className="flex items-center gap-3">
      <div>
        <Logo />
      </div>
      <div>
        <Link
          href="/"
          className="text-transparent text-white font-bold text-2xl"
        >
          Second Brain
        </Link>
      </div>
    </div>

    {/* Right Section: Buttons */}
    <div className="hidden sm:flex gap-4">
      <Button type="primary">
        <Link href={SIGNIN_URL}>Log in</Link>
      </Button>
      <Button type="primary">
        <Link href={SIGNUP_URL}>Sign up</Link>
      </Button>
    </div>

    {/* Mobile Menu Button */}
    <div className="sm:hidden flex items-center">
      <button
        className="text-white focus:outline-none"
        aria-label="Toggle Menu"
        onClick={toggleMenu}
      >
        {/* Hamburger Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>

    {/* Mobile Menu */}
    {isMenuOpen && (
      <div className="absolute top-full left-0 w-full bg-black text-white shadow-lg z-50 flex flex-col items-start p-4 sm:hidden">
        <Link
          href="/sign-in"
          className="hover:text-gray-300 py-2 px-4 w-full text-left"
          onClick={() => setIsMenuOpen(false)}
        >
          <Button type="primary" className="w-full">Log in</Button>
        </Link>
        <Link
          href="/sign-up"
          className="hover:text-gray-300 py-2 px-4 w-full text-left"
          onClick={() => setIsMenuOpen(false)}
        >
          <Button type="primary" className="w-full">Sign up</Button>
        </Link>
      </div>
    )}
  </nav>
  );
}
  
  export default Navbar