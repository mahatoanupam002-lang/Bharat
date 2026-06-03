// The six pillars. `slug` links to the lesson route /learn/:slug
export const PILLARS = [
  { k: "01", slug: "think-clearly", t: "Think Clearly", hi: "स्पष्ट सोचो", d: "The scientific method, logical fallacies, and India's own heritage of reasoning — from the Nyāya school to the argumentative tradition.", tag: "Article 51A(h)" },
  { k: "02", slug: "spot-the-fake", t: "Spot the Fake", hi: "सच पहचानो", d: "Lateral reading, reverse image search, and the habit of verifying before you forward. India shares more than it checks.", tag: "Media literacy" },
  { k: "03", slug: "know-your-constitution", t: "Know Your Constitution", hi: "संविधान जानो", d: "Your rights and your eleven duties. How a law is made. What constitutional morality actually means.", tag: "Part IV-A" },
  { k: "04", slug: "unity-in-diversity", t: "Unity in Diversity", hi: "विविधता में एकता", d: "Composite culture as strength, not weakness. The freedom struggle belonged to every community.", tag: "Article 51A(e)" },
  { k: "05", slug: "civic-action", t: "Civic Action", hi: "नागरिक कर्म", d: "Patriotism you can do. Local problems, RTI basics, environmental duty, and projects that change your street.", tag: "National service" },
  { k: "06", slug: "rational-patriots", t: "Rational Patriots", hi: "तर्कशील देशभक्त", d: "Ambedkar, Bhagat Singh, Raman, Kalam, Savitribai Phule — Indians who united reason, courage and service.", tag: "Stories" },
];

export const pillarBySlug = (slug) => PILLARS.find((p) => p.slug === slug);
