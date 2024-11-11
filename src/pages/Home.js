import Navbar from "../components/Navbar";
import { Icon } from '@iconify/react';

import greenRectangle from '../assets/green_rectangles.png';
import CaseStudiesList from "../components/CaseStudiesList";


const Home = () => {


    return (
        <div className="bg-white overflow-x-hidden">

            <div className="landing-section h-screen bg-cover bg-center bg-no-repeat flex flex-col ">
                <div className=" w-[96%] h-[96vh]  bg-gradient-to-b from-[#000000D9] to-[#002F2ED9] relative   ">
                    <Navbar />


                    {/* <div className="flex flex-col items-stretch mt-8"> */}
                    <div className="home-screen-text flex items-center justify-center absolute top-1/2 left-1/2 md:left-[40%] transform -translate-x-1/2 -translate-y-1/2">
                        <img src={greenRectangle} alt="" className='w-7 absolute right-[40px] top-[-90px] sm:right-[-50px] lg:right-[-110px] lg:top-[-50px] xl:right-[-110px] xl:top-[-50px] 2xl:right-[-110px] 2xl:top-[-50px]' />
                        <div className="bio px-3 py-1  border-l-[1.5px] border-l-white text-white w-[250px] xs:w-[280px] md:w-fit lg:w-max xl:w-max 2xl:w-max ">

                            <h1 className="text-[25px] sm:text-[32px] sm:text-nowrap md:text-[38px] md:text-nowrap lg:text-[45px] lg:text-nowrap xl:text-[45px] xl:text-nowrap 2xl:text-[45px] 2xl:text-nowrap font-[500]">Kadwama Deborah Lazarus</h1>

                            <p className="text-[13px] sm:text-[14px] text-justify leading-relaxed mt-3  sm:text-nowrap md:text-left xl:text-left 2xl:text-left md:text-nowrap lg:text-nowrap xl:text-nowrap 2xl:text-nowrap">
                                A digital product designer, crafting innovative and {<br />}
                                sustainable solutions that seamlessly balance user {<br />}
                                needs with business goals. Welcome to my portfolio... {<br />}
                            </p>


                            <button
                                onClick={() => window.open('/Kadwama-Lazarus-Resume.pdf', '_blank')}
                                rel="noopener noreferrer"
                                className=" flex items-center justify-center hoverable resume-button w-[120px]  bg-white text-[#015A58] rounded-[2px] p-1 mt-4"
                            >
                                <Icon icon="iconoir:download" className="w-6 h-auto" />
                                <p className="text-sm font-medium ms-1 ">Resume</p>
                            </button>
                        </div>
                    </div>

                    <div className="social-media-links absolute bottom-16 right-6 md:right-16 lg:right-16 xl:right-16 2xl:right-16">
                        <div className="text-white ">

                            <a href="mailto:mailto:lazaruskadwama@gmail.com" target="_blank" rel="noreferrer" className="">
                                <Icon icon="ion:mail" className="social-icon w-4 h-auto mt-5  hover:scale-150 transition-transform duration-200" />
                            </a>
                            <a href="https://www.linkedin.com/in/kadwama-lazarus-60664b1b2/" target="_blank" rel="noreferrer" className="">
                                <Icon icon="ri:linkedin-fill" className="social-icon w-4 h-auto mt-5  hover:scale-150 transition-transform duration-200" />
                            </a>
                            <a href="https://x.com/DeborahLazarus4" target="_blank" rel="noreferrer" className="">
                                <Icon icon="lucide:twitter" className="social-icon w-4 h-auto mt-5  hover:scale-150 transition-transform duration-200" />
                            </a>
                            <a href="https://www.behance.net/kadwamaDeborah" target="_blank" rel="noreferrer" className="">
                                <Icon icon="bxl:behance" className="social-icon w-5 h-auto mt-5  hover:scale-150 transition-transform duration-200" />
                            </a>
                        </div>

                    </div>
                    {/* </div> */}

                </div>
                <hr className="rectangle-bar w-[10px] bg-[#093639D9] border-none ml-auto mr-12 h-[calc(100vh-95vh)]   md:mr-24 lg:mr-28 xl:mr-32 2xl:mr-32" />
            </div>

            <div className="coming-soon">
                {/* <div className="py-24 flex flex-col items-center justify-center px-2">
                    <h1 className="text-[30px] text-center text-[#015A58] md:text-[45px] lg:text-[55px] xl:text-[55px] 2xl:text-[55px]  ">
                        Design Case Studies Coming Soon...
                    </h1>
                    <p className="text-[20px] mt-3 font-medium text-center text-[#015A58]">Kindly check back after a few weeks</p>
                </div> */}
                

                <div className="flex items-center justify-center lg:py-16 xl:py-16 2xl:py-16  xl:px-20 2xl:px-20">
                    <CaseStudiesList />
                </div>
            </div>

            <section>
                <div className="contact-me py-8 bg-[#015A58] lg:h-[300px] ">
                    <div className="flex items-end  w-full">
                        {/* Horizontal line aligned to the left */}
                        <hr className='w-[60px] lg:w-[100px] xl:w-[100px] 2xl:w-[100px] mb-3 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-5 2xl:mb-4' />

                        {/* Div aligned to the right */}
                        <div className='flex flex-col'>
                            <div className="contact-me-text text-white">
                                <p className="text-[25px] lg:text-[40px] xl:text-[40px] 2xl:text-[40px] font-medium ">Contact Me</p>
                                <p className='text-[12px] lg:text-[14px] xl:text-[14px] 2xl:text-[14px] mb-5'>Do you have an exciting idea in mind? <br />Send a mail</p>
                            </div>
                            <div className=" mt-4 ">
                                <a href="mailto:lazaruskadwama@gmail.com" className='hoverable resume-button text-white flex items-center'>
                                    <Icon icon="mdi-light:arrow-right-circle" className='w-6 sm:w-8 md:w-10 lg:w-12 xl:w-12 2xl:w-14  h-auto' />
                                    <p className='text-[12px] sm:text-[14px] md:text-[14px] lg:text-[14px] xl:text-[14px] 2xl:text-[14px]'>lazaruskadwama@gmail.com</p>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </div>


    );
};

export default Home;

