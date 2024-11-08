
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import logoWhite from '../assets/logo_white.png';
import logoGreen from '../assets/green_Logo.png';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeLink, setActiveLink] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [logo, setLogo] = useState(logoWhite);
    const [navBg, setNavBg] = useState('bg-white');
    const [linkColor, setLinkColor] = useState('text-white');
    const caseId = "afc"

    // useEffect(() => {
    //     const updateLogo = () => {
    //         setLogo(((window.innerWidth < 899 && location.pathname === '/about-me') || !(location.pathname === '/about-me'))  ? logoWhite : logoGreen);
    //         setNavBg(window.innerWidth > 899 ? 'bg-white' : 'bg-transparent');
    //     };

    //     updateLogo(); 
    //     window.addEventListener('resize', updateLogo);

    //     return () => {
    //         window.removeEventListener('resize', updateLogo);
    //     };
    // }, [location.pathname  ]);

    useEffect(() => {
        const updateLogoOnScroll = () => {
            if (location.pathname === '/') {
                setLogo(window.scrollY > 500 ? logoGreen : logoWhite);
                setNavBg(window.scrollY > 500 ? 'bg-white' : 'bg-transparent');
                setLinkColor(window.scrollY > 500 ? 'text-[#000000]' : 'text-white xl:mr-40 lg:mr-10');
                // ${isAboutPage ? 'text-[#000000] ' : 'text-white '}
            } else if (location.pathname === '/about-me' || location.pathname === `/case-study/${caseId}`) {
                setLogo(window.innerWidth < 899 ? logoWhite : logoGreen);
                setNavBg(window.innerWidth > 899 ? 'bg-white shadow' : 'bg-transparent');
                setLinkColor(window.innerWidth > 899 ? 'text-[#000000] mr-40 xl:mr-40 lg:mr-10 ' : 'text-white');
            }
        };

        // Initial setting based on the current scroll position
        updateLogoOnScroll();

        // Add scroll and resize listeners
        window.addEventListener('scroll', updateLogoOnScroll);
        window.addEventListener('resize', updateLogoOnScroll);

        // Clean up event listeners on component unmount
        return () => {
            window.removeEventListener('scroll', updateLogoOnScroll);
            window.removeEventListener('resize', updateLogoOnScroll);
        };
    }, [location.pathname]);

    useEffect(() => {
        if (location.pathname === '/about-me') {
            setActiveLink('about');
        } else {
            setActiveLink('');
        }
    }, [location.pathname]);


    const isAboutPage = location.pathname === '/about-me';

    return (
        <>
            <div className={`fixed top-0 left-0 w-full bg-transparent z-30 ${navBg}`}>
                <div className="container mx-auto flex justify-between items-center px-5 sm:px-5 md:px-8 lg:px-8 xl:px-8 2xl:px-8  py-5">
                    <img src={logo} alt="logo" className='logo-img hoverable w-8' onClick={() => { navigate('/'); setIsOpen(false); }} />

                    <div className="flex items-center">
                        <div className="hidden lg:block xl:block 2xl:block">
                            <ul className={`flex flex-nowrap text-nowrap space-x-7 text-[13px] font-[500] ${linkColor} `}>
                                <li className={` ${isAboutPage ? 'navlinks hoverable' : ''}`}>
                                    <a href="/" className={`hover:text-[#015A58] py-1 ${activeLink === 'design' ? 'border-b-[#015A58] border-b-[1.5px]' : ''}`} onClick={() => setActiveLink('design')}>Design Use Cases</a>
                                </li>
                                <li className={` ${isAboutPage ? 'navlinks hoverable' : ''}`}>
                                    <a href="/" className={`hover:text-[#015A58] py-1 ${activeLink === 'ui' ? 'border-b-[#015A58] border-b-[1.5px]' : ''}`} onClick={() => setActiveLink('ui')}>UI PlayGround</a>
                                </li>
                                <li className={` ${isAboutPage ? 'navlinks hoverable' : ''}`}>
                                    <a href="/about-me" className={`hover:text-[#015A58] py-1 ${activeLink === 'about' ? 'border-b-[#015A58] border-b-[1.5px]' : ''}`} onClick={() => setActiveLink('about')}>About Me</a>
                                </li>
                            </ul>
                        </div>
                        <div className="lg:hidden xl:hidden 2xl:hidden"> {/* Show this on small screens */}
                            <button onClick={() => setIsOpen(!isOpen)} className={` z-50 ${isAboutPage ? ' text-[#015A58]m text-[#fff]' : 'text-[#fff]'}`}>
                                <Icon icon={isOpen ? "ci:close-sm" : "ci:menu-alt-01"} className='w-10 h-auto' />
                            </button>
                        </div>

                    </div>
                </div>
            </div>
            {isOpen && ( // Conditional rendering of the nav links
                <div className=" nav-background fixed top-0 left-0 w-full h-full z-20 bg-[#015A58] flex items-center justify-center text-white">
                    <ul className="space-y-4 text-center text-[25px] ">
                        <li>
                            <a href="/" className="hover:text-[#015A58]" onClick={() => { setActiveLink('design'); setIsOpen(false); }}>Design Use Cases</a>
                        </li>
                        <li>
                            <a href="/" className="hover:text-[#015A58]" onClick={() => { setActiveLink('ui'); setIsOpen(false); }}>UI Playground</a>
                        </li>
                        <li>
                            <a href="/about-me" className="hover:text-[#015A58]" onClick={() => { setActiveLink('about'); setIsOpen(false); }}>About Me</a>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
};

export default Navbar;
