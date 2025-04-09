import { Link } from 'react-router-dom';
import { useInfo } from '../context/DataContext';
import { useMemo } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUp,
  CornerRightUp,
  MessageCircle,
  Send,
  MoveRight,
  SendHorizonal,
} from 'lucide-react';

export default function Index() {
  const {
    name,
    images,
    bio,
    role,
    location,
    email,
    siteMap,
    projects,
    social,
  } = useInfo();
  const lastProject = useMemo(() => projects.at(-1), [projects]);

  return (
    <motion.div
      className="container mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.section
        className="grid items-center gap-4 border-b border-stone-200 px-4 py-6 sm:grid-cols-3"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="hidden flex-col space-y-2 text-sm text-stone-600 sm:col-span-1 sm:flex">
          <span>
            {new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </span>
          <span>{email}</span>
          <span>
            {location.city}, {location.country}
          </span>
        </div>

        <div className="col-span-3 py-2 text-center sm:col-span-1">
          <h1 className="font-title mb-1 text-5xl md:text-6xl">{name}</h1>
          <p className="font-headline text-lg tracking-wider text-stone-700 sm:text-xl">
            {role}
          </p>
        </div>

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
                  <a
                    href={page === 'index' ? '/' : `/${page}`}
                    className="slideUp transition-colors duration-300"
                  >
                    <span>
                      {page === 'projects'
                        ? `${formattedPage}[${projects.length}]`
                        : formattedPage}
                    </span>
                  </a>
                </motion.li>
              );
            })}
          </motion.ul>
        </motion.div>
      </motion.section>

      <motion.section
        className="grid grid-cols-1 gap-6 divide-y px-4 py-8 md:grid-cols-12 md:divide-x md:divide-y-0"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div className="md:col-span-8">
          <h2 className="font-headline mb-6 text-2xl text-stone-800">
            Latest Project
          </h2>

          <motion.div className="fold-before group relative overflow-hidden border border-stone-100 shadow-sm">
            {/* Quick demo button */}
            <div className="inset-100 -right-2 top-2 z-[2] hidden md:absolute md:group-hover:block">
              <Link to={lastProject.url}>
                <button className="m-2 flex rotate-45 flex-col items-center justify-center text-2xl text-stone-900">
                  <ArrowUp />
                  <span className="text-sm">Show Demo</span>
                </button>
              </Link>
            </div>

            <motion.div
              initial={{ scale: 0.98 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={lastProject.img}
                alt={lastProject.title}
                className="w-full"
              />
            </motion.div>

            <div className="bg-white p-6">
              <div className="flex flex-col space-y-4">
                <h3 className="font-headline text-2xl tracking-wider md:text-3xl">
                  {lastProject.title}
                </h3>

                <p className="text-stone-600">{lastProject.description}</p>

                <div className="flex flex-wrap items-center justify-between border-t border-stone-100 pt-4">
                  <div className="mb-4 md:mb-0">
                    <span className="font-headline mb-1 block text-sm tracking-wider text-stone-500">
                      Timeframe
                    </span>
                    <span className="bg-stone-200 px-2 text-sm">
                      {lastProject.date}
                    </span>
                  </div>

                  <div>
                    <span className="font-headline mb-2 block text-sm tracking-wider text-stone-500">
                      Skills
                    </span>
                    <ul className="flex flex-wrap gap-2">
                      {lastProject.skill.map((skill, index) => (
                        <li
                          key={index}
                          className="bg-stone-200 px-2 py-1 text-sm text-black"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link to={lastProject.url} className="mt-4 w-full md:hidden">
                    <button className="slideUp text-semibold float-right inline-block overflow-hidden bg-stone-300 px-3 py-1 text-sm uppercase tracking-wide text-stone-100 transition-colors duration-300 hover:text-white focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                      Veiw Demo
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="mt-4 flex hidden justify-end md:block">
            <span className="float-right flex items-center gap-1 text-xs text-stone-700">
              Demo button on top right corner
              <CornerRightUp className="h-3 w-3 text-stone-700" />
            </span>
          </div>
        </motion.div>

        <motion.div
          className="space-y-6 pl-4 pt-6 md:col-span-4 md:pt-0"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-headline mb-4 text-2xl text-stone-800">
            Turning Ideas Into Interactive Interfaces.
          </h2>

          <div className="prose prose-stone prose-sm space-y-2">
            <p className="leading-relaxed text-stone-600">{bio[0]}</p>
            <p className="leading-relaxed text-stone-600">{bio[1]}</p>
          </div>

          <div className="mt-6">
            <img
              src={images.myImg}
              alt={name}
              className="mx-auto w-2/3 max-w-xs bg-stone-50 p-2 shadow-sm md:ml-auto md:mr-0"
            />
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        className="relative col-span-8 w-full overflow-hidden border-t py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="relative grid gap-8 md:grid-cols-8">
          <motion.div className="z-10 flex flex-col justify-between md:col-span-3">
            <h2 className="font-serif mb-4 text-2xl md:text-3xl">
              Get In Touch
            </h2>

            <ul className="flex gap-6 py-6">
              {social.links.map((social, i) =>
                social.name === 'Resume' ? null : (
                  <motion.li
                    key={i}
                    whileHover={{ y: -5 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <Link
                      to={social.link}
                      className="text-stone-700 hover:text-stone-900"
                    >
                      {social.icon}
                    </Link>
                  </motion.li>
                ),
              )}
            </ul>

            <div className="mt-8 hidden space-y-4 text-stone-600 md:block">
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ x: 5 }}
              >
                <MessageCircle className="h-4 w-4" />
                <Link
                  to={social.contacts[0].link}
                  className="border-b border-transparent transition-all hover:border-stone-400"
                >
                  Available for new projects
                </Link>
              </motion.div>
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ x: 5 }}
              >
                <Send className="h-4 w-4" />
                <Link
                  to={social.contacts[1].link}
                  className="border-b border-transparent transition-all hover:border-stone-400"
                >
                  {email}
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div className="z-10 md:col-span-5">
            <p className="mb-8 text-2xl font-light leading-tight md:text-4xl lg:text-5xl">
              If you believe I would be a good fit for your project — I'm
              excited to bring your vision to life.
            </p>

            <Link to="/contact">
              <motion.div className={`group flex w-fit items-center gap-4`}>
                <span>Let's Talk</span>
                <motion.button className="rounded-full p-2 text-base duration-150 group-hover:-rotate-[35deg] group-hover:border">
                  <SendHorizonal />
                </motion.button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
}
