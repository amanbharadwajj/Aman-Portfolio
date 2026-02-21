import Link from "next/link";
import React from "react";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const Main = () => {
    return (
        <div id="home" className="w-full min-h-screen text-center">
            <div className="max-w-[1240px] w-full min-h-screen mx-auto px-4 py-24 sm:py-28 flex justify-center items-center">
                <div className="w-full">
                    <p className="uppercase tracking-[0.28em] text-xs sm:text-sm text-sky-300 font-semibold">
                        Aman Kumar
                    </p>
                    <h1 className="py-4 text-slate-100 leading-tight text-3xl sm:text-5xl md:text-6xl">
                        Business Development | Sales Strategy | Growth &amp; Performance Marketing
                    </h1>
                    <p className="py-2 text-slate-300 sm:max-w-[85%] lg:max-w-[70%] m-auto text-base sm:text-lg">
                        I help businesses convert high-intent leads, improve sales funnel performance, and build predictable revenue systems through structured execution.
                    </p>
                    <div className="mt-5 mb-2 flex flex-col sm:flex-row gap-3 justify-center items-center">
                        <a
                            href="https://drive.google.com/file/d/1RI6qpdJPfinaBoFqm33J2KA-QCSLQofx/view?usp=drive_link"
                            target="_blank"
                            rel="noreferrer"
                            className="w-full sm:w-auto px-6 py-3 rounded-lg border border-sky-400 bg-sky-400 text-slate-950 font-semibold hover:bg-sky-300 transition"
                        >
                            Download Resume
                        </a>
                        <a
                            href="https://www.linkedin.com/in/amankumaarr"
                            target="_blank"
                            rel="noreferrer"
                            className="w-full sm:w-auto px-6 py-3 rounded-lg border border-slate-600 text-slate-100 font-semibold hover:border-sky-400 hover:text-sky-300 transition"
                        >
                            Connect on LinkedIn
                        </a>
                        <Link
                            href="/#case-studies"
                            className="w-full sm:w-auto px-6 py-3 rounded-lg border border-slate-600 text-slate-100 font-semibold hover:border-sky-400 hover:text-sky-300 transition"
                        >
                            View Case Studies
                        </Link>
                    </div>
                    <div className="py-5 text-sm sm:text-base text-slate-300">
                        <p>Delhi, India</p>
                        <p>
                            <a href="mailto:amankumar63528@gmail.com" className="hover:text-sky-300 transition">
                                amankumar63528@gmail.com
                            </a>
                            {" | "}
                            <a href="tel:+919304605007" className="hover:text-sky-300 transition">
                                +91 9304605007
                            </a>
                        </p>
                    </div>
                    <div className="flex items-center justify-center gap-4 sm:gap-6 max-w-[380px] m-auto py-4">
                        <a
                            href="https://www.linkedin.com/in/amankumaarr"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="rounded-full shadow-lg shadow-black/40 p-4 sm:p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                                <FaLinkedinIn />
                            </div>
                        </a>
                        <a
                            href="https://www.naukri.com/mnjuser/homepage"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="rounded-full shadow-lg shadow-black/40 p-4 sm:p-5 cursor-pointer hover:scale-110 ease-in duration-300 flex items-center justify-center">
                                <Image src="/assets/page/naukri.png" width={18} height={18} alt="Naukri" className="object-contain" />
                            </div>
                        </a>
                        <Link href="/#contact">
                            <div className="rounded-full shadow-lg shadow-black/40 p-4 sm:p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                                <AiOutlineMail />
                            </div>
                        </Link>
                        <a href="https://drive.google.com/file/d/1RI6qpdJPfinaBoFqm33J2KA-QCSLQofx/view?usp=drive_link" target="_blank" rel="noreferrer">
                            <div className="rounded-full shadow-lg shadow-black/40 p-4 sm:p-5 cursor-pointer hover:scale-110 ease-in duration-300">
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
