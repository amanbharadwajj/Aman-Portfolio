import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { AiOutlineEnvironment, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p5bw8qg", // Your EmailJS service ID
        "template_nu7vy5o", // Your EmailJS template ID
        form.current,
        "PpBh4yBIMV7dS-5oW" // Your EmailJS public key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message, please try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <div id="contact" className="w-full min-h-screen p-6 lg:p-16">
      <div className="max-w-[1240px] mx-auto">
        <p className="text-xl tracking-widest uppercase text-brand-sky font-semibold text-center">
          Contact
        </p>
        <h2 className="py-4 text-4xl font-bold text-center text-gray-800">Get In Touch</h2>

        <div className="grid lg:grid-cols-5 gap-10 mt-10">
          {/* Left section */}
          <div className="col-span-3 lg:col-span-2 case-card flex flex-col justify-between">
            <div>
              <Image
                className="rounded-xl hover:scale-105 ease-in duration-300"
                src="/assets/page/contact.png"
                width={500}
                height={350}
                alt="Contact Aman Kumar"
              />
              <h2 className="py-4 text-2xl font-semibold text-brand-sky">Aman Kumar</h2>
              <p className="text-slate-200 font-medium">Business Development Executive</p>
              <p className="py-4 text-slate-300">
                Open to Business Development, Growth Strategy &amp; Performance Marketing opportunities.
                Let&apos;s build scalable revenue systems together.
              </p>
              <div className="space-y-3 text-sm text-slate-300">
                <p className="flex items-center gap-2">
                  <AiOutlineEnvironment className="text-brand-sky" size={18} />
                  Delhi / India
                </p>
                <p className="flex items-center gap-2">
                  <AiOutlineMail className="text-brand-sky" size={18} />
                  amanbharadwajjj@gmail.com
                </p>
                <p className="flex items-center gap-2">
                  <AiOutlinePhone className="text-brand-sky" size={18} />
                  +91 9304605007
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3 mt-6">
                <div className="rounded-lg border border-slate-700 bg-slate-900/70 p-3 text-center">
                  <p className="text-brand-sky text-lg font-bold">52%</p>
                  <p className="text-xs text-slate-300">Lead Conversion</p>
                </div>
                <div className="rounded-lg border border-slate-700 bg-slate-900/70 p-3 text-center">
                  <p className="text-brand-sky text-lg font-bold">3+</p>
                  <p className="text-xs text-slate-300">CRM Platforms</p>
                </div>
                <div className="rounded-lg border border-slate-700 bg-slate-900/70 p-3 text-center">
                  <p className="text-brand-sky text-lg font-bold">1+</p>
                  <p className="text-xs text-slate-300">Years Growth</p>
                </div>
              </div>
            </div>

            <div>
              <p className="uppercase tracking-widest text-brand-sky font-semibold pb-4">
                Start a Growth Conversation
              </p>
              <div className="flex space-x-6 social-icons">
                <a
                  href="https://www.linkedin.com/in/amankumaarr"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="rounded-full p-5 bg-slate-800 text-brand-sky border border-slate-700 shadow-lg shadow-black/30 hover:bg-brand-sky hover:text-slate-900 hover:-translate-y-1 transition-all duration-300"
                >
                  <FaLinkedinIn size={24} />
                </a>
                <a
                  href="https://www.naukri.com/mnjuser/homepage"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Naukri"
                  className="rounded-full p-5 bg-slate-800 text-brand-sky border border-slate-700 shadow-lg shadow-black/30 hover:bg-brand-sky hover:text-slate-900 hover:-translate-y-1 transition-all duration-300"
                >
                  <Image src="/assets/page/naukri.png" width={24} height={24} alt="Naukri" className="object-contain" />
                </a>
                <a
                  href="mailto:amanbharadwajjj@gmail.com"
                  aria-label="Send Email"
                  className="rounded-full p-5 bg-slate-800 text-brand-sky border border-slate-700 shadow-lg shadow-black/30 hover:bg-brand-sky hover:text-slate-900 hover:-translate-y-1 transition-all duration-300"
                >
                  <AiOutlineMail size={24} />
                </a>
                <a
                  href="https://drive.google.com/file/d/1RI6qpdJPfinaBoFqm33J2KA-QCSLQofx/view?usp=drive_link"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Resume"
                  className="rounded-full p-5 bg-slate-800 text-brand-sky border border-slate-700 shadow-lg shadow-black/30 hover:bg-brand-sky hover:text-slate-900 hover:-translate-y-1 transition-all duration-300"
                >
                  <BsFillPersonLinesFill size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Right section - form */}
          <div className="col-span-3 case-card">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label htmlFor="user_name" className="uppercase text-sm font-semibold text-slate-300 mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="user_name"
                    name="user_name"
                    type="text"
                    required
                    placeholder="Your full name"
                    className="bg-slate-900 border border-slate-700 text-slate-200 rounded-lg p-3 focus:outline-none focus:border-sky-400"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="phone" className="uppercase text-sm font-semibold text-slate-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 1234567890"
                    className="bg-slate-900 border border-slate-700 text-slate-200 rounded-lg p-3 focus:outline-none focus:border-sky-400"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="user_email" className="uppercase text-sm font-semibold text-slate-300 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="user_email"
                  name="user_email"
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  className="bg-slate-900 border border-slate-700 text-slate-200 rounded-lg p-3 focus:outline-none focus:border-sky-400"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="subject" className="uppercase text-sm font-semibold text-slate-300 mb-2">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="Brief subject"
                  className="bg-slate-900 border border-slate-700 text-slate-200 rounded-lg p-3 focus:outline-none focus:border-sky-400"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="uppercase text-sm font-semibold text-slate-300 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={8}
                  required
                  placeholder="Write your message here..."
                  className="bg-slate-900 border border-slate-700 text-slate-200 rounded-lg p-3 focus:outline-none focus:border-sky-400 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[linear-gradient(135deg,#2563eb,#38bdf8)] text-white font-semibold rounded-md border-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(56,189,248,0.4)]"
              >
                Send Message
              </button>
            </form>
            <p className="pt-6 text-sm text-slate-300">
              I respond within 24 hours. Let&apos;s turn conversations into conversions.
            </p>
          </div>
        </div>

        <div className="flex justify-center pt-16">
          <Link href="#top" aria-label="Back to top">
              <div className="rounded-full shadow-lg shadow-indigo-200 p-4 cursor-pointer hover:scale-110 transition-transform duration-300">
                <HiOutlineChevronDoubleUp className="text-brand-sky" size={30} />
              </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
