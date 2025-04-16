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
    `I build fast, responsive, and visually striking websites using modern tools like React, Tailwind CSS, and Next.js.`,
    `With a strong foundation in HTML, CSS, and JavaScript, I craft seamless UIs using React and Tailwind. I'm experienced with Redux, React Query, and Context API for state management, and I integrate REST APIs using Axios and Fetch. I understand JWT authentication and Git-based workflows. I'm also comfortable adding motion and polish with Framer Motion, Photoshop, and Illustrator.`,
  ],
  story: [
    "Hi it's me, My name is Ahmed Omran, and this is the story of my journey. A journey that began with a simple love for art and curiosity for technology, and grew into a mission to craft impactful designs where creativity meets purpose. Let me take you through it.",
    "Growing up in Egypt, I was always drawn to creative pursuits. From a young age, I found joy in sketching on paper and later experimenting with wall art, which became my first canvas for visual expression. These early experiences laid the foundation for my understanding of visual composition and design principles. Art wasn't just a hobby - it was my first language of expression, teaching me that creativity knows no bounds.",
    "My fascination with technology began during my school years. While I was intrigued by hacking and computers, it wasn't until high school that I discovered my true calling. A friend introduced me to programming, opening up a whole new world of possibilities. Discovering that front-end development was the perfect blend of my artistic inclinations and technical interests. It was like finding the missing piece of a puzzle I didn't know I was solving. Despite facing academic challenges that prevented me from pursuing a traditional university education, my passion for technology never wavered. I took control of my learning journey, teaching myself the foundations of web development. Each new technology I learned felt like adding another color to my palette, enabling me to create more vibrant and dynamic web experiences.",
    "Today, I combine my artistic background with technical skills to create intuitive, user-centered web solutions. My journey has taught me that limitations are often just opportunities in disguise. I'm actively seeking opportunities to collaborate on projects where I can contribute my unique perspective and continue growing as a developer. Each project is a new canvas, and every line of code is a brushstroke in creating something meaningful.",
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
      special: 'food website',
      type: ['UI', 'Development'],
      description:
        "A modern and visually appealing website designed to showcase the restaurant's menu and services. The site provides visitors with an interactive and seamless browsing experience, reflecting the restaurant's unique identity.",
      skill: ['Html', 'Css', 'JavaScript', 'Tailwind'],
      features: [
        "Modern and attractive design that aligns with the restaurant's brand.",
        'Simple and intuitive user interface.',
        'Fully responsive layout for various screen sizes.',
      ],
    },
    {
      title: 'Banki',
      date: '10 / 2024',
      img: '/images/project2-banki.jpg',
      bio: 'A fitness website promoting healthy living.',
      url: 'https://banky.netlify.app/',
      repo: 'https://github.com/2ao1-1/Banki',
      special: 'financial website',
      type: ['Development'],

      description:
        'Banky is a sleek and professional website designed to showcase the services and features of a modern banking institution. It aims to deliver an intuitive user experience, emphasizing trust, reliability, and simplicity for potential customers.',
      skill: ['Html', 'Css', 'JavaScript'],
      features: [
        'Clean, modern, and professional design tailored to a banking institution.',
        'Intuitive navigation for seamless exploration of banking services.',
        'Fully responsive layout adaptable to various screen sizes.',
      ],
    },
    {
      highlight: true,
      title: 'MoveOn',
      date: '11 / 2024',
      img: '/images/project3-moveon.jpg',
      bio: 'An active lifestyle with fitness training.',
      url: 'https://moveon-fitness.netlify.app/',
      repo: 'https://github.com/2ao1-1/MoveOn',
      special: 'fitness website',
      type: ['Development'],
      description:
        'MoveOn Fitness combines dynamic visuals and structured content to inspire and guide users on their fitness journey. The website focuses on delivering a seamless and motivational user experience, catering to fitness enthusiasts and beginners alike.',
      skill: ['Html', 'Css', 'JavaScript', 'Tailwind'],
      features: [
        'Vibrant visuals and layouts to inspire users.',
        'Simplified access to fitness programs and wellness tips.',
        'Ensures a consistent user experience across various devices.',
      ],
    },
    {
      highlight: true,
      title: 'AO',
      date: '12 / 2024',
      img: '/images/project1-Portfolio.jpg',
      bio: 'Personal portfolio website showcasing frontend development skills and projects',
      url: 'https://2ao1.netlify.app/',
      repo: 'https://github.com/2ao1-1/AO',
      type: ['UI', 'Development'],
      special: 'portfolio',
      description:
        'A modern, responsive personal portfolio demonstrating web development expertise through interactive design and professional project showcase',
      skill: ['React', 'Tailwind', 'Framer Motion'],
      features: [
        'Responsive web design',
        'Interactive user interface',
        'Smooth animations and transitions',
        'Project showcase section',
        'Clean, modern aesthetic',
      ],
    },
    {
      highlight: true,
      title: 'Bsaraha',
      date: '2 / 2025',
      img: '/images/project7-bsaraha.jpg',
      phone: '/images/project7-bsaraha-phone.jpg',
      bio: 'Personal portfolio website showcasing frontend development skills and projects',
      url: 'http://144.91.75.57:3000',
      repo: 'https://github.com/2ao1-1/bsaraha',
      special: 'social website',
      type: ['UI', 'Development'],
      description:
        'A modern, responsive personal portfolio demonstrating web development expertise through interactive design and professional project showcase',
      skill: ['React', 'Tailwind', 'Framer Motion'],
      features: [
        'Responsive web design',
        'Interactive user interface',
        'Smooth animations and transitions',
        'Project showcase section',
        'Clean, modern aesthetic',
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
      type: ['UI', 'Development'],
      description:
        "A modern and visually appealing website designed to showcase the restaurant's menu and services. The site provides visitors with an interactive and seamless browsing experience, reflecting the restaurant's unique identity.",
      skill: ['Html', 'Css', 'JavaScript', 'Tailwind'],
      features: [
        "Modern and attractive design that aligns with the restaurant's brand.",
        'Simple and intuitive user interface.',
        'Fully responsive layout for various screen sizes.',
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
