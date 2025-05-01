import { motion } from 'framer-motion';
import { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import '../styles/Hero.css';

function Hero() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section id="home" className="hero">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: { value: 100, density: { enable: true, value_area: 1200 } },
            color: { value: ['#00d4ff', '#ff00ff', '#e0e0ff'] },
            shape: { type: 'circle' },
            opacity: { value: 0.4, random: true },
            size: { value: 4, random: true },
            move: { enable: true, speed: 2, direction: 'none', random: true },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: 'repulse' },
              onClick: { enable: true, mode: 'push' },
            },
          },
          retina_detect: true,
        }}
      />
      <div className="hero-container">
        <div className="hero-content">
          <motion.div
            className="hero-profile"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1>John Doe</h1>
            <p className="tagline">Web Developer | UI/UX Enthusiast</p>
          </motion.div>
          <motion.div
            className="hero-biodata"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h2>Biodata</h2>
            <ul>
              <li><strong>Usia:</strong> 25 tahun</li>
              <li><strong>Pendidikan:</strong> S1 Teknik Informatika, Universitas XYZ</li>
              <li><strong>Keahlian:</strong> React, JavaScript, UI/UX Design</li>
              <li><strong>Kontak:</strong> <a href="mailto:email@example.com">email@example.com</a> | +62 123 456 789</li>
            </ul>
            <div className="social-links">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> GitHub
              </a>
            </div>
          </motion.div>
          <motion.a
            href="#projects"
            className="btn"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Jelajahi Proyek Saya
          </motion.a>
        </div>
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <img
            src="./src/assets/foto.jpg" // Ganti dengan URL foto profil kamu
            alt="Profile"
            className="profile-pic"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;