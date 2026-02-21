import Image from "next/image";
import React from "react";

const caseStudies = [
  {
    title: "Enrollment Conversion Optimization - Sarrthi IAS",
    website: "https://sarrthiias.com",
    logo: "/assets/Companies/sarrthiias.png",
    logoAlt: "Sarrthi IAS Logo",
    tags: ["Sales Funnel", "Objection Handling", "Follow-Up Cadence"],
    problem:
      "UPSC aspirants hesitated due to pricing concerns, trust issues, and batch selection confusion.",
    actions: [
      "Structured counselling & qualification funnel",
      "Handled price & trust-based objections strategically",
      "Implemented systematic follow-up framework",
      "Used urgency & personalized guidance for faster decisions",
    ],
    results: [
      "Reduced lead hesitation through structured objection handling",
      "Shortened lead-to-enrollment turnaround through guided counselling flows",
      "Improved conversion consistency via disciplined follow-up execution",
    ],
    keyImpact: "Consistently exceeded monthly enrollment targets.",
  },
  {
    title: "Performance Marketing Structuring - Vioray.in",
    website: "https://vioray.in",
    logo: "/assets/Companies/Vioray.png",
    logoAlt: "Vioray Logo",
    tags: ["Content Strategy", "Meta Ads", "Campaign Tracking"],
    problem:
      "Needed structured digital presence & better performance marketing direction.",
    actions: [
      "Designed Instagram & Facebook content calendar",
      "Created creatives using Canva",
      "Structured Meta Ads campaigns",
      "Monitored engagement & performance metrics",
    ],
    results: [
      "Improved engagement consistency across campaigns",
      "Strengthened funnel-based lead conversion approach through ad structuring",
      "Increased campaign predictability with metric-led optimization cycles",
    ],
    keyImpact: "Built a repeatable performance-marketing execution framework.",
  },
  {
    title: "Structured Lead Qualification & Sales Enablement - SBI Life",
    website: "https://www.sbilife.co.in",
    logo: "/assets/Companies/SBI_Logo.png",
    logoAlt: "SBI Life Logo",
    tags: ["Lead Research", "CRM Tracking", "Sales Enablement"],
    problem:
      "Need for systematic lead identification and client communication support.",
    actions: [
      "Conducted market research to identify potential leads",
      "Used CRM tools for opportunity tracking",
      "Assisted clients with tailored product recommendations",
      "Maintained accurate reporting for management review",
    ],
    results: [
      "Increased conversion predictability via CRM tracking discipline",
      "Improved lead qualification quality through structured market research",
      "Strengthened advisor enablement with more actionable client insights",
    ],
    keyImpact: "Improved lead pipeline clarity for faster sales follow-through.",
  },
];

const Projects = () => {
  return (
    <section id="case-studies" className="w-full py-16 px-4">
      <div className="max-w-[1240px] mx-auto">
        <p className="text-xl tracking-widest uppercase text-sky-400 font-semibold text-center">
          Case Studies
        </p>
        <h2 className="py-4 text-3xl font-bold text-center">Growth & Revenue Case Studies</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {caseStudies.map((study) => (
            <div
              key={study.title}
              className="case-card"
            >
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src={study.logo}
                  alt={study.logoAlt}
                  width={55}
                  height={55}
                  className="company-logo h-[55px] w-[55px] object-contain"
                />
                <h3 className="text-lg font-semibold text-slate-100 leading-snug">
                  <a
                    href={study.website}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-sky-400 transition-colors"
                  >
                    {study.title}
                  </a>
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-semibold rounded-full bg-slate-800 text-sky-300 border border-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-sm text-slate-300 mb-4">
                <strong>Problem:</strong> {study.problem}
              </p>

              <p className="text-sm font-semibold text-slate-100 mb-2">Action:</p>
              <ul className="list-disc list-inside text-sm text-slate-300 space-y-1 mb-4">
                {study.actions.map((action) => (
                  <li key={action}>{action}</li>
                ))}
              </ul>

              <p className="text-sm font-semibold text-slate-100 mb-2">Result:</p>
              <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
                {study.results.map((result) => (
                  <li key={result}>{result}</li>
                ))}
              </ul>
              <p className="impact">
                Key Impact: {study.keyImpact}
              </p>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
