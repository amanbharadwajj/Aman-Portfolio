import React from "react";

const testimonials = [
  {
    quote:
      "Aman helped us improve lead conversions and structured our sales process with clear follow-up discipline.",
    author: "Mentor, Sarrthi IAS",
  },
  {
    quote:
      "He combines communication and data thinking well, making campaigns and counselling outcomes more predictable.",
    author: "Team Lead, Vioray.in",
  },
  {
    quote:
      "Reliable execution, ownership of targets, and strong client-facing confidence made him a consistent performer.",
    author: "Reporting Manager, SBI Life",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="w-full py-20 px-6">
      <div className="max-w-[1240px] mx-auto">
        <p className="text-xl tracking-widest uppercase text-sky-400 font-semibold text-center">
          Social Proof
        </p>
        <h2 className="py-4 text-4xl font-bold text-center text-slate-100">What People Say</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {testimonials.map((item) => (
            <article key={item.author} className="case-card">
              <p className="text-slate-300 leading-relaxed">&quot;{item.quote}&quot;</p>
              <p className="mt-4 text-sm text-sky-300 uppercase tracking-wider">{item.author}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
