import { FaBolt, FaMobileAlt, FaMoneyBillWave } from "react-icons/fa";
// import video from '../../public/assets/video/salonVideo.mp4'


export const benefits = [
  {
    icon: "🎯",
    title: "Smart Appointment System",
    description:
      "Never lose another booking. Real-time calendar + walk-in management + automatic reminders = 35% fewer no-shows",
  },
  {
    icon: "👥",
    title: "Staff Performance Tracking",
    description:
      "Know exactly who's making you money. Automatic commission calculations + performance analytics + leave management",
  },
  {
    icon: "💰",
    title: "Revenue-Boosting Billing",
    description:
      "GST-compliant invoices in seconds. Upsell tracking, package deals, split payments - increase average ticket size by 25%",
  },
  {
    icon: "📦",
    title: "Smart Inventory Control",
    description:
      "Never run out of products again. Auto-reorder alerts + usage tracking + cost analysis",
  },
  {
    icon: "💬",
    title: "Customer Retention Automation",
    description:
      "Bring customers back automatically. WhatsApp follow-ups + birthday offers + loyalty points that actually work",
  },
  {
    icon: "🎁",
    title: "Membership & Loyalty Engine",
    description:
      "Turn one-time visitors into lifetime customers. Prepaid packages + cashback + referral rewards",
  },
  {
    icon: "🏢",
    title: "Multi-Location Mastery",
    description:
      "Manage 50 salons from one dashboard. Franchise owners save 15+ hours weekly",
  },
  {
    icon: "📊",
    title: "Profit Intelligence",
    description:
      "Know your numbers instantly. Which services, staff, and times make you the most money",
  },
];

export const steps = [
  {
    icon: <FaBolt className="text-3xl text-indigo-600" />,
    title: "Step 1: Quick Setup (30 Minutes)",
    emoji: "⚡",
    points: [
      "Upload your service menu with pricing",
      "Add staff profiles and working hours",
      "Set up your salon's operating schedule",
      "*We handle the technical setup – you focus on your business*"
    ],
  },
  {
    icon: <FaMobileAlt className="text-3xl text-indigo-600" />,
    title: "Step 2: Start Accepting Bookings",
    emoji: "📱",
    points: [
      "Online bookings through your custom link",
      "Walk-ins managed on your dashboard",
      "Automatic confirmations and reminders",
      "*Never miss another appointment*"
    ],
  },
  {
    icon: <FaMoneyBillWave className="text-3xl text-indigo-600" />,
    title: "Step 3: Watch Your Revenue Grow",
    emoji: "💰",
    points: [
      "Bills generated automatically with GST",
      "Customer follow-ups sent on autopilot",
      "Staff commissions calculated instantly",
      "*Spend time growing your business, not managing paperwork*"
    ],
  },
];

export const plans = [
  {
    name: "STARTER PLAN",
    emoji: "🚀",
    price: "₹7,000/year",
    monthly: "₹583/month",
    description: "Perfect for solo stylists & small salons",
    features: [
      "✅ Unlimited appointments & walk-ins",
      "✅ GST-ready billing & invoicing",
      "✅ Basic customer database",
      "✅ WhatsApp booking confirmations",
      "✅ Daily/weekly reports",
      "✅ Phone & chat support"
    ],
    note: "Most popular for new salon owners",
    highlight: false,
  },
  {
    name: "GROWTH PLAN",
    emoji: "🏆",
    price: "₹14,000/year",
    monthly: "₹1,167/month",
    description: "For salons ready to scale (3–10 staff)",
    features: [
      "✅ Everything in Starter, plus:",
      "✅ Advanced loyalty & membership system",
      "✅ Inventory management with alerts",
      "✅ 500 automated WhatsApp messages/month",
      "✅ Staff performance analytics",
      "✅ Customer retention campaigns",
      "✅ Package & combo deals"
    ],
    note: "Recommended for most salons",
    highlight: true,
  },
  {
    name: "ELITE PLAN",
    emoji: "💎",
    price: "₹25,000/year",
    monthly: "₹2,083/month",
    description: "For franchises & multi-location salons",
    features: [
      "✅ Everything in Growth, plus:",
      "✅ Unlimited locations management",
      "✅ 2,000 WhatsApp messages/month",
      "✅ Advanced analytics & profit reports",
      "✅ Priority support (2-hour response)",
      "✅ Custom integrations",
      "✅ Dedicated account manager"
    ],
    note: "Perfect for salon chains",
    highlight: false,
  },
];

export const testimonials = [
  {
    name: "Priya Sharma",
    salon: "Glamour Studio, Mumbai",
    review:
      "My revenue increased by 45% in just 3 months. The loyalty system brings customers back automatically, and I finally know which services are actually profitable.",
  },
  {
    name: "Rajesh Kumar",
    salon: "Hair & Care Franchise (12 locations), Delhi",
    review:
      "Managing 12 salons was a nightmare. Now I can see everything from one dashboard. My managers love it, and I'm saving 20+ hours every week.",
  },
  {
    name: "Meera Patel",
    salon: "Scissors & Style, Ahmedabad",
    review:
      "The WhatsApp automation alone saves me 2 hours daily. Customers love getting automatic reminders, and my no-show rate dropped by 60%.",
  },
  {
    name: "Vikram Singh",
    salon: "The Salon Hub, Bangalore",
    review:
      "I was skeptical about salon software, but Lokaci Pro actually increased my profits from day one. The GST billing saves me thousands in accountant fees.",
  },
];

export const faqs = [
  {
    question: "Do I need to be tech-savvy to use Lokaci Pro?",
    answer:
      "Not at all. We designed Lokaci Pro for busy salon owners, not software engineers. If you can use WhatsApp, you can use our platform. Plus, we provide complete training and setup support.",
  },
  {
    question: "Can I import my existing customer data?",
    answer:
      "Yes, absolutely. Our team will migrate all your customer data, appointment history, and service records for free. You won't lose any information.",
  },
  {
    question: "What if I have multiple locations?",
    answer:
      "Perfect. Our Elite plan is specifically designed for multi-location salons. Manage all your branches from one dashboard with location-specific reports and controls.",
  },
  {
    question: "Is this suitable for freelance stylists?",
    answer:
      "Definitely. Our Starter plan is perfect for solo professionals. Get professional billing, online bookings, and customer management at an affordable price.",
  },
  {
    question: "What happens after my free demo?",
    answer:
      "No pressure. After your demo, you can choose to upgrade to a paid plan or continue exploring. We never force anyone - our product sells itself.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Yes. 30-day money-back guarantee, no questions asked. But in 3 years, less than 2% of customers have asked for refunds.",
  },
  {
    question: "How quickly can I start using the platform?",
    answer:
      "Same day. Most salons are fully operational within 4-6 hours of signing up. Our onboarding team ensures you're ready to take bookings immediately.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "Comprehensive. Phone support, chat support, video tutorials, and personal onboarding. We don't just sell software - we ensure your success.",
  },
];

export const videoData = {
  url: "../assets/video/salonVideo.mp4",
  title: "Lokaci Pro Salon Management Demo",
  description:
    "See how Lokaci helps salons save time, boost revenue, and delight customers.",
  category: "Salon Management",
  duration: "3 min 45 sec",
};

export const teamMembers = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Senior Hair Stylist",
    bio: "Priya has over 10 years of experience in cutting-edge hairstyles and color trends. Passionate about making you look your best.",
    photo: "",
    socials: {
      instagram: "",
      facebook: "",
    },
  },
  {
    id: 2,
    name: "Rahul Mehta",
    role: "Makeup Artist",
    bio: "Rahul specializes in bridal and event makeup, ensuring every client shines on their special day.",
    photo: "",
    socials: {
      instagram: "",
      facebook: "",
    },
  },
  {
    id: 3,
    name: "Neha Gupta",
    role: "Nail Technician",
    bio: "Neha brings creativity and precision to nail art and treatments, offering the latest styles and trends.",
    photo: "",
    socials: {
      instagram: "",
      facebook: "",
    },
  },
  {
    id: 4,
    name: "Karan Singh",
    role: "Massage Therapist",
    bio: "Karan's expert massage techniques help you relax and rejuvenate after a busy day.",
    photo: "",
    socials: {
      instagram: "",
      facebook: "",
    },
  },
  {
    id: 5,
    name: "other one",
    role: "other...",
    bio: "message...",
    photo: "",
    socials: {
      instagram: "",
      facebook: "",
    },
  },
];
