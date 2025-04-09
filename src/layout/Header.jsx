import { Link, useLocation } from 'react-router-dom';
import { useInfo } from '../context/DataContext';

export default function Header() {
  const { name, images } = useInfo();
  const location = useLocation();
  //   default path ex:- '/','/about'
  const pathname = location.pathname;

  //   modefied path ex:- 'about'
  const currentPath = pathname.replace('/', '');

  return (
    <header className="container mx-auto flex items-center space-x-2 border-b px-2 py-1">
      <Link to="/">
        <img src={images.logo} alt="logo" className="w-4" />
      </Link>
      <span className="text-sm sm:text-base">
        <Link to="/">{name} </Link>
        {pathname === '/' ? null : (
          <span className="capitalize"> - {currentPath}</span>
        )}
      </span>
    </header>
  );
}
