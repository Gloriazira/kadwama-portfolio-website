import React, { useState } from 'react';
import Navbar from '../../components/Navbar';

import { Icon } from '@iconify/react/dist/iconify.js';

import herpride from '../../assets/her_pride/her-pride.png';
import personaOne from '../../assets/her_pride/UserPersona1.png';
import personaTwo from '../../assets/her_pride/UserPersona2.png';
import userJourney from '../../assets/her_pride/HerPride_User_Journey_Map.png';
import userFlow from '../../assets/her_pride/user-flow.png';

import herprideStyleGuide from '../../assets/her_pride/style-guide.png';
// import herprideStyleOne from '../../assets/her_pride/style-guide1.png';
// import herprideStyleTwo from '../../assets/her_pride/style-guide2.png';
import herprideSignupOne from '../../assets/her_pride/signup-screen1.png';
import herprideSignupTwo from '../../assets/her_pride/signup-screen2.png';
import herprideOnboardingOne from '../../assets/her_pride/onboarding-screens1.png';
import herprideOnboardingTwo from '../../assets/her_pride/onboarding-screens2.png';


export default function HerPride() {
    const [showSnackbar, setShowSnackbar] = useState(false);

    const handleClick = () => {
        setShowSnackbar(true);
        setTimeout(() => setShowSnackbar(false), 3000);

    };

    return (
        <div className='overflow-x-hidden'>
            <div className="">
                <Navbar />



                <div className="py-20">
                    <img src={herpride} alt="Overview" className='mt-14' />

                    <div className="case-study-content px-6 lg:px-0 xl:px-0 2xl:px-0 lg:mx-8 xl:mx-8 2xl:mx-8">

                        <section className="">
                            <div className="mt-10">
                                <p className='text-wrap lg:text-nowrap xl:text-nowrap 2xl:text-nowrap font-bold text-[#000000] text-center lg:text-left xl:text-left 2xl:text-left text-[25px] lg:text-[30px] xl:text-[30px] 2xl:text-[30px]'>Project Overview</p>
                                {/* <div className="grid grid-cols-2 md:flex md:justify-between lg:flex xl:flex 2xl:flex mt-6"> */}
                                  
                                    <div className="flex flex-wrap gap-4 lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap mt-6">
                                        <div className="basis-[calc(50%-1rem)] md:basis-[calc(30%-1rem)] flex-1 min-w-0">
                                            <p className="my-role font-semibold text-[20px] lg:text-[22px] xl:text-[22px] 2xl:text-[22px]">My role</p>
                                            <ul className='mt-2 text-[13px] whitespace-normal'>
                                                <li>User Research</li>
                                                <li>User Interviews</li>
                                                <li>Sketching</li>
                                                <li>Wireframing</li>
                                                <li>Prototyping</li>
                                                <li>Visual Design</li>
                                                <li>Interaction Design</li>
                                            </ul>
                                        </div>

                                        <div className="basis-[calc(50%-1rem)] md:basis-[calc(30%-1rem)] flex-1 min-w-0">
                                            <p className="collaboration font-semibold text-[20px] lg:text-[22px] xl:text-[22px] 2xl:text-[22px]">Collaboration</p>
                                            <ul className='mt-2 text-[13px] whitespace-normal'>
                                                <li className='font-normal'>Anjola Odunaike (Product Manager)</li>
                                                <li>User Personas</li>
                                                <li>User Journey Map</li>
                                            </ul>
                                        </div>

                                        <div className="basis-[calc(50%-1rem)] md:basis-[calc(30%-1rem)] flex-1 min-w-0">
                                            <p className="project-info font-semibold text-[20px] lg:text-[22px] xl:text-[22px] 2xl:text-[22px]">Project</p>
                                            <ul className='mt-2 text-[13px] whitespace-normal'>
                                                <li>Title - Her Pride Mobile App</li>
                                                <li>Year - 2024</li>
                                                <li>Duration - 5 Weeks</li>
                                                <li>Type - Contract</li>
                                            </ul>
                                        </div>
                                    </div>


                                {/* </div> */}
                            </div>
                        </section>

                        <section className="">
                            <div className="mt-10">
                                <p className='text-wrap lg:text-nowrap xl:text-nowrap 2xl:text-nowrap font-bold text-[#000000] text-center lg:text-left xl:text-left 2xl:text-left text-[25px] lg:text-[30px] xl:text-[30px] 2xl:text-[30px]'>PROBLEM</p>
                                <p className='text-justify  lg:text-justify xl:text-justify 2xl:text-justify font-normal leading-6 text-[14px] '>
                                    In Nigeria, many women and girls face challenges in understanding and managing their menstrual cycles due to limited access to personalized health insights,
                                    reliable predictions, and culturally relevant resources. This gap often leads to missed opportunities for self-care, inadequate preparation for cycle-related changes, and difficulties in
                                    addressing premenstrual symptoms effectively. Furthermore, the lack of convenient access to healthcare products and support tailored to their needs exacerbates these
                                    challenges, impacting their overall well-being and confidence in navigating menstrual health.
                                </p>
                            </div>
                        </section>



                        <section className="mt-14">
                            <p className='text-wrap lg:text-nowrap xl:text-nowrap 2xl:text-nowrap font-bold text-[#000000] text-center lg:text-justify xl:text-left 2xl:text-left text-[25px] lg:text-[30px] xl:text-[30px] 2xl:text-[30px]'>APPROACH</p>

                            <div className=' lg:flex xl:flex 2xl:flex justify-between mt-5'>
                                <div className='lg:mr-5 xl:mr-5 2xl:mr-5'>
                                    <p className='text-wrap lg:text-nowrap xl:text-nowrap 2xl:text-nowrap font-bold text-[#000000] text-center lg:text-left xl:text-left 2xl:text-left text-[20px] lg:text-[22px] xl:text-[22px] 2xl:text-[22px]'>Design Approach</p>
                                    <p className='text-justify  lg:text-justify xl:text-justify 2xl:text-justify font-normal leading-6 text-[14px] '>
                                        The product is designed to cater specifically to the unique experiences and preferences
                                        of Nigerian women and girls. It focuses on creating a culturally relevant, user-friendly
                                        interface with intuitive language and features that resonate with this demographic. By
                                        incorporating terms and tools that are familiar and relatable, the application seeks to
                                        demystify period tracking and empower users to take control of their menstrual health
                                        with confidence and ease.
                                    </p>
                                </div>
                                <div className='mt-8 lg:mt-0 xl:mt-0 2xl:mt-0 lg:ml-5 xl:ml-5 2xl:ml-5'>
                                    <p className='text-wrap lg:text-nowrap xl:text-nowrap 2xl:text-nowrap font-bold text-[#000000] text-center lg:text-left xl:text-left 2xl:text-left text-[20px] lg:text-[22px] xl:text-[22px] 2xl:text-[22px]'>Product Curation Approach</p>
                                    <p className='text-justify  lg:text-justify xl:text-justify 2xl:text-justify font-normal leading-6 text-[14px] '>
                                        The application addresses the challenges of healthcare product accessibility and
                                        relatability by curating a selection of products and health tips that align with the
                                        preferences and needs of Nigerian women. This includes integrating trusted, locally
                                        available brands and providing actionable, culturally relevant health advice that users
                                        can easily adopt. The goal is to make healthcare management seamless and relatable
                                        while fostering trust and relevance in the solutions provided.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="mt-14">
                            <p className='text-wrap lg:text-nowrap xl:text-nowrap 2xl:text-nowrap font-bold text-[#000000] text-center lg:text-left xl:text-left 2xl:text-left text-[25px] lg:text-[30px] xl:text-[30px] 2xl:text-[30px]'>USER PERSONAS</p>
                            <div className="md:flex lg:flex xl:flex 2xl:flex justify-between mt-10">
                                <img src={personaOne} alt="User persona" className='w-full md:max-w-[45%] lg:max-w-[45%] xl:max-w-[45%] 2xl:max-w-[45%] ' />
                                <img src={personaTwo} alt="User persona" className='w-full md:max-w-[45%] lg:max-w-[45%] xl:max-w-[45%] 2xl:max-w-[45%] mt-8 lg:mt-0 xl:mt-0 2xl:mt-0 ' />
                            </div>
                        </section>

                        <section className="mt-14">
                            <p className='text-nowrap text-cente lg:text-nowrap xl:text-nowrap 2xl:text-nowrap font-bold text-[#000000] r lg:text-left xl:text-left 2xl:text-left text-[25px] lg:text-[30px] xl:text-[30px] 2xl:text-[30px]'>USER JOURNEY MAP</p>
                            <img src={userJourney} alt="user journey screens one" className='w-full mt-5' />
                        </section>

                        <section className="mt-14">
                            <p className='text-wrap lg:text-nowrap xl:text-nowrap 2xl:text-nowrap font-bold text-[#000000] text-center lg:text-left xl:text-left 2xl:text-left text-[25px] lg:text-[30px] xl:text-[30px] 2xl:text-[30px]'>USER FLOW</p>
                            <img src={userFlow} alt="user flow" className=' mt-5' />
                        </section>

                        <section className="mt-14">
                            <p className='text-wrap lg:text-nowrap xl:text-nowrap 2xl:text-nowrap font-bold text-[#000000] text-center lg:text-left xl:text-left 2xl:text-left text-[25px] lg:text-[30px] xl:text-[30px] 2xl:text-[30px]'>STYLE GUIDE</p>
                            <img src={herprideStyleGuide} alt="Onboarding screens one" className='w-full mt-5' />
                            {/* <img src={herprideStyleOne} alt="Onboarding screens one" className='w-full mt-5' />
                            <img src={herprideStyleTwo} alt="Onboarding screens one" className='w-full mt-5' /> */}
                        </section>

                        <section className="mt-14">
                            <p className='text-wrap lg:text-nowrap xl:text-nowrap 2xl:text-nowrap font-bold text-[#000000] text-center lg:text-left xl:text-left 2xl:text-left text-[25px] lg:text-[30px] xl:text-[30px] 2xl:text-[30px]'>HIGH FIDELITY UI SCREENS</p>

                            <div className="mt-6">
                                <p className="user-signup font-semibold text-[20px] lg:text-[22px] xl:text-[22px] 2xl:text-[22px]">User Sign Up</p>
                                <p className='text-justify  lg:text-justify xl:text-justify 2xl:text-justify font-normal leading-6 text-[14px]'>
                                    The high-fidelity sign-up screens are designed to provide a seamless and welcoming onboarding experience. With a clean and intuitive layout, users
                                    are guided through simple steps to create an account, ensuring ease of access to the app's features. The screens incorporate relatable visuals,
                                    concise language that resonate with the target audience, emphasizing inclusivity and user-friendliness from the very first interaction.
                                </p>
                                <div className="mt-8 flex flex-col items-center">
                                    <img src={herprideSignupOne} alt="Onboarding screens one" className='w-full lg:max-w-[90%] xl:max-w-[90%] 2xl:max-w-[90%]' />
                                    <img src={herprideSignupTwo} alt="Onboarding screens two" className='w-full lg:max-w-[90%] xl:max-w-[90%] 2xl:max-w-[90%] mt-5' />
                                </div>
                            </div>

                            <div className="mt-8 lg:mt-24 xl:mt-24 2xl:mt-24">
                                <p className="user-signup font-semibold text-[20px] lg:text-[22px] xl:text-[22px] 2xl:text-[22px]">User Onboarding</p>
                                <p className='text-justify  lg:text-justify xl:text-justify 2xl:text-justify font-normal leading-6 text-[14px]'>
                                    The high-fidelity onboarding screens are designed to collect key user information essential for curating a personalized experience. These screens feature a
                                    friendly and approachable design, guiding users to input details such as age, menstrual cycle history, and specific preferences. By focusing on simplicity,
                                    the onboarding process ensures that users feel understood and valued while enabling the app to deliver tailored insights and recommendations
                                </p>
                                <div className="mt-8 flex flex-col items-center">
                                    <img src={herprideOnboardingOne} alt="Onboarding screens one" className='w-full lg:max-w-[90%] xl:max-w-[90%] 2xl:max-w-[90%]' />
                                    <img src={herprideOnboardingTwo} alt="Onboarding screens two" className='w-full lg:max-w-[90%] xl:max-w-[90%] 2xl:max-w-[90%] mt-5' />
                                </div>
                            </div>
                        </section>

                    </div>
                </div>


                <div className="landing-section h-[400px] bg-cover bg-center bg-no-repeat flex">
                    <div className=" w-full h-full bg-gradient-to-b from-[#000000D9] to-[#002F2ED9] p-12 flex items-center justify-center">
                        <div className='text-center'>
                            <p className="text-white text-[16px] ">Next Project</p>
                            <p className="text-white text-[30px] lg:text-[40px] xl:text-[40px] 2xl:text-[40px] font-medium text-wrap md:text-nowrap lg:text-nowrap xl:text-nowrap 2xl:text-nowrap mt-10">Creative Approach to Borrowing</p>
                            <button
                                onClick={handleClick}
                                className=" flex items-center justify-center hoverable resume-button w-[120px]  bg-white text-[#000000] p-1 mt-4 mx-auto"
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

        </div>
    );
}
