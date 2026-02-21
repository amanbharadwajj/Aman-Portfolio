import Link from "next/link";
import React from "react";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
// Use public asset path for SVG so Next serves it correctly

const Main = () => {
    return (
        <div id="home" className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <h1 className="py-4 text-gray-700 dark:text-gray-100">
                        Hi, I&#39;m{" "}
                        <span className="text-brand-sky"> Aman Kumar</span>
                    </h1>
                    <h1 className="py-2 text-gray-700 dark:text-gray-200">
                        A Business Development Executive
                    </h1>
                    <p className="py-4 text-gray-600 dark:text-gray-300 sm:max-w-[70%] m-auto">
                    I specialize in driving revenue growth by building strong client relationships, converting high-potential leads, and delivering tailored education solutions that align with aspirants’ goals.
                    </p>
                    <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                        <a
                            href="https://www.linkedin.com/in/amankumaarr"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-black/60 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                <FaLinkedinIn />
                            </div>
                        </a>
                        <a
                            href="https://www.naukri.com/mnjuser/homepage"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-black/60 p-6 cursor-pointer hover:scale-110 ease-in duration-300 flex items-center justify-center">
                                <Image src="/assets/page/naukri.png" width={18} height={18} alt="Naukri" className="object-contain" />
                            </div>
                        </a>
                        <Link href="/#contact">
                            <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-black/60 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                <AiOutlineMail />
                            </div>
                        </Link>
                        <a href="https://drive.google.com/file/d/1RI6qpdJPfinaBoFqm33J2KA-QCSLQofx/view?usp=drive_link" target="_blank" rel="noreferrer">
                            <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-black/60 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                <BsFillPersonLinesFill />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
