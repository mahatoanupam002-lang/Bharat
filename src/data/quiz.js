// Topic-tagged question bank. Each field is { en, hi } so it renders bilingually.
export const QUIZ = [
  {
    topic: { en: "Media literacy", hi: "मीडिया साक्षरता" },
    q: {
      en: "A message says: 'Scientists confirm this fruit cures cancer. Forward to 10 people!' What does a rational patriot do first?",
      hi: "एक संदेश कहता है: 'वैज्ञानिकों ने पुष्टि की कि यह फल कैंसर ठीक करता है। 10 लोगों को भेजें!' एक तर्कशील देशभक्त पहले क्या करता है?",
    },
    opts: [
      { en: "Forward it — sharing health info helps people", hi: "आगे भेज दें — स्वास्थ्य जानकारी साझा करना अच्छा है" },
      { en: "Check who 'scientists' are and search the claim elsewhere", hi: "देखें कि 'वैज्ञानिक' कौन हैं और दावे को कहीं और खोजें" },
      { en: "Delete it and ignore", hi: "हटा दें और अनदेखा करें" },
      { en: "Believe it because it sounds caring", hi: "विश्वास कर लें क्योंकि यह हितैषी लगता है" },
    ],
    correct: 1,
    why: {
      en: "This is lateral reading: leave the message and ask what the rest of the web says. 'Scientists confirm' with no name and a 'forward to 10' push are classic manipulation signals.",
      hi: "यह लेटरल रीडिंग है: संदेश से बाहर निकलें और देखें कि बाकी इंटरनेट क्या कहता है। बिना नाम के 'वैज्ञानिकों ने पुष्टि की' और '10 को भेजें' का दबाव हेरफेर के संकेत हैं।",
    },
  },
  {
    topic: { en: "Constructive patriotism", hi: "रचनात्मक देशभक्ति" },
    q: {
      en: "Which is constructive patriotism, not blind patriotism?",
      hi: "इनमें से कौन रचनात्मक देशभक्ति है, अंध देशभक्ति नहीं?",
    },
    opts: [
      { en: "My country is always right", hi: "मेरा देश हमेशा सही है" },
      { en: "Anyone who criticises India is anti-national", hi: "जो भी भारत की आलोचना करे वह देशद्रोही है" },
      { en: "I love my country enough to want it to live up to its ideals", hi: "मैं अपने देश से इतना प्यार करता हूँ कि वह अपने आदर्शों पर खरा उतरे" },
      { en: "We must never question the government", hi: "हमें सरकार पर कभी सवाल नहीं करना चाहिए" },
    ],
    correct: 2,
    why: {
      en: "Constructive patriotism (Schatz & Staub, 1999) supports questioning and reform that improves the nation. Blind patriotism demands uncritical loyalty.",
      hi: "रचनात्मक देशभक्ति (श्याट्ज़ व स्टॉब, 1999) उन सवालों और सुधारों का समर्थन करती है जो देश को बेहतर बनाते हैं। अंध देशभक्ति बिना सोचे वफादारी माँगती है।",
    },
  },
  {
    topic: { en: "Constitution", hi: "संविधान" },
    q: {
      en: "Article 51A(h) makes which a fundamental DUTY of every Indian citizen?",
      hi: "अनुच्छेद 51A(h) इनमें से किसे हर भारतीय नागरिक का मौलिक कर्तव्य बनाता है?",
    },
    opts: [
      { en: "To win at sports", hi: "खेल में जीतना" },
      { en: "To develop scientific temper and the spirit of inquiry", hi: "वैज्ञानिक दृष्टिकोण और जिज्ञासा का विकास करना" },
      { en: "To memorise the Constitution", hi: "संविधान को याद करना" },
      { en: "To distrust all religion", hi: "हर धर्म पर अविश्वास करना" },
    ],
    correct: 1,
    why: {
      en: "India is the only country to make developing scientific temper a constitutional duty. It means seeking evidence and changing your mind when facts change — not rejecting anyone's faith.",
      hi: "भारत एकमात्र देश है जिसने वैज्ञानिक दृष्टिकोण के विकास को संवैधानिक कर्तव्य बनाया। इसका अर्थ है प्रमाण खोजना और तथ्य बदलने पर अपनी राय बदलना — न कि किसी की आस्था को नकारना।",
    },
  },
  {
    topic: { en: "Logic", hi: "तर्क" },
    q: {
      en: "“A famous actor endorses this medicine, so it must work.” Which fallacy is this?",
      hi: "“एक प्रसिद्ध अभिनेता इस दवा का समर्थन करता है, इसलिए यह काम करती ही होगी।” यह कौन-सा तर्कदोष है?",
    },
    opts: [
      { en: "Appeal to authority (irrelevant authority)", hi: "अप्रासंगिक प्राधिकार का सहारा" },
      { en: "A valid scientific argument", hi: "एक वैध वैज्ञानिक तर्क" },
      { en: "Straw man", hi: "स्ट्रॉ मैन" },
      { en: "Circular reasoning", hi: "चक्रीय तर्क" },
    ],
    correct: 0,
    why: {
      en: "Fame is not expertise. An actor is not a doctor; popularity says nothing about whether a medicine works. Evidence does.",
      hi: "प्रसिद्धि विशेषज्ञता नहीं है। अभिनेता डॉक्टर नहीं होता; लोकप्रियता यह नहीं बताती कि दवा काम करती है या नहीं। प्रमाण बताते हैं।",
    },
  },
  {
    topic: { en: "Media literacy", hi: "मीडिया साक्षरता" },
    q: {
      en: "An old photo is shared claiming it shows yesterday's event. Best way to check?",
      hi: "एक पुरानी तस्वीर यह दावा करके साझा की जाती है कि यह कल की घटना है। जाँचने का सबसे अच्छा तरीका?",
    },
    opts: [
      { en: "Count the likes — popular means true", hi: "लाइक गिनें — लोकप्रिय यानी सच" },
      { en: "Do a reverse image search to find where it first appeared", hi: "रिवर्स इमेज सर्च करें कि तस्वीर पहली बार कहाँ आई" },
      { en: "Ask the person who sent it", hi: "भेजने वाले से पूछें" },
      { en: "Trust it if the caption is in your language", hi: "यदि कैप्शन आपकी भाषा में है तो भरोसा करें" },
    ],
    correct: 1,
    why: {
      en: "A reverse image search shows when and where a picture was first published. Recycled old images are one of the most common forms of misinformation.",
      hi: "रिवर्स इमेज सर्च बताती है कि तस्वीर पहली बार कब और कहाँ छपी। पुरानी तस्वीरों का दोबारा इस्तेमाल भ्रामक सूचना का सबसे आम रूप है।",
    },
  },
  {
    topic: { en: "Constitution", hi: "संविधान" },
    q: {
      en: "Who has the right to vote in India under universal adult franchise?",
      hi: "सार्वभौमिक वयस्क मताधिकार के तहत भारत में मतदान का अधिकार किसे है?",
    },
    opts: [
      { en: "Only landowners", hi: "केवल भूमि-स्वामियों को" },
      { en: "Only men above 30", hi: "केवल 30 से ऊपर के पुरुषों को" },
      { en: "Every citizen aged 18 and above, regardless of caste, gender or wealth", hi: "हर 18+ नागरिक को, जाति, लिंग या धन से परे" },
      { en: "Only those who pay income tax", hi: "केवल आयकर देने वालों को" },
    ],
    correct: 2,
    why: {
      en: "From its first general election India gave every adult an equal vote — radical for a newly independent, deeply unequal society. One person, one vote, one value.",
      hi: "अपने पहले आम चुनाव से ही भारत ने हर वयस्क को समान वोट दिया — एक नए स्वतंत्र, अत्यंत असमान समाज के लिए क्रांतिकारी कदम। एक व्यक्ति, एक वोट, एक मूल्य।",
    },
  },
  {
    topic: { en: "Scientific temper", hi: "वैज्ञानिक दृष्टिकोण" },
    q: {
      en: "What best describes scientific temper?",
      hi: "वैज्ञानिक दृष्टिकोण का सबसे अच्छा वर्णन क्या है?",
    },
    opts: [
      { en: "Believing only what scientists say", hi: "केवल वही मानना जो वैज्ञानिक कहें" },
      { en: "Rejecting all tradition", hi: "हर परंपरा को नकारना" },
      { en: "Asking for evidence and being willing to change your view when facts change", hi: "प्रमाण माँगना और तथ्य बदलने पर अपनी राय बदलने को तैयार रहना" },
      { en: "Distrusting everyone", hi: "हर किसी पर अविश्वास करना" },
    ],
    correct: 2,
    why: {
      en: "Scientific temper is a habit of the mind, not a set of beliefs: weigh evidence, follow reason, and update when you're shown to be wrong.",
      hi: "वैज्ञानिक दृष्टिकोण मन की एक आदत है, मान्यताओं का समूह नहीं: प्रमाण तौलें, तर्क का अनुसरण करें, और गलत साबित होने पर राय बदलें।",
    },
  },
  {
    topic: { en: "Civic action", hi: "नागरिक कर्म" },
    q: {
      en: "The Right to Information (RTI) Act, 2005 lets a citizen do what?",
      hi: "सूचना का अधिकार (RTI) अधिनियम, 2005 एक नागरिक को क्या करने देता है?",
    },
    opts: [
      { en: "Ask public authorities for information and get a reply, usually within 30 days", hi: "सरकारी विभागों से जानकारी माँगना और आमतौर पर 30 दिनों में जवाब पाना" },
      { en: "Arrest corrupt officials directly", hi: "भ्रष्ट अधिकारियों को सीधे गिरफ्तार करना" },
      { en: "Change laws by petition", hi: "याचिका से कानून बदलना" },
      { en: "Nothing — it is only for journalists", hi: "कुछ नहीं — यह केवल पत्रकारों के लिए है" },
    ],
    correct: 0,
    why: {
      en: "RTI turns ordinary citizens into auditors of power. A simple application can reveal how public money was spent or why a service stalled.",
      hi: "RTI आम नागरिकों को सत्ता का लेखा-जोखा करने वाला बना देता है। एक साधारण आवेदन बता सकता है कि जनता का पैसा कहाँ खर्च हुआ या कोई सेवा क्यों अटकी।",
    },
  },
  {
    topic: { en: "Unity in diversity", hi: "विविधता में एकता" },
    q: {
      en: "“Composite culture” in the Constitution refers to what?",
      hi: "संविधान में “मिश्रित संस्कृति” का अर्थ क्या है?",
    },
    opts: [
      { en: "One culture replacing all others", hi: "एक संस्कृति जो बाकी सबको मिटा दे" },
      { en: "The shared heritage built by many communities, languages and faiths together", hi: "अनेक समुदायों, भाषाओं और धर्मों ने मिलकर जो साझा विरासत बनाई" },
      { en: "Only ancient texts", hi: "केवल प्राचीन ग्रंथ" },
      { en: "Foreign culture only", hi: "केवल विदेशी संस्कृति" },
    ],
    correct: 1,
    why: {
      en: "India's culture is a confluence, not a single stream — language, food, music, architecture and ideas woven from many sources. Duty 51A(f) asks us to value it.",
      hi: "भारत की संस्कृति एक संगम है, एक धारा नहीं — भाषा, भोजन, संगीत, स्थापत्य और विचार अनेक स्रोतों से बुने गए। कर्तव्य 51A(f) हमें इसे संजोने को कहता है।",
    },
  },
];

export const TOPICS = [...new Set(QUIZ.map((q) => q.topic.en))];
