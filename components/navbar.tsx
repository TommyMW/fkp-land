"use client";
import React, { useEffect, useRef, useState } from 'react';
import logo from '../images/logo.png';
import fin from '../images/countries/fin.png';
import eng from '../images/countries/eng.png';
import est from '../images/countries/est.png';
import rus from '../images/countries/rus.png';
import esp from '../images/countries/esp.png';
import fra from '../images/countries/fra.png';
import ger from '../images/countries/ger.png';


const Navbar: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    
    // Create a reference for the dropdown
    const dropdownRef = useRef<HTMLDivElement>(null);
    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    // Effect to handle clicks outside of the dropdown
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            // Check if the clicked target is outside the dropdown and the button
            if (dropdownRef.current && !dropdownRef.current.contains(target)) {
                setIsOpen(false);
            }
        };

        // Attach the event listener
        document.addEventListener("mousedown", handleClickOutside);
        
        // Cleanup the event listener on unmount
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className='z-10 top-0 mt-4 w-full'>
            <header className="z-10 top-0 flex justify-between items-center px-4 md:px-10 py-4 bg-[#ffffff]">
                <a href="/" className="text-3xl md:ml-[10%] ml-5% text-black">
                    <img src={logo.src} alt="FirmanKirjanPito.fi" className="h-10" style={{userSelect: 'none'}} />
                </a>
                
                <button className="md:hidden text-black" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
                
                <div className="hidden md:flex mr-[10%] md:space-x-4">
                    <a href="/demo" className="text-lg text-black">Pyydä Tarjous</a>
                    <a href="/contact" className="text-lg text-black">Rekisteröidy</a>
                    
                    <div className="relative ml-4" ref={dropdownRef}>
                        <img 
                            src={fin.src} 
                            alt="Finnish Flag" 
                            className="w-8 h-8 rounded-full cursor-pointer ml-1" 
                            onClick={toggleDropdown} 
                        />
                        {isOpen && (
                            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg z-[100]">
                                <a href="/en" className="px-4 py-2 text-black hover:bg-gray-100 flex items-center"> 
                                    <img src={eng.src} alt="English Flag" className="h-6 w-6 rounded-full mr-2" style={{ userSelect: 'none' }} /> 
                                    English
                                </a>
                                <a href="/fi" className="px-4 py-2 text-black hover:bg-gray-100 flex items-center"> 
                                    <img src={fin.src} alt="Finnish Flag" className="h-6 w-6 rounded-full mr-2" style={{ userSelect: 'none' }} /> 
                                    Suomi
                                </a>
                                <a href="/et" className="px-4 py-2 text-black hover:bg-gray-100 flex items-center"> 
                                    <img src={est.src} alt="Estonian Flag" className="h-6 w-6 rounded-full mr-2" style={{ userSelect: 'none' }} /> 
                                    Eesti
                                </a>
                                <a href="/ru" className="px-4 py-2 text-black hover:bg-gray-100 flex items-center"> 
                                    <img src={rus.src} alt="Russian Flag" className="h-6 w-6 rounded-full mr-2" style={{ userSelect: 'none' }} /> 
                                    Русский
                                </a>
                                <a href="/es" className="px-4 py-2 text-black hover:bg-gray-100 flex items-center"> 
                                    <img src={esp.src} alt="Spanish Flag" className="h-6 w-6 rounded-full mr-2" style={{ userSelect: 'none' }} /> 
                                    Español
                                </a>
                                <a href="/fr" className="px-4 py-2 text-black hover:bg-gray-100 flex items-center"> 
                                    <img src={fra.src} alt="French Flag" className="h-6 w-6 rounded-full mr-2" style={{ userSelect: 'none' }} /> 
                                    Français
                                </a>
                                <a href="/de" className="px-4 py-2 text-black hover:bg-gray-100 flex items-center"> 
                                    <img src={ger.src} alt="German Flag" className="h-6 w-6 rounded-full mr-2" style={{ userSelect: 'none' }} /> 
                                    Deutsch
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </header>
            
            {mobileMenuOpen && (
                <div className="md:hidden bg-white py-0 px-4">
                    <a href="/demo" className="block py-0 text-lg text-right text-black">Pyydä Tarjous</a>
                    <a href="/contact" className="block py-2 text-lg text-right text-black">Rekisteröidy</a>
                </div>
            )}
        </div>
    );
};

export default Navbar;
