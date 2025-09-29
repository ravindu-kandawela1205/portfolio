import React from 'react';
import { contactItems } from '../../../constants/navItems.constant';
import { RiLinkedinBoxFill, RiGithubFill } from '@remixicon/react';
import { motion } from 'framer-motion';

// Variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function Contact() {
  return (
    <section className="py-20" id="contact">
      <div className="container grid gap-10 md:grid-cols-2 md:divide-x md:divide-neutral-800">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get In Touch
          </motion.h2>

          <motion.p
            className="mt-3.5 mb-7"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ready to work on your next project. Let's discuss how I can help
            bring your ideas to life.
          </motion.p>

          {/* Contact list */}
          <motion.ul
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {contactItems.map((itemData) => (
              <motion.li
                key={itemData.id}
                variants={item}
                className="flex items-center gap-1.5 mb-2"
              >
                <p className="text-white font-semibold">{itemData.label}:</p>
                <a
                  href={itemData.link}
                  className="hover:text-indigo-400 transition-colors"
                >
                  {itemData.link}
                </a>
              </motion.li>
            ))}
          </motion.ul>

          {/* Social profiles */}
          <div className="flex items-center gap-3 mt-6">
            <motion.a
              href="https://linkedin.com"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="hover:text-neutral-300 transition-colors"
            >
              <RiLinkedinBoxFill size={30} />
            </motion.a>

            <motion.a
              href="https://github.com"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="hover:text-neutral-300 transition-colors"
            >
              <RiGithubFill size={30} />
            </motion.a>
          </div>
        </motion.div>

        {/* Right form */}
        <motion.form
          action=""
          className="grid gap-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Name */}
          <div className="grid gap-2">
            <label htmlFor="name">Name *</label>
            <motion.input
              type="text"
              placeholder="Your Name"
              className="input"
              required
              whileFocus={{ scale: 1.02, borderColor: '#6366f1' }}
            />
          </div>

          {/* Email */}
          <div className="grid gap-2">
            <label htmlFor="email">Email *</label>
            <motion.input
              type="email"
              placeholder="Your Email"
              className="input"
              required
              whileFocus={{ scale: 1.02, borderColor: '#6366f1' }}
            />
          </div>

          {/* Message */}
          <div className="grid gap-2">
            <label htmlFor="message">Message *</label>
            <motion.textarea
              id="message"
              placeholder="Message"
              className="h-40 border border-neutral-800 indent-4 py-2 resize-none"
              whileFocus={{ scale: 1.02, borderColor: '#6366f1' }}
            />
          </div>

          {/* Button */}
          <motion.button
            className="primary-btn max-w-max"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
