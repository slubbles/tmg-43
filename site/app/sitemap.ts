import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const routes: { path: string; priority: number; freq: string }[] = [
  { path: "/", priority: 1, freq: "weekly" },
  { path: "/contact", priority: 0.9, freq: "monthly" },
  { path: "/case-studies", priority: 0.9, freq: "monthly" },
  { path: "/platforms/velocity-ai", priority: 0.8, freq: "monthly" },
  { path: "/platforms/catalyst", priority: 0.8, freq: "monthly" },
  { path: "/platforms/genesis", priority: 0.8, freq: "monthly" },
  { path: "/platforms/oracle", priority: 0.8, freq: "monthly" },
  { path: "/growth-framework", priority: 0.8, freq: "monthly" },
  { path: "/insights", priority: 0.7, freq: "weekly" },
  { path: "/blog", priority: 0.7, freq: "weekly" },
];

const serviceSlugs = [
  "ai-powered-strategy",
  "marketing-intelligence",
  "creative-development",
  "brand-architecture",
  "performance-media",
  "marketing-attribution",
  "digital-transformation",
  "content-strategy",
  "customer-analytics",
  "marketing-automation",
  "fractional-cmo-services",
];
const industrySlugs = [
  "healthcare-life-sciences",
  "financial-services",
  "technology-saas",
  "real-estate",
  "energy-utilities",
  "retail-ecommerce",
  "manufacturing",
  "professional-services",
  "education",
  "non-profit",
];
const capabilitySlugs = [
  "artificial-intelligence",
  "machine-learning-models",
  "predictive-analytics",
  "data-science",
  "crm-integration",
  "api-development",
  "real-time-optimization",
  "ab-testing-platform",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://tmg.agency";
  const entries: MetadataRoute.Sitemap = routes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified: new Date(),
    changeFrequency: r.freq as MetadataRoute.Sitemap[number]["changeFrequency"],
    priority: r.priority,
  }));
  for (const s of serviceSlugs) {
    entries.push({
      url: `${base}/services/${s}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }
  for (const s of industrySlugs) {
    entries.push({
      url: `${base}/industries/${s}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }
  for (const s of capabilitySlugs) {
    entries.push({
      url: `${base}/platforms/${s}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }
  entries.push({
    url: `${base}/privacy`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.3,
  });
  entries.push({
    url: `${base}/terms`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.3,
  });
  return entries;
}
