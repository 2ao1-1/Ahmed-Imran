import { useState } from 'react';
import { useInfo } from '../../context/DataContext';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Hint } from '../Hint';

export default function Skills() {
  // Get data from context
  const { education, skills } = useInfo();

  // State for skills accordion
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="gap-8 border-b py-8 md:grid md:grid-cols-8">
      <div className="mb-4 flex items-center justify-between md:col-span-8">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="font-headline text-3xl font-bold underline md:text-4xl"
        >
          Skills
        </motion.h2>
        <Hint type={'top'}>click to show skills</Hint>
      </div>

      {/* Skills Accordion */}
      {/* mobile */}
      <div className="col-span-5 mt-8 flex flex-col border-t md:hidden">
        {skills.map((skill, i) => (
          <div
            key={i}
            className={`relative flex cursor-pointer flex-col overflow-hidden border-b transition-all duration-500 ease-in-out`}
            style={{ height: activeIndex === i ? '200px' : '60px' }}
            onClick={() => setActiveIndex(i)}
          >
            {/* Title for collapsed state */}
            <div
              className={`absolute inset-0 flex items-center px-6 transition-opacity duration-500 ${
                activeIndex === i ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <h3 className="text-base font-bold tracking-wider md:text-2xl">
                {skill.text}
              </h3>
            </div>

            {/* Content for expanded state */}
            <div
              className={`absolute inset-0 flex flex-col p-6 transition-opacity duration-500 ${
                activeIndex === i ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <h3 className="mb-2 text-base font-bold md:text-3xl">
                {skill.text}
              </h3>
              <div className="overflow-y-auto">
                <ul className="space-y-2">
                  {skill.details.map((detail, i) => (
                    <li
                      key={i}
                      className="flex items-center text-sm md:text-base"
                    >
                      <span>- {detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* desktop */}
      <div className="col-span-5 hidden h-72 overflow-hidden border-r md:flex">
        {' '}
        {skills.map((skill, i) => (
          <div
            key={i}
            className={`relative flex cursor-pointer flex-col justify-between overflow-hidden border-l transition-all duration-500 ease-in-out ${i === skills.length - 1 ? 'mr-0' : 'mr-2'}`}
            style={{ flex: activeIndex === i ? '5' : '1' }}
            onClick={() => setActiveIndex(i)}
          >
            {' '}
            {/* Vertical title for collapsed state */}{' '}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${activeIndex === i ? 'opacity-0' : 'opacity-100'} rotate-180`}
              style={{ writingMode: 'vertical-rl' }}
            >
              {' '}
              <h3 className="text-base font-bold tracking-wider md:text-2xl">
                {' '}
                {skill.text}{' '}
              </h3>{' '}
            </div>
            {/* Content for expanded state */}
            <div
              className={`absolute inset-0 flex flex-col p-6 transition-opacity duration-500 ${
                activeIndex === i ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="">
                <h3 className="mb-2 text-base font-bold md:text-3xl">
                  {skill.text}
                </h3>

                <ul className="space-y-2">
                  {skill.details.map((detail, i) => (
                    <li
                      key={i}
                      className="flex items-center text-xs md:text-base"
                    >
                      <span>- {detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Education and Courses Sidebar */}
      <div className="grid items-center py-12 md:col-span-3 md:ml-8 md:border-l md:py-0 md:pl-8">
        {/* Education Section */}
        <div className="border-b pb-4">
          <span className="text-md mb-4 font-headline tracking-wider underline md:text-2xl">
            Education
          </span>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <i className="">{education.field}</i>,<br />{' '}
            <i className="">{education.uni}</i>
          </motion.p>
        </div>

        {/* Courses Section */}
        <div className="border-b pb-4">
          <span className="text-md mb-4 font-headline tracking-wider underline md:text-2xl">
            Courses
          </span>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            {education.courses.map((course, i) => (
              <p key={i}>
                <i>{course}.</i>
              </p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
