// All eleven Fundamental Duties — Article 51A, Part IV-A of the Constitution.
// `featured` ones are highlighted on the home page.
export const DUTIES = [
  { id: "a", en: "Abide by the Constitution and respect its ideals, the National Flag and the National Anthem", hi: "संविधान का पालन करें और उसके आदर्शों, राष्ट्रध्वज तथा राष्ट्रगान का सम्मान करें" },
  { id: "b", en: "Cherish and follow the noble ideals of the freedom struggle", hi: "स्वतंत्रता संग्राम के उच्च आदर्शों को संजोएँ और उनका पालन करें" },
  { id: "c", en: "Uphold and protect the sovereignty, unity and integrity of India", hi: "भारत की संप्रभुता, एकता और अखंडता की रक्षा करें", featured: true },
  { id: "d", en: "Defend the country and render national service when called upon", hi: "देश की रक्षा करें और आह्वान किए जाने पर राष्ट्रसेवा करें" },
  { id: "e", en: "Promote harmony and the spirit of common brotherhood beyond religion, language and region", hi: "धर्म, भाषा और क्षेत्र से ऊपर उठकर भाईचारा बढ़ाएँ", featured: true },
  { id: "f", en: "Value and preserve the rich heritage of our composite culture", hi: "हमारी मिश्रित संस्कृति की समृद्ध विरासत को संजोएँ" },
  { id: "g", en: "Protect and improve the natural environment — forests, lakes, rivers and wildlife", hi: "प्राकृतिक पर्यावरण — वन, झील, नदी और वन्यजीव — की रक्षा और सुधार करें", featured: true },
  { id: "h", en: "Develop scientific temper, humanism and the spirit of inquiry and reform", hi: "वैज्ञानिक दृष्टिकोण, मानवतावाद और जिज्ञासा का विकास करें", featured: true },
  { id: "i", en: "Safeguard public property and abjure violence", hi: "सार्वजनिक संपत्ति की रक्षा करें और हिंसा का त्याग करें" },
  { id: "j", en: "Strive towards excellence in all spheres of individual and collective activity", hi: "हर क्षेत्र में उत्कृष्टता की ओर प्रयास करें", featured: true },
  { id: "k", en: "Provide opportunities for education to one's child or ward between the ages of six and fourteen", hi: "छह से चौदह वर्ष के बच्चों को शिक्षा के अवसर प्रदान करें" },
];

export const FEATURED_DUTIES = DUTIES.filter((d) => d.featured);
