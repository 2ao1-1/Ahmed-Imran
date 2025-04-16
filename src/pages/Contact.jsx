import { Mail, MessageCircle } from 'lucide-react';
import { useContact } from '../hooks/useContact';
// import { useInfo } from '../context/DataContext';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Social from '../features/Social';

export default function Contact() {
  const { renderDynamicInput, sendEmail, sendWhatsApp } = useContact();
  // const { social } = useInfo();

  return (
    <main className="grid h-screen items-center justify-center px-4 py-10 text-primary">
      <div className="mb-8">
        <h2 className="mb-4 font-headline text-3xl md:text-6xl">
          Let's Work Together
        </h2>

        <Social type={'icon'} row />
      </div>
      <div className="grid items-center justify-center">
        <p className="text-md mx-auto w-2/3 bg-tertiory p-10 leading-6 md:text-xl md:leading-8">
          Hey Ahmed, my name is
          {renderDynamicInput('name', '[your first name]')}. I would like to
          start a new project with you. I'm looking for
          {renderDynamicInput('service', '[type a service]')}. The timing for
          this project is {renderDynamicInput('timeframe', '[timeframe]')}. The
          budget is {renderDynamicInput('budget', '[your budget]')}$. You can
          reach me via email at {renderDynamicInput('email', '[your email]')}.
        </p>

        <div className="mx-auto grid max-w-md grid-cols-2 gap-4 py-8">
          <button
            type="button"
            onClick={sendWhatsApp}
            className="slideUp flex items-center justify-center gap-2 border px-2 py-1 text-sm md:px-4 md:py-2 md:text-base"
          >
            <MessageCircle className="w-4 md:w-8" />
            WhatsApp
          </button>

          <button
            type="button"
            onClick={sendEmail}
            className="slideUp flex items-center justify-center gap-2 border px-2 py-1 text-sm md:px-4 md:py-2 md:text-base"
          >
            <Mail className="w-4 md:w-8" />
            Mail
          </button>
        </div>
      </div>
    </main>
  );
}
