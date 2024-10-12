"use client";
import { useState, useEffect, useRef  } from "react";
import { usePathname } from 'next/navigation';
import Image from 'next/image';

import img1 from '../images/accounting1.png';

import logo from '../images/logo.png';
import fin from '../images/countries/fin.png';
import eng from '../images/countries/eng.png';
import est from '../images/countries/est.png';
import rus from '../images/countries/rus.png';
import esp from '../images/countries/esp.png';
import fra from '../images/countries/fra.png';
import ger from '../images/countries/ger.png';


export default function Home() {
    
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    
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


    const getFlagImage = () => {
        switch(pathname) {
            case '/en':
                return eng.src;
            case '/et':
                return est.src;
            default:
                return fin.src;
        }
    };

    const getFlagAltText = () => {
        switch(pathname) {
            case '/en':
                return "English Flag";
            case '/et':
                return "Estonian Flag";
            default:
                return "Finnish Flag";
        }
    };

    return (
    <div >


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
                    <a href="/contact" className="text-lg text-black">Pyydä Tarjous</a>
                    <a href="/register" className="text-lg text-black">Rekisteröidy</a>
                    
                    <div className="relative ml-4" ref={dropdownRef}>
                    <Image 
                        src={getFlagImage()} 
                        alt={getFlagAltText()} 
                        width={32}
                        height={32}
                        className="rounded-full cursor-pointer ml-1" 
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
                    <a href="/contact" className="block py-0 text-lg text-right text-black">Pyydä Tarjous</a>
                    <a href="/register" className="block py-2 text-lg text-right text-black">Rekisteröidy</a>
                </div>
            )}
        </div>




        <div className="relative min-h-[500px] md:h-auto">

            <div className="container mx-auto p-8 flex flex-col md:flex-row items-center justify-center h-full mt-0 md:mt-28">
                <div className="content z-10 md:w-1/2 text-center md:text-left mt-20">
                    <h1 className="text-6xl font-bold mb-4 text-black">Tee-Se-Itse-Kirjanpito-Ohjelmisto</h1>
                    <p className="text-lg mb-6 w-[90%] mx-auto md:mx-0 text-black">Saat automaattisesti johdon raportit, kuten taseet ja tuloslaskelmat, valmiiksi.
                      Ohjelmisto on toistaiseksi ilmainen, mutta lähiaikoina alammae veloittamaan 10€/kk tai 68€/vuosi.</p>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <a href="/register" className="bg-black text-white px-6 py-2 rounded inline-block">
                            Katso Demo
                        </a>
                        <a href="/contact" className="bg-white text-black px-6 py-2 rounded border border-black inline-block ml-4">
                            Rekisteröidy
                        </a>
                    </div>
                </div>
                
                <img 
                src={img1.src} 
                alt="curve" 
                className="rounded-lg w-40 sm:w-60 md:w-80 mt-16 z-10" 
                style={{ userSelect: 'none' }} 
                />
            </div>

 
        </div>


    


        <div className="mt-[-0px] container mx-auto px-10 py-16 bg-[#fcfcfc] rounded-3xl">

            

            <div className="container mx-auto w-[80%] mb-12 mt-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    <div className="bg-white rounded-lg p-6 shadow-md text-center flex flex-col items-center">
                        <div className="text-4xl text-green-700 mb-4" />
                        <h3 className="text-2xl font-semibold mb-3 text-black">Helppo Apu</h3>
                        <p className="text-gray-600 mb-4">Jos tarvitset apua, voit palkata ammattilaisen yhdellä klikillä meidän kautta tarkistamaan, että kaikki on tehty oikein hintaan €38/h (veloitetaan per minuutti)</p>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-md text-center flex flex-col items-center">
                        <div className="text-4xl text-blue-800 mb-4" />
                        <h3 className="text-2xl font-semibold mb-3 text-black">Hae Rahoitusta</h3>
                        <p className="text-gray-600 mb-4">Voit näillä johdon raporteilla hakea rahoitusta, jossa voimme auttaa sinua myös!</p>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-md text-center flex flex-col items-center">
                        <div className="text-4xl text-yellow-500 mb-4" />
                        <h3 className="text-2xl font-semibold mb-3 text-black">Helppo Käyttö</h3>
                        <p className="text-gray-600 mb-4">Sinä yrittäjänä voit ladata kuittisi ja tiliotteesi ja valita sitten sopivimmalta näyttävän tunnisteen tositteellesi. Voit koko kirjanpidon itse aina tilinpäätökseen asti.</p>
                    </div>
                </div>
            </div>


            <h1 className="text-3xl font-bold mb-4 text-center text-black mt-24">
                Mikäli tarvit apua niin ole meihin yhteydessä!
            </h1>
            <p className="text-lg text-gray-600 mt-6 mb-8 text-center max-w-full md:max-w-[900px] mx-auto px-4">
                Tämän jälkeen kokeneet kirjanpitäjämme käyvät merkinnäsi läpi ja hyväksyvät ne tai kysyvät tarvittaessa lisätietoja, jotta kirjanpitosi vastaa kansallisten kirjanpitolakien, verolakien ja veroviraston vaatimuksia, 
                kuten liitteiden lähettäminen oikeassa muodossa veroilmoituksissa.
            </p>

            

            <div className="text-center mt-16">
                <a href="/contact" className="bg-white text-black px-6 py-2 rounded border border-black inline-block ml-4">
                    Rekisteröidy
                </a>
            </div>

            <div className="flex flex-col mt-20 w-[60%] mx-auto rounded-md bg-primary-100 bg-blue-300 bg-opacity-50 p-4 text-center sm:flex-row sm:items-center sm:justify-between sm:p-10 sm:text-left">
                <div className="text-2xl font-semibold">
                <div className="text-gray-900">Tehosta Kirjanpitosi Helposti</div>
                <div className="text-blue-500">Aloita Ilmainen Kokeilu Nyt!</div>
                </div>

                <div className="whitespace-no-wrap mt-3 sm:ml-2 sm:mt-0">
                    <button className='bg-blue-500 text-white py-2 px-5 rounded-lg text-lg font-semibold'>
                        <a href='/' style={{ color: 'inherit', textDecoration: 'none' }}>
                            Kokeile Ilmaiseksi
                        </a>
                    </button>
                </div>
            </div>

            
        </div>





        <footer className="flex flex-col items-center p-5 bg-[#1d2c6b] text-black w-full">
            <div className="flex justify-center gap-20 w-full max-w-screen-lg">
                <div className="text-left mb-4">
                    <h3 className="text-white text-xl mb-2 font-semibold">HYÖDYLLISET LINKIT</h3>
                    <a href='/' className="text-[#d1d1d1] block hover:underline hover:text-white transition duration-300">Pyydä Tarjous</a>
                    <a href='/' className="text-[#d1d1d1] block mt-2 hover:underline hover:text-white transition duration-300">Kirjaudu</a>
                </div>
                <div className="text-left mb-4">
                    <h3 className="text-white text-xl mb-2 font-semibold">YHTEYSTIEDOT</h3>
                    <a href="tel:+3584578726367" className="font-bold text-white">+3584578726367</a>
                    <p className="text-[#d1d1d1] mb-2">Soita meille</p>
                    <a href="mailto:info@firmankirjanpito.fi" className="font-bold text-white">info@firmankirjanpito.fi</a>
                    <p className="text-[#d1d1d1]">24/7 online-tuki</p>
                </div>
            </div>


            <div className="flex justify-between items-center mt-6 text-[#d1d1d1]" style={{ fontFamily: '"Space Mono", monospace' }}>
                <div>
                    <a href="/" className="text-[#d1d1d1] hover:underline">Tietosuojakäytäntö</a>
                    <span className="mx-2">|</span>
                    <a href="/" className="text-[#d1d1d1] hover:underline">Käyttö- ja palveluehdot</a>
                </div>
                <div className='ml-40'>
                    &copy; 2024 FirmanKirjanPito Kaikki oikeudet pidätetään.
                </div>
            </div>


        </footer>






    </div>

    );
}
