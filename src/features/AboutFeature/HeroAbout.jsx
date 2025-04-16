import { useInfo } from '../../context/DataContext';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export default function HeroAbout() {
  const { name, story, images } = useInfo();
  const storyContent = story.slice(1);

  const firstName = name.split(' ')[0];
  const lastName = name.split(' ')[1];

  // const [showMore, setShowMore] = useState(false);
  //   const [hovered, setHovered] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="border-b"
    >
      {/* Personal Introduction */}
      <div className="flex h-screen flex-col items-center py-16 md:py-4">
        <motion.span
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.7 }}
          className="relative -left-10 z-0 font-headline text-9xl md:-left-60"
        >
          {firstName}
        </motion.span>
        <div className="relative flex justify-center">
          {/* Profile Image and Brief Intro */}
          <motion.img
            initial={{ opacity: 0, scale: 0.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            src={images.myImg}
            alt="profile picture"
            className="relative -top-12 left-1 w-52 shadow-xl md:w-80"
          />
        </div>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 1 }}
          className="font-serif bottom-[26%] right-[21%] z-20 hidden w-[15%] text-sm tracking-wider md:absolute md:block"
        >
          {story[0]}
        </motion.p>
        <motion.span
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.7 }}
          className="relative -right-10 -top-24 z-10 font-headline text-9xl md:-right-60"
        >
          {lastName}
        </motion.span>
      </div>

      {/* Story Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="col-span-1 py-6 md:col-span-4 md:px-4 md:py-8"
      >
        <p className="font-serif mb-4 text-justify text-sm md:hidden md:text-base">
          {story[0]}
        </p>

        <p className="columns-1 gap-6 text-justify text-sm sm:columns-2 md:columns-4 md:gap-8 md:text-base">
          {storyContent.map((item, index) => (
            <span key={index} className="block py-2">
              {item}
            </span>
          ))}
        </p>
      </motion.div>
    </motion.section>
  );
}
