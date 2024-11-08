import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import afcHome from '../assets/case_study_one/first_screen.jpg';
import designProcess from '../assets/case_study_one/design_process.png';
import personaOne from '../assets/case_study_one/Persona_one.png';
import personaTwo from '../assets/case_study_one/Persona_two.png';
import userFlow from '../assets/case_study_one/afc_user_flow.png';
import CompetitiveAnalysis from '../assets/case_study_one/Competitive analysis.png';
import afcOnboarding from '../assets/case_study_one/afc_onboarding.png';
import afcMain from '../assets/case_study_one/afcmain.png';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useNavigate } from 'react-router-dom';

const importAll = (r) => {
    return r.keys().map(r);
};

// Dynamically import all images from the folder
const afcUserImages = importAll(require.context('../assets/case_study_one/user', false, /\.(png|jpe?g|svg)$/));
const afcAdminImages = importAll(require.context('../assets/case_study_one/admin', false, /\.(png|jpe?g|svg)$/));


export default function CaseStudyDetail() {
    const [activeSection, setActiveSection] = useState('');
    const navigate = useNavigate();
    const [showSnackbar, setShowSnackbar] = useState(false);

    const sections = [
        { id: 'ProjectOverview', label: 'Project Overview' },
        { id: 'MyRoleAndDesignProcess', label: 'My role & Design Process' },
        { id: 'ResearchAndInsights', label: 'Research & Insights' },
        { id: 'CompetitiveAnalysis', label: 'Competitive Analysis' },
        { id: 'UIDesignsUserType1', label: 'UI Designs - User Type 1' },
        { id: 'UIDesignsUserType2', label: 'UI Designs - User Type 2' },
        { id: 'OutcomeAndResults', label: 'Outcome & Results' },
    ];

    useEffect(() => {
        const observers = sections.map((section) => {
            const element = document.getElementById(section.id);
            if (!element) return null;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveSection(section.id);
                    }
                },
                { threshold: 0.2 }
            );

            observer.observe(element);
            return observer;
        });

        return () => observers.forEach((observer) => observer && observer.disconnect());
    }, []);

    const handleClick = (caseId) => {
        if (caseId === 'afc') {
            navigate(`/case-study/${caseId}`);
        } else {
            setShowSnackbar(true);
            setTimeout(() => setShowSnackbar(false), 3000);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="mt-20 container flex items-start p-5 h-fit ">
                {/* Sidebar */}

                <div className="case-study-sidebar sticky top-[100px]">
                    <div className="sidebar-links relative">
                        <div className="absolute right-0 top-0 h-full border-r-[4px] rounded-t-xl rounded-b-xl border-[#E3E3E3]"></div>

                        <ul className="text-[12px] text-right text-nowrap relative">
                            {sections.map((section) => (
                                <li
                                    key={section.id}
                                    className={`relative px-4 my-4 ${activeSection === section.id
                                        ? 'text-[#000000] font-medium'
                                        : 'font-medium text-[#000000] opacity-50'
                                        }`}
                                >
                                    {activeSection === section.id && (
                                        <div className="absolute right-0 h-full w-[4px] rounded-t-xl rounded-b-xl  bg-[#015A58] top-0"></div>
                                    )}

                                    <a href={`#${section.id}`} className="hover:text-[#015A58]">
                                        {section.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>


                {/* Content Section with Left Margin to avoid overlap */}
                <div className="case-study-content ml-10">
                    <section id="ProjectOverview" className="">
                        <h1 className='text-nowrap text-[40px] text-[#015A58] text-center mb-5'>Creative Approach to Borrowing & Loan Management</h1>
                        <img src={afcHome} alt="Overview" />

                        <div className="mt-10">
                            <p className='text-nowrap font-medium text-[#015A58] text-[30px]'>Project Overview</p>
                            <p className='text-left font-normal leading-6 text-[14px] '>
                                This project aims to develop a user-centric digital platform that addresses the financial needs of both farmers and non-farmers within the Active Farmers Cooperative.
                                By creating a streamlined and intuitive interface, the platform will simplify the loan application and approval process, enhance customer satisfaction,
                                and improve operational efficiency for the cooperative's finance team. {<br />}
                                The ultimate goal is to create a mutually beneficial financial ecosystem that empowers borrowers while optimizing loan management for the cooperative.
                            </p>
                        </div>
                    </section>

                    <section id="MyRoleAndDesignProcess" className="mt-14">
                        <p className='text-nowrap font-medium text-[#015A58] text-[30px]'>My Role & Design Process</p>

                        <div className="flex justify-between mt-5">
                            <div className="my-role">
                                <ul>
                                    <li className=''>
                                        <p className="font-medium">User Researcher</p>

                                        <div className="grid grid-cols-2 gap-2 text-[12px] font-medium mt-3">
                                            <div className="role-item text-center w-auto p-1 border-[1.5px] border-[#000000] rounded-full ">
                                                Research
                                            </div>
                                            <div className="role-item text-center w-auto p-1 border-[1.5px] border-[#000000] rounded-full ">
                                                Analyze
                                            </div>
                                            <div className="role-item text-center w-auto p-1 border-[1.5px] border-[#000000] rounded-full ">
                                                Ideate
                                            </div>
                                        </div>
                                    </li>

                                    <li className='mt-8'>
                                        <p className="font-medium">Visual Designer</p>

                                        <div className="grid grid-cols-2 gap-2 text-[12px] font-medium mt-3">
                                            <div className="role-item text-center w-auto p-1 border-[1.5px] border-[#000000] rounded-full ">
                                                Wireframes
                                            </div>
                                            <div className="role-item text-center w-auto p-1 border-[1.5px] border-[#000000] rounded-full ">
                                                Design System
                                            </div>
                                            <div className="role-item text-center w-auto p-1 border-[1.5px] border-[#000000] rounded-full ">
                                                Hi-fi Designs
                                            </div>
                                        </div>
                                    </li>

                                    <li className='mt-8'>
                                        <p className="font-medium">Interaction Designer</p>

                                        <div className="grid grid-cols-2 gap-2 text-[12px] font-medium mt-3">
                                            <div className="role-item text-center w-auto p-1 border-[1.5px] border-[#000000] rounded-full ">
                                                Prototype
                                            </div>
                                            <div className="role-item text-center w-auto p-1 border-[1.5px] border-[#000000] rounded-full ">
                                                Test
                                            </div>
                                            <div className="role-item text-center w-auto p-1 border-[1.5px] border-[#000000] rounded-full ">
                                                Iterate
                                            </div>
                                        </div>
                                    </li>



                                </ul>
                            </div>
                            <img src={designProcess} alt="Research and Insights" className='w-[70%] h-[70%]' />
                        </div>

                    </section>

                    <section id="ResearchAndInsights" className="mt-14">

                        <p className='text-nowrap font-medium text-[#015A58] text-[30px]'>Research & Discovery</p>
                        <p className='text-left font-normal leading-6 text-[14px]'>
                            To understand the needs, pain points, and frustrations of potential users, I conducted a comprehensive research This included:
                        </p>
                        <div>
                            <ul className='text-[14px] list-inside list-disc mt-4'>
                                <p className='text-[14px] font-semibold opacity-80'>User Interviews:</p>
                                <li className="mt-1">Conducted interviews with farmers and entrepreneurs in agriculture-related businesses.</li>
                                <li className="mt-1">Explored their financial challenges, loan application experiences, and loan tracking methods.</li>
                                <li className="mt-1">Identified varying levels of tech proficiency and preferences for intuitive interfaces.</li>
                            </ul>
                            <ul className='text-[14px] list-inside list-disc mt-5'>
                                <p className='text-[14px] font-semibold opacity-80'>Surveys and Data Analysis:</p>
                                <li className="mt-1">Distributed surveys to gauge preferences, frustrations, and desires regarding loan processes.</li>
                                <li className="mt-1">Analyzed existing data from financial institutions and cooperatives to uncover common pain points.</li>
                                <li className="mt-1">Discovered a lack of transparency in loan tracking and challenges in managing multiple loan applications.</li>
                            </ul>

                            <ul className='text-[14px] list-inside list-disc mt-5'>
                                <p className='text-[14px] font-semibold opacity-80'>Stakeholder Engagement:</p>
                                <li className="mt-1"> Engaged with the finance managers and the cooperative team members to understand administrative challenges.</li>
                                <li className="mt-1">Explored the complexities of managing loan requests, approvals, and compliance requirements.</li>
                                <li className="mt-1">Recognized the need for a streamlined, centralized system for effective financial loan and savings management.</li>
                            </ul>

                            <ul className='text-[14px] list-inside list-disc mt-5 '>
                                <p className='text-[14px] font-semibold opacity-80'>Insights Obtained:</p>
                                <li className="mt-1">Found a recurring need for transparent and easily accessible loan tracking for borrowers.</li>
                                <li className="mt-1">Discovered frustrations among borrowers and the finance team due to complex and manual processes.</li>
                                <li className="mt-1">Identified the necessity for an intuitive platform accommodating diverse tech skills and efficient administrative tools for financial managers.</li>
                            </ul>
                        </div>
                        <div className="mt-10">
                            <p className='text-nowrap font-medium text-[#015A58] text-[30px]'>User Personas</p>
                            <img src={personaOne} alt="User persona" className='w-[70%] mt-5' />
                            <img src={personaTwo} alt="User persona" className='w-[70%] mt-5' />
                        </div>
                        <div className='mt-10'>
                            <p className='text-nowrap font-medium text-[#015A58] text-[30px]'>User Flow - User Type 1</p>
                            <img src={userFlow} alt="User persona" className='w-[90%] mx-auto mt-5' />
                        </div>
                    </section>

                    <section id="CompetitiveAnalysis" className="mt-14">
                        <p className='text-nowrap font-medium text-[#015A58] text-[30px]'>Competitive Analysis</p>
                        <p className='text-left font-normal leading-6 text-[14px] mt-3'>
                            The competitive analysis was formed through an in-depth evaluation of multiple financial service providers, focusing on their loan application processes, tracking mechanisms, user interfaces, administrative tools, decision speed, communication, customization, support, and security measures.
                        </p>
                        <p className='text-left font-normal leading-6 text-[14px] mt-5'>
                            This competitive analysis reveals Active Farmers Cooperative's distinct focus on transparency, robust administrative tools, efficiency, user-centric design, and superior customer support, positioning it as a leader in delivering an optimal financial solution for borrowers and an efficient management system for the finance team.
                        </p>
                        <img src={CompetitiveAnalysis} alt="Competitive analysis" className='w-[60%] mt-5' />
                    </section>

                    <section id="UIDesignsUserType1" className="mt-14">
                        <p className='text-nowrap font-medium text-[#015A58] text-[30px]'>User Type One (Cooperative Members) UI Screens</p>
                        <img src={afcOnboarding} alt="UI Designs - User Type 1" className=' mt-5' />

                        <div className="image-grid mt-8 grid grid-cols-2 gap-y-8 items-center">
                            {afcUserImages.map((image, index) => (
                                <div key={index} className="">
                                    <img src={image} alt={`case-study-${index}`} className='max-w-[80%] ' />
                                </div>
                            ))}
                        </div>
                    </section>

                    <section id="UIDesignsUserType2" className="mt-14">
                        <p className='text-nowrap font-medium text-[#015A58] text-[30px]'>User Type Two (Cooperative Admin) UI Screens</p>
                        <img src={afcMain} alt="UI Designs - User Type 2" className=' mt-5' />

                        <div className="image-grid mt-8 grid grid-cols-2 gap-y-8">
                            {afcAdminImages.map((image, index) => (
                                <div key={index} className="">
                                    <img src={image} alt={`case-study-${index}`} className='max-w-[80%]  ' />
                                </div>
                            ))}
                        </div>
                    </section>

                    <section id="OutcomeAndResults" className="my-14">
                        <p className='text-nowrap font-medium text-[#015A58] text-[30px]'>Outcomes & Results</p>
                        <div>
                            <div className="flex items-center mt-6">
                                <Icon icon="fluent:play-12-filled" className="text-[#015A58] w-6 h-6 me-2" />
                                <p className='text-nowrap font-medium text-[#015A58] text-[18px]'>Changes to User One Behavior (Cooperatives Members)</p>
                            </div>
                            <div className='mt-2'>
                                <p className='text-[14px] font-semibold opacity-80'>Streamlined Loan Application Process</p>
                                <p className="text-[14px] mt-1">Previously, cooperative members faced significant hurdles in applying for loans, often due to complex paperwork and unclear steps. By introducing an intuitive, user-friendly interface, we simplified the entire loan application process, reducing the time and effort needed to submit requests. The platform’s guided workflows empowered users, even those with limited tech proficiency, to navigate the loan process with confidence</p>
                            </div>

                            <div className='mt-2'>
                                <p className='text-[14px] font-semibold opacity-80'>Enhanced Loan Tracking</p>
                                <p className="text-[14px] mt-1">Through the new platform, cooperative members gained access to real-time loan status updates, providing transparency and eliminating frustrations around uncertainty in the loan approval process. Borrowers could now monitor their loan requests, repayment schedules, and outstanding balances on a clear, easily accessible dashboard. This has significantly improved user satisfaction, as members feel more in control of their finances and are better informed about their obligations.</p>
                            </div>
                        </div>

                        {/* Two */}
                        <div>
                            <div className="flex items-center mt-6">
                                <Icon icon="fluent:play-12-filled" className="text-[#015A58] w-6 h-6 me-2" />
                                <p className='text-nowrap font-medium text-[#015A58] text-[18px]'>Changes to User One Behavior (Cooperatives Members)</p>
                            </div>
                            <div className='mt-2'>
                                <p className='text-[14px] font-semibold opacity-80'>Centralized Loan Management</p>
                                <p className="text-[14px] mt-1">For the cooperative’s finance team, the transition from manual loan management to a digital platform dramatically improved operational efficiency. All loan applications, approvals, and repayments were now centralized within the system, allowing administrators to streamline workflows, reduce errors, and quickly access information. This change eliminated the need for cumbersome spreadsheets and reduced the time spent on administrative tasks by a significant margin.</p>
                            </div>

                            <div className='mt-2'>
                                <p className='text-[14px] font-semibold opacity-80'>Automated Notifications and Compliance</p>
                                <p className="text-[14px] mt-1">The platform’s built-in notification system automated updates for key stages in the loan lifecycle, such as approvals and repayment reminders. This automation relieved the administrative burden on the finance team and ensured that borrowers remained informed, improving compliance with repayment schedules. Furthermore, the platform’s adherence to cooperative policies and regulatory requirements reduced the risk of human error in the loan management process.</p>
                            </div>
                        </div>

                        {/* Three */}
                        <div>
                            <div className="flex items-center mt-6">
                                <Icon icon="fluent:play-12-filled" className="text-[#015A58] w-6 h-6 me-2" />
                                <p className='text-nowrap font-medium text-[#015A58] text-[18px]'>Value Added to the Cooperative (Business and Experience Value)</p>
                            </div>
                            <div className='mt-2'>
                                <p className='text-[14px] font-semibold opacity-80'>Increased Loan Approval Rate and Member Engagement</p>
                                <p className="text-[14px] mt-1">By addressing the primary pain points of both borrowers and administrators, the platform fostered a higher loan approval rate, leading to increased financial engagement among cooperative members. The transparency in loan tracking and improved user experience enhanced member trust in the cooperative, resulting in a growing number of users participating in financial services.</p>
                            </div>

                            <div className='mt-2'>
                                <p className='text-[14px] font-semibold opacity-80'>Optimized Operational Efficiency</p>
                                <p className="text-[14px] mt-1">From the administrative perspective, the platform reduced time spent on repetitive, manual tasks, allowing the finance team to focus on more strategic operations. The digitization of loan management translated into faster loan processing times, fewer errors, and an overall improvement in the cooperative’s operational capacity. This has not only improved the daily experience for administrators but also contributed to long-term cost savings for the cooperative.</p>
                            </div>

                            <div className='mt-2'>
                                <p className='text-[14px] font-semibold opacity-80'>Strengthened Cooperative’s Financial Ecosystem</p>
                                <p className="text-[14px] mt-1">The platform’s ability to accommodate both the cooperative’s members and its finance team has created a stronger, more interconnected financial ecosystem. With a seamless loan application, approval, and tracking process, both users and admins are better equipped to manage their respective roles. This alignment has fostered a sustainable financial environment where the cooperative can continue to thrive, expand its services, and remain competitive in the agricultural finance sector.</p>
                            </div>
                        </div>
                    </section>

                </div>
            </div>

            <div className="landing-section h-[400px] bg-cover bg-center bg-no-repeat flex">
                <div className=" w-full h-full bg-gradient-to-b from-[#000000D9] to-[#002F2ED9] p-12 flex items-center justify-center">


                    <div className='text-center'>
                        <p className="text-white text-[16px] ">Next Project</p>
                        <p className="text-white text-[40px] font-medium text-nowrap mt-10">Pride Mobile Application</p>
                        <button
                            onClick={handleClick}
                            className=" flex items-center justify-center hoverable resume-button w-[120px]  bg-white text-[#015A58] p-1 mt-4 mx-auto"
                        >
                            <p className="text-sm font-medium me-1 ">Case Study</p>
                            <Icon icon="guidance:left-arrow" className="w-6 h-auto" />
                        </button>
                    </div>
                </div>
            </div>
            {showSnackbar && (
                <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-[#015A58] text-white px-4 py-2 rounded-md shadow-lg">
                    The design case is yet to be implemented.
                </div>
            )}
        </div>
    );
}
