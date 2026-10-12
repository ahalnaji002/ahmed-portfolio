export const projects = [
  {
    id: "salman-family",
    title: "Salman Family Registry",
    category: "Web Application",

    role: "Backend Developer",

    overview:
      "A web-based family registration platform designed to collect, organize, and manage family data through a secure registration system and admin dashboard.",

    description:
      "A secure family registry platform for organizing records, managing registrations, and exporting structured data.",

    challenge:
      "Collecting and managing large amounts of family information manually is difficult and requires an organized digital solution.",

    solution:
      "Built a full-stack web platform with structured database design, authentication, and administrative tools to manage family records efficiently.",

    features: [
      "Family registration",
      "Admin dashboard",
      "Data management",
      "Excel export",
    ],

    tech: ["React", "Node.js", "Express.js", "MySQL", "JWT"],

    image: "/projects/salman.webp",

    liveDemo: "https://salman-family.com/",

    featured: true,
  },

  {
    id: "hcms",
    title: "Healthcare Conflict Management System",
    category: "Graduation Project",

    role: "Project Manager & Backend Developer",

    overview:
      "A healthcare coordination platform connecting patients, doctors, NGOs, and administrators through registration, medical records, care assignments, and treatment workflows.",

    description:
      "A healthcare platform for coordinating care during conflict. The current build uses separate React/Vite frontend and Node/Express backend repositories.",

    challenge:
      "Coordinate patients, clinicians, NGOs, and administrators while protecting role-specific medical information and keeping care workflows connected.",

    solution:
      "Designed a MySQL-backed REST API with transactional registration and review workflows, role-based access control, and doctor-patient care management.",

    features: [
      "Patient, doctor, and NGO registration with admin review",
      "Role-based access and doctor-patient assignments",
      "Medical records and doctor-owned notes",
      "Continuing-care treatment plans, medications, and appointments",
      "Transactional workflows across a 19-table MySQL schema",
    ],

    tech: ["React", "Vite", "Node.js", "Express.js", "MySQL", "Knex.js", "JWT", "Axios"],

    image: "/projects/hcms.png",

    githubBackend: "https://github.com/ahalnaji002/HCMS-Backend",
    githubFrontend: "https://github.com/ahalnaji002/HCMS-Frontend",

    featured: true,
  },

  {
    id: "barq-sms",
    title: "Barq SMS",
    category: "Mobile Application",
    role: "Flutter Developer",
    overview:
      "An Android app for importing beneficiary lists from Excel, personalizing bulk SMS messages, and keeping a local sending history.",

    challenge:
      "Managing beneficiary spreadsheets and sending personalized messages can be slow, error-prone, and expose sensitive information on a device.",

    solution:
      "Built an Arabic RTL Flutter app with Excel import, duplicate checks, SMS personalization and delivery states, plus an encrypted local database.",
    description:
      "An Android Flutter app for importing beneficiary spreadsheets, personalizing bulk SMS, and tracking local send results.",
    tech: ["Flutter", "Dart", "Excel", "Android SMS", "SQLCipher", "Secure Storage"],
    features: [
      "Import and map Excel beneficiary lists",
      "Detect duplicate ID numbers or phone numbers",
      "Personalize bulk SMS with beneficiary details",
      "Track sent, delivered, and failed message states",
      "Encrypted local database and optional PIN lock",
    ],
    image: "/projects/barq.webp",
    github: "https://github.com/ahalnaji002/barq-sms",
    featured: false,
  },

  {
    id: "shop-manager",
    title: "Shop Manager",
    category: "Mobile Application",

    role: "Flutter Developer",

    overview:
      "A cross-platform shop management app for inventory, sales, customer accounts, debt tracking, expenses, and reports.",

    challenge:
      "Small shops need reliable sales and inventory records that keep working offline while separating owner financial data from worker access.",

    solution:
      "Built Flutter clients backed by Firebase, with trusted Cloud Functions for transactional sales and stock operations and a local queue for offline sales.",
    description:
      "A Flutter shop management app with cash and credit sales, inventory, customer debts, expenses, and offline sale syncing.",
    features: [
      "Cash and customer-credit sales with FIFO cost accounting",
      "Inventory intake and stock movement tracking",
      "Debt payments applied to oldest active invoices",
      "Offline sales queued and synced after reconnection",
      "Owner and worker access with protected financial records",
      "Reports, expenses, customer statements, and PDF export",
    ],

    tech: ["Flutter", "Dart", "Firebase Auth", "Cloud Firestore", "Cloud Functions", "Drift / SQLite"],

    image: "/projects/shop.webp",
    github: "https://github.com/ahalnaji002/shop_manager",
    featured: false,
  },

  {
    id: "volunteer-management",
    title: "Volunteer Management Backend",
    category: "Backend System",

    role: "Backend Developer",

    overview:
      "A volunteer coordination system with a Laravel REST API and an optional React dashboard for administrators and volunteers.",

    description:
      "A Laravel API and React dashboard for managing volunteers, tasks, work locations, and assignments with role-based access.",

    challenge:
      "Coordinate volunteers across work locations and tasks while ensuring each volunteer can access only their own assignments.",

    solution:
      "Built Sanctum-authenticated API endpoints for administrator management and volunteer self-service, backed by PostgreSQL and an optional React client.",

    features: [
      "Admin management for volunteers, tasks, locations, and assignments",
      "Role-based login and protected routes",
      "Volunteer profile and personal assignment views",
      "Assignment validation and authenticated self-service",
      "Optional React dashboard with CRUD screens",
    ],

    tech: ["Laravel 12", "PHP", "PostgreSQL", "Sanctum", "React", "Vite", "Tailwind CSS"],

    image: "/projects/volunteer.webp",

    github: "https://github.com/ahalnaji002/Volunteer-Coordination",

    featured: false,
  },

  {
    id: "sanabil-platform",
    title: "Sanabil Educational Platform",
    category: "Full-Stack Web Platform",
    description:
      "An Arabic-first educational platform for students across Palestine, guiding learners from their grade to approved Google Drive destinations for each subject.",
    overview:
      "A full-stack educational platform with independently deployed frontend and backend applications. Students browse grades and subjects, then open approved learning resources in Google Drive.",
    role: "Full-Stack Developer",
    challenge:
      "Making approved subject resources easy to discover for students while giving administrators a clear way to manage educational content.",
    solution:
      "Built an Arabic RTL student experience and a protected admin dashboard backed by a REST API and database-driven content.",
    features: [
      "Arabic RTL student homepage",
      "Grade-first subject discovery",
      "Approved Google Drive destinations",
      "Admin management for grades and subjects",
      "Drive link and announcement management",
      "Protected admin authentication",
    ],
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Express.js",
      "Prisma",
      "MySQL",
      "Axios",
    ],
    image: "/projects/sanabil.png",
    liveDemo: "https://sanabil-platform.space/",
    github: "https://github.com/ahalnaji002/sanabil-educational-platform",
    featured: true,
  },
];
