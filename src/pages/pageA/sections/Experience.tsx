import React from 'react';
import { ResumeItems } from '../../../constants/navItems.constant';
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
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function Experience() {
  return (
    <section className="section" id="resume">
      <div className="container">
        {/* Title */}
        <motion.h2
          className="text-3xl font-bold mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My Resume
        </motion.h2>

        {/* Wrapper */}
        <motion.div
          className="grid gap-10 lg:grid-cols-2 lg:gap-20"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {ResumeItems.map((itemData) => (
            <motion.div
              key={itemData.id}
              variants={item}
              className="divide-y divide-neutral-800"
            >
              {/* Title */}
              <h3 className="text-2xl font-semibold mt-8 pb-3">
                {itemData.title}
              </h3>

              {/* List */}
              <div className="mt-10 space-y-8">
                {itemData.list.map((listItem, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center justify-between flex-wrap gap-6"
                  >
                    <div>
                      <h4 className="text-xl font-medium">
                        {listItem.role}
                      </h4>
                      <p className="text-neutral-400">{listItem.label}</p>
                    </div>
                    <motion.p
                      className="border border-neutral-700 px-3 py-2 rounded text-white text-sm"
                      whileHover={{ scale: 1.1, backgroundColor: '#6366f1' }}
                      transition={{ type: 'spring', stiffness: 200 }}
                    >
                      {listItem.time}
                    </motion.p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
