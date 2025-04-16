// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

// features
import IndexHeader from '../features/IndexFeature/IndexHeader';
import LastProject from '../features/IndexFeature/LastProject';
import Sidebar from '../features/IndexFeature/Sidebar';
import IndexContact from '../features/IndexFeature/IndexContact';

export default function Index() {
  return (
    <motion.div
      className=""
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Index Header */}
      <IndexHeader />

      {/* index content */}
      <motion.section
        className="grid grid-cols-1 gap-6 divide-y px-4 py-8 md:grid-cols-12 md:divide-x md:divide-y-0"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Last Project */}
        <LastProject />
        {/* Sidebar */}
        <Sidebar />
      </motion.section>

      <motion.section
        className="relative col-span-8 w-full overflow-hidden border-t px-4 py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* contact */}
        <IndexContact />
      </motion.section>
    </motion.div>
  );
}
