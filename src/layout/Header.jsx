import { Link, useLocation } from 'react-router-dom';
import { useInfo } from '../context/DataContext';
// // eslint-disable-next-line no-unused-vars
// import { motion } from 'framer-motion';
import Menu from './Menu';
import BtnEffect from '../features/BtnEffect';

export default function Header() {
  const { siteMap, projects, name, images } = useInfo();

  const location = useLocation();
  //   default path ex:- '/','/about'
  const pathname = location.pathname;
  //   modefied path ex:- 'about'
  const currentPath = pathname.replace('/', '');

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b bg-white px-4 py-1">
      <div className="flex items-center space-x-4">
        <Link to="/">
          <img src={images.logo} alt="logo" className="w-3 md:w-4" />
        </Link>
        <span className="font-headline text-sm font-thin md:text-base">
          <Link to="/">{name} </Link>
          {pathname === '/' ? null : (
            <span className="capitalize"> - {currentPath}</span>
          )}
        </span>
      </div>

      {pathname === '/' ? (
        ''
      ) : (
        <>
          <Menu />
          <ul className="hidden justify-center gap-4 text-sm sm:flex">
            {siteMap.map((page, index) => {
              const formattedPage =
                page.charAt(0).toUpperCase() + page.slice(1).toLowerCase();
              return (
                <li
                  key={index}
                  className="overflow-hidden text-end text-stone-600 hover:text-stone-900"
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
                </li>
              );
            })}
          </ul>
        </>
      )}
    </header>
  );
}
