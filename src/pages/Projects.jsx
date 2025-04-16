// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useInfo } from '../context/DataContext';
import { Link, Outlet } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SubTitle from '../features/SubTitle';
import { Hint } from '../features/Hint';
import MoveBtn from '../features/MoveBtn';

export default function Projects() {
  const { projects } = useInfo();
  const carouselRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const oldToNewProject = [...projects].reverse();

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth,
      );
    }
  }, [projects]);

  return (
    <>
      <main className="py-8">
        <div className="py-4">
          <h1 className="flex flex-col justify-between font-headline text-4xl font-bold md:text-8xl">
            <span className="float-start">Selected Projects</span>
            <span className="float-end">2024-2025</span>
          </h1>
        </div>

        <div className="overflow-hidden border-b pb-20 pt-8">
          <motion.div
            ref={carouselRef}
            className="flex gap-8 py-4"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {oldToNewProject.map((project, index) => (
              <motion.div
                key={index}
                className="group relative h-[100px] min-w-[100px] cursor-grab overflow-hidden md:h-[300px] md:min-w-[500px]"
                whileTap={{ cursor: 'grabbing' }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="pointer-events-none h-full w-full select-none object-cover"
                  draggable={false}
                />

                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      className="absolute inset-0 z-10 flex flex-col justify-between bg-black/40 p-8 text-white"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.h3
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="font-headline text-3xl font-semibold tracking-widest"
                      >
                        {project.title}
                        <span className="text-base"> ({project.date})</span>
                      </motion.h3>

                      <div className="flex items-end justify-between">
                        <motion.p
                          initial={{ opacity: 0, x: -50 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -50 }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          className="w-1/2 font-headline text-base tracking-wider"
                        >
                          {project.bio}
                        </motion.p>

                        <Link
                          to={`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          <motion.button
                            initial={{ opacity: 0, x: 50, rotate: 0 }}
                            animate={{ opacity: 1, x: 0, rotate: -45 }}
                            exit={{ opacity: 0, x: 50, rotate: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="group rounded-full border p-2 font-headline text-base tracking-wider hover:bg-tertiory hover:text-primary"
                          >
                            <ArrowRight />
                          </motion.button>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
          <Hint type="project">&larr; You can drag the cards &rarr;</Hint>
        </div>
        <div className="pt-8">
          <SubTitle title="WORK" type="head" />

          <ul className="my-8 grid divide-y divide-secondary border-y border-secondary">
            {oldToNewProject.map((project, i) => (
              <li key={i} className="group relative overflow-hidden py-2">
                <div className="relative z-10 flex h-full items-center justify-between gap-4 px-4 py-6 text-primary transition-colors duration-300 group-hover:text-tertiory">
                  {/* LEFT */}
                  <div className="w-1/4">
                    <h3 className="font-headline text-3xl">{project.title}</h3>
                  </div>

                  {/* MIDDLE */}
                  <div className="flex w-1/2 justify-center text-xs">
                    <p className="flex space-x-2">
                      {project.type.map((type, i) => (
                        <span key={i}>
                          {type}
                          {i < project.type.length - 1 ? ', ' : '.'}
                        </span>
                      ))}
                    </p>
                  </div>

                  {/* RIGHT */}

                  <div className="flex w-1/4 justify-end pr-8">
                    <MoveBtn
                      to={`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                      title={project.special}
                      type="show"
                    />
                  </div>
                </div>

                {/* Background effect */}
                <div className="absolute bottom-0 left-0 z-0 h-0 w-full bg-primary transition-all duration-500 ease-in-out group-hover:h-full"></div>
                {/* {isHovering && (
                  <div
                    className="pointer-events-none absolute z-50 rounded-md bg-white/80 px-3 py-1 text-xs text-white shadow-lg backdrop-blur-sm transition-opacity duration-300"
                    // style={{
                    //   top: tooltipPos.y - 60,
                    //   left: tooltipPos.x + 20,
                    // }}
                  >
                    {project.title}
                  </div>
                )} */}
              </li>
            ))}
          </ul>
        </div>
      </main>

      <Outlet />
    </>
  );
}
