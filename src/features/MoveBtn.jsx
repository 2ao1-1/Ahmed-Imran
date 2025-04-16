import { ArrowUpRight, SendHorizonal } from 'lucide-react';
import { Link } from 'react-router-dom';
import BtnEffect from './BtnEffect';
export default function MoveBtn({ to, title, type }) {
  if (type === 'contact')
    return (
      <Link to={to}>
        <button className="group flex items-center gap-3 bg-white transition-colors duration-300">
          {title}
          <span className="relative grid h-[25px] w-[25px] shrink-0 place-items-center overflow-hidden">
            <SendHorizonal className="absolute w-4 -rotate-45 font-thin transition-transform duration-300 ease-in-out group-hover:-translate-y-[150%] group-hover:translate-x-[150%] md:w-6" />

            <SendHorizonal className="absolute w-4 translate-x-[-300%] translate-y-[300%] -rotate-45 font-thin transition-transform delay-100 duration-300 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0 md:w-6" />
          </span>
        </button>
      </Link>
    );

  if (type === 'head')
    return (
      <Link to={to}>
        <span className="text-sm text-secondary hover:text-primary">
          {title} &rarr;
        </span>
      </Link>
    );

  if (type === 'show')
    return (
      <Link to={to}>
        <button className="group flex items-center gap-3 text-xs text-secondary transition-colors duration-300 hover:text-white">
          <BtnEffect title={title} />

          <span className="relative grid h-[25px] w-[25px] shrink-0 place-items-center overflow-hidden">
            <ArrowUpRight className="absolute w-4 font-thin transition-transform duration-300 ease-in-out group-hover:-translate-y-[150%] group-hover:translate-x-[150%] md:w-6" />
            <ArrowUpRight className="absolute w-4 translate-x-[-300%] translate-y-[300%] font-thin transition-transform delay-100 duration-300 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0 md:w-6" />
          </span>
        </button>
      </Link>
    );
}
