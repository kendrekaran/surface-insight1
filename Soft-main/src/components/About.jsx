import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const teamMembers = [
    {
      name: "John Anderson",
      role: "Senior Software Engineer",
      image: "https://i.pinimg.com/736x/c1/9f/d6/c19fd6045809218e467c3220ef77742a.jpg",
      description: "John is a highly skilled full-stack developer with over 8 years of experience in software development, specializing in AI and machine learning. He is passionate about leveraging technology to optimize business processes.",
    },
    {
      name: "Sarah Thompson",
      role: "Product Manager",
      image: "https://i.pinimg.com/736x/81/fa/74/81fa7451b55e83620f35ffa82f610eca.jpg",
      description: "With 5 years of experience in product management, Sarah focuses on creating seamless user experiences. She leads the SurfaceAI product team in designing and implementing RPA solutions tailored to client needs."
    },
    {
      name: "Michael Johnson",
      role: "Data Scientist",
      image: "https://i.pinimg.com/736x/fa/42/10/fa4210b7e05425d0ac694f41eafde179.jpg",
      description: "Michael has a PhD in Data Science and brings expertise in predictive analytics and machine learning algorithms. He helps SurfaceAI clients derive actionable insights from their data."
    },
  ];

  return (
    <div className="bg-black min-h-screen p-8 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">Our Expert Team</h2>
          <p className="text-gray-400 px-10">
            Meet the dedicated team behind SurfaceAI — experts in leveraging cutting-edge AI/ML technologies.
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group px-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }} // Makes it trigger once the card is 20% in view
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Card Content */}
              <div className="p-6 text-center">
                {/* Image */}
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full border-2 border-red-900 group-hover:border-red-400 transition-colors duration-300"></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-full object-cover h-full w-auto"
                  />
                </div>

                {/* Member Info */}
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-sm text-white mb-4">{member.role}</p>
                <p className="text-gray-400 text-sm mb-6">{member.description}</p>

                {/* Button */}
                <button className="border border-white text-white px-4 py-2 rounded-md hover:bg-red-600 hover:text-white transition-colors duration-300">
                  Know More
                </button>
              </div>

              {/* Border on Hover */}
              <div className="absolute inset-0 border border-transparent group-hover:border-red-400 rounded-lg transition-colors duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
