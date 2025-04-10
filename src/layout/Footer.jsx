import { useInfo } from '../context/DataContext';

export function Footer() {
  const { name } = useInfo();
  return (
    <footer className="flex cursor-default items-center justify-start border-t py-2 text-xs">
      &copy; {name}™, {new Date().getFullYear()}
    </footer>
  );
}
