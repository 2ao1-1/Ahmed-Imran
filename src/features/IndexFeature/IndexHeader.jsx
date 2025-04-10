import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useInfo } from '../../context/DataContext';

export default function IndexHeader() {
  return (
    <motion.section
      className="grid items-center gap-4 border-b border-stone-200 px-4 py-6 sm:grid-cols-3"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* data and locayion */}
      <DateAndLocation />

      {/* main header */}
      <MainHeader />

      {/* sitemap */}
      <SiteMap />
    </motion.section>
  );
}

function DateAndLocation() {
  const { location, email } = useInfo();
  return (
    <div className="hidden flex-col space-y-2 text-sm text-stone-600 sm:col-span-1 sm:flex">
      {/* date */}
      <span>
        {new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })}
      </span>

      {/* email */}
      <span>{email}</span>

      {/* location */}
      <span>
        {location.city}, {location.country}
      </span>
    </div>
  );
}

function MainHeader() {
  const { name, role } = useInfo();

  return (
    <div className="col-span-3 py-2 text-center sm:col-span-1">
      {/* name */}
      <h1 className="mb-1 font-title text-5xl md:text-6xl">{name}</h1>
      {/* role */}
      <p className="font-headline text-lg tracking-wider text-stone-700 sm:text-xl">
        {role}
      </p>
    </div>
  );
}

function SiteMap() {
  const { siteMap, projects } = useInfo();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`col-span-3 sm:col-span-1`}
    >
      <span className="mb-2 hidden text-end text-xs text-stone-500 sm:block">
        SiteMap
      </span>
      <motion.ul
        className="flex justify-center gap-4 text-sm sm:flex-col sm:justify-end sm:gap-1 sm:text-end"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {siteMap.map((page, index) => {
          const formattedPage =
            page.charAt(0).toUpperCase() + page.slice(1).toLowerCase();
          return (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              className="overflow-hidden text-end text-stone-600 hover:text-stone-900"
            >
              <Link
                to={page === 'index' ? '/' : `/${page}`}
                className="slideUp transition-colors duration-300"
              >
                <span>
                  {page === 'projects'
                    ? `${formattedPage}[${projects.length}]`
                    : formattedPage}
                </span>
              </Link>
            </motion.li>
          );
        })}
      </motion.ul>
    </motion.div>
  );
}
