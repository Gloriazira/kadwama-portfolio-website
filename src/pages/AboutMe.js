import React from 'react';
import { Icon } from '@iconify/react';
import Navbar from "../components/Navbar";
import profilePicture from '../assets/my_picture.png';
import whiteRectangle from '../assets/white_rectangles.png';
import helloTractor from '../assets/organizations/hello_tractor.png';
import labondo from '../assets/organizations/labondo.png';
import haraf from '../assets/organizations/haraf.png';
import bigFamily from '../assets/organizations/big_family360.png';
import sunSet from '../assets/organizations/sunset_realtors.png';
import pride from '../assets/organizations/pride.png';

const AboutMe = () => {
    return (
        <div>
            <Navbar />
            <section className="about-me xl:mt-20">
                <div className="flex flex-col justify-center items-end lg:flex-row xl:flex-row 2xl:flex-row lg:items-center xl:items-center 2xl:items-center xl:px-8 ">
                    <div className="image w-screen lg:w-[650px] lg:h-[700px] xl:w-[650px] xl:h-[700px] 2xl:w-[650px] 2xl:h-[700px]  ">
                        <img src={profilePicture} alt="Kadwama's Portrait" className='h-full w-full lg:w-auto xl:w-auto 2xl:w-auto  object-contain lg:object-cover xl:object-cover 2xl:object-cover lg:rounded-[20px] xl:rounded-[20px] 2xl:rounded-[20px]' />
                    </div>

                    <div className="bio-text w-[calc(100vw-5vw)] lg:w-[1100px] xl:w-[1100px] 2xl:w-[1100px] bg-[#015A58] text-white text-400 lg:rounded-[20px] xl:rounded-[20px] 2xl:rounded-[20px] px-5 md:px-10 py-5 mt-[-30px] md:mt-[-50px] lg:mt-0 xl:mt-0 2xl:mt-0 lg:mb-32 xl:mb-32 2xl:mb-32 flex flex-col justify-between ">
                        <div className="flex items-center justify-between">
                            <h1 className='text-[18px] sm:text-[28px] md:text-[34px] lg:text-[45px] xl:text-[45px] 2xl:text-[45px] text-nowrap font-light'>Kadwama Deborah Lazarus</h1>
                            <img src={whiteRectangle} alt="" className='w-5 sm:w-7 md:w-7 block lg:hidden xl:hidden 2xl:hidden ' />
                        </div>


                        <div className="flex items-start justify-between my-4">
                            <div className="highlights">
                                <p className='text-[18px] font-medium'>Highlights</p>
                                <ul className='list-disc list-inside text-[13px] leading-loose font-thin text-justify lg:text-left xl:text-left 2xl:text-left'>
                                    <li className=''>4+ years of work experience in product design</li>
                                    <li className=''>Currently working in the agricultural innovation technology sector with <span className='font-[500] border-b-[1.5px] border-b-white '>Hello Tractor</span></li>
                                    <li className=''>Product design experience in B2B and B2C products, agro-tech and innovation technology</li>
                                    <li className=''>Transitioned to UX Design from a chemical engineering background</li>
                                </ul>
                            </div>
                            <img src={whiteRectangle} alt="" className='w-7 hidden lg:block xl:block 2xl:block' />
                        </div>

                        <div className="more-about-me mt-5  md:my-10 ">
                            <p className='text-600 text-[18px] font-medium '>More About Me</p>
                            <p className='text-[13px] leading-loose font-thin text-justify lg:text-left xl:text-left 2xl:text-left'>
                                I'm Kadwama, a digital product designer with a passion for crafting intuitive and sustainable products that bridge the
                                gap between user needs and business objectives. Over the years, I’ve worked with diverse teams and brands to bring
                                innovative ideas to life, transforming complex challenges into seamless, engaging experiences that delight users and
                                drive growth.
                            </p>
                            <p className="text-[13px] leading-loose font-thin text-justify lg:text-left xl:text-left 2xl:text-left">
                                My design philosophy revolves around a deep understanding of both the user and the business. I believe that truly
                                great products come from finding the sweet spot where user experience meets business strategy. Whether it's
                                creating a sleek interface or improving a product’s functionality, I focus on delivering solutions that are not only
                                aesthetically pleasing but also practical, scalable, and aligned with long-term goals.
                            </p>
                        </div>

                        <div className="likes flex flex-col  items-start lg:flex-row lg:items-center xl:flex-row xl:items-center 2xl:flex-row 2xl:items-center justify-around mt-4">
                            <div className="interest ">
                                <div className="flex items-center">
                                    <Icon icon="token-branded:fun" className='w-8 h-auto' />
                                    <p className='text-600 text-[18px] font-medium ms-3 '>Interests</p>
                                </div>
                                <ul className='list-disc list-inside text-[13px] leading-loose font-thin text-left mt-1'>
                                    <li className=''>Attending design & tech events</li>
                                    <li className=''>Baking confectioneries</li>
                                    <li className=''>Reading fiction novels</li>
                                    <li className=''>Traveling to new places</li>
                                </ul>
                            </div>
                            <div className="books mt-8">
                                <div className="flex items-center">
                                    <Icon icon="emojione:books" className='w-8 h-auto ' />
                                    <p className='text-600 text-[18px] font-medium ms-3'>Favorite Books</p>
                                </div>

                                <ul className='list-disc list-inside text-[13px] leading-loose font-thin text-left mt-1'>
                                    <li className=''>Design of Everyday Things (Revised) - Don Norman</li>
                                    <li className=''>Atomic Habits - James Clear</li>
                                    <li className=''>Don’t Make me Think - Steve Krug</li>
                                    <li className=''>Steal like an artist - Austin Kleon</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="organization px-10 bg-white flex flex-col items-center justify-center text-center my-5 py-5">
                    <p className='text-[18px] md:text-[20px] xl:text-[20px] 2xl:text-[20px] font-medium text-[#000000] '>Companies & Organizations I’ve worked with</p>

                    <div className="grid grid-cols-3 gap-x-5 gap-y-5 md:gap-x-8 md:gap-y-8 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-6 items-center justify-center mt-3">
                        <img src={helloTractor} alt="" className='w-28 h-auto ' />
                        <img src={labondo} alt="" className='w-28 md:w-32 lg:w-32 xl:w-32 2xl:w-32 h-auto ' />
                        <img src={haraf} alt="" className='w-28 md:w-32 lg:w-32 xl:w-32 2xl:w-32 h-auto ' />
                        <img src={bigFamily} alt="" className='w-28 md:w-32 lg:w-32 xl:w-32 2xl:w-32 h-auto ' />
                        <img src={sunSet} alt="" className='w-28 md:w-32 lg:w-32 xl:w-32 2xl:w-32 h-auto ' />
                        <img src={pride} alt="" className='w-32 md:w-36 lg:w-36 xl:w-36 2xl:w-36 h-auto ' />
                    </div>
                </div>
            </section>

            <section>
                <div className="contact-me py-8 bg-[#015A58] lg:h-[300px] ">
                    <div className="flex items-end  w-full">
                        {/* Horizontal line aligned to the left */}
                        <hr className='w-[60px] lg:w-[200px] xl:w-[200px] 2xl:w-[200px] mb-3 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-5 2xl:mb-4' />

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

export default AboutMe;
