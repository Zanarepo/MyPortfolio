import React from "react";
import { FaBriefcase, FaCheckCircle, FaBuilding } from "react-icons/fa";

export default function Experience() {
  const jobs = [
    {
      title: "Lead Product Manager",
      company: "GrowAfrica",
      dates: "Feb 2023 - Present",
      description:
        "An E-commerce platform built to promote made-in-Africa goods.",
      achievements: [
        "Developed and maintained the product roadmap, increasing user engagement by 30%.",
        "Worked closely with designers and engineers to ensure timely feature releases.",
        "Implemented a tracking system in Jira for task execution and team alignment.",
        "Conducted market research and competitor analysis, leading to a 20% rise in user adoption.",
        "Monitored key metrics and implemented improvements, boosting conversion rates by 15%.",
        "Optimized product performance using MixPanel, increasing user engagement.",
        "Prioritized bug fixes and resolved issues, improving development accuracy by 20%.",
      ],
    },
    {
      title: "Product Manager",
      company: "Borderless HQ",
      dates: "Apr 2022 - Mar 2024",
      description:
        "A platform improving real-time delivery tracking and user engagement.",
      achievements: [
        "Led the creation of a real-time tracking feature, boosting user activity by 20%.",
        "Prioritized features based on feedback, reducing customer turnover by 25%.",
        "Streamlined sprint planning, improving team coordination and reducing development time by 10%.",
        "Took charge of testing and issue resolution, ensuring product quality.",
        "Optimized the development process, cutting feature launch time in half.",
      ],
    },
  ];

  return (
    <section className="mb-12 p-6 rounded-2xl w-full min-h-screen bg-gray-50">
    <h2 className="text-3xl font-semibold text-blue-800 mb-6 text-center">
      <FaBriefcase className="inline-block text-blue-600 mr-2" /> Work Experience
    </h2>
  
    {jobs.map((job, index) => (
      <div key={index} className="mb-6 bg-white p-6 rounded-xl shadow-md  w-full">
        <div className="flex items-center space-x-3 mb-2">
          <FaBuilding className="text-blue-500 text-2xl" />
          <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
        </div>
        <p className="text-gray-600 mb-1">
          <span className="font-semibold">{job.company}</span> | {job.dates}
        </p>
        <p className="text-gray-700 italic">{job.description}</p>
  
        <ul className="mt-4 space-y-2">
          {job.achievements.map((achievement, i) => (
            <li key={i} className="flex items-center text-gray-700">
              <FaCheckCircle className="text-green-500 mr-2" />
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </section>
  
  );
}
