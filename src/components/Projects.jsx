import { motion } from 'framer-motion';
import '../styles/Projects.css';

function Projects() {
  const projects = [
    {
      title: 'Proyek 1',
      description: 'Aplikasi web inovatif dengan desain futuristik.',
      image: 'https://via.placeholder.com/300',
      link: 'https://github.com/jrdnniel/project-semester-4-front-mobile', // Replace with real link
    },
    {
      title: 'Proyek 2',
      description: 'Platform interaktif dengan animasi modern.',
      image: 'https://via.placeholder.com/300',
      link: 'https://github.com/jrdnniel/project-semester-3', // Replace with real link
    },
    {
      title: 'Proyek 3',
      description: 'Website responsif dengan teknologi terbaru.',
      image: 'https://via.placeholder.com/300',
      link: 'https://github.com/jrdnniel/Portofolio', // Replace with real link
    },
  ];

  return (
    <section id="projects" className="projects">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Proyek Saya
      </motion.h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <motion.a
              href={project.link}
              className="btn"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 + index * 0.2 }}
              viewport={{ once: true }}
              target="_blank" // Open external links in new tab
              rel="noopener noreferrer" // Security for external links
            >
              Lihat Detail
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;