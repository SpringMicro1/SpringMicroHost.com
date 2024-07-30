const SIGN_IN_LINK = "https://bridge.springmicrohost.com/sign-in";
const REGISTER_LINK = "https://bridge.springmicrohost.com/onboarding/register";

export const NAVBAR = {
  TEXT: {},
  LINKS: {
    LOG_IN: {
      href: SIGN_IN_LINK,
      text: "Log in",
    },
    SIGN_UP: {
      href: REGISTER_LINK,
      text: "Sign up",
    },
  },
  IMAGES: {},
};

export const HERO = {
  TEXT: {
    H1: "Simple web hosting for your business",
    DESCRIPTION:
      "At SpringMicroHost, we'll worry about your website so you can worry about your business. Pick a template, insert your content, and leave the rest to us. Our customer service representatives are ready to help.",
  },
  LINKS: {
    ACTION: {
      href: REGISTER_LINK,
      text: "Get Started",
    },
  },
  IMAGES: {},
  APPS: [
    /* Add to tailwind.config.js to ensure classes are functional */
    {
      title: "CRM",
      color: "red",
      icon: "fluent:people-team-24-filled",
      button: {
        href: REGISTER_LINK,
        // color: "blue",
        text: "Free/Pro/Enterprise",
      },
      text: "Upgradable CRM platform for customer-first businesses.",
    },
    {
      title: "Hosting",
      color: "blue",
      icon: "fluent:server-24-filled",
      button: {
        href: REGISTER_LINK,
        // color: "blue",
        text: "Start Now",
      },
      text: "Lightweight solution to host your website without hassle.",
    },
    {
      title: "Email",
      color: "yellow",
      icon: "fluent:mail-24-filled",
      button: {
        href: REGISTER_LINK,
        // color: "blue",
        text: "Start Now",
      },
      text: "Standard email service for your business.",
    },
    {
      title: "Website Editor",
      color: "green",
      icon: "fluent:calendar-edit-24-filled",
      button: {
        href: REGISTER_LINK,
        // color: "blue",
        text: "Join Beta",
      },
      text: "Build and customize your website with our easy-to-use software.",
    },
    {
      title: "Affiliate Program",
      color: "purple",
      icon: "fluent:video-person-sparkle-24-filled",
      button: {
        href: REGISTER_LINK,
        // color: "blue",
        text: "Join Beta",
      },
      text: "Outsource your marketing efforts to 3rd party media influencers.",
    },
    {
      title: "Ecommerce",
      color: "cyan",
      icon: "fluent:building-shop-24-filled",
      button: {
        href: REGISTER_LINK,
        // color: "blue",
        text: "View Demo",
      },
      text: "Manage products and process payments on your online store.",
    },
    {
      title: "Click Funnel",
      color: "orange",
      icon: "fluent:cursor-click-24-filled",
      button: {
        href: REGISTER_LINK,
        // color: "blue",
        text: "Coming Soon",
      },
      text: "Collect users and convert them into leads for your business.",
    },
  ],
};

export const CTA = {
  TEXT: {
    H2: "Build modern websites.",
    DESCRIPTION:
      "Take your online presence to the next level by using our hosting platform.",
  },
  LINKS: {
    ACTION: {
      href: REGISTER_LINK,
      text: "Get Started",
    },
  },
  IMAGES: {},
};

export const BLOG = {
  TEXT: {
    H1: "Our Blog",
    DESCRIPTION:
      "We write about our company's direction and thoughts going on our mind.",
  },
  LINKS: {},
  IMAGES: {},
};

export const FEATURES = [
  {
    title: "Bring Your Old Stuff",
    description:
      "Website transferring should be easy. Move old files to us and we will help get them up and running on our platform.",
    icon: "bx:bxs-briefcase",
  },
  {
    title: "2x Faster Load Times",
    description:
      "SpringMicroHost leverages modern site building technologies that eliminate bloat and result in blazing-fast load times.",
    icon: "bx:bxs-timer",
  },
  {
    title: "Easy Content Editing",
    description:
      "Manage your content with our simple editor and live preview features. Support is available for complex needs.",
    icon: "bx:bxs-edit",
  },
  {
    title: "Supplementary Services",
    description:
      "SpringMicroHost is rolling out services like forms, blog, and eCommerce. Be among the first to try them at a discount.",
    icon: "bx:bxs-grid",
  },
  {
    title: "SEO Enabled",
    description:
      "Automatic sitemaps, RSS feeds, pagination and collections take the pain out of SEO and syndication. It just works!",
    icon: "bx:bxs-file-find",
  },
  {
    title: "Support",
    description:
      "Get help from actual customer service representatives. They will communicate with you one-on-one to meet your needs.",
    icon: "bx:bxs-user",
  },
];

/* Put both supports next to eachother */
/*  */
export const PRICING_HOSTING = [
  {
    name: "Personal",
    comingSoon: true,
    price: "$2.95/mo",
    popular: true,
    description: "All the basics for starting a single small website.",
    features: [
      "Starter Instances",
      "SSL Certificates",
      "Template Customizations",
      "Email Support",
    ],
    action: {
      href: "/contact",
      text: "Get a Free Quote",
    },
    priceAsterisk: "Based on a 36 months paid up front for $106.20",
  },
  {
    name: "Pro",
    comingSoon: true,
    price: "$4.17/mo",
    popular: true,
    description: "All the basics for starting/hosting up to 3 websites.",
    features: [
      "Email Support",
      "Phone Support",
      "Multiple Pages",
      "Multiple Websites",
      "Starter Instances",
      "SSL Certificates",
      "Template Customizations",
      "Personal Manager",
      "Backups",
    ],
    action: {
      href: "/contact",
      text: "Get a Free Quote",
    },
    priceAsterisk: "Based on a 36 months paid up front for $150.12",
  },
  {
    name: "Enterprise",
    price: "Get a Quote",
    popular: false,
    description: "For custom web development needs.",
    features: [
      "Email Support",
      "Phone Support",
      "Multiple Pages",
      "Multiple Websites",
      "Starter Instances",
      "Large Instances",
      "SSL Certificates",
      "Personal Manager",
      "Backups",
      "Template Customizations",
      "Custom Web Development",
      "Number of Websites",
      "Storage",
      "Support",
      "E-Commerce",
      "Wordpress",
      "100% Network Uptime",
      "Compute Power",
      "Free CDN",
      "Free Domain 1st Year",
      "Professional Email - Free Trial",
      "Custom WP Themes",
      "Free SSL - 1st Year",
      "Free SSL",
      "Daily Website Backups - Free 1st year",
      "Wishlist",
      "Web Application Firewall (WAF)",
      "Unrestricted Bandwidth",
      "Unlimited Products",
      "Store Analytics",
      "Shipping Labels",
      "Secure Online Payments",
      "Product Search & Filtering",
      "Malware Scanning",
      "High-Frequency CPUs",
      "High-Burst Capacity",
      "Global Edge Caching",
      "Gift Cards",
      "Exclusive Store Theme",
      "Domain Privacy - Free 1st year",
      "DDOS Mitigation",
      "Daily Automated Backups",
      "Customer Account Creation",
      "Bookings & Appointments",
    ],
    action: {
      href: "/contact",
      text: "Get a Free Quote",
    },
  },
];

export const PRICING_CRM = [
  {
    name: "Free",
    price: "$0/mo",
    popular: true,
    description: "Limited features for getting started.",
    features: [
    ],
    action: {
      href: REGISTER_LINK,
      text: "Get Started",
    },
  },
  {
    name: "Pro",
    price: "$4.17/mo",
    popular: true,
    description: "All the basics for starting/hosting up to 3 websites.",
    features: [
    ],
    action: {
      href: REGISTER_LINK,
      text: "Get Started",
    },
  },
  {
    name: "Enterprise",
    price: "Get a Quote",
    popular: false,
    description: "For custom web development needs.",
    features: [
      "Lead, deal, contact, calendar and pipeline management",
      "Seamless data import and 400+ integrations",
      "Full email sync with templates, open and click tracking and group emailing",
      "Automations builder, including email sequences",
      "Meeting, email and video call scheduling",
      "Streamlined lead routing and account access controls for teams",
      "Document and contract management with e-signatures",
      "Revenue forecasts and deeper reporting capabilities",
      "Extra deal and field customization options",
      "Project planning, tracking and delivery",
      "Phone support",
      "Scalable control of account permissions and visibilities",
      "Ideal for increasingly busy pipelines and complex team structures",
      "Enhanced security preferences",
      "Complete access to all features",
      "Unlimited reports and customizations",
      "Double the number of automations per seat",
      
    ],
    action: {
      href: "/contact",
      text: "Contact Us",
    },
  },
];
