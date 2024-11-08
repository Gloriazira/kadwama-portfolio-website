import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import afcImage from '../assets/case_study_one/afc.png';
import herPride from '../assets/Scene pride.png';
import afcAdmin from '../assets/afc_admin.png';

const CaseStudiesList = () => {
    const navigate = useNavigate();
    const [showSnackbar, setShowSnackbar] = useState(false);

    const handleClick = (caseId) => {
        if (caseId === 'afc') {
            navigate(`/case-study/${caseId}`);
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
            <div className=''>
                {/* Case One */}
                <div className="case-one container">
                    <div className="grid grid-cols-2 items-center">

                        <div className=" px-3 py-1  border-l-[1.5px] border-l-[#015A58] text-[#000000] w-[280px] xs:w-[330px] md:w-fit lg:w-max xl:w-max 2xl:w-max ">

                            <h1 className="text-[25px] sm:text-[32px] sm:text-nowrap md:text-[38px] md:text-nowrap lg:text-[28px] lg:text-nowrap xl:text-[30px] xl:text-nowrap 2xl:text-[30px] 2xl:text-nowrap font-[500]">
                                Creative Approach to Borrowing {<br />} And Loan Management
                            </h1>

                            <p className="text-[14px] sm:text-[14px] leading-relaxed mt-3 text-wrap max-w-[400px]">
                                As the lead product designer, I crafted a seamless
                                borrowing and financial management experience for an
                                agricultural cooperative, addressing the unique pain
                                points of both members and administrators. This
                                solution simplifies processes for users and enhances
                                operational efficiency for the cooperative {<br />}
                            </p>


                            <button
                                onClick={() => handleClick('afc')}
                                className=" flex items-center justify-center hoverable resume-button w-[120px]  bg-[#015A58] text-white p-1 mt-4"
                            >
                                <p className="text-sm font-medium me-1 ">Case Study</p>
                                <Icon icon="guidance:left-arrow" className="w-6 h-auto" />
                            </button>
                        </div>

                        <img src={afcImage} alt="afc design" className='w-[870px] h-auto ' />
                    </div>
                </div>


                {/* Case Two */}
                <div className="case-two container mt-28">
                    <div className="grid grid-cols-2 items-center justify-items-end">
                        <img src={herPride} alt="afc design" className='w-[870px] h-auto' />
                        <div className=" px-3 py-1  border-l-[1.5px] border-l-[#015A58] text-[#000000] w-[280px] xs:w-[330px] md:w-fit lg:w-max xl:w-max 2xl:w-max ">

                            <h1 className="text-[25px] sm:text-[32px] sm:text-nowrap md:text-[38px] md:text-nowrap lg:text-[28px] lg:text-nowrap xl:text-[30px] xl:text-nowrap 2xl:text-[30px] 2xl:text-nowrap font-[500]">
                                Her Pride Mobile  {<br />} Application
                            </h1>

                            <p className="text-[14px] sm:text-[14px] leading-relaxed mt-3 text-wrap max-w-[400px]">
                                Before diving into the design, determine your objectives.
                                Are you looking for a job, freelance clients,
                                or simply showcasing your work to the community?
                                Knowing your goals will help shape your portfolio.
                            </p>


                            <button
                                onClick={handleClick}
                                className=" flex items-center justify-center hoverable resume-button w-[120px]  bg-[#015A58] text-white p-1 mt-4"
                            >
                                <p className="text-sm font-medium me-1 ">Case Study</p>
                                <Icon icon="guidance:left-arrow" className="w-6 h-auto" />
                            </button>
                        </div>
                    </div>
                </div>


                {/* Case Three */}
                <div className="case-three container mt-28">
                    <div className="grid grid-cols-2 items-center">

                        <div className=" px-3 py-1  border-l-[1.5px] border-l-[#015A58] text-[#000000] w-[280px] xs:w-[330px] md:w-fit lg:w-max xl:w-max 2xl:w-max ">

                            <h1 className="text-[25px] sm:text-[32px] sm:text-nowrap md:text-[38px] md:text-nowrap lg:text-[28px] lg:text-nowrap xl:text-[30px] xl:text-nowrap 2xl:text-[30px] 2xl:text-nowrap font-[500]">
                                Creative Approach {<br />} to Borrowing
                            </h1>

                            <p className="text-[14px] sm:text-[14px] leading-relaxed mt-3 text-wrap max-w-[400px]">
                                Before diving into the design, determine your objectives.
                                Are you looking for a job, freelance clients, or simply
                                showcasing your work to the community? Knowing your
                                goals will help shape your portfolio.
                            </p>
                            <button
                                onClick={handleClick}
                                className=" flex items-center justify-center hoverable resume-button w-[120px]  bg-[#015A58] text-white p-1 mt-4"
                            >
                                <p className="text-sm font-medium me-1 ">Case Study</p>
                                <Icon icon="guidance:left-arrow" className="w-6 h-auto" />
                            </button>
                        </div>

                        <img src={afcAdmin} alt="afc design" className='w-[870px] h-auto' />
                    </div>
                </div>
                {showSnackbar && (
                    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-[#015A58] text-white px-4 py-2 rounded-md shadow-lg">
                        The design case is yet to be implemented.
                    </div>
                )}
            </div>
        </>
    );
};

export default CaseStudiesList;
