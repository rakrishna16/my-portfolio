import React from 'react';
import { motion } from 'framer-motion';
import { image } from 'motion/react-client';

const Projects = () => {
  const projects = [
    { name: "Education Website", description: "HTML Tailwind CSS website from figma design to education website.", link: "https://tailwindlandinghk.netlify.app/", image: "https://raw.githubusercontent.com/rakrishna16/my-portfolio/refs/heads/main/src/assets/tailwind_css_landing_page_mokup.jpeg", technologies: ["HTML", "Tailwind CSS"] },
    { name: "Movie Search App", description: "React application to search for movies.", link: "https://hkxmsearch.netlify.app/", image: "https://raw.githubusercontent.com/rakrishna16/my-portfolio/refs/heads/main/src/assets/movie_search_app.jpeg", technologies: ["React.js", "Tailwind CSS", "exppress", "Vite"] },
    { name: "Memory Flip Card Game", description: "A javascript application to play memory flip card game.", link: "https://memoryflipgamehk.netlify.app/", image: "https://raw.githubusercontent.com/rakrishna16/my-portfolio/refs/heads/main/src/assets/memory_flip_card_game.jpeg", technologies: ["Javascript", "CSS", "HTML"] },
    { name: "News Website", description: "A News website to fetch news from API and display.", link: "https://newshk.netlify.app/", image: "https://raw.githubusercontent.com/rakrishna16/my-portfolio/refs/heads/main/src/assets/news_app_image.jpeg", technologies: ["React.js", "Tailwind CSS", "Vite", "HTML", "JavaScript"] },
    { name: "E-commerce Store", description: "A mock e-commerce application with React.", 
      link: "https://product-hkx.netlify.app/", 
      image: "https://raw.githubusercontent.com/rakrishna16/my-portfolio/refs/heads/main/src/assets/Product_page_cart_add_delete.jpeg", 
      technologies: ["React.js", "JavaScript", "Tailwind CSS", "Vite", "HTML"] },
    { name: "Login Page ", description: "A mock login page application with registration, login and password reset functionality.", link: "https://password-reset-hkx.netlify.app/", image: "https://raw.githubusercontent.com/rakrishna16/my-portfolio/refs/heads/main/src/assets/register_login_password_reset_app.jpeg", technologies: ["React.js", "JavaScript", "Tailwind CSS", "Vite", "HTML", "Node.js", "MongoDB", "Express"] },
    { name: "Travel Agent Website", description: "HTML CSS website from figma design to travel agent website.", link: "https://landinghk.netlify.app/", image: "https://raw.githubusercontent.com/rakrishna16/my-portfolio/refs/heads/main/src/assets/html5_css3_landing_page_mokup.jpeg", technologies: ["HTML", "CSS"] }
  ];
  return (
    <section className="mx-auto mx-w-6xl p-4 md:p-8 lg:p-20 bg-gradient-to-t backdrop-blue-md bg-black/30" id='projects'>
      <div className="text-center relative mt-24 sm:mt-5 mb-10 p-5">


        <motion.h1 className="text-4xl sm:text-6xl font-Rowdies font-extrabold text-white mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}>Projects</motion.h1>
      </div>

      <motion.div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full text-white'
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}>
        {projects.map((project, index) => (
          <a href={project.link} target='_blank' key={index} className='flex flex-col rounded-xl overflow-hidden 
              transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:shadow-gray-400 cursor-pointer gap-2'>
            <img src={project.image} className='hover:scale-105 transition-transform duration-100 w-full' alt={project.name} />
            <div className='p-5 flex flex-col gap-3 bg-gray-900 transition-colors duration-100 flex-grow'>
              <h3 className='text-lg font-semibold'>{project.name}</h3>
              <p className='text-sm text-slate-400'>{project.description}</p>
              <div className='flex gap-3 flex-wrap mt-auto '>
                {
                  project.technologies.map((techs, index) => (
                    <span key={index} className='text-xs text-white px-2 py-1 bg-blue-800 rounded-xl'>{techs}</span>
                  ))
                }
              </div>
            </div>
          </a>
        ))}

      </motion.div>
    </section>
  );
};

export default Projects;