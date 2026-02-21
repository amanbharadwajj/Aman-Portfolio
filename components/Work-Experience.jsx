import React from "react";
import { Briefcase } from "lucide-react"; // Optional: lucide-react icons

const WorkExperience = () => {
    return (
        <section
            id="work-experience"
            className="w-full min-h-screen py-20 px-6 flex items-center justify-center"
        >
            <div className="max-w-5xl w-full space-y-12">
                {/* Heading */}
                <div className="text-center">
                    <h2 className="text-4xl font-extrabold text-brand-sky mb-2">
                        <Briefcase className="inline-block w-8 h-8 mr-2 text-brand-sky" />
                        Work Experience
                    </h2>
                    <p className="text-gray-600 text-lg">
Professional experience driving conversions, managing sales funnels, and achieving business targets.
                    </p>
                </div>

                {/* Experience Card */}
                <div className="grid gap-8">
                <div className="case-card">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
                        <div>
                            <h3 className="text-2xl font-bold text-brand-sky">
                                Business Development Executive - Sarrthi IAS
                            </h3>
                            <p className="text-slate-400">July 2025 – Present · Delhi</p>
                        </div>
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-slate-300 text-base list-disc list-inside">
  <li> Consistently achieved and exceeded monthly enrollment targets through structured lead follow-ups and strategic counselling. </li>
  <li> Converted high-intent and undecided leads into successful enrollments by addressing concerns and presenting tailored course solutions. </li>
  <li> Managed end-to-end sales cycle including lead qualification, objection handling, payment coordination, and post-enrollment support. </li>
  <li> Built strong relationships with UPSC aspirants by understanding preparation needs and recommending suitable programs. </li>
  <li> Reduced sales cycle duration through precise communication and effective problem resolution. </li>
  <li> Maintained accurate CRM records and ensured systematic funnel management. </li>
  <li> Received consistent recognition from management for performance, commitment, and goal achievement. </li>
</ul>

                </div>
            </div>
            <div className="case-card">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
                        <div>
                            <h3 className="text-2xl font-bold text-brand-sky">
                                Digital Marketer - Vioray.in
                            </h3>
                            <p className="text-slate-400">May 2025 – July 2025 · Deoghar</p>
                        </div>
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-slate-300 text-base list-disc list-inside">
  <li> Managed the digital presence of a lifestyle and beauty brand, focusing on brand visibility and customer engagement. </li>
  <li> Designed high-converting social media creatives using Canva and scheduled structured content calendars. </li>
  <li> Executed performance marketing campaigns through Google Ads and Meta Ads to increase traffic and conversions. </li>
  <li> Monitored campaign analytics and optimized ad performance based on CTR, CPC, and engagement metrics. </li>
  <li> Improved brand reach and engagement across Instagram and Facebook platforms. </li>
  <li> Coordinated with the brand team to align content strategy with business objectives. </li>
  </ul>

                </div>
                <div className="case-card">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
                        <div>
                            <h3 className="text-2xl font-bold text-brand-sky">
                                Graduate Sales Trainee - SBI Life
                            </h3>
                            <p className="text-slate-400">Nov 2024 – May 2025 · Deoghar</p>
                        </div>
                        <a
                            href="https://drive.google.com/file/d/1S-wzj9oKvjH7VHy0DhdCn_W9vMekTJFo/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 md:mt-0 inline-block px-5 py-2 text-sm font-medium text-white bg-brand-sky rounded-lg hover:bg-brand-sky-dark transition"
                        >
                            🎓 View Certificate
                        </a>
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-slate-300 text-base list-disc list-inside">
  <li> Assisted senior advisors in identifying high-potential prospects through market research and cold outreach.</li>
  <li>Conducted client need-analysis discussions to understand financial goals and risk appetite.</li>
  <li> Generated and qualified leads through referrals and field engagement activities. </li>
  <li> Maintained accurate CRM records and updated pipeline status regularly. </li>
  <li> Supported policy documentation and ensured compliance with company guidelines. </li>
  <li> Participated in client follow-ups to improve conversion and retention rates. </li>
  <li> Achieved weekly prospecting targets assigned by reporting manager. </li>
<li>Developed strong understanding of insurance products, financial planning, and customer handling.</li>
</ul>

                </div>
                </div>
        </section>
    );
};

export default WorkExperience;
