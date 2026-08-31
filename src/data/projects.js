export const projects = [
  {
    id: "salman-family",
    title: "Salman Family Registry",
    category: "Web Application",

    role: "Backend Developer",

    overview:
      "A web-based family registration platform designed to collect, organize, and manage family data through a secure registration system and admin dashboard.",

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

    image: "/projects/salman.png",

    liveDemo: "",

    featured: true,
  },

  {
    id: "hcms",
    title: "Healthcare Conflict Management System",
    category: "Graduation Project",

    role: "Project Manager & Backend Developer",

    overview:
      "A healthcare management platform that connects patients, doctors, NGOs, and administrators through a centralized system for managing medical information and assistance workflows.",

    challenge:
      "Healthcare systems require organized communication between different roles while maintaining structured medical records and efficient assistance management.",

    solution:
      "Developed a full-stack platform with role-based access control, RESTful APIs, and structured database design to support healthcare workflows.",

    features: [
      "Patient management",
      "Doctor workflows",
      "Medical records",
      "Emergency alerts",
      "NGO assistance requests",
      "Role-based authentication",
    ],

    tech: ["React", "Node.js", "Express.js", "MySQL", "JWT"],

    image: "/projects/hcms.png",

    github: "",

    featured: true,
  },

  {
    id: "barq-sms",
    title: "Barq SMS",
    category: "Mobile Application",
    role: "Mobile Developer",
    overview:
      "A mobile application designed to simplify beneficiary management by importing data, organizing distribution lists, and sending SMS notifications efficiently.",

    challenge:
      "Managing large beneficiary lists manually makes verification and communication processes slower and more error-prone.",

    solution:
      "Created a Flutter mobile application that allows users to import beneficiary data, verify records, organize distribution cycles, and send messages through an easy-to-use interface.",
    description:
      "A mobile application for importing beneficiaries, managing distribution lists, and sending SMS messages efficiently.",
    tech: ["Flutter", "Dart", "Firebase", "Excel Import"],
    features: [
      "Import beneficiaries",
      "SMS management",
      "Data verification",
      "Distribution tracking",
    ],
    gallery: [
      "/projects/barq-1.png",
      "/projects/barq-2.png",
      "/projects/barq-3.png",
    ],
    image: "/projects/barq.png",
    featured: false,
  },

  {
    id: "shop-manager",
    title: "Shop Manager",
    category: "Mobile Application",

    role: "Mobile Developer",

    overview:
      "A mobile shop management application built to help small businesses manage invoices, customer accounts, debts, and daily sales operations.",

    challenge:
      "Small shops often need simple tools to track customer debts and sales without using complex management systems.",

    solution:
      "Built a Flutter application integrated with Firebase to provide a lightweight solution for managing customers, invoices, and business records.",
    features: [
      "Invoice management",
      "Customer accounts",
      "Debt tracking",
      "Firebase authentication",
      "Cloud data storage",
    ],

    tech: [
      "Flutter",
      "Dart",
      "Firebase",
      "Cloud Firestore",
      "Firebase Authentication",
    ],

    gallery: [
      "/projects/shop-1.png",
      "/projects/shop-2.png",
      "/projects/shop-3.png",
    ],

    image: "/projects/shop.png",
    featured: false,
  },

  {
    id: "volunteer-management",
    title: "Volunteer Management Backend",
    category: "Backend System",

    role: "Backend Developer",

    overview:
      "A backend system designed to manage volunteers, tasks, work locations, and assignments through structured database relationships and APIs.",

    challenge:
      "Volunteer organizations need a reliable system to organize volunteers and assign tasks efficiently while maintaining clear data relationships.",

    solution:
      "Built a Laravel backend with PostgreSQL database design, Eloquent relationships, and API endpoints to manage volunteer operations.",

    features: [
      "Volunteer management",
      "Task assignment",
      "Work location management",
      "Database relationships",
      "REST API development",
    ],

    tech: ["Laravel", "PHP", "PostgreSQL", "Eloquent ORM", "REST APIs"],

    image: "/projects/volunteer.png",

    github: "",

    featured: false,
  },
];
