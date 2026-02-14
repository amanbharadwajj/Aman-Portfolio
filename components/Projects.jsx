import Image from "next/image";
import Link from "next/link";
import React from "react";
import propertyImg from "../public/assets/projects/property.png";
import cryptoImg from "../public/assets/projects/crypto.png";
import netflixImg from "../public/assets/projects/netflix.png";
import twitchImg from "../public/assets/projects/twitch.png";

const projects = [
  {
    title: "Friendify",
    image: propertyImg,
    url: "/property",
    tech: [
      "Vue.js",
      "Socket.io",
      "Node.js",
      "Cloudinary",
      "JWT",
      "Chakra UI",
      "MongoDB",
    ],
  },
  {
    title: "Gadgetry App",
    image: cryptoImg,
    url: "/crypto",
    tech: [
      "React.js",
      "Redux",
      "Firebase",
      "MongoDB",
      "Node.js",
      "Express",
      "Stripe API",
    ],
  },
  {
    title: "Memories App",
    image: netflixImg,
    url: "/netflix",
    tech: ["React.js", "Firebase", "MongoDB", "Node.js", "Express"],
  },
  {
    title: "Crime Locator",
    image: twitchImg,
    url: "/twitch",
    tech: ["React.js", "Mapbox API"],
  },
];

const Projects = () => {
  return (
    <div id="projects" className="w-full bg-gray-100 py-16 px-4">
      <div className="max-w-[1240px] mx-auto">
        <p className="text-xl tracking-widest uppercase text-[#5651e5] text-center">
          Projects
        </p>
        <h2 className="py-4 text-3xl font-bold text-center">What I&apos;ve Built</h2>

        <div className="grid md:grid-cols-2 gap-10 mt-10">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                  {proj.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-indigo-100 text-indigo-600 text-xs font-medium rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <Link href={proj.url}>
  <span className="inline-block mt-2 px-4 py-2 bg-[#5651e5] text-white rounded-lg text-sm hover:bg-indigo-700 transition cursor-pointer">
    View Project
  </span>
</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
