import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
    return (
        <section
            id="about"
            className="min-h-screen w-full py-20 px-6 flex flex-col items-center justify-center"
        >
            {/* Header Section */}
            <div className="max-w-6xl w-full text-center mb-12">
                <p className="text-xl tracking-widest uppercase text-brand-sky font-semibold text-center">
                    About
                </p>
                <h2 className="py-4 text-4xl font-bold text-center text-brand-sky">
                    Meet the Professional
                </h2>
                <p className="text-gray-600 text-lg">
Focused on generating revenue, converting high potential leads, and building long term professional partnerships.
                </p>
            </div>

            {/* Main Content Grid */}
            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-start">
                {/* Left - Profile Card */}
                <div className="case-card rounded-3xl p-8 relative overflow-hidden">
                <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-sky-400 shadow-lg perspective-1000">
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

                    <h3 className="text-2xl font-bold text-slate-100 text-center mb-2">
                        Aman Kumar
                    </h3>
                    <p className="text-center text-slate-300 mb-6">Business Development Executive</p>
                    <div className="flex flex-wrap justify-center gap-3 text-sm text-white">
                        <span className="bg-slate-800 border border-slate-700 text-sky-300 px-3 py-1 rounded-full">Lead Conversion</span>
                        <span className="bg-slate-800 border border-slate-700 text-sky-300 px-3 py-1 rounded-full">Client Relations</span>
                        <span className="bg-slate-800 border border-slate-700 text-sky-300 px-3 py-1 rounded-full">Revenue Growth</span>
                        <span className="bg-slate-800 border border-slate-700 text-sky-300 px-3 py-1 rounded-full">Negotiation</span>
                        <span className="bg-slate-800 border border-slate-700 text-sky-300 px-3 py-1 rounded-full">Objection Handling</span>

                    </div>
                </div>

                {/* Right - Fun Bio & Highlights */}
                <div className="space-y-8">
                    <div className="case-card rounded-2xl p-6">
                        <h4 className="text-xl font-semibold mb-2 text-brand-sky">
                            🚀 About Me
                        </h4>
                        <p className="text-slate-300 text-base">
                            I’m a driven and results-oriented Business Development Executive with a passion for building strong client relationships and driving revenue growth. From converting high-potential leads to delivering tailored education solutions, I focus on creating meaningful impact and long-term professional success.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="case-card p-4 rounded-xl text-center shadow-sm">
                            <p className="text-3xl font-bold text-brand-sky">1+<span className="text-base font-normal"> Year</span></p>
                            <p className="text-sm text-slate-300">Revenue & Client Acquisition</p>
                        </div>
                        <div className="case-card p-4 rounded-xl text-center shadow-sm">
                            <p className="text-3xl font-bold text-brand-sky">₹45L+</p>
                            <p className="text-sm text-slate-300">Revenue Generated</p>
                        </div>
                        <div className="case-card p-4 rounded-xl text-center shadow-sm">
                            <p className="text-3xl font-bold text-brand-sky">52%</p>
                            <p className="text-sm text-slate-300">Leads Conversion</p>
                        </div>
                        <div className="case-card p-4 rounded-xl text-center shadow-sm">
                            <p className="text-3xl font-bold text-brand-sky">Top Performer</p>
                            <p className="text-sm text-slate-300">Monthly Target Achieved</p>
                        </div>
                    </div>

                    <Link href="/#case-studies">
                        <span className="inline-block mt-4 px-6 py-3 bg-brand-sky text-white font-medium rounded-lg shadow-md hover:bg-brand-sky-dark hover:shadow-lg hover:scale-105 transition cursor-pointer">
                            View My Experience
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default About;
