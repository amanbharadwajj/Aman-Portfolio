import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
// import { useRouter } from 'next/router';
import NavLogo from "../public/assets/page/aLogo.png";
// use public path for logos

const Navbar = () => {
    const router = useRouter();
    const isAlternatePage = router.pathname !== "/";
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    // const [position, setPosition] = useState('fixed')
    // const router = useRouter();

    // useEffect(() => {
    //   if (
    //     router.asPath === '/property' ||
    //     router.asPath === '/crypto' ||
    //     router.asPath === '/netflix' ||
    //     router.asPath === '/twitch'
    //   ) {
    //     setNavBg('transparent');
    //     setLinkColor('#ecf0f3');
    //   } else {
    //     setNavBg('#ecf0f3');
    //     setLinkColor('#1f2937');
    //   }
    // }, [router]);

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener("scroll", handleShadow);
    }, []);

    return (
        <nav
            className={
                shadow
                    ? "fixed w-full h-20 z-[100] ease-in-out duration-300 shadow-2xl"
                    : "fixed w-full h-20 z-[100] ease-in-out duration-300"
            }
        >
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
                <Link href="/">
                    <Image
                        src={NavLogo}
                        alt="/"
                        width="75"
                        height="10"
                        className="cursor-pointer"
                    />
                </Link>
                <div>
                    <ul
                        className="hidden md:flex items-center text-brand-sky"
                    >
                        <li className="ml-10 text-sm uppercase transition-colors hover:text-sky-300">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="ml-10 text-sm uppercase transition-colors hover:text-sky-300">
                            <Link href="/#about">About</Link>
                        </li>
                        <li className="ml-10 text-sm uppercase transition-colors hover:text-sky-300">
                            <Link href="/#skills">Skills</Link>
                        </li>
                        <li className="ml-10 text-sm uppercase transition-colors hover:text-sky-300">
                            <Link href="/#case-studies">Case Studies</Link>
                        </li>
                        <li className="ml-10 text-sm uppercase transition-colors hover:text-sky-300">
                            <Link href="/#work-experience">Work-Experience</Link>
                        </li>
                        <li className="ml-10 text-sm uppercase transition-colors hover:text-sky-300">
                            <a href="https://drive.google.com/file/d/1RI6qpdJPfinaBoFqm33J2KA-QCSLQofx/view?usp=drive_link" target="_blank" rel="noreferrer">Resume</a>
                        </li>
                        <li className="ml-10 text-sm uppercase transition-colors hover:text-sky-300">
                            <Link href="/#contact">Contact</Link>
                        </li>
                    </ul>
                    {/* Hamburger Icon */}
                    <div
                        onClick={handleNav}
                        className="md:hidden text-brand-sky"
                    >
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {/* Overlay */}
            <div
                className={
                    nav
                        ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
                        : ""
                }
            >
                {/* Side Drawer Menu */}
                <div
                    className={
                        nav
                            ? ` fixed left-0 top-0 w-[82%] sm:w-[60%] md:w-[45%] h-screen overflow-y-auto p-6 sm:p-10 ease-in duration-500 ${
                                  isAlternatePage ? "bg-slate-900 text-slate-200" : "bg-[#ecf0f3] text-[#1f2937]"
                              }`
                            : "fixed left-[-100%] top-0 p-6 sm:p-10 ease-in duration-500"
                    }
                >
                    <div>
                        <div className="flex w-full items-center justify-between">
                            <Link href="/">
                                    <Image
                                        src={NavLogo}
                                        width="87"
                                        height="35"
                                        alt="/"
                                    />
                            </Link>
                            <div
                                onClick={handleNav}
                            className={`rounded-full shadow-lg p-3 cursor-pointer ${isAlternatePage ? "shadow-black/40" : "shadow-gray-400"}`}
                            >
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className={`border-b my-4 ${isAlternatePage ? "border-slate-700" : "border-gray-300"}`}>
                            <p className="w-[85%] md:w-[90%] py-4">
                                Let&#39;s build something legendary together
                            </p>
                        </div>
                    </div>
                    <div className="py-2 sm:py-4 flex flex-col">
                        <ul className={`uppercase ${isAlternatePage ? "text-slate-100" : "text-slate-700"}`}>
                            <Link href="/">
                                <li
                                    onClick={() => setNav(false)}
                                    className="py-3 text-sm font-semibold hover:text-sky-400 transition-colors"
                                >
                                    Home
                                </li>
                            </Link>
                            <Link href="/#about">
                                <li
                                    onClick={() => setNav(false)}
                                    className="py-3 text-sm font-semibold hover:text-sky-400 transition-colors"
                                >
                                    About
                                </li>
                            </Link>
                            <Link href="/#skills">
                                <li
                                    onClick={() => setNav(false)}
                                    className="py-3 text-sm font-semibold hover:text-sky-400 transition-colors"
                                >
                                    Skills
                                </li>
                            </Link>
                            <Link href="/#case-studies">
                                <li
                                    onClick={() => setNav(false)}
                                    className="py-3 text-sm font-semibold hover:text-sky-400 transition-colors"
                                >
                                    Case Studies
                                </li>
                            </Link>
                            <Link href="/#work-experience">
                                <li
                                    onClick={() => setNav(false)}
                                    className="py-3 text-sm font-semibold hover:text-sky-400 transition-colors"
                                >
                                    Work-Experience
                                </li>
                            </Link>
                            <a
                                href="https://drive.google.com/file/d/1RI6qpdJPfinaBoFqm33J2KA-QCSLQofx/view?usp=drive_link"
                                target="_blank"
                                rel="noreferrer"
                                onClick={() => setNav(false)}
                                className="py-3 text-sm font-semibold hover:text-sky-400 transition-colors block"
                            >
                                Resume
                            </a>
                            <Link href="/#contact">
                                <li
                                    onClick={() => setNav(false)}
                                    className="py-3 text-sm font-semibold hover:text-sky-400 transition-colors"
                                >
                                    Contact
                                </li>
                            </Link>
                        </ul>
                        <div className="pt-8 sm:pt-16 pb-6">
                            <p className={`uppercase tracking-widest ${isAlternatePage ? "text-sky-400" : "text-brand-sky"}`}>
                                Let&#39;s Connect
                            </p>
                            <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                                <a
                                    href="https://www.linkedin.com/in/amankumaarr"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div className={`rounded-full shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300 ${isAlternatePage ? "shadow-black/40" : "shadow-gray-400"}`}>
                                        <FaLinkedinIn />
                                    </div>
                                </a>
                                <a
                                    href="https://www.naukri.com/mnjuser/homepage"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div className={`rounded-full shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300 flex items-center justify-center ${isAlternatePage ? "shadow-black/40" : "shadow-gray-400"}`}>
                                        <Image src="/assets/page/naukri-logo.svg" width={18} height={18} alt="Naukri" />
                                    </div>
                                </a>
                                <Link href="/#contact">
                                    <div
                                        onClick={() => setNav(!nav)}
                                        className={`rounded-full shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300 ${isAlternatePage ? "shadow-black/40" : "shadow-gray-400"}`}
                                    >
                                        <AiOutlineMail />
                                    </div>
                                </Link>
                                <a
                                    href="https://drive.google.com/file/d/1RI6qpdJPfinaBoFqm33J2KA-QCSLQofx/view?usp=drive_link"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div
                                        onClick={() => setNav(!nav)}
                                        className={`rounded-full shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300 ${isAlternatePage ? "shadow-black/40" : "shadow-gray-400"}`}
                                    >
                                        <BsFillPersonLinesFill />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
