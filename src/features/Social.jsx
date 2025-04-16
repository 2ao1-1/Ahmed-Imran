import { Link } from 'react-router-dom';
import { useInfo } from '../context/DataContext';
import SubTitle from './SubTitle';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import BtnEffect from './BtnEffect';

export default function Social({ type }) {
  const { social } = useInfo();
  if (type === 'menu')
    return (
      <div>
        <SubTitle type="menu" title={`Let's connect`} />

        <ul className={`flex items-end gap-1 text-base`}>
          {social.links.map((link, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * i }}
              className="flex text-end"
            >
              <Link
                to={link.link}
                target="_blank"
                className="group transition-colors duration-300"
              >
                <BtnEffect title={link.name} />
              </Link>
              {i < social.links.length - 1 ? ',  ' : '.'}{' '}
            </motion.li>
          ))}
        </ul>
      </div>
    );

  if (type === 'icon')
    return (
      <ul className="flex items-start gap-6 py-6 md:flex-col">
        {social.links.map((social, i) => (
          <motion.li
            key={i}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <Link
              to={social.link}
              className="text-secondary hover:text-primary"
            >
              <BtnEffect title={social.icon} />
            </Link>
          </motion.li>
        ))}
      </ul>
    );
}
