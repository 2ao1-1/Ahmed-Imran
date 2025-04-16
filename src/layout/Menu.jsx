import { useState } from 'react';
import { Link } from 'react-router';

import { useInfo } from '../context/DataContext';

// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { EqualIcon, X } from 'lucide-react';

import CloseBtn from '../features/CloseBtn';
import SubTitle from '../features/SubTitle';
import SiteMap from '../features/SiteMap';
import Social from '../features/Social';
import BtnEffect from '../features/BtnEffect';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <OpenBtn onClick={() => setIsOpen(!isOpen)} />

      {isOpen && (
        <motion.section
          className="absolute left-0 top-0 z-50 h-screen w-full bg-tertiory p-4 uppercase md:p-10"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <CloseBtn onClick={() => setIsOpen(false)} />

          <MenuContent />
        </motion.section>
      )}
    </>
  );
}

function OpenBtn({ onClick }) {
  return (
    <button onClick={onClick} className="relative z-40 sm:hidden">
      <EqualIcon />
    </button>
  );
}

function MenuContent() {
  return (
    <div className="grid gap-4 space-y-8 py-16">
      {/* NameRole:- name - role - birthyear */}
      <OwnerInfo />

      {/* status:- are person available now or not */}
      <OwnerStatus />

      {/* sitemap:- portfolio pages */}
      <SiteMap view="menu" />

      <Social type="menu" />
    </div>
  );
}

function OwnerInfo() {
  const { name, birthYear, role } = useInfo();
  return (
    <div>
      <SubTitle type="menu" title={'Name'} />

      <p className="text-base text-primary">
        <Link to={'/'} className="">
          <BtnEffect title={name} />
        </Link>
        __@
        <BtnEffect title={birthYear} />,<br /> <BtnEffect title={role} /> .
      </p>
    </div>
  );
}

function OwnerStatus() {
  const { status } = useInfo();
  return (
    <div>
      <SubTitle type="menu" title={'Status'} />
      <p className="text-base">
        Currently <br />
        <BtnEffect title={status} />
      </p>
    </div>
  );
}
