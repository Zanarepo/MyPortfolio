import React from "react";
import { FaBriefcase, FaCheckCircle, FaBuilding, FaExternalLinkAlt } from "react-icons/fa";

export default function Experience() {
  const jobs = [
    {
      title: "Founder & Product Lead",
      company: "Sprintify",
      dates: "Nov, 2024 - Present",
      description:
        "A product designed to streamline project sprints and boost team collaboration.",
      achievements: [
        "Conceptualized, built, and launched Sprintify, driving a user adoption rate of 10% since launch.",
        "Increased user engagement with core features by 40% through iterative improvements.",
        "Designed and implemented a product roadmap focused on agile team efficiency.",
        "Conducted extensive market research to identify gaps in sprint planning tools.",
        "Led product development from ideation to execution, ensuring a seamless user experience."
      ],
      website: "https://www.sprintifyhq.com" // Adding website link
    },
    {
      title: "Senior Product Manager",
      company: "GrowAfrica",
      dates: "Apr, 2024 - Present",
      description:
        "An e-commerce platform built to promote made-in-Africa goods.",
      achievements: [
        "Developed and maintained the product roadmap, increasing user engagement by 30%.",
        "Worked closely with designers and engineers to ensure timely feature releases.",
        "Implemented a tracking system in Jira for task execution and team alignment.",
        "Conducted market research and competitor analysis, leading to a 20% rise in user adoption.",
        "Monitored key metrics and implemented improvements, boosting conversion rates by 15%.",
        "Optimized product performance using MixPanel, increasing user engagement.",
        "Prioritized bug fixes and resolved issues, improving development accuracy by 20%."
      ]
    },
    {
      title: "Product Management Expert (Consultant)",
      company: "Women Radio",
      dates: "March. 2024 - Sep, 2024",
      description: "A radio station for women and their families.",
      achievements: [
        "Led the optimization of WFM’s product baseline.",
        "Harmonized their membership platform, leading to increased user engagement and satisfaction.",
        "Identified key challenges in their product offering and made recommendations that increased listenership ratings by 23%.",
        "Researched and analyzed their product baseline, resulting in increased listenership and improved engagement."
      ]
    },
    {

 
      title: "Product Manager",
      company: "Borderless HQ",
      dates: "Feb, 2022 - Mar, 2024",
      description:
        "A platform improving real-time delivery tracking and user engagement.",
      achievements: [
        "Led the creation of a real-time tracking feature, boosting user activity by 20%.",
        "Prioritized features based on feedback, reducing customer turnover by 25%.",
        "Streamlined sprint planning, improving team coordination and reducing development time by 10%.",
        "Took charge of testing and issue resolution, ensuring product quality.",
        "Optimized the development process, cutting feature launch time in half."
      ]
    },

 
    {
      title: "Product Intern",
      company: "Eyowo (Softcom Ltd)",
      dates: "01/2020 - 11/ 2021",
      description: "A fintech company.",
      achievements: [
        "Developed barcode-based payment solutions for POS systems, boosting merchant transaction efficiency by 15% through user research, product manager coordination, and seamless developer collaboration.",
        "Played a key role in enhancing peer-to-peer transfer services, improving user experience and increasing transfer success rates by 20% through user feedback, market trend analysis, and customer-focused updates.",
        "Worked closely with the product manager to update backlogs, incorporating user feedback and prioritizing features based on impact and feasibility, improving sprint planning efficiency by 10%.",
        "Conducted user research to inform product design and functionality, contributing to a 25% increase in user satisfaction after updates were implemented."
      ]
    }
  ];

  return (
    <section className="mb-12 bg-white p-4 rounded-2xl shadow-lg w-full max-w-full mx-auto mt-8">
      <h2 className="text-3xl font-semibold text-blue-800 mb-6 text-center">
        <FaBriefcase className="inline-block text-blue-800 mr-2" /> Work Experience
      </h2>

      {jobs.map((job, index) => (
        <div key={index} className="mb-6 bg-white p-6 rounded-xl shadow-md w-full">
          <div className="flex items-center space-x-3 mb-2">
            <FaBuilding className="text-blue-800 text-2xl" />
            <h3 className="text-xl font-bold text-blue-800">{job.title}</h3>
          </div>
          <p className="text-gray-600 mb-1">
            <span className="font-semibold">{job.company}</span> | {job.dates}
          </p>
          <p className="text-gray-700 italic">{job.description}</p>

          <ul className="mt-4 space-y-2">
            {job.achievements.map((achievement, i) => (
              <li key={i} className="flex items-center text-gray-700">
                <FaCheckCircle className="text-blue-700 mr-2" />
                {achievement}
              </li>
            ))}
          </ul>

          {/* Show website button only for Sprintify */}
          {job.website && (
            <a
              href={job.website}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center bg-blue-700 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-800 transition-all duration-300"
            >
              Visit Sprintify <FaExternalLinkAlt className="ml-2" />
            </a>
          )}
        </div>
      ))}
    </section>
  );
}
