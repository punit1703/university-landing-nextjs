import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Variants } from "framer-motion";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const statsData = [
  { value: 10000, suffix: "+", label: "Students Enrolled", icon: "🎓" },
  { value: 50,    suffix: "+", label: "Programs Offered",  icon: "📚" },
  { value: 100,   suffix: "+", label: "Expert Faculty",    icon: "👨‍🏫" },
  { value: 90,    suffix: "%", label: "Placement Rate",    icon: "💼" },
];

export const programsData = [
  {
    id: 1,
    title: "Engineering",
    description: "Cutting-edge engineering programs with industry mentorship and hands-on labs.",
    image: "/images/3. Engineering Program Card.png",
    badge: "B.Tech / M.Tech",
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: 2,
    title: "AI & Data Science",
    description: "Master artificial intelligence, machine learning, and big data analytics.",
    image: "/images/4. AI & Data Science Program Card.png",
    badge: "B.Tech / M.Sc",
    color: "from-indigo-500 to-purple-600",
  },
  {
    id: 3,
    title: "Management",
    description: "Develop leadership skills through real-world case studies and industry projects.",
    image: "/images/5. Management Program Card.png",
    badge: "MBA / BBA",
    color: "from-purple-500 to-pink-600",
  },
  {
    id: 4,
    title: "Design",
    description: "Blend creativity with technology in UI/UX, graphic, and product design.",
    image: "/images/6. Design Program Card.png",
    badge: "B.Des / M.Des",
    color: "from-pink-500 to-rose-600",
  },
  {
    id: 5,
    title: "Commerce",
    description: "Build expertise in finance, accounting, and business strategy.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    badge: "B.Com / M.Com",
    color: "from-rose-500 to-orange-500",
  },
  {
    id: 6,
    title: "Law",
    description: "Comprehensive legal education with moot courts and judicial internships.",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1000",
    badge: "LLB / LLM",
    color: "from-orange-500 to-amber-500",
  },
];

export const featuresData = [
  {
    id: 1,
    title: "Industry Collaboration",
    description: "Partnerships with 200+ industry leaders for live projects and internships.",
    icon: "Building2",
    gradient: "from-blue-500/10 to-indigo-500/10",
    iconBg: "from-blue-500 to-indigo-500",
  },
  {
    id: 2,
    title: "Placement Assistance",
    description: "Dedicated placement cell with 90%+ placement record year over year.",
    icon: "Briefcase",
    gradient: "from-indigo-500/10 to-purple-500/10",
    iconBg: "from-indigo-500 to-purple-500",
  },
  {
    id: 3,
    title: "Smart Classrooms",
    description: "AI-powered smart classrooms with interactive boards and digital tools.",
    icon: "Monitor",
    gradient: "from-purple-500/10 to-pink-500/10",
    iconBg: "from-purple-500 to-pink-500",
  },
  {
    id: 4,
    title: "Innovation Labs",
    description: "State-of-the-art research labs equipped with the latest technologies.",
    icon: "FlaskConical",
    gradient: "from-pink-500/10 to-rose-500/10",
    iconBg: "from-pink-500 to-rose-500",
  },
  {
    id: 5,
    title: "Global Exposure",
    description: "International exchange programs, global workshops, and study tours.",
    icon: "Globe",
    gradient: "from-rose-500/10 to-orange-500/10",
    iconBg: "from-rose-500 to-orange-500",
  },
  {
    id: 6,
    title: "Expert Faculty",
    description: "100+ PhD-qualified professors with decades of industry experience.",
    icon: "GraduationCap",
    gradient: "from-orange-500/10 to-amber-500/10",
    iconBg: "from-orange-500 to-amber-500",
  },
];

export const testimonialsData = [
  {
    id: 1,
    name: "Aryan Mehta",
    role: "B.Tech, Computer Engineering",
    batch: "Batch of 2024",
    review:
      "NexaVarsity completely transformed my career trajectory. The industry-oriented curriculum and dedicated mentorship helped me land a role at a top tech firm straight out of college.",
    rating: 5,
    image: "/images/8. Testimonial Student Images.png",
    company: "Google India",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "MBA, Business Management",
    batch: "Batch of 2023",
    review:
      "The MBA program here is exceptional. The faculty are practitioners, not just academics. The case-study approach prepared me for real business challenges from day one.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    company: "McKinsey & Co.",
  },
  {
    id: 3,
    name: "Rahul Verma",
    role: "M.Sc, AI & Data Science",
    batch: "Batch of 2024",
    review:
      "World-class labs, brilliant professors, and an amazing peer network. The AI program gave me hands-on experience that most graduates only dream of having.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    company: "Microsoft",
  },
  {
    id: 4,
    name: "Sneha Patel",
    role: "B.Des, UX Design",
    batch: "Batch of 2023",
    review:
      "The Design program's focus on both creativity and technology is unmatched. I graduated with a portfolio that spoke for itself and got placed before I even finished.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    company: "Figma",
  },
];

export const galleryImages = [
  { id: 1, src: "/images/1. Hero Section Image.png", alt: "Main campus building", span: "col-span-2 row-span-2" },
  { id: 2, src: "/images/Innovation Lab.png", alt: "Innovation lab",       span: "col-span-1 row-span-1" },
  { id: 3, src: "/images/7. Modern_Library.png", alt: "Library",              span: "col-span-1 row-span-1" },
  { id: 4, src: "/images/2. About Section Image.png", alt: "Sports complex",       span: "col-span-1 row-span-2" },
  { id: 5, src: "/images/Smart Classroom.png", alt: "Smart classroom",      span: "col-span-2 row-span-1" },
  { id: 6, src: "/images/9. CTA Section Background.png", alt: "Student lounge",       span: "col-span-1 row-span-1" },
];