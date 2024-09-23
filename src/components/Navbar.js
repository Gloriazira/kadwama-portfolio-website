import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import logoWhite from '../assets/logo_white.png';
import logoGreen from '../assets/green_Logo.png';

const Navbar = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        // Set active link based on the current pathname
        if (location.pathname === '/about-me') {
            setActiveLink('about');
        } else if (location.pathname === '/') {
            setActiveLink(''); // No active link for the home page
        } else {
            setActiveLink(''); // Default to no active link for other pages
        }
    }, [location.pathname]);

    // Determine if we're on the about page
    const isAboutPage = location.pathname === '/about-me';



    
    return (
        <nav className={`fixed top-0 left-0 w-full bg-transparent z-40 ${isAboutPage ? 'bg-white' : ''}`}>
            <div className="container mx-auto flex justify-between items-center px-10 py-5">
                <img src={isAboutPage ? logoGreen : logoWhite} alt="logo" className='w-8 cursor-pointer' onClick={() => navigate('/')} />
                <ul className={`flex space-x-7 text-[14px] font-[500] ${isAboutPage ? 'text-[#000000] mr-40' : 'text-white mr-40'}`}>
                    <li>
                        <a
                            href="#"
                            className={` hover:text-[#015A58] py-1 ${activeLink === 'design' ? ' border-b-[#015A58] border-b-[1.5px] ' : ''}`}
                            onClick={() => setActiveLink('design')}
                        >
                            Design Use Cases
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className={` hover:text-[#015A58] py-1 ${activeLink === 'ui' ? ' border-b-[#015A58] border-b-[1.5px] ' : ''}`}
                            onClick={() => setActiveLink('ui')}
                        >
                            UI PlayGround
                        </a>
                    </li>
                    <li>
                        <a
                            href="/about-me"
                            className={` hover:text-[#015A58] py-1 ${activeLink === 'about' ? ' border-b-[#015A58] border-b-[1.5px] ' : ''}`}
                            onClick={() => setActiveLink('about')}
                        >
                            About Me
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
