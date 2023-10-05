'use client'
import React, { useState, useEffect } from "react";
// import '../styles/globals.css'
import Image from "next/image";


import { usePathname } from 'next/navigation'

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();


    useEffect(() => {

        const handleResize = () => {
            setIsMenuOpen(window.innerWidth >= 768);
        };

        handleResize();


        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="z-10  w-full ">
            <div className="max-w-screen-xl flex flex-wrap justify-between items-center text-ffffffb2 mx-auto sm:px-20 sm:py-14">
            <a href="/" className={`block text-center text-2xl no-underline decoration-white sm:py-1 h-full leading-8 px-5 py-3.5 hover:bg-black ${pathname === '/' ? 'active' : ''}`}>CreoShift</a>

                <button
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100"
                    aria-controls="navbar-default"
                    aria-expanded={isMenuOpen ? "true" : "false"}
                    onClick={toggleMenu}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={`w-full md:w-auto ${isMenuOpen ? "block" : "hidden"}`} id="navbar-default">
                    <div className="sm:static absolute w-full bg-black z-50 nav flex flex-col md:flex-row  md:mt-0 md:border-0">
                        <a href="/" className={`block text-center text-lg no-underline decoration-white sm:py-1 h-full leading-8 px-5 py-3.5 hover:bg-black ${pathname === '/' ? 'active' : ''}`}>about us</a>
                        <a href="/" className={`block text-center text-lg no-underline decoration-white sm:py-1 h-full leading-8 px-5 py-3.5 hover:bg-black ${pathname === '/job' ? 'active' : ''}`}>our work</a>
                        <a href="/" className={`block text-center text-lg no-underline decoration-white sm:py-1 h-full leading-8 px-5 py-3.5 hover:bg-black ${usePathname() === '/contact' ? 'active' : ''}`}>our clients</a>
                        
                    </div>
                </div>
            </div>
        </header>
    );
}