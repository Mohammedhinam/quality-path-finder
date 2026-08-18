/**
 * CENTRAL CONFIGURATION FILE
 * Edit everything about the portfolio here. Placeholders are marked with [ ].
 */

export const profile = {
  name: "[YOUR NAME]",
  shortName: "[YOUR NAME]",
  tagline: "IT Undergraduate | Aspiring QA Engineer",
  intro:
    "I am an Information Technology undergraduate passionate about Software Quality Assurance, software testing, web technologies, and building reliable digital solutions.",
  email: "YOUR_EMAIL@example.com",
  github: "https://github.com/YOUR_USERNAME",
  linkedin: "YOUR_LINKEDIN_URL",
  location: "Sri Lanka",
  cvPath: "/documents/Your-CV.pdf",
};

export const about = {
  paragraphs: [
    "I am an Information Technology undergraduate at the Sri Lanka Institute of Information Technology (SLIIT), with a strong interest in Software Quality Assurance, software testing, web technologies, and software development.",
    "I enjoy analyzing applications, identifying defects, designing test scenarios, understanding user requirements, and working toward delivering reliable and user-friendly software.",
    "Through academic projects and self-learning, I have gained experience with software testing concepts, web development, databases, programming, API testing, and software development tools. I am currently looking for an internship opportunity where I can apply my knowledge, gain industry experience, and grow as a QA professional.",
  ],
  currentlyLearning: [
    "Test Automation",
    "API Testing",
    "Selenium / Playwright",
    "Agile & Scrum",
    "Software Testing Best Practices",
  ],
};

export const skillGroups = [
  {
    title: "QA & Testing",
    items: [
      "Manual Testing",
      "Functional Testing",
      "Regression Testing",
      "Test Case Design",
      "Test Scenario Design",
      "Bug Reporting",
      "API Testing",
      "Test Documentation",
      "Agile / Scrum",
      "Jira",
      "Postman",
      "Selenium / Playwright",
    ],
  },
  { title: "Programming", items: ["Java", "Python", "JavaScript", "C", "Kotlin"] },
  {
    title: "Web Development",
    items: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js"],
  },
  { title: "Databases", items: ["MySQL", "MongoDB", "SQL"] },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Postman", "Jira", "Android Studio"],
  },
];

export type ProjectCategory =
  | "QA & Testing"
  | "Web Development"
  | "Mobile Development"
  | "Research";

export type Project = {
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  description: string;
  problem: string;
  solution: string;
  contribution: string;
  tech: string[];
  links: { label: string; href: string }[];
  contents?: string[];
  featured?: boolean;
  note?: string;
};

export const projects: Project[] = [
  {
    title: "Dental Health Assessment & Preventive Analysis System",
    category: "Research",
    categoryLabel: "Research Project / Web Application / Machine Learning",
    description:
      "A web-based dental health assessment and preventive analysis system designed to support dental health assessment and provide preventive insights. One component focuses on dental caries detection and classification.",
    problem:
      "Preventive dental information is often scattered, making it hard for users to review dental health indicators in one place.",
    solution:
      "A web application that collects dental health inputs and presents preventive insights, with a machine learning component for dental caries detection and classification.",
    contribution:
      "Research and development team member responsible for the dental caries detection component.",
    tech: ["Python", "Machine Learning", "Web Development", "Data Analysis", "Database"],
    links: [
      { label: "View Project", href: "#" },
      { label: "GitHub", href: "#" },
    ],
    note: "Academic research project. Not a medical device and not intended for clinical diagnosis.",
  },
  {
    title: "GOGO CARS Vehicle Rental System",
    category: "Web Development",
    categoryLabel: "Web Application",
    description:
      "A vehicle rental web application designed to allow users to browse vehicles and manage rental-related activities through a user-friendly interface.",
    problem:
      "Manual vehicle rental handling makes browsing availability and tracking rental activity slow and error prone.",
    solution:
      "A web interface for browsing vehicles and managing rental-related activities backed by a database.",
    contribution:
      "Contributed to front-end pages, form handling, and database-connected rental features.",
    tech: ["HTML", "CSS", "JavaScript", "Database"],
    links: [
      { label: "Live Demo", href: "#" },
      { label: "GitHub", href: "#" },
    ],
  },
  {
    title: "Finance Tracker Android Application",
    category: "Mobile Development",
    categoryLabel: "Android Application",
    description:
      "An Android finance tracking application designed to help users record transactions, manage budgets, and monitor their personal finances.",
    problem:
      "Tracking day-to-day spending without a structured tool makes budgeting difficult.",
    solution:
      "An Android app for recording transactions, setting budgets and reviewing personal finance summaries with local data storage.",
    contribution:
      "Built app screens, transaction and budget logic, and local database persistence.",
    tech: ["Kotlin", "Android Studio", "SQLite / Database", "Material Design"],
    links: [{ label: "GitHub", href: "#" }],
  },
  {
    title: "QA Testing & Test Automation Project",
    category: "QA & Testing",
    categoryLabel: "Software Quality Assurance",
    description:
      "A software testing project demonstrating manual testing, test case design, bug reporting, API testing, and test automation for a sample web application.",
    problem:
      "A sample web application needed structured verification of its functional requirements.",
    solution:
      "A full testing workflow covering planning, test design, execution, defect reporting and automated regression scripts.",
    contribution:
      "Designed the test plan, wrote scenarios and cases, reported defects, built the API collection and automation scripts.",
    tech: ["Jira", "Postman", "Selenium / Playwright", "GitHub"],
    contents: [
      "Test Plan",
      "Test Scenarios",
      "Test Cases",
      "Bug Reports",
      "API Test Collection",
      "Automation Test Scripts",
      "Test Execution Report",
    ],
    links: [{ label: "GitHub", href: "#" }],
    featured: true,
  },
];

export const projectFilters = [
  "All",
  "QA & Testing",
  "Web Development",
  "Mobile Development",
  "Research",
] as const;

export const education = [
  {
    degree: "BSc (Hons) Information Technology",
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    status: "Undergraduate",
    duration: "[START YEAR] – Present",
    details: [
      { label: "Expected Graduation", value: "[YEAR]" },
      {
        label: "Relevant Coursework",
        value: "[Add coursework, e.g. Software Quality Assurance, Databases, Web Development]",
      },
      { label: "Academic Achievements", value: "[Add achievements here]" },
    ],
  },
];

export const certifications = [
  { name: "[Certification Name]", issuer: "[Issuing Organization]", year: "[Year]", credential: "#" },
  { name: "[Certification Name]", issuer: "[Issuing Organization]", year: "[Year]", credential: "#" },
  { name: "[Certification Name]", issuer: "[Issuing Organization]", year: "[Year]", credential: "#" },
  { name: "[Certification Name]", issuer: "[Issuing Organization]", year: "[Year]", credential: "#" },
];

export const whyQa = {
  paragraphs: [
    "I am particularly interested in Software Quality Assurance because I enjoy analyzing systems, identifying problems, thinking from the user's perspective, and improving software quality.",
    "My goal is to develop strong expertise in manual testing, API testing, test automation, and quality engineering while gaining practical experience in a professional software development environment.",
  ],
  workflow: [
    "Requirements",
    "Test Planning",
    "Test Case Design",
    "Test Execution",
    "Bug Reporting",
    "Regression Testing",
    "Quality Improvement",
  ],
};

export const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Education", id: "education" },
  { label: "Certifications", id: "certifications" },
  { label: "Resume", id: "resume" },
  { label: "Contact", id: "contact" },
];
