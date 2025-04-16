// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useInfo } from '../../context/DataContext';

export default function Experience() {
  const { experiance } = useInfo();

  const styles = 'relative select-none py-8 filter blur-md';
  const drop = 'absolute inset-0 z-50 bg-stone-400/50 backdrop-blur-md';

  return (
    <section className={styles}>
      <div className={drop}></div>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-headline text-3xl font-bold underline md:text-4xl"
      >
        Experience
      </motion.h2>

      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-8"
      >
        {experiance.map((company, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            className="flex grid-cols-8 flex-wrap items-center border-b bg-stone-100 py-8 md:grid"
          >
            {/* Company Details */}
            <img
              src={company.logo}
              alt={`${company.name} logo`}
              className="col-span-1 w-20 md:w-auto"
            />

            <div className="col-span-1 grid w-1/2 items-center justify-center">
              <span className="text-xs text-stone-700 md:text-sm md:font-bold">
                Company Name
              </span>
              <h3 className="font-serif text-3xl">{company.name}</h3>
            </div>

            <div className="col-span-1 grid items-center justify-center">
              <span className="text-xs text-stone-700 md:text-sm md:font-bold">
                Duration
              </span>
              <div className="font-headline text-xs md:text-xl">
                <span>{company.timeZone}</span>
                <p>{company.years}</p>
              </div>
            </div>
            <div className="col-span-2 grid items-center justify-start p-4">
              <span className="text-xs text-stone-700 md:text-sm md:font-bold">
                Role
              </span>
              <p className="font-serif text-base">{company.role}</p>
            </div>

            <div className="col-span-3 grid items-center justify-start px-4">
              <span className="text-xs text-stone-700 md:text-sm md:font-bold">
                Experience Overview
              </span>
              <p className="font-serif text-base">{company.opinion}</p>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
