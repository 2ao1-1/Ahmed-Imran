// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import HeroAbout from '../features/AboutFeature/HeroAbout';
import Skills from '../features/AboutFeature/Skills';
import Experience from '../features/AboutFeature/Experience';

/**
 * About Page Component
 * Displays personal information, skills, education and professional experience
 */
export default function About() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.main
      className="container mx-auto px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <HeroAbout />

      {/* Skills Section */}
      <Skills />

      {/* Experience Section */}
      <Experience />
    </motion.main>
  );
}
