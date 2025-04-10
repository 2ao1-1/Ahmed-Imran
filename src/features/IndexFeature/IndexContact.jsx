import { useInfo } from '../../context/DataContext';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { MessageCircle, Send, SendHorizonal } from 'lucide-react';

export default function IndexContact() {
  //   const { email, social } = useInfo();
  const { social } = useInfo();

  return (
    <div className="relative grid gap-8 md:grid-cols-8">
      <motion.div className="z-10 flex flex-col justify-between md:col-span-3">
        {/* header */}
        <h2 className="font-serif mb-4 text-2xl md:text-3xl">Get In Touch</h2>

        {/* social links */}
        <SocialLinks links={social.links} />
      </motion.div>

      <motion.div className="z-10 md:col-span-5">
        <p className="mb-8 text-2xl font-light leading-tight md:text-4xl lg:text-5xl">
          If you believe I would be a good fit for your project — I'm excited to
          bring your vision to life.
        </p>

        <Btn to={'/contact'} title={`Let's Talk`} />
      </motion.div>
    </div>
  );
}

function SocialLinks({ links }) {
  return (
    <ul className="flex items-start gap-6 py-6 md:flex-col">
      {links.map((social, i) => (
        <motion.li
          key={i}
          whileHover={{ x: 5 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <Link
            to={social.link}
            className="text-stone-700 hover:text-stone-900"
          >
            {social.icon}
          </Link>
        </motion.li>
      ))}
    </ul>
  );
}

function Btn({ to, title }) {
  return (
    <Link to={to}>
      <motion.div className={`group flex w-fit items-center gap-4`}>
        <span>{title}</span>
        <motion.button className="rounded-full p-2 text-base duration-150 group-hover:-rotate-[35deg] group-hover:border">
          <SendHorizonal />
        </motion.button>
      </motion.div>
    </Link>
  );
}
