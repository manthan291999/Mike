export type NavItem = {
  label: string;
  href: `#${string}`;
};

export type QuickStat = {
  label: string;
  value: string;
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  demo?: string;
  github?: string;
};

export type TimelineItem = {
  title: string;
  org: string;
  location: string;
  period: string;
  bullets: string[];
};

export type EducationItem = {
  institution: string;
  location: string;
  degree: string;
  period: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

export const profile = {
  name: "Manthan Mittal",
  role: "AI & Robotics Engineer",
  tagline: "Building intelligent machines and immersive digital experiences.",
  location: "Ahmedabad, India",
  email: "manthanmittal93@gmail.com",
  phone: "+918200681650",
  bio: "MSc Artificial Intelligence graduate with a strong technical foundation in Information Technology. Experienced in machine learning pipelines, robotics simulation (ROS2), and full-stack development. Practical history of building predictive models and optimizing business processes for international clients.",
  heroDescription:
    "I design, build, and ship AI systems that connect data, software, and robotic behavior into measurable outcomes.",
  quickStats: [
    { label: "Experience", value: "1+ years" },
    { label: "Domains", value: "AI, Robotics, Full-stack" },
    { label: "Focus", value: "Scalable ML Systems" }
  ] as QuickStat[]
};

export const skillGroups: SkillGroup[] = [
  {
    category: "AI/ML",
    items: ["TensorFlow", "PyTorch", "Scikit-learn", "LLMs", "CNN/RNN/GNN"]
  },
  {
    category: "Robotics",
    items: ["ROS2", "Gazebo", "TurtleBot", "LIDAR", "PID", "Fuzzy Logic"]
  },
  {
    category: "Web & 3D",
    items: ["React", "Next.js", "Node.js", "Express.js", "MERN"]
  },
  {
    category: "Tools & Platforms",
    items: ["AWS", "Oracle OCI", "Firebase", "MongoDB", "SQLite", "Git"]
  }
];

export const experience: TimelineItem[] = [
  {
    title: "AI & Data Analytics Intern",
    org: "KM Steel",
    location: "Remote (UK/India)",
    period: "Dec 2024 – Sep 2025",
    bullets: [
      "Built predictive models using Python, scikit-learn, and pandas for forecasting and operational insights.",
      "Engineered data cleaning pipelines to improve model quality and reliability.",
      "Developed KPI dashboards and collaborated with operations teams to adopt AI-driven workflows."
    ]
  },
  {
    title: "Android Development Intern",
    org: "Silver Touch Technologies Ltd.",
    location: "Ahmedabad, India",
    period: "Jan 2022 – Apr 2022",
    bullets: [
      "Developed a real-time Chat App with Android SDK.",
      "Implemented backend workflows with Firebase and Express.js.",
      "Added authentication and real-time sync for user messaging."
    ]
  }
];

export const education: EducationItem[] = [
  {
    institution: "University of Essex",
    location: "United Kingdom",
    degree: "MSc in Artificial Intelligence",
    period: "Oct 2023 – Oct 2024"
  },
  {
    institution: "Ahmedabad Institute of Technology",
    location: "Gujarat, India",
    degree: "Bachelor of Engineering in Information Technology",
    period: "2018 – 2022"
  }
];

export const projects: Project[] = [
  {
    title: "Feedforward Neural Network for Robotic Kinematics",
    description:
      "Implemented an MLP from scratch for non-linear robotic control prediction and stabilized training convergence by correcting RMSE loss and architecture flow.",
    tech: ["Python", "NumPy"]
  },
  {
    title: "Rossmann Store Sales Forecasting",
    description:
      "Engineered a forecasting pipeline for 1,115 stores and benchmarked XGBoost against RNN/LSTM models to capture temporal patterns.",
    tech: ["TensorFlow", "XGBoost", "Scikit-learn"]
  },
  {
    title: "Autonomous Robot Navigation System",
    description:
      "Built hybrid wall-following and obstacle-avoidance behavior in ROS2/Gazebo using LIDAR, PID control, and fuzzy logic switching.",
    tech: ["ROS2", "Gazebo", "C++", "Fuzzy Logic"]
  },
  {
    title: "DocInsight: Retrieval Q&A Engine",
    description:
      "Developed a RAG system for querying unstructured PDFs with context filtering and guardrail-based evaluation.",
    tech: ["LLMs", "Vector DB"]
  },
  {
    title: "Web Task Autopilot",
    description:
      "Created an autonomous browser workflow agent for form-filling and data extraction using reasoning loops.",
    tech: ["Selenium", "LLMs"]
  }
];

export const certifications = [
  "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
  "Programming with Python and IoT Perspective — Panjab University (2021)",
  "E-Workshop on Android — AIT (2020)",
  "E-Workshop on AWS — AIT (2020)"
];

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "GitHub", href: "https://github.com/" },
  { label: "Twitter", href: "https://twitter.com/" }
];
