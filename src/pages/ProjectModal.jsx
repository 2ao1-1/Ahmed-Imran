// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import CloseBtn from '../features/CloseBtn';
import SubTitle from '../features/SubTitle';
import { useInfo } from '../context/DataContext';
import { AppWindowMacIcon, Code } from 'lucide-react';
import BtnEffect from '../features/BtnEffect';

export default function ProjectModal() {
  const navigate = useNavigate();

  const param = useParams();
  const { projects } = useInfo();
  const project = projects.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, '-') === param.projectName,
  );

  const handleClose = () => {
    navigate(-1);
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="relative mx-8 h-[90dvh] w-full overflow-y-scroll bg-white shadow-lg"
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ duration: 0.4 }}
      >
        <div className="">
          {/* header */}
          <div className="relative flex items-center justify-between space-x-8 border-b border-secondary px-8 py-4">
            <div>
              <SubTitle title="Project Name" type="menu" />

              <h4 className="font-headline text-4xl font-bold tracking-wide">
                {project.title}
              </h4>
            </div>
            <div>
              <SubTitle title="Spicialty" type="menu" />

              <p className="font-headline text-xl tracking-wide">
                {project.special}
              </p>
            </div>
            <div>
              <SubTitle title="Type" type="menu" />
              <ul className="flex gap-1 font-headline text-xl tracking-wide">
                {project.type.map((type, i) => (
                  <li key={i}>
                    {type}
                    {i < project.type.length - 1 ? ', ' : '.'}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SubTitle title="Date" type="menu" />

              <p className="font-headline text-xl tracking-wide">
                {project.date}
              </p>
            </div>
            <div className="px-8">
              <CloseBtn onClick={handleClose} />
            </div>
          </div>

          {/* content */}
          <div className="flex flex-wrap p-8">
            <div className="md:w-1/2">
              <div className="relative flex w-2/3 flex-col items-center gap-4">
                <div>
                  <p className="font-serif text-base tracking-wide">
                    {project.description}
                  </p>
                </div>
                <ul>
                  <SubTitle title="Features" type="menu" />
                  {project.features.map((item, i) => (
                    <li>
                      {i + 1}. {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src={project.img}
                alt={project.title}
                className="w-full"
              ></img>
            </div>
            <div className="relative bottom-0 flex w-full items-center justify-between pt-8">
              <div className="relative md:w-1/2">
                {/* <SubTitle title="Skills" type="menu" /> */}
                <ul className="flex flex-wrap space-x-2">
                  {project.skill.map((item, i) => (
                    <span
                      key={i}
                      className="border px-4 py-1 font-headline text-sm text-primary"
                    >
                      {item}
                    </span>
                  ))}
                </ul>
              </div>

              <div className="flex gap-8 font-headline md:w-1/2">
                <Link to={project.url} target="_blank">
                  <BtnEffect title={'Live'} />
                </Link>

                <Link to={project.repo} target="_blank">
                  <BtnEffect title={'Code'} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
