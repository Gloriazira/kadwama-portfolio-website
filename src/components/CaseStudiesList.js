import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import afcImage from '../assets/case_study_one/afc.png';
import herPride from '../assets/Scene pride.png';
import afcAdmin from '../assets/afc_admin.png';
import Navbar from './Navbar';

const CaseStudiesList = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [showSnackbar, setShowSnackbar] = useState(false);

    const handleClick = (caseId) => {
        if (caseId === 'afc') {
            navigate(`/case-study/afc`);
        } else if (caseId === 'herpride') {
            navigate(`/case-study/her-pride`)
        } else {
            setShowSnackbar(true);
            setTimeout(() => setShowSnackbar(false), 3000);
        }
    };


    // useEffect(() => {
    //     if (location.pathname === '/about-me') {
    //         setActiveLink('about');
    //     } else {
    //         setActiveLink('');
    //     }
    // }, [location.pathname]);



    return (
        <>

            <div>
                {location.pathname === '/case-study' ? <Navbar /> : null}
                <div className={`py-5 ${location.pathname === '/case-study' ? " px-5 mt-20 lg:px-14 lg:mt-20 xl:px-14 xl:mt-20 2xl:px-14 2xl:mt-20" : ""}`}>

                    {/* Case One */}
                    <div className="case-one container lg:mx-auto lg:max-w-[850px]">
                        <div className="grid grid-cols-1 justify-center lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 items-center">

                            <div className=" px-3 py-1  lg:border-l-[1.5px] xl:border-l-[1.5px] 2xl:border-l-[1.5px] border-l-[#015A58] text-[#000000] md:w-fit lg:w-max xl:w-max 2xl:w-max ">

                                <h1 className="text-[25px] text-center sm:text-[32px] sm:text-nowrap md:text-[38px] md:text-nowrap lg:text-left lg:text-[28px] lg:text-nowrap xl:text-left xl:text-[30px] xl:text-nowrap 2xl:text-left 2xl:text-[30px] 2xl:text-nowrap font-[500]">
                                    Creative Approach to Borrowing {<br />} And Loan Management
                                </h1>
                                <img src={afcImage} alt="afc design" className='w-[870px] h-auto mt-3 block lg:hidden xl:hidden 2xl:hidden ' />
                                <p className="text-[14px] text-justify lg:text-left xl:text-left 2xl:text-left sm:text-[14px] md:text-[16px] leading-relaxed mt-3 text-wrap lg:max-w-[400px] xl:max-w-[400px] 2xl:max-w-[400px]">
                                    As the lead product designer, I crafted a seamless
                                    borrowing and financial management experience for an
                                    agricultural cooperative, addressing the unique pain
                                    points of both members and administrators. This
                                    solution simplifies processes for users and enhances
                                    operational efficiency for the cooperative {<br />}
                                </p>


                                <button
                                    onClick={() => handleClick('afc')}
                                    className=" flex items-center justify-center hoverable resume-button w-[120px] md:mx-auto  bg-[#015A58] text-white p-1 mt-4"
                                >
                                    <p className="text-sm font-medium me-1 ">Case Study</p>
                                    <Icon icon="guidance:left-arrow" className="w-6 h-auto" />
                                </button>
                            </div>

                            <img src={afcImage} alt="afc design" className='w-[870px] h-auto hidden lg:block xl:block 2xl:block ' />
                        </div>
                    </div>

                    {/* Case Two */}
                    <div className="case-two container lg:mx-auto lg:max-w-[850px] mt-28">
                        <div className="grid grid-cols-1 justify-center lg:grid-cols-2 lg:justify-items-end xl:justify-items-end xl:grid-cols-2 2xl:grid-cols-2 2xl:justify-items-end items-center">
                            <img src={herPride} alt="afc design" className='w-[870px] h-auto hidden lg:block xl:block 2xl:block' />
                            <div className=" px-3 lg:pl-3 lg:pr-0 py-1  lg:border-l-[1.5px] xl:border-l-[1.5px] 2xl:border-l-[1.5px] border-l-[#015A58] text-[#000000] md:w-fit lg:w-max xl:w-max 2xl:w-max ">

                                <h1 className="text-[25px] text-center sm:text-[32px] sm:text-nowrap md:text-[38px] md:text-nowrap lg:text-left lg:text-[28px] lg:text-nowrap xl:text-left xl:text-[30px] xl:text-nowrap 2xl:text-left 2xl:text-[30px] 2xl:text-nowrap font-[500]">
                                    Her Pride Mobile  {<br />} Application
                                </h1>
                                <img src={herPride} alt="afc design" className='w-[870px] h-auto mt-3 block lg:hidden xl:hidden 2xl:hidden ' />
                                <p className="text-[14px] text-justify md:text-center lg:text-left xl:text-left 2xl:text-left sm:text-[14px] md:text-[16px] leading-relaxed mt-3 text-wrap lg:max-w-[400px] xl:max-w-[400px] 2xl:max-w-[400px]">
                                    Before diving into the design, determine your objectives.
                                    Are you looking for a job, freelance clients,
                                    or simply showcasing your work to the community?
                                    Knowing your goals will help shape your portfolio.
                                </p>


                                <button
                                    onClick={() => handleClick('herpride')}
                                    className=" flex items-center justify-center hoverable resume-button w-[120px] md:mx-auto  bg-[#015A58] text-white p-1 mt-4"
                                >
                                    <p className="text-sm font-medium me-1 ">Case Study</p>
                                    <Icon icon="guidance:left-arrow" className="w-6 h-auto" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Case Three */}
                    <div className="case-three container lg:mx-auto lg:max-w-[850px] mt-28">
                        <div className="grid grid-cols-1 justify-center lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 items-center">

                            <div className=" px-3 py-1  lg:border-l-[1.5px] xl:border-l-[1.5px] 2xl:border-l-[1.5px] border-l-[#015A58] text-[#000000] md:w-fit lg:w-max xl:w-max 2xl:w-max ">

                                <h1 className="text-[25px] text-center sm:text-[32px] sm:text-nowrap md:text-[38px] md:text-nowrap lg:text-left lg:text-[28px] lg:text-nowrap xl:text-left xl:text-[30px] xl:text-nowrap 2xl:text-left 2xl:text-[30px] 2xl:text-nowrap font-[500]">
                                    Creative Approach {<br />} to Borrowing
                                </h1>
                                <img src={afcAdmin} alt="afc design" className='w-[870px] h-auto mt-3 block lg:hidden xl:hidden 2xl:hidden' />
                                <p className="text-[14px] text-justify md:text-left lg:text-left xl:text-left 2xl:text-left sm:text-[14px] md:text-[16px] leading-relaxed mt-3 text-wrap lg:max-w-[400px] xl:max-w-[400px] 2xl:max-w-[400px]">
                                    Before diving into the design, determine your objectives.
                                    Are you looking for a job, freelance clients, or simply
                                    showcasing your work to the community? Knowing your
                                    goals will help shape your portfolio.
                                </p>
                                <button
                                    onClick={handleClick}
                                    className=" flex items-center justify-center hoverable resume-button w-[120px] md:mx-auto  bg-[#015A58] text-white p-1 mt-4"
                                >
                                    <p className="text-sm font-medium me-1 ">Case Study</p>
                                    <Icon icon="guidance:left-arrow" className="w-6 h-auto" />
                                </button>
                            </div>

                            <img src={afcAdmin} alt="afc design" className='w-[870px] h-auto hidden lg:block xl:block 2xl:block' />
                        </div>
                    </div>

                    {showSnackbar && (
                        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-[#015A58] text-white px-4 py-2 rounded-md shadow-lg">
                            The design case is yet to be implemented.
                        </div>
                    )}
                </div>
            </div>


        </>
    );
};

export default CaseStudiesList;
