export type JobItem = {
  id: number;
  title: string;
  company: string;
  location: string;
  budget: string;
  type: "Tester" | "Developer";
  postedAt: string;
  source: "TestHub" | "Upwork" | "LinkedIn" | "Freelancer";
  tags: string[];
};

export type FeedPost = {
  id: number;
  author: string;
  role: string;
  avatar: string;
  content: string;
  createdAt: string;
  likes: number;
  comments: number;
};

export const dailyJobs: JobItem[] = [
  {
    id: 1,
    title: "Web Platform QA Tester",
    company: "Kasora Labs",
    location: "Remote",
    budget: "$700 - $1,200",
    type: "Tester",
    postedAt: "15 dəq əvvəl",
    source: "TestHub",
    tags: ["Manual QA", "Regression", "Bug Report"],
  },
  {
    id: 2,
    title: "Mobile App Test Engineer",
    company: "PixelForge",
    location: "Bakı",
    budget: "$900 - $1,600",
    type: "Tester",
    postedAt: "42 dəq əvvəl",
    source: "TestHub",
    tags: ["iOS", "Android", "TestFlight"],
  },
  {
    id: 3,
    title: "API Automation QA",
    company: "Databrix",
    location: "Remote",
    budget: "$1,000 - $2,000",
    type: "Tester",
    postedAt: "1 saat əvvəl",
    source: "Upwork",
    tags: ["Postman", "Jest", "CI/CD"],
  },
  {
    id: 4,
    title: "Frontend Developer + QA mindset",
    company: "NovaScale",
    location: "Remote",
    budget: "$2,000+",
    type: "Developer",
    postedAt: "2 saat əvvəl",
    source: "LinkedIn",
    tags: ["Next.js", "TypeScript", "Testing Library"],
  },
];

export const discoverPosts: FeedPost[] = [
  {
    id: 1,
    author: "Aysel Məmmədova",
    role: "QA Engineer",
    avatar: "A",
    content:
      "Yeni e-commerce layihəsi üçün 2 manual tester axtarıram. Təcrübə: checkout flow, payment, mobile responsive test.",
    createdAt: "25 dəq əvvəl",
    likes: 18,
    comments: 6,
  },
  {
    id: 2,
    author: "Rauf Həsənli",
    role: "Fullstack Developer",
    avatar: "R",
    content:
      "Portfolio-ya yeni SaaS dashboard işi əlavə etdim. UX feedback və usability test üçün könüllü tester axtarıram.",
    createdAt: "1 saat əvvəl",
    likes: 32,
    comments: 14,
  },
  {
    id: 3,
    author: "Nigar Əliyeva",
    role: "Product Manager",
    avatar: "N",
    content:
      "Fintech MVP üçün təhlükəsizlik test planı hazırlayan QA mütəxəssisi lazımdır. Remote, çevik iş qrafiki.",
    createdAt: "3 saat əvvəl",
    likes: 21,
    comments: 9,
  },
];

export const followingPosts: FeedPost[] = [
  {
    id: 11,
    author: "Kamran İbrahimov",
    role: "Automation Tester",
    avatar: "K",
    content: "Cypress ilə smoke test suite optimallaşdırdım. İstəyənlərə setup template paylaşa bilərəm.",
    createdAt: "50 dəq əvvəl",
    likes: 12,
    comments: 4,
  },
  {
    id: 12,
    author: "Ləman Quliyeva",
    role: "Frontend Developer",
    avatar: "L",
    content: "DevTestHubKasora üçün yeni portfolio kart dizaynları hazırladım. Fikirlərinizi yazın 🙌",
    createdAt: "2 saat əvvəl",
    likes: 27,
    comments: 11,
  },
];

export const portfolioItems = [
  {
    id: 1,
    title: "Fintech QA Case Study",
    category: "Testing",
    summary: "Payment flow üçün risk matrisi, 86 bug tapıldı, release risk 40% azaldıldı.",
    stack: ["Postman", "Jira", "SQL"],
    views: 1320,
  },
  {
    id: 2,
    title: "E-commerce Performance Audit",
    category: "Performance",
    summary: "Lighthouse score 59-dan 91-ə yüksəldi, checkout conversion +12%.",
    stack: ["Lighthouse", "WebPageTest", "Next.js"],
    views: 980,
  },
  {
    id: 3,
    title: "SaaS Admin UX Test",
    category: "UX",
    summary: "Usability test nəticəsində onboarding time 35% azaldıldı.",
    stack: ["Hotjar", "Figma", "Notion"],
    views: 760,
  },
];

export const notificationsMock = [
  {
    id: 1,
    title: "Yeni müraciət gəldi",
    text: "Web Platform QA Tester elanınıza 3 yeni müraciət var.",
    time: "10 dəq əvvəl",
    unread: true,
  },
  {
    id: 2,
    title: "Mesajınız var",
    text: "Aysel Məmmədova sizə mesaj göndərdi.",
    time: "35 dəq əvvəl",
    unread: true,
  },
  {
    id: 3,
    title: "Profil baxışı artdı",
    text: "Son 24 saatda profiliniz 27 dəfə görüntülənib.",
    time: "2 saat əvvəl",
    unread: false,
  },
];

export const connectedAccounts = [
  { name: "Instagram", icon: "📸", connected: true, username: "@qasora" },
  { name: "YouTube", icon: "▶️", connected: false, username: "Bağlanmayıb" },
  { name: "Telegram", icon: "✈️", connected: true, username: "@devtesthub" },
  { name: "Facebook", icon: "📘", connected: true, username: "DevTestHubKasora" },
  { name: "LinkedIn", icon: "💼", connected: true, username: "devtesthub-kasora" },
];
