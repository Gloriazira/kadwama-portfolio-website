import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';

import Navbar from "../components/Navbar";

import myPicture from '../assets/profile_image.png';
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
            <section className="about-me mt-20">
                <div className="flex justify-center items-center px-10 ">
                    <div className="image w-[650px] h-[700px]  ">
                        <img src={myPicture} alt="kadwama's Portrait" className='h-full object-cover rounded-[20px]' />
                    </div>

                    <div className="bio-text w-[1100px] bg-[#015A58] text-white text-400 rounded-[20px] px-10 py-5 mb-32 flex flex-col justify-between ">
                        <h1 className='text-[45px] text-nowrap'>Kadwama Deborah Lazarus</h1>

                        <div className="flex items-start justify-between my-4">
                            <div className="highlights">
                                <p className='text-600 text-[16px] font-medium'>Highlights</p>
                                <ul className='list-disc list-inside text-[12px] leading-loose font-thin text-left'>
                                    <li>4+ years of work experience in product design</li>
                                    <li>Currently working in the agricultural innovation technology sector with <span className='font-[500] border-b-[1.5px] border-b-white'> Hello Tractor</span></li>
                                    <li>Product design experience in B2B and B2C products, agro-tech and innovation technology</li>
                                    <li>Transitioned to UX Design from a chemical engineering background</li>
                                </ul>
                            </div>
                            <img src={whiteRectangle} alt="" className='w-7' />
                        </div>

                        <div className="more-about-me my-10">
                            <p className='text-600 text-[16px] font-medium'>More About Me</p>
                            <p className='text-[12px] leading-loose font-thin text-left'>
                                I'm Kadwama, a digital product designer with a passion for crafting intuitive and sustainable products that bridge the
                                gap between user needs and business objectives. Over the years, I’ve worked with diverse teams and brands to bring
                                innovative ideas to life, transforming complex challenges into seamless, engaging experiences that delight users and
                                drive growth.
                            </p>
                            <p className="text-[12px] leading-loose font-thin text-left">
                                My design philosophy revolves around a deep understanding of both the user and the business. I believe that truly
                                great products come from finding the sweet spot where user experience meets business strategy. Whether it's
                                creating a sleek interface or improving a product’s functionality, I focus on delivering solutions that are not only
                                aesthetically pleasing but also practical, scalable, and aligned with long-term goals.
                            </p>
                        </div>

                        <div className="likes flex items-center justify-around mt-4">
                            <div className="interest">

                                <div className="flex items-center">
                                    <Icon icon="token-branded:fun" className='w-8 h-auto' />
                                    <p className='text-600 text-[16px] font-medium ms-3'>Interests</p>
                                </div>
                                <ul className=' list-disc list-inside text-[12px] leading-loose font-thin text-left mt-3'>
                                    <li>Attending design & tech events</li>
                                    <li>Baking confectioneries</li>
                                    <li>Reading fiction novels</li>
                                    <li>Traveling to new places</li>
                                </ul>
                            </div>
                            <div className="books">
                                <div className="flex items-center">
                                    <Icon icon="emojione:books" className='w-8 h-auto ' />
                                    <p className='text-600 text-[16px] font-medium ms-3'>Favorite Books</p>
                                </div>

                                <ul className='list-disc list-inside text-[12px] leading-loose font-thin text-left mt-3'>
                                    <li>Design of Everyday Things (Revised) - Don Norman</li>
                                    <li>Atomic Habits - James Clear</li>
                                    <li>Don’t Make me Think - Steve Krug</li>
                                    <li>Steal like an artist - Austin Kleon</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className=" organization px-10 bg-white text-center my-5">

                    <p className='text-[18px] text-[#000000]'>Companies & Organizations I’ve worked with</p>

                    <div className="flex items-center justify-center mt-3">
                        <img src={helloTractor} alt="" className='w-28 h-auto mx-3' />
                        <img src={labondo} alt="" className='w-28 h-auto mx-3' />
                        <img src={haraf} alt="" className='w-28 h-auto mx-3' />
                        <img src={bigFamily} alt="" className='w-28 h-auto mx-3' />
                        <img src={sunSet} alt="" className='w-28 h-auto mx-3' />
                        <img src={pride} alt="" className='w-32 h-auto mx-3' />
                    </div>


                </div>
            </section>

            <section>
                <div className="contact-me py-10 bg-[#015A58] h-[350px] ">
                    <div className="flex">
                        <hr className='w-[243px]' />

                        <div>
                            <div className="contact-me-text text-white">
                                <p className="text-[40px] font-medium">
                                    Contact Me
                                </p>
                                <p className='text[14px]'>Do you have an exciting idea in mind? {<br />}Send a mail</p>
                            </div>

                            <div className="">
                                <a href="mailto:lazaruskadwama@gmail.com" className='text-white flex items-center'>
                                    <Icon icon="mdi-light:arrow-right-circle" className='w-10 h-auto' />
                                    <p className='text[14px]'>lazaruskadwama@gmail.com</p>
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
