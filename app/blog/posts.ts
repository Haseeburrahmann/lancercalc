export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  keywords: string[];
  date: string;          // ISO
  readTime: string;
  category: string;
  relatedTool: { href: string; label: string; emoji: string };
}

export const posts: BlogPost[] = [
  {
    slug: "quarterly-taxes-freelancer-guide-2025",
    title: "How to Calculate & Pay Quarterly Estimated Taxes as a Freelancer in 2025",
    metaTitle: "Quarterly Taxes for Freelancers 2025 — Deadlines, Amounts & How to Pay",
    description: "Learn when quarterly estimated taxes are due in 2025, how to calculate payments using Form 1040-ES, avoid IRS penalties, and use our free calculator to determine your exact amounts.",
    keywords: [
      "quarterly estimated taxes freelancer",
      "quarterly tax calculator",
      "self-employment tax quarterly payments",
      "IRS Form 1040-ES freelancer",
      "estimated tax payment deadlines 2025",
      "quarterly tax safe harbor rule",
      "how to pay quarterly taxes",
      "freelancer quarterly tax guide",
    ],
    date: "2026-02-20",
    readTime: "8 min read",
    category: "Tax Guide",
    relatedTool: { href: "/freelance-tax-calculator", label: "Freelance Tax Calculator", emoji: "🧾" },
  },
  {
    slug: "self-employment-tax-guide-2025",
    title: "Self-Employment Tax Explained: The Complete 2025 Guide for Freelancers",
    metaTitle: "Self-Employment Tax Rate 2025 — How Much Do Freelancers Actually Pay?",
    description: "Understand the 15.3% self-employment tax: how it works, why freelancers pay double FICA, the Social Security cap at $176,100, and how to reduce your bill with deductions.",
    keywords: [
      "self employment tax rate 2025",
      "how much is self-employment tax",
      "freelance tax calculator",
      "Social Security cap 2025",
      "Medicare tax self-employed",
      "net self-employment income calculation",
      "SE tax deduction 50%",
      "self employed tax explained",
    ],
    date: "2026-02-19",
    readTime: "10 min read",
    category: "Tax Guide",
    relatedTool: { href: "/freelance-tax-calculator", label: "Freelance Tax Calculator", emoji: "🧾" },
  },
  {
    slug: "1099-vs-w2-real-difference",
    title: "1099 vs W-2: Why Your $130K Contract Might Pay Less Than a $100K Salary",
    metaTitle: "1099 vs W-2 Calculator & Comparison 2025 — Which Pays More?",
    description: "Compare 1099 contractor vs W-2 employee income side-by-side. See the real after-tax difference including SE tax, health insurance, retirement, and benefits with real numbers.",
    keywords: [
      "1099 vs w2 calculator",
      "1099 vs w2 comparison 2025",
      "freelance vs full time salary",
      "is freelancing worth it financially",
      "1099 contractor vs employee taxes",
      "contract vs salary calculator",
      "should i take 1099 or w2",
      "1099 break even rate",
    ],
    date: "2026-02-18",
    readTime: "9 min read",
    category: "Career",
    relatedTool: { href: "/1099-vs-w2-calculator", label: "1099 vs W-2 Calculator", emoji: "⚖️" },
  },
  {
    slug: "freelance-hourly-rate-guide-2025",
    title: "How Much Should You Charge as a Freelancer? The 2025 Rate Guide",
    metaTitle: "Freelance Hourly Rate Calculator & Guide 2025 — Stop Undercharging",
    description: "Calculate your minimum hourly rate as a freelancer. Factor in taxes, health insurance, retirement, vacation, and profit margin to find the real number you need to charge.",
    keywords: [
      "how much to charge as a freelancer",
      "freelance hourly rate calculator",
      "freelance pricing guide 2025",
      "how to set freelance rates",
      "freelance rate by industry",
      "stop undercharging freelancer",
      "minimum freelance hourly rate",
      "consultant rate calculator",
    ],
    date: "2026-02-17",
    readTime: "8 min read",
    category: "Pricing",
    relatedTool: { href: "/hourly-rate-calculator", label: "Hourly Rate Calculator", emoji: "⏱️" },
  },
  {
    slug: "freelancer-tax-deductions-2025",
    title: "25 Tax Deductions Every Freelancer Should Claim in 2025",
    metaTitle: "Freelancer Tax Deductions 2025 — Save Thousands on Your Tax Bill",
    description: "The complete checklist of tax deductions for freelancers: home office, health insurance, equipment, software, mileage, retirement contributions, and 19 more you might be missing.",
    keywords: [
      "tax deductions for freelancers",
      "freelancer tax deductions 2025",
      "home office deduction freelance",
      "self-employed business expenses",
      "freelancer equipment deductions",
      "mileage deduction freelancer 2025",
      "health insurance deduction self-employed",
      "freelance tax write offs",
    ],
    date: "2026-02-16",
    readTime: "11 min read",
    category: "Tax Guide",
    relatedTool: { href: "/freelance-tax-calculator", label: "Freelance Tax Calculator", emoji: "🧾" },
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
