import { Link } from 'react-router-dom';
import { useInfo } from '../context/DataContext';
import SubTitle from './SubTitle';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import BtnEffect from './BtnEffect';

export default function SiteMap({ view }) {
  const { projects, siteMap } = useInfo();
  const parent = { menu: '', page: `col-span-3 sm:col-span-1` };

  const styles = {
    menu: `flex items-end gap-1 text-base`,
    page: 'flex justify-center items-end gap-4 text-sm sm:flex-col sm:justify-end sm:gap-1 sm:text-end',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={parent[view]}
    >
      {view === 'menu' && <SubTitle type={view} title="SiteMap" />}
      <motion.ul
        className={styles[view]}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {siteMap.map((page, i) => {
          const formattedPage =
            page.charAt(0).toUpperCase() + page.slice(1).toLowerCase();
          return (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * i }}
              className="flex text-end"
            >
              <Link to={page === 'index' ? '/' : `/${page}`}>
                <BtnEffect
                  title={
                    page === 'projects'
                      ? `${formattedPage}[${projects.length}]`
                      : formattedPage
                  }
                />
              </Link>
              {i < siteMap.length - 1 ? ',  ' : '.'}
            </motion.li>
          );
        })}
      </motion.ul>
    </motion.div>
  );
}
