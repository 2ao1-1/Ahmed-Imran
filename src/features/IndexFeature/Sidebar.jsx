import { useInfo } from '../../context/DataContext';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export default function Sidebar() {
  const { name, images, bio } = useInfo();

  return (
    <motion.div
      className="space-y-6 pl-4 pt-6 md:col-span-4 md:pt-0"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* header */}
      <h2 className="mb-4 font-headline text-2xl text-stone-800">
        Turning Ideas Into Interactive Interfaces.
      </h2>

      {/* sidebar content */}
      <div className="prose prose-stone prose-sm space-y-2">
        <p className="leading-relaxed text-stone-600">{bio[0]}</p>
        <p className="leading-relaxed text-stone-600">{bio[1]}</p>
      </div>

      {/* side img */}
      <div className="mt-6">
        <img
          src={images.myImg}
          alt={name}
          className="mx-auto w-2/3 max-w-xs bg-stone-50 p-2 shadow-sm md:ml-auto md:mr-0"
        />
      </div>
    </motion.div>
  );
}
