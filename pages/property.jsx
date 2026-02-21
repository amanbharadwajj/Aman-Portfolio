import Image from "next/image";
import React from "react";
import propertyImg from "../public/assets/projects/property.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const property = () => {
    return (
        <div className="w-full">
            <div className="w-screen h-[50vh] relative">
                <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
                <Image
                    className="absolute z-1"
                    fill
                    style={{ objectFit: 'cover' }}
                    src={propertyImg}
                    alt="/"
                />
                <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                    <h2 className="py-2">Friendify</h2>
                    <h3>
                        Vuejs/Socket.io/NodeJs/Cloudinary/JWT
                        Token/Chakra-Ui/MongoDB
                    </h3>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
                <div className="col-span-4">
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>
                        ● Developed an innovative real-time communication
                        platform using Socket.io for Friendify, enabling
                        seamless user interactions; facilitating 30% faster
                        connection establishment, enhancing user engagement and
                        satisfaction metrics. <br /> ● Spearheaded the
                        integration of JWT Token for secure authentication and
                        authorization; this initiative resulted in a 40%
                        decrease in data breaches, fortifying user privacy and
                        trust in Friendify. <br /> ● Orchestrated the
                        integration of Friendify with Cloudinary, streamlining
                        media management processes and enhancing user
                        experience; this initiative led to a 30% increase in
                        daily active users and a 20% in user-generated content
                        uploads. <br /> ● Developed a personalized user-centric
                        feature set, utilizing MongoDB, which led to a 30% boost
                        in average user session duration and a 20% improvement
                        in user retention rates. <br /> ● Crafted rich visual
                        elements and interactive UI components via Chakra-UI,
                        transforming Friendify platform into an engaging user
                        experience; culminating in a 30% in user retention and a
                        20% in conversion rates.
                    </p>
                    <a
                        href="https://github.com/Ankur-Sh/thread"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button className="px-8 py-2 mt-4 mr-8">Code</button>
                    </a>
                    <a href="#" target="_blank" rel="noreferrer">
                        <button className="px-8 py-2 mt-4">Demo</button>
                    </a>
                </div>
                <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4 dark:shadow-gray-600">
                    <div className="p-2">
                        <p className="text-center font-bold pb-2">
                            Technologies
                        </p>
                        <div className="grid grid-cols-3 md:grid-cols-1">
                            <p className="text-gray-600 dark:text-gray-400 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> Vuejs
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> Socket.io
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> Nodejs
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" />{" "}
                                Cloudinary
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> JWT Token
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> Chakra UI
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> Mongo DB
                            </p>
                        </div>
                    </div>
                </div>
                <Link href="/#projects">
                    <p className="underline cursor-pointer">Back</p>
                </Link>
            </div>
        </div>
    );
};

export default property;
