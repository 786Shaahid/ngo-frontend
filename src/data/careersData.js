export const careersData = [
  {
    id: 1,
    title: "Program Manager - Healthcare",
    department: "Healthcare",
    location: "Mumbai, Maharashtra",
    type: "Full-time",
    experience: "3-5 years",
    salary: "₹6-8 LPA",
    postedDate: "2024-01-15",
    lastDate: "2024-02-15",
    vacancies: 2,
    description: "Lead healthcare initiatives and manage field operations for our medical programs across rural Maharashtra.",
    requirements: [
      "Bachelor's degree in Public Health, Medicine, or related field",
      "3+ years experience in healthcare program management",
      "Strong leadership and communication skills",
      "Experience working with rural communities",
      "Proficiency in Hindi and Marathi"
    ],
    responsibilities: [
      "Oversee healthcare program implementation",
      "Coordinate with medical professionals and volunteers",
      "Monitor program effectiveness and impact",
      "Prepare reports and documentation",
      "Engage with local communities and stakeholders"
    ],
    benefits: [
      "Health insurance coverage",
      "Professional development opportunities",
      "Flexible working arrangements",
      "Travel allowances",
      "Performance-based incentives"
    ]
  },
  {
    id: 2,
    title: "Education Coordinator",
    department: "Education",
    location: "Delhi, NCR",
    type: "Full-time",
    experience: "2-4 years",
    salary: "₹4-6 LPA",
    postedDate: "2024-01-10",
    lastDate: "2024-02-10",
    vacancies: 3,
    description: "Coordinate educational programs and initiatives to improve literacy rates in underserved communities.",
    requirements: [
      "Master's degree in Education or related field",
      "2+ years experience in educational program coordination",
      "Strong organizational and project management skills",
      "Experience with digital learning platforms",
      "Excellent written and verbal communication skills"
    ],
    responsibilities: [
      "Design and implement educational curricula",
      "Train teachers and volunteers",
      "Monitor student progress and outcomes",
      "Coordinate with schools and educational institutions",
      "Develop educational materials and resources"
    ],
    benefits: [
      "Comprehensive health benefits",
      "Professional training and certification",
      "Collaborative work environment",
      "Career advancement opportunities",
      "Educational assistance for family"
    ]
  },
  {
    id: 3,
    title: "Field Operations Specialist",
    department: "Operations",
    location: "Bangalore, Karnataka",
    type: "Full-time",
    experience: "1-3 years",
    salary: "₹3-5 LPA",
    postedDate: "2024-01-20",
    lastDate: "2024-02-20",
    vacancies: 4,
    description: "Support field operations and ensure smooth execution of programs across various project sites.",
    requirements: [
      "Bachelor's degree in any field",
      "1+ years experience in field operations or social work",
      "Willingness to travel extensively",
      "Strong problem-solving abilities",
      "Local language proficiency preferred"
    ],
    responsibilities: [
      "Coordinate field activities and logistics",
      "Support program implementation teams",
      "Collect and analyze field data",
      "Maintain relationships with local partners",
      "Ensure compliance with safety protocols"
    ],
    benefits: [
      "Travel and accommodation provided",
      "Health and accident insurance",
      "Skill development programs",
      "Team building activities",
      "Performance recognition awards"
    ]
  },
  {
    id: 4,
    title: "Digital Marketing Specialist",
    department: "Communications",
    location: "Remote",
    type: "Full-time",
    experience: "2-4 years",
    salary: "₹5-7 LPA",
    postedDate: "2024-01-12",
    lastDate: "2024-02-12",
    vacancies: 1,
    description: "Drive digital marketing initiatives to increase awareness and support for our cause through various online channels.",
    requirements: [
      "Bachelor's degree in Marketing, Communications, or related field",
      "2+ years experience in digital marketing",
      "Proficiency in social media platforms and analytics tools",
      "Experience with content creation and SEO",
      "Creative thinking and analytical skills"
    ],
    responsibilities: [
      "Develop and execute digital marketing strategies",
      "Manage social media accounts and campaigns",
      "Create engaging content for various platforms",
      "Analyze campaign performance and optimize",
      "Collaborate with design and content teams"
    ],
    benefits: [
      "Remote work flexibility",
      "Latest technology and tools",
      "Creative freedom and autonomy",
      "Professional development budget",
      "Flexible working hours"
    ]
  },
  {
    id: 5,
    title: "Finance and Accounts Manager",
    department: "Finance",
    location: "Chennai, Tamil Nadu",
    type: "Full-time",
    experience: "4-6 years",
    salary: "₹7-10 LPA",
    postedDate: "2024-01-08",
    lastDate: "2024-02-08",
    vacancies: 1,
    description: "Manage financial operations, budgeting, and compliance for all organizational activities and programs.",
    requirements: [
      "CA/CMA or Master's degree in Finance/Accounting",
      "4+ years experience in finance management",
      "Knowledge of NGO accounting and compliance",
      "Proficiency in accounting software and Excel",
      "Strong analytical and reporting skills"
    ],
    responsibilities: [
      "Oversee financial planning and budgeting",
      "Ensure compliance with regulatory requirements",
      "Manage donor funds and grant reporting",
      "Prepare financial statements and reports",
      "Coordinate with auditors and regulatory bodies"
    ],
    benefits: [
      "Competitive salary package",
      "Professional certification support",
      "Health and life insurance",
      "Retirement benefits",
      "Annual performance bonuses"
    ]
  },
  {
    id: 6,
    title: "Volunteer Coordinator",
    department: "Human Resources",
    location: "Pune, Maharashtra",
    type: "Part-time",
    experience: "1-2 years",
    salary: "₹2-3 LPA",
    postedDate: "2024-01-18",
    lastDate: "2024-02-18",
    vacancies: 2,
    description: "Recruit, train, and coordinate volunteers for various programs and events across the organization.",
    requirements: [
      "Bachelor's degree in any field",
      "1+ years experience in volunteer management or HR",
      "Excellent interpersonal and communication skills",
      "Event management experience preferred",
      "Passion for social work and community service"
    ],
    responsibilities: [
      "Recruit and onboard new volunteers",
      "Organize volunteer training sessions",
      "Coordinate volunteer schedules and assignments",
      "Maintain volunteer database and records",
      "Recognize and appreciate volunteer contributions"
    ],
    benefits: [
      "Flexible working hours",
      "Networking opportunities",
      "Skill development workshops",
      "Certificate programs",
      "Community impact recognition"
    ]
  }
];

export const getJobsByDepartment = (department) => {
  return careersData.filter(job => job.department === department);
};

export const getJobsByType = (type) => {
  return careersData.filter(job => job.type === type);
};

export const getJobsByLocation = (location) => {
  return careersData.filter(job => job.location.includes(location));
};