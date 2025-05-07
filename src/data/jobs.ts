
export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  payRate?: string;
  type: string;
  postedDays: string;
  quickApply: boolean;
  rating?: number;
  description: string;
  qualifications: string[];
}

// Mock data for our job listings
export const jobsData: Job[] = [
  {
    id: "1",
    title: "Frontend Developer",
    company: "TechCorp",
    location: "San Francisco, CA",
    payRate: "$45-55/hr",
    type: "Full-time",
    postedDays: "3d",
    quickApply: true,
    rating: 4.2,
    description: "We are looking for a skilled Frontend Developer to join our dynamic team. You will be responsible for building and maintaining user interfaces for our web applications using modern JavaScript frameworks.\n\nYou'll collaborate with designers, backend developers, and product managers to create seamless user experiences that align with our business goals.\n\nThe ideal candidate is passionate about web technologies, stays current with industry trends, and can translate complex requirements into elegant code solutions.",
    qualifications: ["React", "TypeScript", "3+ years experience", "Tailwind CSS", "REST APIs"]
  },
  {
    id: "2",
    title: "UI/UX Designer",
    company: "Creative Solutions",
    location: "New York, NY",
    payRate: "$40-50/hr",
    type: "Contract",
    postedDays: "5d",
    quickApply: false,
    rating: 4.5,
    description: "Creative Solutions is seeking a talented UI/UX Designer to create engaging and intuitive user experiences across our digital products. You'll work closely with our product and development teams to design user-centered interfaces that balance business goals with user needs.\n\nResponsibilities include conducting user research, creating wireframes, developing prototypes, and designing visual elements that enhance the overall user experience of our applications.",
    qualifications: ["Figma", "User Research", "Prototyping", "Visual Design", "UI/UX Principles"]
  },
  {
    id: "3",
    title: "Backend Engineer",
    company: "DataFlow Systems",
    location: "Austin, TX",
    payRate: "$60-70/hr",
    type: "Full-time",
    postedDays: "2d",
    quickApply: true,
    description: "Join our engineering team at DataFlow Systems to build robust server-side applications and APIs. You'll be developing scalable solutions that power our data processing platform used by Fortune 500 companies.\n\nWe're looking for someone who understands distributed systems, has experience with cloud infrastructure, and can write clean, maintainable code that performs well under high load conditions.",
    qualifications: ["Node.js", "Python", "AWS", "Database Design", "Microservices"]
  },
  {
    id: "4",
    title: "Product Manager",
    company: "InnovateTech",
    location: "Chicago, IL",
    type: "Full-time",
    postedDays: "7d",
    quickApply: false,
    rating: 4.0,
    description: "As a Product Manager at InnovateTech, you'll drive the development of our flagship SaaS platform from concept to launch. Your role will involve identifying market opportunities, defining product requirements, and working with engineering, design, and marketing teams to deliver features that address customer needs.\n\nWe're looking for a strategic thinker who can balance business objectives, technical constraints, and user experience to create products that customers love.",
    qualifications: ["Product Strategy", "Agile Methodologies", "User Story Mapping", "Analytics", "B2B SaaS Experience"]
  },
  {
    id: "5",
    title: "DevOps Engineer",
    company: "CloudNative Inc",
    location: "Seattle, WA",
    payRate: "$50-65/hr",
    type: "Full-time",
    postedDays: "1d",
    quickApply: true,
    rating: 4.7,
    description: "CloudNative Inc is looking for a DevOps Engineer to join our platform team. You'll be responsible for designing, implementing, and maintaining our CI/CD pipelines, cloud infrastructure, and monitoring systems.\n\nThis role requires someone who can automate deployment processes, optimize system performance, and ensure high availability of our production environments. You'll work in a collaborative environment where knowledge sharing and continuous improvement are highly valued.",
    qualifications: ["Kubernetes", "Docker", "CI/CD", "Terraform", "Monitoring Tools"]
  },
  {
    id: "6",
    title: "Data Scientist",
    company: "AnalyticsAI",
    location: "Boston, MA",
    payRate: "$55-75/hr",
    type: "Remote",
    postedDays: "4d",
    quickApply: false,
    description: "AnalyticsAI is expanding our data science team to develop advanced machine learning models for our predictive analytics platform. In this role, you'll analyze complex datasets, develop algorithms, and translate business problems into data-driven solutions.\n\nWe're looking for someone with strong statistical knowledge, programming skills, and the ability to communicate technical concepts to non-technical stakeholders. This position offers the opportunity to work with cutting-edge technologies and contribute to solving real-world problems.",
    qualifications: ["Machine Learning", "Python", "SQL", "Data Visualization", "Statistical Analysis"]
  },
  {
    id: "7",
    title: "Technical Writer",
    company: "Documentation Pros",
    location: "San Francisco, CA",
    payRate: "$35-45/hr",
    type: "Part-time",
    postedDays: "9d",
    quickApply: true,
    description: "Documentation Pros is hiring a Technical Writer to create clear, concise, and comprehensive documentation for software products. You'll work with developers and product managers to understand complex systems and translate technical information into user-friendly guides, tutorials, and API documentation.\n\nThe ideal candidate has excellent writing skills, technical aptitude, and the ability to present information in a way that meets the needs of different audience types, from developers to end users.",
    qualifications: ["Technical Writing", "API Documentation", "Markdown", "Information Architecture", "Editing"]
  },
  {
    id: "8",
    title: "QA Engineer",
    company: "Quality Systems",
    location: "Denver, CO",
    payRate: "$40-50/hr",
    type: "Full-time",
    postedDays: "6d",
    quickApply: false,
    rating: 3.9,
    description: "Quality Systems is looking for a detail-oriented QA Engineer to ensure our software products meet the highest standards of quality. Your responsibilities will include designing and executing test plans, identifying and documenting bugs, and collaborating with developers to resolve issues.\n\nWe're seeking someone with a methodical approach to testing, strong analytical skills, and experience with both manual and automated testing methodologies.",
    qualifications: ["Test Automation", "Selenium", "JIRA", "Bug Tracking", "Test Case Design"]
  }
];
