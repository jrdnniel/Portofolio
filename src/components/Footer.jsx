import { motion } from 'framer-motion';
import '../styles/Footer.css';

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <p>© 2025 [Nama Kamu]. Dibuat dengan Teknologi Masa Depan.</p>
    </motion.footer>
  );
}

export default Footer;