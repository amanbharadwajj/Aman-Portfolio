import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
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
    <div id="contact" className="w-full min-h-screen bg-gradient-to-br from-indigo-50 to-white p-6 lg:p-16">
      <div className="max-w-[1240px] mx-auto">
        <p className="text-xl tracking-widest uppercase text-indigo-600 font-semibold text-center">
          Contact
        </p>
        <h2 className="py-4 text-4xl font-bold text-center text-gray-800">Get In Touch</h2>

        <div className="grid lg:grid-cols-5 gap-10 mt-10">
          {/* Left section */}
          <div className="col-span-3 lg:col-span-2 bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between">
            <div>
              <Image
                className="rounded-xl hover:scale-105 ease-in duration-300"
                src="/assets/page/contact.jpg"
                width={500}
                height={350}
                alt="Contact Aman Kumar"
              />
              <h2 className="py-4 text-2xl font-semibold text-indigo-700">Aman Kumar</h2>
              <p className="text-gray-700 font-medium">Full-Stack Developer</p>
              <p className="py-4 text-gray-600">
                I am available for freelance or full-time positions. Contact me and let&apos;s talk.
              </p>
            </div>

            <div>
              <p className="uppercase tracking-widest text-indigo-600 font-semibold pb-4">
                Connect With Me
              </p>
              <div className="flex space-x-6">
                <a
                  href="http://linkedin.com/in/ankur-sharma-as"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="rounded-full shadow-lg shadow-indigo-200 p-5 text-indigo-700 hover:shadow-indigo-400 hover:scale-110 transition-transform duration-300"
                >
                  <FaLinkedinIn size={24} />
                </a>
                <a
                  href="https://github.com/Ankur-Sh"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="rounded-full shadow-lg shadow-indigo-200 p-5 text-indigo-700 hover:shadow-indigo-400 hover:scale-110 transition-transform duration-300"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="mailto:ankur@example.com"
                  aria-label="Send Email"
                  className="rounded-full shadow-lg shadow-indigo-200 p-5 text-indigo-700 hover:shadow-indigo-400 hover:scale-110 transition-transform duration-300"
                >
                  <AiOutlineMail size={24} />
                </a>
                <Link 
                    href="https://bit.ly/48fXEn6"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Resume"
                    className="rounded-full shadow-lg shadow-indigo-200 p-5 text-indigo-700 hover:shadow-indigo-400 hover:scale-110 transition-transform duration-300"
                  >
                    <BsFillPersonLinesFill size={24} />
                </Link>
              </div>
            </div>
          </div>

          {/* Right section - form */}
          <div className="col-span-3 bg-white rounded-xl shadow-lg p-6">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label htmlFor="user_name" className="uppercase text-sm font-semibold text-gray-600 mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="user_name"
                    name="user_name"
                    type="text"
                    required
                    placeholder="Your full name"
                    className="border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="phone" className="uppercase text-sm font-semibold text-gray-600 mb-2">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 1234567890"
                    className="border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="user_email" className="uppercase text-sm font-semibold text-gray-600 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="user_email"
                  name="user_email"
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  className="border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="subject" className="uppercase text-sm font-semibold text-gray-600 mb-2">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="Brief subject"
                  className="border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="uppercase text-sm font-semibold text-gray-600 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={8}
                  required
                  placeholder="Write your message here..."
                  className="border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="flex justify-center pt-16">
          <Link href="#top" aria-label="Back to top">
              <div className="rounded-full shadow-lg shadow-indigo-200 p-4 cursor-pointer hover:scale-110 transition-transform duration-300">
                <HiOutlineChevronDoubleUp className="text-indigo-600" size={30} />
              </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
