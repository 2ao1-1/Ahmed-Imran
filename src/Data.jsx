import {
  File,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
} from 'lucide-react';

export const Data = {
  name: 'Ahmed Omran',
  role: 'Frontend Developer',
  birthYear: '2001',
  phone: '+20 1030960225',
  email: 'Omran.a.jr@gmail.com',
  images: {
    logo: 'images/favicon.png',
    myImg: './images/My__img.jpg',
    myImgTop: './images/My__img_top.jpg',
    storyImg: './images/sroty1.jpg',
  },
  location: { city: 'Cairo', country: 'Egypt' },
  status: 'available for Freelance Projects',
  siteMap: ['index', 'about', 'projects', 'contact'],
  education: {
    uni: 'Faculty of Commerce, Sadat University',
    field: 'Bachelor’s Degree in Business Administration',
    courses: [
      'The Ultimate React Course 2024: React, Next.js, Redux & More (Udemy)',
      'The Complete JavaScript Course 2024: From Zero to Expert! (Udemy)',
    ],
  },
  skills: [
    {
      link: '#core-technologies',
      text: 'Core Technologies',
      details: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      link: '#css-frameworks',
      text: 'CSS Frameworks',
      details: ['Tailwind CSS', 'Bootstrap 5', 'SASS/SCSS', 'LESS'],
    },
    {
      link: '#framework',
      text: 'Frameworks',
      details: ['React', 'Redux', 'React Router', 'React Query'],
    },
    {
      link: '#api-integration',
      text: 'API Integration',
      details: ['REST APIs', 'Axios', 'Fetch API', 'JWT Authentication'],
    },
    {
      link: '#web-technologies',
      text: 'Web Technologies',
      details: ['Responsive Design', 'CSS Grid', 'Flexbox', 'SEO Optimization'],
    },
    {
      link: '#development-tools',
      text: 'Development Tools',
      details: ['Git', 'GitHub', 'VS Code'],
    },
  ],
  social: {
    links: [
      {
        name: 'Resume',
        icon: <File width="16px" height="16px" />,
        link: '../AhmedOmran_FrontendDeveloper_CV.pdf',
      },
      {
        name: 'Github',
        icon: <Github width="16px" height="16px" />,
        link: 'https://github.com/2ao1-1',
      },
      {
        name: 'Linkedin',
        icon: <Linkedin width="16px" height="16px" />,
        link: 'https://www.linkedin.com/in/ahmed-omran-2ao1/',
      },
      {
        name: 'Instagram',
        icon: <Instagram width="16px" height="16px" />,
        link: 'https://www.instagram.com/10.7.2ao1/',
      },
    ],
    contacts: [
      {
        name: 'Whatsapp',
        icon: <MessageCircle width="16px" height="16px" />,
        link: 'https://wa.me/201030960225',
      },
      {
        name: 'Email',
        icon: <Mail width="16px" height="16px" />,
        link: 'mailto:omran.a.jr@gmail.com',
      },
    ],
  },
  bio: [
    `Hey, I’m Ahmed Omran. What started as a love for design and how things move on a screen quickly turned into a passion for building seamless, interactive digital experiences. I blend design with code to create interfaces that are intuitive, functional, and smooth.

    If you’re into thoughtful, engaging designs that make tech feel magical, you're in the right place.`,
  ],
  story: [
    'In a world filled with empty spaces and colors, there was a person named Ahmed Omran. At first, he had no idea that those sparks he saw in web designs would lead him to a deep love for both coding and design. He was drawn to shapes and colors, fascinated by how things moved across the screen. Little did he know, this simple curiosity would guide him into a world of codes and designs that not only looked beautiful but worked seamlessly as well.',
    `Over time, Ahmed discovered the magic of blending design with code. It wasn't just about making things look good—it was about making them feel right. He wanted to build websites that were not only visually appealing but also smart and responsive in ways that would leave users saying, "Wow, that’s smooth!" And that’s when his passion for creating digital experiences truly took flight.`,
    'Ahmed became someone who balanced curiosity with logic, turning creative ideas into functional realities. He wasn’t just designing websites anymore—he was crafting interactive experiences, spaces where users could feel at ease and engaged. He began to see himself as a digital artist, creating flexible, fluid, and seamless experiences that make technology feel almost like magic.',
    'Now, he’s here, turning every idea into code and every design into a living, breathing experience. If you’re looking for interfaces that don’t just sit still but move, react, and come alive in the best possible way… then welcome. You’re in the right place.',
  ],
  projects: [
    {
      title: 'Crusto',
      date: '9 / 2024',
      img: '/images/project6-crusto.jpg',
      bio: `An Italian restaurant on Egyptian lands
         with a taste of history`,
      url: 'https://crusto-resturant.netlify.app/',
      repo: 'https://github.com/2ao1-1/Crusto',
      special: 'Food Website',
      type: ['Static Website', 'UI/UX', 'Responsive Design'],
      description:
        'Crusto is a modern static restaurant website that serves up a digital slice of Italy right in the heart of Egypt. With a dark, elegant aesthetic and stylish serif typography, it captures the cozy sophistication of an Italian dining experience. Designed as a single-scroll experience, the site highlights the menu, services, and brand story with a sleek layout that keeps visitors engaged from first glance to final CTA.',
      skill: ['Html', 'Css', 'JavaScript', 'Tailwind'],
      features: [
        'Hero section with full-width imagery and compelling call-to-action.',
        'Smooth scroll-triggered animations (text fade-ins, transitions).',
        'Fully responsive across all devices and screen sizes.',
        'Clear structure: About, Menu, Testimonials, Contact.',
        'Balanced typography using modern serif/sans-serif mix.',
        'Hover effects and transitions for interactive feedback',
      ],
    },
    {
      title: 'Banki',
      date: '10 / 2024',
      img: '/images/project2-banki.jpg',
      bio: 'A fitness website promoting healthy living.',
      url: 'https://banky.netlify.app/',
      repo: 'https://github.com/2ao1-1/Banki',
      special: 'Financial Website',
      type: ['Landing Page', 'UI/UX', 'Financial Services'],

      description:
        'Banki is a clean and professional landing page tailored for a fictional bank or financial platform. It uses a calm, trustworthy color palette and minimalist layout to convey financial security and user trust. The sections are crafted to guide the user through service highlights, benefits, and key offerings.',
      skill: ['Html', 'Css', 'JavaScript'],
      features: [
        'Clean grid-based layout for easy scanning.',
        'Sticky navigation bar for quick access.',
        'Hero section with key messaging and CTA',
        'Responsive design with mobile adjustments',
        'Service cards with iconography',
        'Testimonials and trust indicators',
      ],
    },
    {
      title: 'MoveOn',
      date: '11 / 2024',
      img: '/images/project3-moveon.jpg',
      bio: 'An active lifestyle with fitness training.',
      url: 'https://moveon-fitness.netlify.app/',
      repo: 'https://github.com/2ao1-1/MoveOn',
      special: 'fitness website',
      type: ['Static Website', 'Fitness UI Design', 'Responsive Design'],
      description:
        'MoveOn is a visually striking fitness website designed to promote a healthy lifestyle and gym membership programs. It uses powerful imagery, bold typography, and bright colors to reflect energy and action. Each section focuses on benefits, testimonials, and motivational content.',
      skill: ['Html', 'Css', 'JavaScript', 'Tailwind'],
      features: [
        'Fullscreen hero section with motivational slogan',
        'Bold color palette suitable for fitness branding',
        'About & Services sections with visual icons',
        'Testimonials and pricing plans',
        'Contact form with functional structure',
        'Fully mobile-friendly with flex/grid layout',
      ],
    },
    {
      title: 'AO (Portfolio)',
      date: '12 / 2024',
      img: '/images/project1-Portfolio.jpg',
      bio: 'Personal portfolio website showcasing frontend development skills and projects',
      url: 'https://2ao1.netlify.app/',
      repo: 'https://github.com/2ao1-1/AO',
      type: [
        'Personal Portfolio',
        'Interactive UI',
        'Animation & Motion Design',
      ],
      special: 'portfolio',
      description:
        'AO is a fully responsive and animated portfolio website showcasing frontend development projects. Built using React, Framer Motion, and modern design patterns, it reflects professional branding and developer personality. Visitors can explore detailed projects, filter categories, and experience smooth transitions throughout the site.',
      skill: ['React', 'Tailwind', 'Framer Motion'],
      features: [
        'Animated page transitions with Framer Motion',
        'Project filtering by category',
        'Dark/light theme contrast',
        'Highlighted tech stack in each project card',
        'Scroll-based animations and hover effects',
        'Responsive navigation and internal routing',
      ],
    },
    {
      title: 'Bsaraha',
      date: '2 / 2025',
      img: '/images/project7-bsaraha.jpg',
      phone: '/images/project7-bsaraha-phone.jpg',
      bio: 'Personal portfolio website showcasing frontend development skills and projects',
      url: 'http://144.91.75.57:3000',
      repo: 'https://github.com/2ao1-1/bsaraha',
      special: 'social website',
      type: [
        'Full Stack App',
        'Messaging Platform',
        'Authentication & Real-time Data',
      ],
      description:
        'Bsaraha is a full-stack anonymous messaging platform inspired by “Saraha”. Built using React for the frontend and Node/Express for the backend, users can create accounts, receive and send messages, and manage their inbox securely. The app implements JWT authentication, auto-login.',
      skill: ['React', 'Tailwind', 'Framer Motion'],
      features: [
        'JWT-based authentication system',
        'Anonymous message submission interface',
        'Real-time updates (messages appear directly)',
        'User-friendly dashboard for received messages',
        'Doctor approval workflow with email notification',
        'Mobile-responsive design',
      ],
    },
    {
      title: 'Crusto Pizza',
      date: '4 / 2025',
      img: '/images/project6-crusto.jpg',
      bio: `An Italian pizza restaurant`,
      url: 'https://crusto-pizza.netlify.app/',
      repo: 'https://github.com/2ao1-1/Crusto-v2',
      special: 'food website',
      type: ['UI Redesign', 'Mobile-First Responsive', 'Modern Web Design'],
      description:
        'Crusto Pizza is an upgraded version of the original Crusto site with an emphasis on mobile usability, cleaner design, and more expressive visual hierarchy. The layout is simplified with clear sections and modern spacing, making it more accessible on smaller devices while keeping the branding intact.',
      skill: ['Html', 'Css', 'JavaScript', 'Tailwind'],
      features: [
        'Improved responsive layout with mobile-first design',
        'Simple, readable fonts and color contrast',
        'Clear CTA and menu presentation',
        'Lightweight animations and hover states',
        'Structured content flow (hero → services → menu → contact)',
      ],
    },
  ],

  experiance: [
    {
      name: 'AO',
      logo: './images/sroty1.jpg',
      role: 'Front-End developer Intern',
      timeZone: 'Two Year [2]',
      years: '2024-2025',
      opinion: `The company provides a supportive work environment for
                  interns, allowing me to develop my Front-End skills and work
                  with the latest technologies. The team is collaborative and
                  helps enhance my practical experience through real-world
                  projects and continuous guidance.`,
    },
  ],
};
