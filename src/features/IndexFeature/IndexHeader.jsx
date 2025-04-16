import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useInfo } from '../../context/DataContext';
import SiteMap from '../SiteMap';

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
      <SiteMap view="page" />
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
