export const projectsData = [
  {
    id: 1,
    title: "Clean Water Initiative",
    description: "Providing clean drinking water to rural communities through bore wells and water purification systems.",
    image: "https://images.unsplash.com/photo-1541919329513-35f7af297129?w=500&auto=format&fit=crop&q=60",
    category: "Water & Sanitation",
    status: "Active",
    location: "Rajasthan, India",
    beneficiaries: 2500,
    startDate: "2023-01-15",
    budget: "₹15,00,000",
    progress: 75,
    highlights: [
      "50 bore wells installed",
      "10 water purification plants",
      "2500+ people benefited",
      "5 villages covered"
    ]
  },
  {
    id: 2,
    title: "Digital Education Program",
    description: "Bridging the digital divide by providing tablets and internet connectivity to underprivileged students.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&auto=format&fit=crop&q=60",
    category: "Education",
    status: "Active",
    location: "Maharashtra, India",
    beneficiaries: 1200,
    startDate: "2023-03-01",
    budget: "₹25,00,000",
    progress: 60,
    highlights: [
      "500 tablets distributed",
      "20 schools connected",
      "1200+ students enrolled",
      "Digital literacy training"
    ]
  },
  {
    id: 3,
    title: "Healthcare Mobile Clinics",
    description: "Mobile healthcare units providing medical services to remote areas with limited access to hospitals.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&auto=format&fit=crop&q=60",
    category: "Healthcare",
    status: "Completed",
    location: "Odisha, India",
    beneficiaries: 5000,
    startDate: "2022-06-01",
    budget: "₹30,00,000",
    progress: 100,
    highlights: [
      "3 mobile clinics deployed",
      "5000+ patients treated",
      "50 villages covered",
      "Vaccination drives conducted"
    ]
  },
  {
    id: 4,
    title: "Women Empowerment Center",
    description: "Skill development and entrepreneurship training for women in rural areas.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60",
    category: "Women Empowerment",
    status: "Active",
    location: "Gujarat, India",
    beneficiaries: 800,
    startDate: "2023-05-01",
    budget: "₹12,00,000",
    progress: 45,
    highlights: [
      "300 women trained",
      "50 micro-enterprises started",
      "Tailoring and handicraft skills",
      "Financial literacy programs"
    ]
  },
  {
    id: 5,
    title: "Solar Energy for Schools",
    description: "Installing solar panels in government schools to ensure uninterrupted power supply.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&auto=format&fit=crop&q=60",
    category: "Environment",
    status: "Planning",
    location: "Tamil Nadu, India",
    beneficiaries: 3000,
    startDate: "2024-01-01",
    budget: "₹20,00,000",
    progress: 15,
    highlights: [
      "25 schools identified",
      "Solar capacity planning",
      "Environmental impact study",
      "Community awareness programs"
    ]
  },
  {
    id: 6,
    title: "Nutrition Support Program",
    description: "Providing nutritious meals and supplements to malnourished children and pregnant women.",
    image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=500&auto=format&fit=crop&q=60",
    category: "Nutrition",
    status: "Active",
    location: "Bihar, India",
    beneficiaries: 1500,
    startDate: "2023-02-01",
    budget: "₹18,00,000",
    progress: 80,
    highlights: [
      "1500 children covered",
      "300 pregnant women supported",
      "Daily meal programs",
      "Nutrition education sessions"
    ]
  }
];

export const getProjectsByStatus = (status) => {
  return projectsData.filter(project => project.status === status);
};

export const getProjectsByCategory = (category) => {
  return projectsData.filter(project => project.category === category);
};