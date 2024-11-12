'use client';

import React from 'react';
import Link from 'next/link';

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set to true once component is mounted
  }, []);

  if (!isClient) return null; // Return null during SSR
  
  return (
    <div>
      <header className="bg-gray-900 text-white body-font select-none">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="font-bold italic text-left text-white ml-1 text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>Ahmed Travels</span>
          </a>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger>
                <button className="text-white focus:outline-none">
                  {/* Hamburger Icon */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                </button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  {/* <SheetTitle className="text-2xl font-bold mb-4">Menu</SheetTitle> */}
                  <SheetDescription>
                    <nav className="flex flex-col space-y-4">
                      <Link href={"/"}>HOME</Link>
                      <Link href={"/about"}>ABOUT</Link>
                      <Link href={"/service"}>SERVICES</Link>
                      <Link href={"/package"}>LUXURY PACKAGES</Link>
                      <Link href={"/review"}>REVIEWS</Link>
                      <Link href={"/gallery"}>GALLERY</Link>
                      <Link href={"/tips"}>TRAVEL TIPS</Link>
                      <Link href={"/contact"}>CONTACT</Link>
                    </nav>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>

          {/* Navbar Links for Desktop */}
          <nav className="hidden md:flex md:ml-auto md:mr-auto flex-wrap items-center text-base justify-center">
            <Link href={"/"} className="mr-5 hover:text-blue-500">HOME</Link>
            <span className="mr-3">|</span>
            <Link href={"/about"} className="mr-5 hover:text-blue-500">ABOUT</Link>
            <span className="mr-3">|</span>
            <HoverCard>
              <HoverCardTrigger asChild>
                <Link href={"/service"} className="mr-5 hover:text-blue-500">SERVICES</Link>
              </HoverCardTrigger>
              <HoverCardContent className="p-4 bg-gray-50 rounded-lg shadow-lg">
                <p className="text-sm text-blue-500">Book</p>
              </HoverCardContent>
            </HoverCard>
            <span className="mr-3">|</span>
            <HoverCard>
              <HoverCardTrigger asChild>
                <Link href={"/package"} className="mr-5 hover:text-blue-500">LUXURY PACKAGES</Link>
              </HoverCardTrigger>
              <HoverCardContent className="p-4 bg-gray-50 rounded-lg shadow-lg">
                <p className="text-sm text-blue-500">Luxury Packages Page</p>
              </HoverCardContent>
            </HoverCard>
            <span className="mr-3">|</span>
            <Link href={"/review"} className="mr-5 hover:text-blue-500">REVIEWS</Link>
            <span className="mr-3">|</span>
            <Link href={"/gallery"} className="mr-5 hover:text-blue-500">GALLERY</Link>
            <span className="mr-3">|</span>
            <Link href={"/tips"} className="mr-5 hover:text-blue-500">TRAVEL TIPS</Link>
            <span className="mr-3">|</span>
            <Link href={"/contact"} className="mr-5 hover:text-blue-500">CONTACT</Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
