export const navItems = [
  { label: "Home", href: "/" },
  { label: "About Me", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact Me", href: "/contact" },
] as const;

export const aboutPoints = [
  "I enjoy taking an idea from concept stage into something interactive, testable, and closer to real software.",
  "My strength is to connect and bridge the gap in design and technical thinking to work together.",
  "I care about digital experiences that feel useful in real life and realistic enough to build.",
];

export const projectCards = [
  {
    title: "Improving Duolingo for long-term language learning",
    href: "/projects/duolingo",
    tag: "Case Study",
    summary:
      "A portfolio case study on reducing streak-driven pressure and making language learning feel more useful through flexible progress and chat-based practice.",
    image: "/duo-chat/logoscreen.png",
    imageClassName: "object-contain bg-white p-6 transition duration-500 group-hover:scale-105",
    coverClassName: "bg-[linear-gradient(135deg,#dbeafe,#eff6ff)]",
  },
  {
    title: "Chalk illustration study",
    href: "/projects",
    tag: "Visual Design",
    summary:
      "An illustration-focused piece exploring texture, composition, and a hand-drawn visual style through digital execution.",
    image: "/chalk-illustration.png",
    imageClassName: "object-cover transition duration-500 group-hover:scale-105",
    coverClassName: "bg-[linear-gradient(135deg,#fef3c7,#fde68a,#fef9c3)]",
  },
  {
    title: "Digital poster exploration",
    href: "/projects",
    tag: "Graphic Design",
    summary:
      "A poster experiment balancing typography, image treatment, and bold layout decisions for a more expressive visual outcome.",
    image: "/digital-poster.jpg",
    imageClassName: "object-cover transition duration-500 group-hover:scale-105",
    coverClassName: "bg-[linear-gradient(135deg,#fee2e2,#fce7f3,#ede9fe)]",
  },
] as const;

export const contactDetails = [
  { label: "Name", value: "GU Shiyuan", href: "/about" },
  { label: "Strength", value: "Turning ideas into interactive software-ready experiences", href: "/about" },
  { label: "Availability", value: "Open to junior UI / UX / Software Development roles", href: "/contact" },
] as const;
