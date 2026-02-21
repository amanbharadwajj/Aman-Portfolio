import React from "react";

const certifications = [
  {
    title: "Google Ads Certification",
    issuer: "Google",
    credentialUrl: "https://skillshop.withgoogle.com/",
    badge: "GA",
  },
  {
    title: "Google Analytics Certification",
    issuer: "Google",
    credentialUrl: "https://skillshop.withgoogle.com/",
    badge: "G4",
  },
  {
    title: "Digital Marketing Certification",
    issuer: "Industry Program",
    credentialUrl: "https://learndigital.withgoogle.com/digitalgarage/",
    badge: "DM",
  },
  {
    title: "Generative AI Certification",
    issuer: "AI Learning Program",
    credentialUrl: "https://grow.google/ai/",
    badge: "AI",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="w-full py-20 px-6">
      <div className="max-w-[1240px] mx-auto">
        <p className="text-xl tracking-widest uppercase text-sky-400 font-semibold text-center">
          Certifications
        </p>
        <h2 className="py-4 text-4xl font-bold text-center text-slate-100">
          Industry Credentials
        </h2>
        <p className="text-center text-slate-300 max-w-2xl mx-auto">
          Certifications validating paid media, analytics, and modern growth execution capabilities.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {certifications.map((cert) => (
            <a
              key={cert.title}
              href={cert.credentialUrl}
              target="_blank"
              rel="noreferrer"
              className="case-card block"
            >
              <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 text-sky-300 flex items-center justify-center font-bold mb-4">
                {cert.badge}
              </div>
              <h3 className="text-lg text-slate-100 font-semibold mb-2">{cert.title}</h3>
              <p className="text-sm text-slate-300 mb-4">{cert.issuer}</p>
              <p className="text-xs uppercase tracking-widest text-sky-300">View Credential</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
