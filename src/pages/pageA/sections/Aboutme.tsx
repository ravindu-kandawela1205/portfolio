import React from 'react';
import { motion } from 'framer-motion';
import { aboutItems } from '../../../constants/navItems.constant';

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function Aboutme() {
  return (
    <section className="section bg-secondary-clr" id="about">
      <div className="container">
        {/* Title */}
        <motion.h2
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          About me
        </motion.h2>

        {/* Intro paragraph */}
        <motion.p
          className="mt-3 mb-9"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
        >
          I’m Ravindu Kandawela, a passionate Full Stack Developer who loves turning
          ideas into clean, interactive, and user-friendly web experiences. I
          specialize in React, Tailwind CSS, and TypeScript on the frontend, and build
          solid, scalable backends with Laravel. I enjoy crafting interfaces that not
          only look great but also feel smooth and intuitive. Every project I work on
          is a chance to learn something new, push boundaries, and create meaningful
          solutions that make a real impact. I’m on a mission to grow as a developer
          and bring creativity, precision, and purpose into every line of code I
          write.
        </motion.p>

        {/* Skills */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.p
            className="text-white font-semibold text-xl mb-3"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Skills:
          </motion.p>

          <motion.ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {aboutItems.map((itemData) => (
              <motion.li
                key={itemData.id}
                variants={item}
                whileHover={{ scale: 1.05, x: 5 }}
                className="text-gray-200 flex items-center gap-2"
              >
                <span>✔️</span>
                <span>{itemData.label}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}

export default Aboutme;
