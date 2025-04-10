import { ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DemoBtn({ url, view }) {
  if (view === 'desktop')
    return (
      <div className="inset-100 -right-2 top-2 z-[2] hidden md:absolute md:group-hover:block">
        <Link to={url}>
          <button className="m-2 flex rotate-45 flex-col items-center justify-center text-2xl text-stone-900">
            <ArrowUp />
            <span className="text-sm">Veiw Demo</span>
          </button>
        </Link>
      </div>
    );

  if (view === 'mobile')
    return (
      <Link to={url} className="mt-4 w-full md:hidden">
        <button className="slideUp text-semibold float-right inline-block overflow-hidden bg-stone-300 px-3 py-1 text-sm uppercase tracking-wide text-stone-100 transition-colors duration-300 hover:text-white focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
          Veiw Demo
        </button>
      </Link>
    );
}
