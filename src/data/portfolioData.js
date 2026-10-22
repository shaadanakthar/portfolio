/**
 * SHAADAN AKTHAR - PORTFOLIO DATA CONFIGURATION
 * 
 * This file is the single source of truth for personal information,
 * projects, skills, education, and links.
 * 
 * HOW TO UPDATE YOUR LINKS:
 * 1. Replace `githubUrl` under `personal` with your real GitHub profile URL.
 * 2. When your project repositories or live demos are ready, replace the `githubUrl` 
 *    and `liveUrl` fields in the `projects` array with your actual URLs.
 */

export const portfolioData = {
  personal: {
    name: "Shaadan Akthar",
    shortName: "Shaadan",
    eyebrow: "ARTIFICIAL INTELLIGENCE ENGINEERING STUDENT",
    title: "AI/ML Student | Machine Learning | Full-Stack Development",
    heroHeading: "Building Intelligent Solutions Through AI & Code.",
    heroDescription:
      "Artificial Intelligence engineering student with a focus on machine learning, computer vision, generative AI, and full-stack development. Driven by practical problem-solving, building thoughtful prototypes, and uniting smart algorithms with intuitive interfaces.",
    location: "Mangaluru, Karnataka, India",
    email: "shaadanakthar@gmail.com",
    linkedIn: "https://linkedin.com/in/shaadan-akthar",
    github: "https://github.com/shaadanakthar",
    isGithubPlaceholder: false,
    statusBadge: "Open to AI/ML Opportunities & Collaborations",
  },

  about: {
    quote:
      "“I’m a third-year Bachelor of Engineering student in Artificial Intelligence at AJ Institute of Engineering and Technology. I’m interested in applying AI and software development to practical problems, exploring machine learning and computer vision, and building applications that combine intelligent systems with usable interfaces. I enjoy experimenting with new tools, developing prototypes, and strengthening my technical skills through hands-on projects.”",
    summary:
      "Based in Mangaluru, India, I bridge the gap between machine intelligence and usable software. My academic path focuses on building a rigorous foundation in algorithms and artificial intelligence while maintaining an active hands-on commitment to full-stack engineering.",
    highlights: [
      { label: "Degree", value: "B.E. in Artificial Intelligence" },
      { label: "Institution", value: "AJ Institute of Engineering and Technology" },
      { label: "Location", value: "Mangaluru, Karnataka, India" },
      { label: "Academic Standing", value: "3rd Year Student (Pursuing)" },
      { label: "Core Focus", value: "AI/ML, Computer Vision & Full-Stack" },
    ],
  },

  skills: [
    {
      category: "Programming",
      icon: "Code2",
      description: "Core languages used for systems, scripting, and application logic.",
      items: [
        { name: "Python", badge: "Primary" },
        { name: "Java", badge: "Core" },
        { name: "C", badge: "Foundations" },
        { name: "JavaScript", badge: "Web" },
      ],
    },
    {
      category: "AI & Machine Learning",
      icon: "Brain",
      description: "Core algorithmic concepts, neural architectures, and vision pipelines.",
      items: [
        { name: "AI/ML Fundamentals", badge: "Theory" },
        { name: "Machine Learning", badge: "Applied" },
        { name: "Generative AI", badge: "LLMs" },
        { name: "Computer Vision", badge: "Vision" },
        { name: "OpenCV", badge: "Library" },
      ],
    },
    {
      category: "Web Development",
      icon: "Layout",
      description: "End-to-end web technologies for interactive user interfaces and APIs.",
      items: [
        { name: "React.js", badge: "Frontend" },
        { name: "HTML", badge: "Markup" },
        { name: "CSS", badge: "Styling" },
        { name: "Node.js", badge: "Runtime" },
        { name: "Express.js", badge: "Backend" },
        { name: "REST APIs", badge: "Architecture" },
      ],
    },
    {
      category: "Data & Tools",
      icon: "Database",
      description: "Database systems, AI tooling, and version control workflows.",
      items: [
        { name: "MongoDB", badge: "NoSQL" },
        { name: "Streamlit", badge: "AI UI" },
        { name: "Gemini API Integration", badge: "GenAI" },
        { name: "Git", badge: "VCS" },
        { name: "GitHub", badge: "Collaboration" },
      ],
    },
  ],

  projects: [
    {
      id: "gadgethub",
      number: "01",
      title: "GadgetHub",
      category: "Full-Stack Development",
      status: "Prototype",
      statusVariant: "warning", // warning | info | neutral
      tagline: "E-Commerce Gadget Store & Inventory Demo",
      description:
        "A gadget-store e-commerce demo designed around product listings, search, authentication, cart functionality, a checkout flow, and an admin dashboard. The project focuses on connecting frontend components with backend APIs and storing product, user, and cart data in MongoDB.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
      scopeLimitation:
        "Payment processing is explicitly outside the current scope. Focus is directed on API routing, database schema design, authentication flow, and interactive UI states.",
      overview:
        "GadgetHub is an end-to-end full-stack demonstration application modeling modern consumer electronics retail. It provides a cohesive customer journey from browsing categorized gadgets to managing cart items and proceeding through order review.",
      problem:
        "Demonstrating end-to-end data flow between dynamic client-side state in React and persistent NoSQL document collections, while handling concurrent state for search, cart updates, and administrative management.",
      approach:
        "Constructed reusable React components for dynamic catalog filtering and shopping cart synchronization. Implemented an Express.js backend handling REST endpoints for product CRUD and user sessions backed by MongoDB collections.",
      visualType: "ecommerce",
      // EDIT HERE: Set to your GitHub repo when available
      githubUrl: null,
      liveUrl: null,
      placeholderMessage: "Repository link will be published upon public release.",
    },
    {
      id: "ai-attendance-system",
      number: "02",
      title: "AI Attendance System",
      category: "Computer Vision / Full-Stack AI",
      status: "Proposed System",
      statusVariant: "info",
      tagline: "Automated Multi-Face Recognition & Attendance Logging",
      description:
        "An academic project concept for registering student faces and recognizing multiple students for attendance. The proposed workflow includes automatic date and time records, a dashboard, and attendance export.",
      technologies: ["Python", "OpenCV", "face-recognition / InsightFace", "Flask", "React", "MongoDB"],
      scopeLimitation:
        "Presented as an academic proposed system architecture. Hardware camera integration, multi-face embedding pipelines, and web UI dashboards are planned for campus testing.",
      overview:
        "A contactless attendance solution designed to replace manual roll calls in educational institutions through automated computer vision. The system architecture pairs facial detection and identification with real-time academic records.",
      problem:
        "Traditional classroom attendance consumes instructional time and is prone to human error or proxy attendance. A contactless visual pipeline automates logging securely.",
      approach:
        "Proposed pipeline utilizes OpenCV for frame capture and normalization, deep facial embedding extraction via InsightFace or dlib face-recognition, Flask REST endpoints for vector matching, and a responsive React administration portal.",
      visualType: "computervision",
      githubUrl: null,
      liveUrl: null,
      placeholderMessage: "System architecture & prototypes will be linked upon verification.",
    },
    {
      id: "code-mentor-ai",
      number: "03",
      title: "Code Mentor AI",
      category: "Generative AI",
      status: "Concept / Work in Progress",
      statusVariant: "info",
      tagline: "LLM-Powered Interactive Coding Assistant & Tutor",
      description:
        "A coding-assistant concept that uses a generative AI API to explain code and support programming tasks through a Streamlit interface.",
      technologies: ["Python", "Streamlit", "Gemini API"],
      scopeLimitation:
        "Concept and work in progress. Focuses on educational decomposition of code, prompt engineering for line-by-line debugging, and lightweight browser interaction.",
      overview:
        "Code Mentor AI is designed to act as an on-demand programming tutor for students and beginner developers. By providing plain-English breakdowns of algorithms, edge case warnings, and syntax corrections, it accelerates the learning curve.",
      problem:
        "Students frequently hit roadblocks when deciphering unfamiliar code syntax, legacy snippets, or abstract error logs without access to 1-on-1 tutoring.",
      approach:
        "Connects a Python Streamlit UI to Google's Gemini API with system instructions tuned for step-by-step pedagogical explanations, complexity breakdown, and best practice suggestions.",
      visualType: "genai",
      githubUrl: null,
      liveUrl: null,
      placeholderMessage: "Streamlit demo and repository link currently in development.",
    },
    {
      id: "student-performance-prediction",
      number: "04",
      title: "Student Performance Prediction",
      category: "Machine Learning",
      status: "Proposed Project",
      statusVariant: "neutral",
      tagline: "Predictive Analytics for Academic Trajectories",
      description:
        "An academic machine-learning project focused on predicting student performance from academic data. The proposed workflow includes data collection, preprocessing, feature selection, dataset splitting, model training and evaluation, and a teacher-facing dashboard.",
      technologies: ["Python", "Machine Learning"],
      scopeLimitation:
        "Academic proposed project. Model training, dataset validation, and metric evaluations will be reported following experimental verification without fabricated claims.",
      overview:
        "An academic machine-learning research framework aimed at identifying learning bottlenecks and forecasting student academic performance trends early in the semester.",
      problem:
        "Early identification of students requiring extra academic support is difficult in large cohorts without systematic predictive analysis of formative assessment metrics.",
      approach:
        "Encompasses structured data ingestion, exploratory data analysis (EDA), feature correlation selection, train/test splitting, regression and classification model training in Python, and dashboard visualization for academic advisors.",
      visualType: "analytics",
      githubUrl: null,
      liveUrl: null,
      placeholderMessage: "Research findings and pipeline code will be shared upon project review.",
    },
  ],

  education: {
    institution: "AJ Institute of Engineering and Technology",
    degree: "Bachelor of Engineering — Artificial Intelligence",
    location: "Mangaluru, Karnataka, India",
    period: "Started September 2024 — Currently Pursuing",
    description:
      "Undergraduate curriculum emphasizing foundational computer science, machine learning models, discrete mathematics, data structures, computer vision, and software engineering practices.",
  },

  areasOfInterest: [
    {
      title: "Applied AI",
      description: "Developing intelligent algorithms tailored to solve practical, real-world domain challenges.",
      icon: "Cpu",
    },
    {
      title: "Machine Learning",
      description: "Building predictive models through rigorous data preprocessing, feature engineering, and evaluation.",
      icon: "TrendingUp",
    },
    {
      title: "Computer Vision",
      description: "Extracting actionable visual intelligence, face detection, and image analysis using OpenCV.",
      icon: "ScanFace",
    },
    {
      title: "Generative AI",
      description: "Leveraging large language models and prompt architectures to build conversational assistants.",
      icon: "Sparkles",
    },
    {
      title: "Full-Stack Applications",
      description: "Creating resilient, modern web applications connecting React frontends with Node/Express backends.",
      icon: "Layers",
    },
    {
      title: "Practical Problem Solving",
      description: "Emphasizing working prototypes, clean code architecture, and continuous technical experimentation.",
      icon: "Wrench",
    },
  ],
};
