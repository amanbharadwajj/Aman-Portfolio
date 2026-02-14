import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
    return (
        <section
            id="about"
            className="min-h-screen w-full bg-[#f9fafb] py-20 px-6 flex flex-col items-center justify-center"
        >
            {/* Header Section */}
            <div className="max-w-6xl w-full text-center mb-12">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
                    👋 Meet the Developer
                </h2>
                <p className="text-gray-600 text-lg">
                    I build things for the web with creativity and purpose.
                </p>
            </div>

            {/* Main Content Grid */}
            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-start">
                {/* Left - Profile Card */}
                <div className="bg-white rounded-3xl shadow-xl p-8 relative overflow-hidden">
                <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-indigo-500 shadow-lg perspective-1000">
  <div className="w-full h-full transition-transform duration-500 transform-style-preserve-3d hover:rotate-x-6 hover:rotate-y-6 hover:scale-110">
  <Image
  src="/assets/page/about.jpeg"
  alt="Profile"
  fill
  style={{ objectFit: 'cover', objectPosition: 'top' }}
  className="rounded-full"
/>

  </div>
</div>

                    <h3 className="text-2xl font-bold text-gray-800 text-center mb-2">
                        Aman Kumar
                    </h3>
                    <p className="text-center text-gray-500 mb-6">Full Stack Developer</p>
                    <div className="flex flex-wrap justify-center gap-3 text-sm text-white">
                        <span className="bg-indigo-500 px-3 py-1 rounded-full">React</span>
                        <span className="bg-purple-500 px-3 py-1 rounded-full">Next.js</span>
                        <span className="bg-blue-500 px-3 py-1 rounded-full">Node.js</span>
                        <span className="bg-green-500 px-3 py-1 rounded-full">MongoDB</span>
                    </div>
                </div>

                {/* Right - Fun Bio & Highlights */}
                <div className="space-y-8">
                    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition">
                        <h4 className="text-xl font-semibold mb-2 text-indigo-700">
                            🚀 About Me
                        </h4>
                        <p className="text-gray-700 text-base">
                            I’m a creative and dedicated developer with a passion for solving
                            real-world problems through technology. From building full-stack apps
                            to optimizing front-end performance, I enjoy crafting high-quality,
                            user-first web experiences.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gradient-to-tr from-indigo-100 to-indigo-200 p-4 rounded-xl text-center shadow-sm">
                            <p className="text-3xl font-bold text-indigo-700">6<span className="text-base font-normal">m</span></p>
                            <p className="text-sm text-gray-600">Internship Experience</p>
                        </div>
                        <div className="bg-gradient-to-tr from-purple-100 to-purple-200 p-4 rounded-xl text-center shadow-sm">
                            <p className="text-3xl font-bold text-purple-700">200+</p>
                            <p className="text-sm text-gray-600">Problems Solved (LeetCode & CodeStudio)</p>
                        </div>
                        <div className="bg-gradient-to-tr from-green-100 to-green-200 p-4 rounded-xl text-center shadow-sm">
                            <p className="text-3xl font-bold text-green-700">10+</p>
                            <p className="text-sm text-gray-600">Projects Built</p>
                        </div>
                        <div className="bg-gradient-to-tr from-pink-100 to-pink-200 p-4 rounded-xl text-center shadow-sm">
                            <p className="text-3xl font-bold text-pink-700">2</p>
                            <p className="text-sm text-gray-600">Tech Clubs Led</p>
                        </div>
                    </div>

                    <Link href="/#projects">
                        <span className="inline-block mt-4 px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition cursor-pointer">
                            View My Work
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default About;
