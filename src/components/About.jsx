import { motion } from 'framer-motion';
import '../styles/About.css';

function About() {
  return (
    <motion.section
      id="about"
      className="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2>Tentang Saya</h2>
      <p>
        Saya seorang web developer yang bersemangat menciptakan pengalaman digital futuristik. Dengan keahlian di HTML, CSS, JavaScript, dan React, saya membangun website yang tidak hanya fungsional tetapi juga memukau.
      </p>
    </motion.section>
  );
}

export default About;