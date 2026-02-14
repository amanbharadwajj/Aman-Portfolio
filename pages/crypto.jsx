import Image from "next/image";
import React from "react";
import cryptoImg from "../public/assets/projects/crypto.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const crypto = () => {
    return (
        <div className="w-full">
            <div className="w-screen h-[50vh] relative">
                <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
                <Image
                    className="absolute z-1"
                    fill
                    style={{ objectFit: 'cover' }}
                    src={cryptoImg}
                    alt="/"
                />
                <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                    <h2 className="py-2">Gadgetry-App</h2>
                    <h3>
                        Reactjs/Redux/Firebase/MongoDB <br></br>
                        /Nodejs/Express/Stripe API
                    </h3>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
                <div className="col-span-4">
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>
                        ● Engineered a high-performance data architecture
                        solution combining Firebase for image storage and
                        MongoDB for quick URL retrieval, resulting in a 40%
                        reduction in load times and a 25% increase in user
                        engagement. <br /> ● Enhanced website security and user
                        experience by implementing Firebase Authentication,
                        enabling secure sign-in via email and Google,
                        strengthened website identity management and access
                        control functionalities. <br /> ● Spearheaded adoption
                        of Redux for streamlined state management, leading to a
                        50% decrease in data flow complexity and enhancing
                        application responsiveness and user experience. <br /> ●
                        Designed and deployed a cutting-edge payment gateway
                        using Stripe API, enhancing transaction security and
                        streamlining user experience, resulting in a 40%
                        increase in successful transactions and safeguarding
                        customer financial information.
                    </p>
                    <a
                        href="https://github.com/Ankur-Sh/Gadgetry-Website"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button className="px-8 py-2 mt-4 mr-8">Code</button>
                    </a>
                    <a
                        href="https://www.loom.com/share/f63e4a4aaa9446c6ade6004b2820bfc5?sid=dab8bf96-f394-4f69-973b-57e8a7e37458"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button className="px-8 py-2 mt-4">Demo</button>
                    </a>
                </div>
                <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
                    <div className="p-2">
                        <p className="text-center font-bold pb-2">
                            Technologies
                        </p>
                        <div className="grid grid-cols-3 md:grid-cols-1">
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> React
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> Redux
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> Mongo DB
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> Firebase
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" />
                                Stripe API
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> Nodejs
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> Express
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

export default crypto;
