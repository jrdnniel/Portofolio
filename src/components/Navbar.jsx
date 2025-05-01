import { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="logo">Portofolio</div>
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        {['Beranda', 'Tentang', 'Proyek', 'Kontak'].map((item, index) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <a href={`#${item.toLowerCase()}`} onClick={toggleMenu}>
              {item}
            </a>
          </motion.li>
        ))}
      </ul>
      <div className={`burger ${isOpen ? 'toggle' : ''}`} onClick={toggleMenu}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </motion.nav>
  );
}

export default Navbar;