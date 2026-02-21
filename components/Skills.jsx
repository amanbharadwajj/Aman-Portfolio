import Image from "next/image";
import React from "react";
import RevenueImg from "../public/assets/skills/revenue-growth.svg";
import TargetImg from "../public/assets/skills/target-achievement.svg";
import ClientImg from "../public/assets/skills/client-relationship.svg";
import LeadImg from "../public/assets/skills/lead-management.svg";
import CommunicationImg from "../public/assets/skills/communication.svg";
import NegotiationImg from "../public/assets/skills/negotiation.svg";
import CRMImg from "../public/assets/skills/crm-management.svg";
import FunnelImg from "../public/assets/skills/funnel-analytics.svg";
import StrategyImg from "../public/assets/skills/strategy.svg";
import GrowthImg from "../public/assets/skills/growth.svg";

const skills = [
  { img: RevenueImg, name: "Revenue Growth" },
  { img: TargetImg, name: "Target Achievement" },
  { img: ClientImg, name: "Client Relationship" },
  { img: LeadImg, name: "Lead Management" },
  { img: CommunicationImg, name: "Communication" },
  { img: NegotiationImg, name: "Negotiation" },
  { img: CRMImg, name: "CRM Management" },
  { img: FunnelImg, name: "Funnel / Analytics" },
  { img: StrategyImg, name: "Strategy" },
  { img: GrowthImg, name: "Growth" },
];

const Skills = () => {
  return (
    <div
      id="skills"
      className="w-full min-h-screen p-6 lg:p-16"
    >
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-sky-400 font-semibold text-center">
          Core Competencies
        </p>
        <h2 className="py-4 text-4xl font-bold text-center text-sky-400">
          What I Can Do
        </h2>
        <p className="text-center text-gray-600 max-w-xl mx-auto mb-10">
          Here are the key business development skills and tools I leverage to drive revenue growth and build long-term client relationships.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {skills.map(({ img, name }, index) => (
            <SkillCard key={index} img={img} name={name} />
          ))}
        </div>
      </div>
    </div>
  );
};

const SkillCard = ({ img, name }) => (
  <div
    className="case-card p-6 transform hover:scale-105 transition-transform duration-300 cursor-default"
    title={name}
  >
      <div className="flex flex-col items-center justify-center space-y-3">
      <Image src={img} alt={name} width={64} height={64} />
      <h3 className="text-lg font-semibold text-brand-sky text-center">{name}</h3>
    </div>
  </div>
);

export default Skills;
