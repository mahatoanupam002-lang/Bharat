// Lesson content, keyed by pillar slug. Each lesson is bilingual.
// Shape: { intro, sections:[{h, body:[...]}], myth:{claim,truth}, callout, doThis, sources:[{label,url}] }
export const LESSONS = {
  "think-clearly": {
    intro: {
      en: "Clear thinking is not a talent you are born with. It is a set of habits — and India has practised them for millennia.",
      hi: "स्पष्ट सोच कोई जन्मजात प्रतिभा नहीं है। यह आदतों का समूह है — और भारत इन्हें हज़ारों वर्षों से अपनाता आया है।",
    },
    sections: [
      {
        h: { en: "The scientific method, simply", hi: "वैज्ञानिक विधि, सरल शब्दों में" },
        body: [
          { en: "Observe something. Ask a question. Make a guess (a hypothesis). Test it. If the evidence disagrees with your guess, change the guess — not the evidence. That loop is how we move from opinion to knowledge.", hi: "कुछ देखें। एक सवाल पूछें। एक अनुमान लगाएँ (परिकल्पना)। उसे जाँचें। यदि प्रमाण अनुमान से असहमत हो, तो अनुमान बदलें — प्रमाण नहीं। यही चक्र राय से ज्ञान तक ले जाता है।" },
        ],
      },
      {
        h: { en: "India's heritage of reasoning", hi: "भारत की तर्क-परंपरा" },
        body: [
          { en: "The Nyāya school built a formal theory of valid inference centuries before modern logic. The Charvaka tradition demanded evidence over scripture. Debate (vāda) was a respected path to truth. Reason is not foreign to India — it is part of its oldest inheritance.", hi: "न्याय दर्शन ने आधुनिक तर्कशास्त्र से सदियों पहले वैध अनुमान का व्यवस्थित सिद्धांत रचा। चार्वाक परंपरा ने शास्त्र से ऊपर प्रमाण माँगा। वाद-विवाद सत्य तक पहुँचने का सम्मानित मार्ग था। तर्क भारत के लिए पराया नहीं — उसकी सबसे पुरानी विरासत का हिस्सा है।" },
        ],
      },
      {
        h: { en: "Spotting logical fallacies", hi: "तर्कदोष पहचानना" },
        body: [
          { en: "A fallacy is an argument that feels convincing but does not actually prove its point. 'A famous person said it' (appeal to authority), 'everyone believes it' (bandwagon), or 'if we allow this, disaster follows' (slippery slope) are common traps. Learn to name them and they lose their power.", hi: "तर्कदोष ऐसा तर्क है जो ठीक लगता है पर अपनी बात सिद्ध नहीं करता। 'किसी प्रसिद्ध व्यक्ति ने कहा' (प्राधिकार का सहारा), 'सब मानते हैं' (भीड़चाल), या 'यह हुआ तो विनाश आएगा' (फिसलन भरी ढलान) आम जाल हैं। इन्हें पहचानना सीखें, तो ये बेअसर हो जाते हैं।" },
        ],
      },
      {
        h: { en: "Worked example: the baloney detection kit", hi: "उदाहरण: बकवास पहचानने की किट" },
        body: [
          { en: "Astronomer Carl Sagan offered a simple test for any claim. Is there independent confirmation? Can it be tested? Who benefits if you believe it? Does it fit what we already know — and if not, is the evidence extraordinary enough? Run a viral claim through these and most collapse.", hi: "खगोलविद कार्ल सेगन ने किसी भी दावे के लिए एक सरल कसौटी दी। क्या इसकी स्वतंत्र पुष्टि है? क्या इसे जाँचा जा सकता है? यदि आप मानें तो किसका फ़ायदा होता है? क्या यह पहले से ज्ञात तथ्यों से मेल खाता है — और न खाए तो क्या प्रमाण उतना ही असाधारण है? किसी वायरल दावे को इनसे गुज़ारें, अधिकांश ढह जाते हैं।" },
        ],
      },
    ],
    myth: {
      claim: { en: "“Being open-minded means accepting every viewpoint as equally valid.”", hi: "“खुले दिमाग का अर्थ है हर दृष्टिकोण को समान रूप से सही मानना।”" },
      truth: { en: "Open-mindedness means being willing to follow the evidence — including evidence that proves you wrong. Not every claim is equally supported. Weighing them is the whole point.", hi: "खुले दिमाग का अर्थ है प्रमाण का अनुसरण करने को तैयार रहना — उस प्रमाण समेत जो आपको ग़लत साबित करे। हर दावा समान रूप से प्रमाणित नहीं होता। उन्हें तौलना ही असली काम है।" },
    },
    callout: {
      en: "A strong mind changes when the evidence changes. Stubbornness is not strength.",
      hi: "मज़बूत मन प्रमाण बदलने पर बदलता है। ज़िद ताकत नहीं है।",
    },
    doThis: {
      en: "Today, find one belief you hold and ask: what evidence would change my mind? If the honest answer is 'nothing', that belief deserves a second look.",
      hi: "आज एक मान्यता चुनें और पूछें: कौन-सा प्रमाण मेरी राय बदल देगा? यदि ईमानदार उत्तर 'कुछ नहीं' है, तो उस मान्यता पर फिर से सोचें।",
    },
    sources: [
      { label: { en: "Carl Sagan, The Demon-Haunted World (Baloney Detection Kit)", hi: "कार्ल सेगन, द डीमन-हॉन्टेड वर्ल्ड" }, url: "https://en.wikipedia.org/wiki/The_Demon-Haunted_World" },
      { label: { en: "Amartya Sen, The Argumentative Indian", hi: "अमर्त्य सेन, द आर्ग्युमेंटेटिव इंडियन" }, url: "https://en.wikipedia.org/wiki/The_Argumentative_Indian" },
      { label: { en: "Nyāya school of logic", hi: "न्याय दर्शन" }, url: "https://en.wikipedia.org/wiki/Nyaya" },
    ],
  },

  "spot-the-fake": {
    intro: {
      en: "India forwards more than it verifies. A few seconds of checking can stop a rumour that takes lives.",
      hi: "भारत जाँचने से ज़्यादा आगे भेजता है। कुछ सेकंड की जाँच एक ऐसी अफवाह रोक सकती है जो जान ले लेती है।",
    },
    sections: [
      {
        h: { en: "Lateral reading", hi: "लेटरल रीडिंग" },
        body: [
          { en: "Don't judge a claim by staying on the page that makes it. Open new tabs and ask: who is saying this, and what do other reliable sources say? Professional fact-checkers read across the web, not down a single page.", hi: "किसी दावे को उसी पन्ने पर रहकर मत आँकें जो उसे करता है। नए टैब खोलें और पूछें: यह कौन कह रहा है, और दूसरे भरोसेमंद स्रोत क्या कहते हैं? पेशेवर तथ्य-जाँचकर्ता एक पन्ने में नीचे नहीं, पूरे इंटरनेट में आर-पार पढ़ते हैं।" },
        ],
      },
      {
        h: { en: "Reverse image search", hi: "रिवर्स इमेज सर्च" },
        body: [
          { en: "Old photos are recycled with new, false captions all the time. Right-click an image and search it: you can often find when and where it really first appeared. A 'shocking photo from yesterday' is frequently years old, or from another country entirely.", hi: "पुरानी तस्वीरें नए, झूठे कैप्शन के साथ बार-बार चलाई जाती हैं। तस्वीर पर राइट-क्लिक कर खोजें: अक्सर पता चल जाता है कि वह असल में पहली बार कब और कहाँ आई। 'कल की चौंकाने वाली तस्वीर' अक्सर वर्षों पुरानी, या किसी और देश की होती है।" },
        ],
      },
      {
        h: { en: "The seven red flags", hi: "सात ख़तरे की घंटियाँ" },
        body: [
          { en: "Be alert when a message: (1) demands urgency — 'forward now!'; (2) stokes fear or outrage; (3) names no verifiable source; (4) targets a whole community; (5) sounds too perfect to be true; (6) asks you to share before reading; (7) can't be found on any credible news site. Two or more flags? Don't pass it on.", hi: "सतर्क रहें जब कोई संदेश: (1) जल्दबाज़ी थोपे — 'अभी भेजें!'; (2) डर या क्रोध भड़काए; (3) कोई जाँचने योग्य स्रोत न बताए; (4) पूरे समुदाय को निशाना बनाए; (5) सच होने के लिए बहुत आदर्श लगे; (6) पढ़ने से पहले शेयर करने को कहे; (7) किसी विश्वसनीय समाचार साइट पर न मिले। दो या अधिक संकेत? आगे मत बढ़ाएँ।" },
        ],
      },
      {
        h: { en: "Deepfakes and AI", hi: "डीपफेक और एआई" },
        body: [
          { en: "AI can now fake voices, faces and entire videos of real people. Look for mismatched lip-sync, odd lighting, too-smooth skin, or claims that a leader 'secretly said' something explosive. When a clip is designed to make you furious at someone, slow down and seek the original.", hi: "एआई अब असली लोगों की आवाज़, चेहरे और पूरे वीडियो नकली बना सकता है। बेमेल होंठ-तालमेल, अजीब रोशनी, बहुत चिकनी त्वचा, या यह दावा कि किसी नेता ने 'गुप्त रूप से' कुछ विस्फोटक कहा — इन पर ध्यान दें। जब कोई क्लिप आपको किसी पर भड़काने के लिए बनी हो, रुकें और मूल खोजें।" },
        ],
      },
    ],
    myth: {
      claim: { en: "“If many people are sharing it, it must be true.”", hi: "“अगर बहुत लोग शेयर कर रहे हैं, तो यह सच ही होगा।”" },
      truth: { en: "Virality measures emotion, not accuracy. Lies travel faster than facts precisely because they are built to provoke. Popularity is not evidence.", hi: "वायरल होना भावना मापता है, सच्चाई नहीं। झूठ तथ्यों से तेज़ फैलता है क्योंकि वह भड़काने के लिए बनाया जाता है। लोकप्रियता प्रमाण नहीं है।" },
    },
    callout: {
      en: "Verify before you forward. You are responsible for what you pass on.",
      hi: "आगे भेजने से पहले जाँचें। आप जो आगे बढ़ाते हैं, उसके लिए आप ज़िम्मेदार हैं।",
    },
    doThis: {
      en: "The next forwarded message you receive, pause and run one check — a quick search of the claim or a reverse image search — before deciding whether to share it.",
      hi: "अगली बार जो फॉरवर्ड मिले, रुकें और साझा करने से पहले एक जाँच करें — दावे की त्वरित खोज या रिवर्स इमेज सर्च।",
    },
    sources: [
      { label: { en: "Stanford History Education Group — lateral reading", hi: "स्टैनफ़ोर्ड — लेटरल रीडिंग" }, url: "https://cor.stanford.edu/" },
      { label: { en: "Google Reverse Image Search", hi: "गूगल रिवर्स इमेज सर्च" }, url: "https://images.google.com/" },
      { label: { en: "Indian fact-checkers: Alt News, BOOM, PIB Fact Check", hi: "भारतीय फ़ैक्ट-चेकर: ऑल्ट न्यूज़, बूम, PIB फ़ैक्ट चेक" }, url: "https://www.altnews.in/" },
    ],
  },

  "know-your-constitution": {
    intro: {
      en: "The Constitution is not a dusty book for lawyers. It is the promise the people of India made to one another.",
      hi: "संविधान वकीलों के लिए कोई धूल भरी किताब नहीं है। यह वह वादा है जो भारत के लोगों ने आपस में किया।",
    },
    sections: [
      {
        h: { en: "Rights and duties go together", hi: "अधिकार और कर्तव्य साथ चलते हैं" },
        body: [
          { en: "Part III gives you Fundamental Rights — equality, freedom, life and liberty. Part IV-A (Article 51A) lists eleven Fundamental Duties. Rights protect you; duties ask something of you. A republic needs both.", hi: "भाग III आपको मौलिक अधिकार देता है — समानता, स्वतंत्रता, जीवन और प्राण। भाग IV-A (अनुच्छेद 51A) ग्यारह मौलिक कर्तव्य गिनाता है। अधिकार आपकी रक्षा करते हैं; कर्तव्य आपसे कुछ माँगते हैं। गणराज्य को दोनों चाहिए।" },
        ],
      },
      {
        h: { en: "How a law is made", hi: "कानून कैसे बनता है" },
        body: [
          { en: "A bill is introduced in Parliament, debated and voted in both Houses (Lok Sabha and Rajya Sabha), and then sent to the President for assent. Only then does it become law. Every stage is a chance for scrutiny — that is the point.", hi: "एक विधेयक संसद में पेश होता है, दोनों सदनों (लोकसभा और राज्यसभा) में बहस व मतदान होता है, फिर राष्ट्रपति के पास स्वीकृति के लिए जाता है। तभी वह कानून बनता है। हर चरण जाँच का अवसर है — यही इसका उद्देश्य है।" },
        ],
      },
      {
        h: { en: "Constitutional morality", hi: "संवैधानिक नैतिकता" },
        body: [
          { en: "It means holding power — including the majority — to the values of the Constitution, not just to popular sentiment. Justice, liberty, equality and fraternity bind the State even when a crowd disagrees. Dr. Ambedkar called it a discipline we must cultivate.", hi: "इसका अर्थ है सत्ता को — बहुमत समेत — संविधान के मूल्यों पर परखना, केवल लोकप्रिय भावना पर नहीं। न्याय, स्वतंत्रता, समता और बंधुत्व राज्य को तब भी बाँधते हैं जब भीड़ असहमत हो। डॉ. अंबेडकर ने इसे एक अनुशासन कहा जिसे हमें विकसित करना है।" },
        ],
      },
      {
        h: { en: "Checks on power", hi: "सत्ता पर अंकुश" },
        body: [
          { en: "Power is deliberately divided — between the legislature, executive and judiciary, and between the Union and the states. A free press and independent courts can question any government. This is not weakness; it is the design that keeps one person or party from becoming the whole nation.", hi: "सत्ता जानबूझकर बाँटी गई है — विधायिका, कार्यपालिका और न्यायपालिका के बीच, तथा संघ और राज्यों के बीच। स्वतंत्र प्रेस और स्वतंत्र अदालतें किसी भी सरकार पर सवाल कर सकती हैं। यह कमज़ोरी नहीं; यह वह रचना है जो किसी एक व्यक्ति या दल को पूरा देश बनने से रोकती है।" },
        ],
      },
    ],
    myth: {
      claim: { en: "“Questioning the government is anti-national.”", hi: "“सरकार पर सवाल उठाना देशद्रोह है।”" },
      truth: { en: "The Constitution guarantees free speech precisely so citizens can question those in power. Holding a government accountable is not against the nation — it is a duty to it.", hi: "संविधान वाणी की स्वतंत्रता इसीलिए देता है ताकि नागरिक सत्ताधारियों पर सवाल कर सकें। सरकार को जवाबदेह ठहराना देश के विरुद्ध नहीं — देश के प्रति कर्तव्य है।" },
    },
    callout: {
      en: "Sovereignty rests with the people. The Constitution begins with three words: ‘We, the People’.",
      hi: "संप्रभुता जनता में निहित है। संविधान तीन शब्दों से शुरू होता है: ‘हम, भारत के लोग’।",
    },
    doThis: {
      en: "Read the Preamble of the Constitution once, slowly. It is one sentence. Ask which of its promises you see kept around you — and which need work.",
      hi: "संविधान की प्रस्तावना एक बार धीरे से पढ़ें। यह एक ही वाक्य है। पूछें: इसके कौन-से वादे आपके आसपास पूरे होते दिखते हैं — और किन पर काम बाकी है।",
    },
    sources: [
      { label: { en: "The Constitution of India (full text)", hi: "भारत का संविधान (पूर्ण पाठ)" }, url: "https://www.india.gov.in/my-government/constitution-india" },
      { label: { en: "Granville Austin, The Indian Constitution: Cornerstone of a Nation", hi: "ग्रैनविल ऑस्टिन, द इंडियन कॉन्स्टिट्यूशन" }, url: "https://en.wikipedia.org/wiki/The_Indian_Constitution:_Cornerstone_of_a_Nation" },
      { label: { en: "Ambedkar's final Constituent Assembly speech (25 Nov 1949)", hi: "अंबेडकर का अंतिम संविधान सभा भाषण (25 नव॰ 1949)" }, url: "https://en.wikipedia.org/wiki/B._R._Ambedkar" },
    ],
  },

  "unity-in-diversity": {
    intro: {
      en: "India's diversity is not a problem to be managed. It is the very thing that makes India, India.",
      hi: "भारत की विविधता कोई हल करने की समस्या नहीं है। यही वह बात है जो भारत को भारत बनाती है।",
    },
    sections: [
      {
        h: { en: "Composite culture", hi: "मिश्रित संस्कृति" },
        body: [
          { en: "Our music, food, languages, festivals and architecture were shaped together, over centuries, by many communities. A single dish or a single raga often carries many hands within it. Diversity here is not division — it is depth.", hi: "हमारा संगीत, भोजन, भाषाएँ, त्योहार और स्थापत्य सदियों में अनेक समुदायों ने मिलकर गढ़े। एक व्यंजन या एक राग में अक्सर अनेक हाथों का योगदान होता है। यहाँ विविधता बँटवारा नहीं — गहराई है।" },
        ],
      },
      {
        h: { en: "The freedom struggle belonged to all", hi: "स्वतंत्रता संग्राम सबका था" },
        body: [
          { en: "Indians of every faith, region, caste and gender fought for independence — from Bhagat Singh and Ashfaqulla Khan to Rani Gaidinliu and Matangini Hazra. No single community freed India; all of them did, together.", hi: "हर धर्म, क्षेत्र, जाति और लिंग के भारतीयों ने स्वतंत्रता के लिए लड़ाई लड़ी — भगत सिंह और अशफ़ाक़उल्ला ख़ान से लेकर रानी गाइदिन्ल्यू और मातंगिनी हाज़रा तक। किसी एक समुदाय ने भारत को आज़ाद नहीं किया; सबने मिलकर किया।" },
        ],
      },
      {
        h: { en: "How 'us vs them' is manufactured", hi: "‘हम बनाम वे’ कैसे गढ़ा जाता है" },
        body: [
          { en: "Those who seek power often gain it by dividing people — blaming a community for every problem, spreading fear, and rewriting history to erase the contributions of others. Recognising this tactic is the first defence against it. Ask: who gains when I start to hate my neighbour?", hi: "सत्ता चाहने वाले अक्सर लोगों को बाँटकर सत्ता पाते हैं — हर समस्या के लिए किसी समुदाय को दोषी ठहराकर, डर फैलाकर, और इतिहास को इस तरह बदलकर कि दूसरों का योगदान मिट जाए। इस चाल को पहचानना ही इसके विरुद्ध पहली रक्षा है। पूछें: जब मैं अपने पड़ोसी से नफ़रत करने लगता हूँ, तब किसका फ़ायदा होता है?" },
        ],
      },
      {
        h: { en: "Brotherhood as duty", hi: "कर्तव्य के रूप में भाईचारा" },
        body: [
          { en: "Article 51A(e) makes promoting harmony beyond religion, language and region a duty of every citizen. Critiquing an idea is fair; demeaning a community is not. The line matters.", hi: "अनुच्छेद 51A(e) धर्म, भाषा और क्षेत्र से ऊपर भाईचारा बढ़ाने को हर नागरिक का कर्तव्य बनाता है। किसी विचार की आलोचना उचित है; किसी समुदाय का अपमान नहीं। यह रेखा मायने रखती है।" },
        ],
      },
    ],
    myth: {
      claim: { en: "“True patriotism means my community first, others later.”", hi: "“सच्ची देशभक्ति यानी पहले मेरा समुदाय, बाद में बाकी।”" },
      truth: { en: "The Constitution recognises a single class of citizen — Indian. Putting one community above the rest is not patriotism; it is the opposite of the fraternity the nation pledged itself to.", hi: "संविधान केवल एक वर्ग का नागरिक मानता है — भारतीय। एक समुदाय को बाकी से ऊपर रखना देशभक्ति नहीं; यह उस बंधुत्व का उलटा है जिसका देश ने संकल्प लिया।" },
    },
    callout: {
      en: "We critique claims and ideas — never communities or faiths.",
      hi: "हम दावों और विचारों की आलोचना करते हैं — किसी समुदाय या धर्म की नहीं।",
    },
    doThis: {
      en: "Learn one thing this week about a community, language or region different from your own — a festival, a hero, a dish. Curiosity is the cure for prejudice.",
      hi: "इस सप्ताह अपने से अलग किसी समुदाय, भाषा या क्षेत्र के बारे में एक बात सीखें — कोई त्योहार, नायक या व्यंजन। जिज्ञासा पूर्वाग्रह की दवा है।",
    },
    sources: [
      { label: { en: "Preamble & Article 51A(e), Constitution of India", hi: "प्रस्तावना व अनुच्छेद 51A(e), भारत का संविधान" }, url: "https://www.india.gov.in/my-government/constitution-india" },
      { label: { en: "Amartya Sen, The Argumentative Indian", hi: "अमर्त्य सेन, द आर्ग्युमेंटेटिव इंडियन" }, url: "https://en.wikipedia.org/wiki/The_Argumentative_Indian" },
    ],
  },

  "civic-action": {
    intro: {
      en: "Patriotism is not only what you feel. It is what you do for the people around you.",
      hi: "देशभक्ति केवल जो आप महसूस करते हैं वह नहीं है। यह वह है जो आप अपने आसपास के लोगों के लिए करते हैं।",
    },
    sections: [
      {
        h: { en: "Start with your street", hi: "अपनी गली से शुरू करें" },
        body: [
          { en: "A broken streetlight, an overflowing drain, a school without benches — these are solvable. Identify one local problem, find who is responsible, and follow up politely but persistently. Small fixes build civic muscle.", hi: "टूटी स्ट्रीटलाइट, बहता नाला, बिना बेंच का स्कूल — ये हल हो सकते हैं। एक स्थानीय समस्या चुनें, पता करें कौन ज़िम्मेदार है, और विनम्र पर लगातार अनुवर्ती करें। छोटे सुधार नागरिक-शक्ति बनाते हैं।" },
        ],
      },
      {
        h: { en: "RTI basics", hi: "RTI की बुनियाद" },
        body: [
          { en: "The Right to Information Act, 2005 lets any citizen ask a public authority for information, usually answered within 30 days, for a small fee. It is one of the most powerful everyday tools a citizen has against opacity and corruption.", hi: "सूचना का अधिकार अधिनियम, 2005 किसी भी नागरिक को सरकारी विभाग से जानकारी माँगने देता है, आमतौर पर छोटे शुल्क पर 30 दिनों में जवाब। यह अपारदर्शिता और भ्रष्टाचार के विरुद्ध नागरिक के सबसे ताकतवर रोज़मर्रा औज़ारों में से एक है।" },
        ],
      },
      {
        h: { en: "Your vote, used well", hi: "आपका वोट, सही इस्तेमाल" },
        body: [
          { en: "Voting is the most basic civic act — but voting well means judging candidates on their record and proposals, not on rhetoric, gifts or identity. Read manifestos. Check what was actually delivered last time. A thoughtful vote is worth more than a loud one.", hi: "मतदान सबसे बुनियादी नागरिक कर्म है — पर सही मतदान का अर्थ है उम्मीदवारों को उनके रिकॉर्ड और प्रस्तावों पर परखना, न कि भाषणबाज़ी, उपहार या पहचान पर। घोषणापत्र पढ़ें। देखें पिछली बार सचमुच क्या हुआ। एक सोचा-समझा वोट एक शोरगुल वाले वोट से अधिक मूल्यवान है।" },
        ],
      },
      {
        h: { en: "Environmental duty", hi: "पर्यावरण का कर्तव्य" },
        body: [
          { en: "Article 51A(g) makes protecting forests, rivers, lakes and wildlife a duty. Plant and tend a tree, refuse single-use plastic, keep a water body clean. The environment is the one inheritance every future Indian will share.", hi: "अनुच्छेद 51A(g) वन, नदी, झील और वन्यजीव की रक्षा को कर्तव्य बनाता है। पेड़ लगाएँ और सँभालें, एक-बार-इस्तेमाल प्लास्टिक से इनकार करें, किसी जलस्रोत को साफ़ रखें। पर्यावरण ही वह विरासत है जो हर आने वाला भारतीय साझा करेगा।" },
        ],
      },
    ],
    myth: {
      claim: { en: "“One person can't change anything, so why bother?”", hi: "“एक व्यक्ति कुछ नहीं बदल सकता, तो परेशान क्यों हों?”" },
      truth: { en: "Nearly every reform in India began with a few stubborn individuals — one RTI, one petition, one teacher. Change is a chain of small acts. Yours is a link.", hi: "भारत का लगभग हर सुधार कुछ ज़िद्दी व्यक्तियों से शुरू हुआ — एक RTI, एक याचिका, एक शिक्षक। बदलाव छोटे कर्मों की शृंखला है। आपका कर्म एक कड़ी है।" },
    },
    callout: {
      en: "Don't ask only what your country can do for you. Do one concrete thing for it.",
      hi: "केवल यह मत पूछें कि देश आपके लिए क्या कर सकता है। उसके लिए एक ठोस काम करें।",
    },
    doThis: {
      en: "Pick one civic problem near you and take a single first step this month — a complaint filed, a tree planted, an RTI sent, or a clean-up organised.",
      hi: "अपने पास की एक नागरिक समस्या चुनें और इस महीने एक पहला कदम उठाएँ — शिकायत दर्ज करें, पेड़ लगाएँ, RTI भेजें, या सफ़ाई आयोजित करें।",
    },
    sources: [
      { label: { en: "Right to Information — Government of India portal", hi: "सूचना का अधिकार — भारत सरकार पोर्टल" }, url: "https://rti.gov.in/" },
      { label: { en: "Election Commission of India — voter services", hi: "भारत निर्वाचन आयोग — मतदाता सेवाएँ" }, url: "https://www.eci.gov.in/" },
      { label: { en: "Article 51A(g), Constitution of India", hi: "अनुच्छेद 51A(g), भारत का संविधान" }, url: "https://www.india.gov.in/my-government/constitution-india" },
    ],
  },

  "rational-patriots": {
    intro: {
      en: "Reason and patriotism are not opposites. These Indians proved you can love your country and think for yourself.",
      hi: "तर्क और देशभक्ति विरोधी नहीं हैं। इन भारतीयों ने सिद्ध किया कि आप अपने देश से प्यार भी कर सकते हैं और स्वयं सोच भी सकते हैं।",
    },
    sections: [
      {
        h: { en: "Ambedkar's warning against hero-worship", hi: "अंबेडकर की भक्ति-पूजा के विरुद्ध चेतावनी" },
        body: [
          { en: "In his final speech to the Constituent Assembly on 25 November 1949, Dr. B. R. Ambedkar warned: “In politics, Bhakti or hero-worship is a sure road to degradation and to eventual dictatorship.” He admired great leaders but insisted we must never lay our liberty at any leader's feet, however great.", hi: "25 नवंबर 1949 को संविधान सभा के अपने अंतिम भाषण में डॉ. बी. आर. अंबेडकर ने चेताया: “राजनीति में भक्ति या नायक-पूजा पतन और अंततः तानाशाही का निश्चित मार्ग है।” वे महान नेताओं का सम्मान करते थे पर आग्रह करते थे कि हम अपनी स्वतंत्रता किसी भी नेता के चरणों में न रखें, चाहे वह कितना ही महान क्यों न हो।" },
          { en: "This applies to every side, every party, every ideology. A free citizen judges actions and evidence — not personalities. Devotion belongs to principles, never to a person.", hi: "यह हर पक्ष, हर दल, हर विचारधारा पर लागू होता है। एक स्वतंत्र नागरिक कर्मों और प्रमाणों को परखता है — व्यक्तित्वों को नहीं। भक्ति सिद्धांतों के लिए होती है, कभी किसी व्यक्ति के लिए नहीं।" },
        ],
      },
      {
        h: { en: "How propaganda works — on everyone", hi: "प्रचार कैसे काम करता है — सब पर" },
        body: [
          { en: "Propaganda repeats a slogan until it feels true, paints critics as enemies, drowns doubt in emotion, and offers a single saviour for every problem. It works on the left and the right, the religious and the secular. The cure is the same for all: ask for evidence, allow disagreement, and never outsource your thinking.", hi: "प्रचार एक नारे को तब तक दोहराता है जब तक वह सच न लगने लगे, आलोचकों को दुश्मन बनाता है, संदेह को भावना में डुबो देता है, और हर समस्या के लिए एक तारणहार पेश करता है। यह वाम और दक्षिण, धार्मिक और धर्मनिरपेक्ष — सब पर काम करता है। इलाज सबके लिए एक: प्रमाण माँगें, असहमति को जगह दें, और अपनी सोच कभी किसी और को न सौंपें।" },
        ],
      },
      {
        h: { en: "Bhagat Singh", hi: "भगत सिंह" },
        body: [
          { en: "A revolutionary who read voraciously and wrote 'Why I Am an Atheist' — urging his comrades to question, not merely to believe. Courage and critical thought lived in the same young mind.", hi: "एक क्रांतिकारी जो खूब पढ़ता था और जिसने 'मैं नास्तिक क्यों हूँ' लिखा — अपने साथियों से सवाल करने को कहा, केवल विश्वास करने को नहीं। साहस और आलोचनात्मक सोच उसी युवा मन में साथ रहते थे।" },
        ],
      },
      {
        h: { en: "Raman, Kalam and Savitribai Phule", hi: "रमन, कलाम और सावित्रीबाई फुले" },
        body: [
          { en: "C. V. Raman won a Nobel Prize for curiosity about why the sea is blue. A. P. J. Abdul Kalam built rockets and inspired students. Savitribai Phule opened India's path to girls' education against fierce opposition. Different fields, one spirit: serve the nation through knowledge.", hi: "सी. वी. रमन ने यह जिज्ञासा कि समुद्र नीला क्यों है, से नोबेल जीता। ए. पी. जे. अब्दुल कलाम ने रॉकेट बनाए और छात्रों को प्रेरित किया। सावित्रीबाई फुले ने कड़े विरोध के बीच भारत में लड़कियों की शिक्षा का मार्ग खोला। भिन्न क्षेत्र, एक भावना: ज्ञान से राष्ट्र की सेवा।" },
        ],
      },
    ],
    myth: {
      claim: { en: "“A strong leader should never be questioned.”", hi: "“एक मज़बूत नेता पर कभी सवाल नहीं उठाना चाहिए।”" },
      truth: { en: "The leaders India honours most — Gandhi, Ambedkar, Bhagat Singh — invited questions and changed their own minds. A leader who cannot be questioned is not strong; the system around them has simply grown weak.", hi: "जिन नेताओं को भारत सबसे अधिक सम्मान देता है — गांधी, अंबेडकर, भगत सिंह — उन्होंने सवालों का स्वागत किया और अपनी राय बदली। जिस नेता पर सवाल न हो सके वह मज़बूत नहीं; उसके चारों ओर की व्यवस्था बस कमज़ोर हो गई है।" },
    },
    callout: {
      en: "“In politics, Bhakti or hero-worship is a sure road to degradation and to eventual dictatorship.” — Dr. B. R. Ambedkar, 25 Nov 1949",
      hi: "“राजनीति में भक्ति या नायक-पूजा पतन और अंततः तानाशाही का निश्चित मार्ग है।” — डॉ. बी. आर. अंबेडकर, 25 नव॰ 1949",
    },
    doThis: {
      en: "Pick a leader you admire — any leader. Name one thing they got wrong. If you can't, that is not loyalty; it is the very hero-worship Ambedkar warned against.",
      hi: "किसी ऐसे नेता को चुनें जिसकी आप प्रशंसा करते हैं — कोई भी। उनकी एक ग़लती बताएँ। यदि नहीं बता सकते, तो यह निष्ठा नहीं; यह वही नायक-पूजा है जिससे अंबेडकर ने चेताया।",
    },
    sources: [
      { label: { en: "Ambedkar's final Constituent Assembly speech (25 Nov 1949)", hi: "अंबेडकर का अंतिम संविधान सभा भाषण (25 नव॰ 1949)" }, url: "https://en.wikipedia.org/wiki/B._R._Ambedkar" },
      { label: { en: "Bhagat Singh, Why I Am an Atheist (1930)", hi: "भगत सिंह, मैं नास्तिक क्यों हूँ (1930)" }, url: "https://en.wikipedia.org/wiki/Why_I_Am_an_Atheist" },
      { label: { en: "Schatz & Staub, On the varieties of national attachment (1999)", hi: "श्याट्ज़ व स्टॉब, राष्ट्रीय लगाव के प्रकार (1999)" }, url: "https://doi.org/10.1111/0162-895X.00140" },
    ],
  },
};

export const lessonBySlug = (slug) => LESSONS[slug];
