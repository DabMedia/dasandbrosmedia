import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Code, Megaphone, PenTool } from "lucide-react";

const Hiring = () => {
  const jobs = [
    {
      title: "Full Stack Developer",
      description:
        "We are looking for a passionate Full Stack Developer to build scalable web applications. Strong knowledge of React, Node.js, and databases is required.",
      icon: <Code className="w-12 h-12 text-blue-600" />,
    },
    {
      title: "Sales Executive",
      description:
        "Join our sales team to help drive business growth, build client relationships, and achieve targets with effective strategies.",
      icon: <Briefcase className="w-12 h-12 text-green-600" />,
    },
    {
      title: "Marketing Specialist",
      description:
        "We need a creative Marketing Specialist to plan campaigns, manage branding, and boost online presence across platforms.",
      icon: <Megaphone className="w-12 h-12 text-pink-600" />,
    },
    {
      title: "Content Creator",
      description:
        "Looking for a Content Creator to develop engaging blogs, social media posts, and digital content that resonates with our audience.",
      icon: <PenTool className="w-12 h-12 text-purple-600" />,
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-800"
        >
          We’re Hiring!
        </motion.h2>
        <p className="text-gray-600 mt-4 text-lg">
          Join our dynamic team and grow your career with us.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {jobs.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow"
          >
            <div className="mb-4">{job.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {job.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4">{job.description}</p>
            <button className="mt-auto px-5 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors">
              Apply Now
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Hiring;
