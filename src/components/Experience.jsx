import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    { company: "Company A", role: "Frontend Developer", duration: "Jan 2022 - Present" },
    { company: "Company B", role: "Web Developer Intern", duration: "Jun 2021 - Dec 2021" }
  ];
  return (
    <section style={{ padding: "20px" }} id='experience'>
      {/* <h2>Experience</h2> */}
      <motion.h2 className="text-3xl sm:text-6xl font-Rowdies font-extrabold text-white mt-5 mb-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        animate={{ x: 0 }} >Experience</motion.h2>
      {/* <ul>
            {experiences.map((exp, index) => (
              <li key={index}>
                <strong>{exp.role}</strong> at {exp.company} ({exp.duration})
              </li>
            ))}
          </ul> */}

      <div>
        <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          <div className="p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-500">Web Developer</h3>
              <span className="ml-4 text-2xl font-semibold text-gray-500">| Accenture</span>
              <span className="ml-auto text-sm font-semibold text-gray-500">2021 - Present</span>
            </div>
            <p className="text-gray-700">Developed and maintained web applications using React and Node.js. Worked on a team to deliver high-quality software.</p>
          </div>
          <div className="p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-500">Web Developer</h3>
              <span className="ml-4 text-2xl text-gray-500">| A2Z Technologies</span>
              <span className="ml-auto text-sm text-gray-500">2020 - 2021</span>
            </div>
            <p className="text-gray-700">Assisted web developers in building and testing web applications. Gained experience with front-end and back-end technologies.</p>
          </div>
          <div className="p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-500">Software Developer</h3>
              <span className="ml-4 font-semibold text-2xl text-gray-500">| Dhariz Web Simplified</span>
              <span className="ml-auto font-semibold text-sm text-gray-500">2018 - 2020</span>
            </div>
            <p className="text-gray-700">Assisted web developers in building and testing web applications. Gained experience with front-end and back-end technologies.</p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Experience;