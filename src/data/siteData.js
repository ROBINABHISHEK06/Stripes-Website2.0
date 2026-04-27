// ─── NAVIGATION ───────────────────────────────────────────────
export const navLinks = [
  { label: 'Home',          href: '#home' },
  { label: 'Courses',       href: '#courses' },
  { label: 'For Companies', href: '#companies' },
  { label: 'Case Studies',  href: '#cases' },
  { label: 'About',         href: '#about' },
  { label: 'Contact',       href: '#contact' },
];

// ─── HERO STATS ───────────────────────────────────────────────
export const heroStats = [
  { num: '40+',  label: 'Shipping Companies' },
  { num: '500+', label: 'Officers Trained' },
  { num: '2',    label: 'Global Locations' },
];

// ─── TRUST BAR ────────────────────────────────────────────────
export const trustItems = [
  { icon: '⚓', text: 'Master Mariner Instructors' },
  { icon: '◈', text: 'Mumbai · Manila' },
  { icon: '◎', text: 'Real Accident Analysis' },
  { icon: '▸', text: 'Small Group Focus' },
  { icon: '◈', text: 'IMO-Aligned Curriculum' },
];

// ─── DIFFERENTIATORS ──────────────────────────────────────────
export const differentiators = [
  {
    num: '01',
    icon: '🧭',
    title: 'Real Accident Case Studies',
    text: 'Every module is anchored in actual collisions, groundings and near-misses. Officers learn from the errors of real bridge teams — not hypothetical scenarios.',
  },
  {
    num: '02',
    icon: '🎯',
    title: 'Decision-Making Focus',
    text: 'Beyond procedures and checklists — courses develop the situational judgement that distinguishes a calm, effective watchkeeper from one who hesitates under pressure.',
  },
  {
    num: '03',
    icon: '🌐',
    title: 'Instructor Experience',
    text: 'Training delivered exclusively by experienced Master Mariners and senior navigating officers who have faced these situations themselves.',
  },
];

// ─── COURSES ─────────────────────────────────────────────────
export const courses = [
  {
    id: 'nav-refresher',
    num: '01',
    category: 'Navigation',
    title: 'Navigation Refresher & Bridge Judgement',
    desc: 'Practical refresher for watchkeeping officers covering situational awareness, chart navigation, passage planning and effective bridge team communication.',
    duration: '3–5 Days',
    locations: 'Mumbai / Manila',
    audience: 'OOW, Chief Officers, Masters',
    topics: [
      'Situational awareness and look-out',
      'Chart work and position fixing',
      'Passage planning best practices',
      'Bridge team communication',
      'Watchkeeping standards (STCW)',
    ],
  },
  {
    id: 'colregs',
    num: '02',
    category: 'Rules',
    title: 'COLREGS Decision Making',
    desc: 'Real collision scenarios used to teach practical rule interpretation. Officers learn to make correct, timely decisions — not just recite the rules from memory.',
    duration: '2–3 Days',
    locations: 'Mumbai / Manila',
    audience: 'All Deck Officers',
    topics: [
      'Rules 5–19 in depth',
      'Real collision case analysis',
      'Early & substantial action',
      'Narrow channels & TSS',
      'Crossing, overtaking & head-on situations',
    ],
  },
  {
    id: 'ecdis',
    num: '03',
    category: 'Electronics',
    title: 'ECDIS Excellence',
    desc: 'Advanced route monitoring, alarm management and passage planning on ECDIS. System-specific and generic courses for all major ECDIS platforms.',
    duration: '2 Days',
    locations: 'Mumbai / Manila',
    audience: 'OOW, Chief Officers',
    topics: [
      'Route planning and monitoring',
      'Alarm management and settings',
      'ENC update management',
      'Over-reliance risks and mitigation',
      'ECDIS-related PSC detentions',
    ],
  },
  {
    id: 'radar',
    num: '04',
    category: 'Radar',
    title: 'Radar & ARPA Mastery',
    desc: 'Interpreting radar picture with precision — anti-clutter settings, ARPA tracking, CPA/TCPA understanding and radar watchkeeping in restricted visibility.',
    duration: '2–3 Days',
    locations: 'Mumbai / Manila',
    audience: 'All Deck Officers',
    topics: [
      'Radar set-up and anti-clutter',
      'ARPA target acquisition and tracking',
      'CPA / TCPA interpretation',
      'Radar in restricted visibility',
      'Radar picture analysis using real incidents',
    ],
  },
  {
    id: 'brm',
    num: '05',
    category: 'Management',
    title: 'Bridge Resource Management',
    desc: 'Maximising the effectiveness of the bridge team — leadership, communication, task allocation and stress management in high-pressure navigation situations.',
    duration: '2–3 Days',
    locations: 'Mumbai / Manila',
    audience: 'Masters, Chief Officers, OOW',
    topics: [
      'Leadership styles on the bridge',
      'Task allocation and workload management',
      'Communication and assertiveness',
      'Decision-making under pressure',
      'Fatigue and stress management',
    ],
  },
  {
    id: 'corporate',
    num: '06',
    category: 'Corporate',
    title: 'Corporate Navigation Training',
    desc: 'Tailored programmes for shipping companies — designed around your fleet type, trading area and incident history to target the specific risks your officers face.',
    duration: 'Customised',
    locations: 'Onboard / Onsite / Mumbai / Manila',
    audience: 'Company Officers',
    topics: [
      'Fleet-specific risk analysis',
      'Company incident history review',
      'Port and route-specific scenarios',
      'Assessments and reporting',
      'Flexible schedule and delivery',
    ],
  },
];

// ─── CASE STUDIES ─────────────────────────────────────────────
export const caseStudies = [
  {
    id: 'polesie-verity',
    title: 'Polesie — Verity Collision',
    location: 'North Sea, 2022',
    tags: ['COLREGS', 'Watchkeeping', 'BRM'],
    summary: 'A loaded container vessel and a bulk carrier in the North Sea. The failure to keep a proper look-out and misapplication of COLREGS Rule 16 resulted in a fatal collision. A detailed study in overtaking situations and early action.',
    lessons: [
      'Understanding who is the give-way vessel in an overtaking situation',
      'The danger of assuming the other vessel will comply',
      'Failure of bridge team communication in a developing situation',
    ],
  },
  {
    id: 'ecdis-groundings',
    title: 'ECDIS Over-Reliance Groundings',
    location: 'Multiple, 2019–2023',
    tags: ['ECDIS', 'Passage Planning', 'PSC'],
    summary: 'A series of grounding incidents linked directly to over-reliance on ECDIS without parallel monitoring. Alarm desensitisation, incorrect ENC scale and poor route verification are recurring themes.',
    lessons: [
      'Route monitoring requires active verification, not passive watching',
      'ENC scale settings and their implications for accuracy',
      'Alarm management and why bridge teams silence alerts',
    ],
  },
  {
    id: 'traffic-separation',
    title: 'TSS Collision — Dover Strait',
    location: 'English Channel, 2021',
    tags: ['COLREGS', 'Traffic Separation', 'Radar'],
    summary: 'Two vessels operating in the Dover Strait Traffic Separation Scheme failed to take early and sufficient action. Radar watch and ARPA usage were inadequate for the density of traffic.',
    lessons: [
      'Rule 10 obligations in a Traffic Separation Scheme',
      'Interpreting ARPA data in high-density traffic',
      'The risk of incremental course changes instead of decisive action',
    ],
  },
];

// ─── TESTIMONIALS ─────────────────────────────────────────────
export const testimonials = [
  {
    text: 'The accident case studies made this unlike any other maritime training I have attended. You genuinely think differently about your watchkeeping after this course.',
    author: 'Chief Officer',
    company: 'Container Fleet, Asia-Pacific',
  },
  {
    text: 'Captain Fernandes has a gift for making COLREGS feel real and urgent — not just rules to memorise for a survey. Our officers came back sharper.',
    author: 'Marine Superintendent',
    company: 'Mumbai-based Shipping Company',
  },
  {
    text: 'The ECDIS course covered things that no other training provider explained properly. Alarm management, route monitoring — taught by someone who has used it at sea.',
    author: 'Second Officer',
    company: 'Bulk Carrier, Pacific',
  },
  {
    text: 'Best BRM training I have done. Real scenarios, not classroom theory. The team communication exercises were directly applicable on the bridge.',
    author: 'Master',
    company: 'Chemical Tanker, Middle East',
  },
  {
    text: 'We send our officers to Stripes for the COLREGS course before joining. The improvement in their rule application at sea is measurable.',
    author: 'Fleet Manager',
    company: 'Shipping Company, Mumbai',
  },
  {
    text: 'The radar course changed how I look at the picture. I never thought about anti-clutter settings the way Captain explained it using the collision cases.',
    author: 'Third Officer',
    company: 'Container Vessel, Europe',
  },
];

// ─── INSTRUCTOR ───────────────────────────────────────────────
export const instructor = {
  name: 'Captain Vincent Fernandes',
  rank: 'Master Mariner · Principal & Director, Stripes Academy',

  bio: [
    "As we reflect on the remarkable journey since the inception of Stripes, our commitment to delivering excellence in maritime training has never been stronger. It's truly awe-inspiring to witness how our academy has flourished, and I've come to realize that the backbone of our success lies not in the physical infrastructure, but in the dedication and passion of our incredible team.",

    "Behind every successful training session, there is a symphony of efforts—from maintaining our pristine campus to ensuring our students are properly cared for. From course registration to collecting feedback, every aspect of our operation is meticulously crafted with our people at the forefront.",

    "With immense pride, I share that we have already provided training to over 750 seafarers. The unwavering love and encouragement we receive from our students continue to fuel our drive and inspire us to reach greater heights.",

    "As we set sail into the second quarter of 2024, brimming with anticipation and excitement, I am thrilled to announce that Stripes will soon expand its horizons internationally. In just eight months, we've achieved remarkable milestones, but our journey has only just begun.",

    "I extend heartfelt gratitude to our esteemed training partners—Scorpio, Zenith, Optimum, Torm, Valles, MMSI, and Pacific Basin—for their unwavering support and trust in our vision. Together, we continue to chart new waters and redefine maritime education.",

    "As we continue to grow and evolve, I am confident that our students will emerge as our most steadfast ambassadors, proudly carrying the flag of Stripes across the seas. Here's to the countless adventures that lie ahead and to the enduring spirit of excellence that illuminates our path."
  ],

  credentials: [
    'Master Mariner Certificate of Competency (Foreign-Going)',
    'Command experience across bulk carriers, container vessels and general cargo',
    'Specialist in COLREGS, ECDIS and Bridge Resource Management',
    'Accident investigation and near-miss analysis',
    'Training delivery in Mumbai and Manila since 2015',
    'Preferred instructor for multiple major shipping companies',
  ],
};

// ─── LOCATION ─────────────────────────────────────────────────
export const locations = [
  {
    city: 'Mumbai',
    country: 'India',
    address: "St. Xavier's Campus, Shilpalaya, Vinayalaya, Mahakali Caves Road, Behind Holy Family Church, Mumbai 400 093, INDIA",
    type: 'Primary Training Centre',
  },
  {
    city: 'Manila',
    country: 'Philippines',
    address: 'Stripes Academy - Manila, Unit 1512, 1515, 1516 & 1517 - 15th Floor Trium Square Building Sen. Gil Puyat Avenue, corner Leveriza, Pasay, 1300 Metro Manila, Philippines',
    type: 'Training Centre',
  },
];

// ─── COMPANIES ────────────────────────────────────────────────
export const companyBenefits = [
  {
    icon: '📋',
    title: 'Tailored to Your Fleet',
    text: 'Programmes designed around your vessel types, trading areas and incident history — not a generic syllabus.',
  },
  {
    icon: '📊',
    title: 'Assessment & Reporting',
    text: 'Pre and post-course assessments with detailed reporting. Quantify the improvement in your officers knowledge.',
  },
  {
    icon: '🚢',
    title: 'Flexible Delivery',
    text: 'Training at our Mumbai or Manila centres, at your office, or onboard your vessels.',
  },
  {
    icon: '🔁',
    title: 'Ongoing Partnership',
    text: 'Structured annual training calendar for your fleet. Regular course updates as new incidents emerge.',
  },
];
