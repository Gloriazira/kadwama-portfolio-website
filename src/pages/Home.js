import Navbar from "../components/Navbar";
import { Icon } from '@iconify/react';


const Home = () => {
    return (
        <div className="bg-white">
            
            <div className="landing-section h-screen bg-cover bg-center bg-no-repeat ">
                <div className=" w-[94%] h-[520px] bg-gradient-to-b from-[#000000D9] to-[#002F2ED9] relative">
                    <Navbar />


                    {/* <div className="flex flex-col items-stretch mt-8"> */}
                    <div className="home-screen-text flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="bio px-3 py-1 border-l border-l-white text-white ">
                            <h1 className="text-[35px] font-[500]">Kadwama Deborah Lazarus</h1>
                            <p className="text-[16px] text-left mt-3">
                                A digital product designer, crafting innovative and {<br />}
                                sustainable solutions that seamlessly balance user {<br />}
                                needs with business goals. Welcome to my portfolio... {<br />}
                            </p>

                            <div className="resume-button w-[100px]  bg-white text-[#015A58] rounded p-1 mt-4">
                                <a href="/Kadwama-Lazarus-Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                                <Icon icon="iconoir:download" className="w-6 h-auto " />
                                <p className="text-sm font-medium ms-1">Resume</p>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="social-media-links absolute bottom-16 right-20">
                        <div className="text-white ">
                       
                            <a href="mailto:mailto:lazaruskadwama@gmail.com" target="_blank" className="">
                                <Icon icon="ion:mail" className="w-5 h-5 mt-5 hover:scale-125 transition-transform duration-200" />
                            </a>
                            <a href="https://www.linkedin.com/in/kadwama-lazarus-60664b1b2/" target="_blank" className="">
                                <Icon icon="ri:linkedin-fill" className="w-5 h-5 mt-5 hover:scale-125 transition-transform duration-200" />
                            </a>
                            <a href="https://x.com/DeborahLazarus4" target="_blank" className="">
                                <Icon icon="lucide:twitter" className="w-5 h-5 mt-5 hover:scale-125 transition-transform duration-200" />
                            </a>
                            <a href="https://www.behance.net/kadwamaDeborah" target="_blank" className="">
                                <Icon icon="bxl:behance" className="w-5 h-5 mt-5 hover:scale-125 transition-transform duration-200" />
                            </a>
                        </div>

                    </div>
                    {/* </div> */}

                </div>
            </div>

            <div className="coming-soon ">
                <div className="h-[400px] flex flex-col items-center justify-center">
                    <h1 className="text-[55px] text-[#015A58] ">
                        Design Case Studies Coming Soon...
                    </h1>
                    <p className="text-[20px] text-[#015A58]">Kindly check back after a few weeks</p>
                </div>
            </div>

        </div>


    );
};

export default Home;

