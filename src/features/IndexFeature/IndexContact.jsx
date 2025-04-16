// import { useInfo } from '../../context/DataContext';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { ArrowUpRight, MessageCircle, Send, SendHorizonal } from 'lucide-react';
import Social from '../Social';
import MoveBtn from '../MoveBtn';

export default function IndexContact() {
  //   const { email, social } = useInfo();
  // const { social } = useInfo();

  return (
    <div className="relative grid gap-8 md:grid-cols-8">
      <motion.div className="z-10 flex flex-col justify-between md:col-span-3">
        {/* header */}
        <h2 className="font-serif mb-4 text-2xl md:text-3xl">Get In Touch</h2>

        {/* social links */}
        <Social type="icon" />
      </motion.div>

      <motion.div className="z-10 md:col-span-5">
        <p className="mb-8 text-2xl font-light leading-tight md:text-4xl lg:text-5xl">
          If you believe I would be a good fit for your project — I'm excited to
          bring your vision to life.
        </p>

        <MoveBtn to="/contact" title={`Let's Talk`} type="contact" />
      </motion.div>
    </div>
  );
}
