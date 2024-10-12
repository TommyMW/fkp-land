import React from 'react';
// import { FaXTwitter, FaLinkedin  } from 'react-icons/fa6';

const Footer: React.FC = () => {
    return (
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


    );
};

export default Footer;
