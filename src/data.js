export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export const skills = [
  {
    category: 'Languages',
    icon: '{ }',
    items: [
      { name: 'Java', level: 85, img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Python', level: 80, img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'C / C++', level: 72, img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    ],
  },
  {
    category: 'Frontend',
    icon: '✦',
    items: [
      { name: 'React.js', level: 82, img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Tailwind CSS', level: 88, img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'Figma / UI-UX', level: 75, img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    ],
  },
  {
    category: 'Backend & DB',
    icon: '⬡',
    items: [
      { name: 'Spring Boot', level: 78, img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
      { name: 'MySQL', level: 75, img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'Supabase', level: 55, img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' },
      { name: 'Node.js', level: 55, img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    ],
  },
  {
    category: 'AI / ML',
    icon: '◈',
    items: [
      { name: 'Scikit-learn', level: 70, img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg' },
      { name: 'NumPy & Pandas', level: 76, img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
      { name: 'TensorFlow', level: 55, img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
    ],
  },
  {
    category: 'Tools',
    icon: '⚙',
    items: [
      { name: 'Git & GitHub', level: 85, img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'AWS Cloud', level: 72, img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
      { name: 'Figma', level: 75, img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      { name: 'n8n Automation', level: 65, img: 'https://cdn.simpleicons.org/n8n/EA4B71' },
    ],
  },
]

export const projects = [
  {
    title: 'Green Tips',
    subtitle: 'Sustainability Platform',
    description:
      'A full-stack sustainability platform built with Java & Spring Boot that reduces manual eco-tip lookup. Features an assessment system that streamlined eco-tip submissions, achieving a 40% time reduction across all workflows.',
    tags: ['Java', 'Spring Boot', 'Git', 'Data Science'],
    highlights: ['40% time reduction', '3+ DS contributors', 'Assessment feature'],
    color: '#16a34a',
    icon: '🌿',
    github: 'https://github.com/Srinivasan0107/Greentipss',
  },
  {
    title: 'Nagara Sancharam',
    subtitle: 'Gov. Mobility Platform',
    description:
      'A mobile interface developed for the Government of Kerala\'s official mobility platform. Integrates 3+ real-time data sources to analyze urban density patterns across 10+ city zones, supporting urban planning decisions.',
    tags: ['Flutter', 'Dart', 'Data Integration', 'Urban Analytics'],
    highlights: ['3+ data sources', '10+ city zones', 'Gov. of Kerala'],
    color: '#2563eb',
    icon: '🏙️',
    github: 'https://github.com/Srinivasan0107/NagaraSancharam',
  },
  {
    title: 'Rewearth',
    subtitle: 'Sustainable Fashion Platform',
    description:
      'A TypeScript-based platform promoting circular fashion economy. Enables users to buy, sell, and swap pre-owned clothing, reducing textile waste and encouraging sustainable consumption habits.',
    tags: ['TypeScript', 'Next.js', 'Sustainability', 'E-Commerce'],
    highlights: ['Circular economy', 'Textile waste reduction', 'Swap & sell'],
    color: '#7c3aed',
    icon: '♻️',
    github: 'https://github.com/Srinivasan0107/Rewearth',
  },
  {
    title: 'Goods',
    subtitle: 'Raw Materials Vendor App',
    description:
      'A web application connecting raw material vendors with buyers. Streamlines procurement workflows, product listings, and order management for B2B raw material transactions.',
    tags: ['JavaScript', 'Web App', 'B2B', 'Vendor Platform'],
    highlights: ['Vendor listings', 'B2B procurement', 'Order management'],
    color: '#d97706',
    icon: '📦',
    github: 'https://github.com/Srinivasan0107/goods',
  },
  {
    title: 'Rawary',
    subtitle: 'Raw Materials Marketplace',
    description:
      'A JavaScript-based marketplace platform for raw material trading. Provides a seamless interface for suppliers and buyers to connect, negotiate, and transact efficiently.',
    tags: ['JavaScript', 'Marketplace', 'Trading', 'Full Stack'],
    highlights: ['Supplier-buyer connect', 'Real-time listings', 'Trade platform'],
    color: '#b45309',
    icon: '🏭',
    github: 'https://github.com/Srinivasan0107/Rawary',
  },
  {
    title: 'Room Finder',
    subtitle: 'Accommodation Finder',
    description:
      'A JavaScript web app that helps students and professionals find rooms and accommodations. Features location-based search, filters, and listing management for landlords and tenants.',
    tags: ['JavaScript', 'Web App', 'Real Estate', 'Search'],
    highlights: ['Location-based search', 'Listing management', 'Student-focused'],
    color: '#0891b2',
    icon: '🏠',
    github: 'https://github.com/Srinivasan0107/RoomFinder',
  },
  {
    title: 'Next.js Commerce',
    subtitle: 'E-Commerce Platform',
    description:
      'A full-featured e-commerce platform built with Next.js and TypeScript. Includes product catalog, cart management, checkout flow, and responsive storefront design.',
    tags: ['TypeScript', 'Next.js', 'E-Commerce', 'React'],
    highlights: ['Full checkout flow', 'Product catalog', 'Responsive UI'],
    color: '#0f172a',
    icon: '🛒',
    github: 'https://github.com/Srinivasan0107/nextjs-commerce',
  },
  {
    title: 'CredTech',
    subtitle: 'Credential Verification Platform',
    description:
      'A Python-based platform for managing and verifying academic and professional credentials. Automates credential validation workflows, reducing manual verification overhead.',
    tags: ['Python', 'Credential Tech', 'Automation', 'Verification'],
    highlights: ['Automated validation', 'Credential management', 'Python backend'],
    color: '#dc2626',
    icon: '🎓',
    github: 'https://github.com/Srinivasan0107/CredTech',
  },
  {
    title: 'Next.js Bootstrap',
    subtitle: 'Project Starter Template',
    description:
      'A production-ready Next.js project bootstrap template with pre-configured tooling, folder structure, and best practices for rapid full-stack web application development.',
    tags: ['JavaScript', 'Next.js', 'Template', 'Boilerplate'],
    highlights: ['Production-ready', 'Pre-configured tooling', 'Best practices'],
    color: '#6366f1',
    icon: '🚀',
    github: 'https://github.com/Srinivasan0107/nextjs-project-bootstrap',
  },
  {
    title: 'Yuvathon VIT',
    subtitle: 'Entrepreneur Website',
    description:
      'An entrepreneur-focused event website built for Yuvathon at VIT. Showcases startup pitches, event schedules, speaker profiles, and registration for the entrepreneurship summit.',
    tags: ['TypeScript', 'Next.js', 'Event Platform', 'Entrepreneurship'],
    highlights: ['Event management', 'Startup showcase', 'VIT summit'],
    color: '#059669',
    icon: '💡',
    github: 'https://github.com/saidakshinsridhar/yuvathonvit',
  },
  {
    title: 'CredTec',
    subtitle: 'Credential Tech System',
    description:
      'A Python-powered credential technology system for issuing, storing, and verifying digital certificates. Supports tamper-proof credential issuance for institutions and organizations.',
    tags: ['Python', 'Digital Credentials', 'Verification', 'Backend'],
    highlights: ['Tamper-proof certs', 'Digital issuance', 'Institution support'],
    color: '#7c2d12',
    icon: '🔐',
    github: 'https://github.com/saidakshinsridhar/CredTec',
  },
  {
    title: 'THREAD',
    subtitle: 'AI Memory Mapping System',
    description:
      'An AI-powered contextual memory mapping system that bridges raw data and institutional reasoning using a hybrid RAG approach with Amazon Neptune (Graph) and OpenSearch (Vector).',
    tags: ['Python', 'AI/RAG', 'Amazon Neptune', 'OpenSearch'],
    highlights: ['Hybrid RAG', 'Graph + Vector DB', 'Institutional reasoning'],
    color: '#9333ea',
    icon: '🧠',
    github: 'https://github.com/SaiSruthi-R/THREAD',
  },
  {
    title: 'Void',
    subtitle: 'Python Utility Tool',
    description:
      'A Python-based utility and automation tool designed to handle background tasks, scripting workflows, and system-level operations with a minimal and efficient codebase.',
    tags: ['Python', 'Automation', 'Utility', 'Scripting'],
    highlights: ['Workflow automation', 'System scripting', 'Minimal codebase'],
    color: '#374151',
    icon: '⚡',
    github: 'https://github.com/saidakshinsridhar/void',
  },
  {
    title: 'TheWalkingDev',
    subtitle: 'Developer Blog & Portfolio',
    description:
      'A developer-focused blog and portfolio platform showcasing tech articles, project walkthroughs, and coding insights. Built to share knowledge and document the developer journey.',
    tags: ['Blog', 'Portfolio', 'Developer', 'Content'],
    highlights: ['Tech articles', 'Project walkthroughs', 'Dev journey'],
    color: '#1f2937',
    icon: '🖊️',
    github: 'https://github.com/rakheshkrishna2005/TheWalkingDev',
  },
]

export const experience = [
  {
    role: 'Technical Lead',
    org: 'AWS Club — Easwari Engineering College',
    period: '2024 – Present',
    bullets: [
      'Conducted hands-on cloud workshops for 50+ students on core AWS services',
      'Delivered technical presentations on cloud architecture and best practices',
      'Coordinated directly with AWS representatives for campus assessments and club activities',
    ],
  },
]

export const achievements = [
  {
    title: '2nd Prize — Enable Inclusive UI Design Challenge',
    org: 'IIT Madras E-Summit 2026',
    detail:
      'Secured 2nd prize in the Enable – Inclusive UI Design Challenge conducted by IIT Madras. The competition focused on building inclusive and accessible digital experiences usable by everyone, including persons with disabilities. Won a cash prize of ₹20,000. Finals held at IIT Madras. Appreciated by college Principal for the effort and innovation.',
    highlights: ['₹20,000 Cash Prize', 'Finals at IIT Madras', 'Inclusive UI Design', 'Sponsored by Amazon, L&T, Caterpillar, IMC'],
    icon: '🥈',
    images: [
      '/iit/1770748180190.jpg',
      '/iit/1770918082836.jpg',
      '/iit/1770918085042.jpg',
    ],
  },
  {
    title: 'Finalist — INNOHACK \'26',
    org: 'VIT Vellore · Jan 20–21, 2026',
    detail:
      'Shortlisted for the final round of INNOHACK \'26, a national-level hackathon conducted at VIT Vellore under the Cyber Security track. An intense 2-day event that pushed critical thinking, collaboration, and applying cybersecurity concepts to real-world problem statements under time constraints.',
    highlights: ['National-level Hackathon', 'Cyber Security Track', 'VIT Vellore', 'Final Round'],
    icon: '🔐',
    images: [
      '/vit/1770482644960.jpg',
      '/vit/1770482646074.jpg',
    ],
  },
]

export const badges = [
  {
    name: 'AWS Educate Introduction to Cloud 101',
    issuer: 'Amazon Web Services',
    issued: 'Feb 2026',
    img: 'https://images.credly.com/images/e51a8579-188d-4363-8ed1-12ad164ef57b/blob',
    url: 'https://www.credly.com/users/srinivasan-b.6ddd633c/badges',
  },
  {
    name: 'AWS Educate Introduction to Generative AI',
    issuer: 'Amazon Web Services',
    issued: 'Feb 2026',
    img: 'https://images.credly.com/images/e50c657a-edd9-4c93-b1cf-2b6634b54abf/blob',
    url: 'https://www.credly.com/users/srinivasan-b.6ddd633c/badges',
  },
  {
    name: 'AWS Educate Machine Learning Foundations',
    issuer: 'Amazon Web Services',
    issued: 'Feb 2026',
    img: 'https://images.credly.com/images/247efe36-9fa6-4209-ad56-0fd522283872/blob',
    url: 'https://www.credly.com/users/srinivasan-b.6ddd633c/badges',
  },
  {
    name: 'AWS Cloud Club Core Team',
    issuer: 'AWS Community',
    issued: 'Jan 2026',
    img: 'https://images.credly.com/images/68fdcd60-3f31-4a24-b87a-90110ab11ee9/blob',
    url: 'https://www.credly.com/users/srinivasan-b.6ddd633c/badges',
  },
  {
    name: 'Security and Connectivity Support',
    issuer: 'Cisco',
    issued: 'Dec 2025',
    img: 'https://images.credly.com/images/a42c5fcd-6617-429c-b4a9-8805310e0b10/blob',
    url: 'https://www.credly.com/users/srinivasan-b.6ddd633c/badges',
  },
  {
    name: 'Introduction to Modern AI',
    issuer: 'Cisco',
    issued: 'Dec 2025',
    img: 'https://images.credly.com/images/e2d12302-10f9-40d4-8ff1-066a7008b61d/blob',
    url: 'https://www.credly.com/users/srinivasan-b.6ddd633c/badges',
  },
  {
    name: 'MongoDB Basics for Students',
    issuer: 'MongoDB',
    issued: 'Jun 2025',
    img: 'https://images.credly.com/images/08974f21-b24f-4a0e-be9d-4ae904907259/blob',
    url: 'https://www.credly.com/users/srinivasan-b.6ddd633c/badges',
  },
  {
    name: 'Networking Basics',
    issuer: 'Cisco',
    issued: 'Dec 2024',
    img: 'https://images.credly.com/images/5bdd6a39-3e03-4444-9510-ecff80c9ce79/image.png',
    url: 'https://www.credly.com/users/srinivasan-b.6ddd633c/badges',
  },
  {
    name: 'Python Essentials 1',
    issuer: 'Cisco',
    issued: 'Oct 2024',
    img: 'https://images.credly.com/images/68c0b94d-f6ac-40b1-a0e0-921439eb092e/image.png',
    url: 'https://www.credly.com/users/srinivasan-b.6ddd633c/badges',
  },
]

export const certifications = [
  { name: 'AWS Cloud Computing 101', issuer: 'Amazon Web Services', tag: 'Cloud' },
  { name: 'AWS Educate: Generative AI', issuer: 'Amazon Web Services', tag: 'AI' },
  { name: 'AWS ML Foundations', issuer: 'Amazon Web Services', tag: 'ML' },
  { name: 'AWS Cloud Club Core Badge', issuer: 'Amazon Web Services', tag: 'Cloud' },
  { name: 'Python Essentials 1', issuer: 'Cisco Networking Academy', tag: 'Dev' },
  { name: 'Networking Basics', issuer: 'Cisco Networking Academy', tag: 'Network' },
  { name: 'Introduction to Modern AI', issuer: 'Cisco', tag: 'AI' },
  { name: 'Security and Connectivity Support', issuer: 'Cisco', tag: 'Network' },
  { name: 'MongoDB Basics for Students', issuer: 'MongoDB University', tag: 'DB' },
  { name: 'Introduction to Internet of Things', issuer: 'NPTEL / IIT Swayam', tag: 'IoT' },
]

export const contact = {
  email: 'srinivasan.sai2006@gmail.com',
  phone: '+91 6381603378',
  github: 'https://github.com/Srinivasan0107',
  linkedin: 'https://linkedin.com/in/Srinivasan108',
  location: 'Chennai, Tamil Nadu, India',
}
