import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS Service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS Template ID
        formData,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          alert('Pesan terkirim!');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          alert('Gagal mengirim pesan: ' + error.text);
        }
      );
  };

  return (
    <motion.section
      id="contact"
      className="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2>Hubungi Saya</h2>
      <motion.form
        className="contact-form"
        onSubmit={handleSubmit}
        initial={{ y: 20 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <input
          type="text"
          name="name"
          placeholder="Nama"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required  
        />
        <textarea
          name="message"
          placeholder="Pesan"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <motion.button
          type="submit"
          className="btn"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Kirim
        </motion.button>
      </motion.form>
    </motion.section>
  );
}

export default Contact;