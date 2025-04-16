import { Link } from 'react-router-dom';
import { useInfo } from '../../context/DataContext';
import { useMemo } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { CornerRightUp } from 'lucide-react';
import DemoBtn from './DemoBtn';
import { Hint } from '../Hint';
import SubTitle from '../SubTitle';
import MoveBtn from '../MoveBtn';

export default function LastProject() {
  const { projects } = useInfo();
  const lastProject = useMemo(() => projects.at(-1), [projects]);

  return (
    <motion.div className="md:col-span-8">
      {/* section title */}
      <div className="flex items-center justify-between py-4">
        <SubTitle type="sub" title="Latest Project" />

        <MoveBtn to="/projects" title="View All" type="head" />
      </div>

      {/* project view */}
      <motion.div className="fold-before group relative overflow-hidden border border-stone-100 shadow-sm">
        {/* Quick demo button */}
        <DemoBtn url={lastProject.url} view={'desktop'} />

        {/* project img */}
        <LastProjectImg img={lastProject.img} title={lastProject.title} />

        <LastProjectContent
          title={lastProject.title}
          description={lastProject.description}
          date={lastProject.date}
          skill={lastProject.skill}
          url={lastProject.url}
        />
      </motion.div>

      {/* instruction */}
      <Hint type={'bottom'}>
        Demo button on top right corner
        <CornerRightUp className="h-3 w-3 text-stone-700" />
      </Hint>
    </motion.div>
  );
}

function LastProjectImg({ img, title }) {
  return (
    <motion.div
      initial={{ scale: 0.98 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <img src={img} alt={title} className="w-full" />
    </motion.div>
  );
}

function LastProjectContent({ title, description, date, skill, url }) {
  return (
    <div className="bg-white p-6">
      <div className="flex flex-col space-y-4">
        {/* title */}
        <h3 className="font-headline text-2xl tracking-wider md:text-3xl">
          {title}
        </h3>

        {/* description */}
        <p className="text-stone-600">{description}</p>

        {/* timeframe & skills */}
        <div className="flex flex-wrap items-center justify-between space-y-2 border-t border-stone-100 pt-4 md:space-y-0">
          {/* timeframe */}
          <div>
            <Subhead name={'Timeframe'} />

            <span className="bg-stone-200 px-2 text-sm">{date}</span>
          </div>

          {/* skills */}
          <div>
            <Subhead name={'Skills'} />

            {/* skills bar */}
            <ul className="flex flex-wrap gap-2">
              {skill.map((skill, index) => (
                <li
                  key={index}
                  className="bg-stone-200 px-2 py-1 text-sm text-black"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* mobile demo btn */}
          <DemoBtn url={url} view={'mobile'} />
        </div>
      </div>
    </div>
  );
}

function Subhead({ name }) {
  return (
    <span className="mb-1 block font-headline text-sm tracking-wider text-stone-500">
      {name}
    </span>
  );
}
