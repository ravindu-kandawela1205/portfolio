
import Ravindu from '../../../assets/Images/ravindu.png';
import { heroIcons } from '../../../constants/navItems.constant';
import Button from '../../../components/Buttons/Button';
import { BackgroundGradient } from '../../../components/ui/BackgroundGradient ';

import { motion } from 'framer-motion';
import { staggerContainer } from '../../../motion/animation';

function Hero() {
  return (
    <section className="py-28 lg:pt-40" id="home">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container flex flex-col items-center"
      >
        {/* image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          whileHover={{ scale: 1.05 }}
          className="relative"
        >
          <BackgroundGradient className="w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden bg-zinc-900">
            <motion.img
              src={Ravindu}
              alt="ravindu"
              className="w-full h-full object-cover"
              initial={{ y: 20 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
            />
          </BackgroundGradient>
        </motion.div>

        {/* content  */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-3xl lg:text-5xl font-bold"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Hi, I'm Ravindu Kandawela.
          </motion.h1>

          <motion.h2
            className="text-xl mt-2"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            className="max-w-[820px] mx-auto mt-4 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            I'm Ravindu Kandawela, a Full Stack Developer who architects seamless digital
            experiences through innovative code and intuitive design. With expertise in
            React, Tailwind CSS, and TypeScript, and a passion for performance
            optimization, I transform complex business requirements into scalable,
            user-centric applications that drive meaningful engagement.
          </motion.p>

          {/* Social icons */}
          <motion.div
            className="flex items-center justify-center gap-5"
            initial="hidden"
            whileInView="show"
          >
            {heroIcons.map((icon, i) => (
              <motion.a
                key={i}
                href={icon.href}
                className="hover:text-indigo-400 transition-colors"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 * i, duration: 0.5 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <icon.icon size={30} />
              </motion.a>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="mt-10 flex items-center justify-center flex-wrap gap-5"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
          >
            <motion.div  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button label="Download CV" classes="primary-btn" icon />
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button label="Let's Collaborate" classes="secondary-btn" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
