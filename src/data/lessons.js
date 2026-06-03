// Lesson content, keyed by pillar slug. Each lesson is bilingual.
// Shape: { intro, sections:[{h, body:[...]}], callout, doThis }
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
    ],
    callout: {
      en: "A strong mind changes when the evidence changes. Stubbornness is not strength.",
      hi: "मज़बूत मन प्रमाण बदलने पर बदलता है। ज़िद ताकत नहीं है।",
    },
    doThis: {
      en: "Today, find one belief you hold and ask: what evidence would change my mind? If the honest answer is 'nothing', that belief deserves a second look.",
      hi: "आज एक मान्यता चुनें और पूछें: कौन-सा प्रमाण मेरी राय बदल देगा? यदि ईमानदार उत्तर 'कुछ नहीं' है, तो उस मान्यता पर फिर से सोचें।",
    },
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
          { en: "Old photos are recycled with new, false captions all the time. Right-click an image and search it: you can often find when and where it really first appeared. A 'shocking photo from yesterday' is frequently years old.", hi: "पुरानी तस्वीरें नए, झूठे कैप्शन के साथ बार-बार चलाई जाती हैं। तस्वीर पर राइट-क्लिक कर खोजें: अक्सर पता चल जाता है कि वह असल में पहली बार कब और कहाँ आई। 'कल की चौंकाने वाली तस्वीर' अक्सर वर्षों पुरानी होती है।" },
        ],
      },
      {
        h: { en: "Manipulation signals", hi: "हेरफेर के संकेत" },
        body: [
          { en: "Be alert when a message demands urgency ('forward to 10 now!'), stokes strong emotion (fear or outrage), names no verifiable source, or targets a whole community. These are the fingerprints of disinformation, not news.", hi: "सतर्क रहें जब कोई संदेश जल्दबाज़ी थोपे ('अभी 10 को भेजें!'), तीव्र भावना भड़काए (डर या क्रोध), कोई जाँचने योग्य स्रोत न बताए, या पूरे समुदाय को निशाना बनाए। ये भ्रामक प्रचार के निशान हैं, समाचार के नहीं।" },
        ],
      },
    ],
    callout: {
      en: "Verify before you forward. You are responsible for what you pass on.",
      hi: "आगे भेजने से पहले जाँचें। आप जो आगे बढ़ाते हैं, उसके लिए आप ज़िम्मेदार हैं।",
    },
    doThis: {
      en: "The next forwarded message you receive, pause and run one check — a quick search of the claim or a reverse image search — before deciding whether to share it.",
      hi: "अगली बार जो फॉरवर्ड मिले, रुकें और साझा करने से पहले एक जाँच करें — दावे की त्वरित खोज या रिवर्स इमेज सर्च।",
    },
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
    ],
    callout: {
      en: "Sovereignty rests with the people. The Constitution begins with three words: ‘We, the People’.",
      hi: "संप्रभुता जनता में निहित है। संविधान तीन शब्दों से शुरू होता है: ‘हम, भारत के लोग’।",
    },
    doThis: {
      en: "Read the Preamble of the Constitution once, slowly. It is one sentence. Ask which of its promises you see kept around you — and which need work.",
      hi: "संविधान की प्रस्तावना एक बार धीरे से पढ़ें। यह एक ही वाक्य है। पूछें: इसके कौन-से वादे आपके आसपास पूरे होते दिखते हैं — और किन पर काम बाकी है।",
    },
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
        h: { en: "Brotherhood as duty", hi: "कर्तव्य के रूप में भाईचारा" },
        body: [
          { en: "Article 51A(e) makes promoting harmony beyond religion, language and region a duty of every citizen. Critiquing an idea is fair; demeaning a community is not. The line matters.", hi: "अनुच्छेद 51A(e) धर्म, भाषा और क्षेत्र से ऊपर भाईचारा बढ़ाने को हर नागरिक का कर्तव्य बनाता है। किसी विचार की आलोचना उचित है; किसी समुदाय का अपमान नहीं। यह रेखा मायने रखती है।" },
        ],
      },
    ],
    callout: {
      en: "We critique claims and ideas — never communities or faiths.",
      hi: "हम दावों और विचारों की आलोचना करते हैं — किसी समुदाय या धर्म की नहीं।",
    },
    doThis: {
      en: "Learn one thing this week about a community, language or region different from your own — a festival, a hero, a dish. Curiosity is the cure for prejudice.",
      hi: "इस सप्ताह अपने से अलग किसी समुदाय, भाषा या क्षेत्र के बारे में एक बात सीखें — कोई त्योहार, नायक या व्यंजन। जिज्ञासा पूर्वाग्रह की दवा है।",
    },
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
        h: { en: "Environmental duty", hi: "पर्यावरण का कर्तव्य" },
        body: [
          { en: "Article 51A(g) makes protecting forests, rivers, lakes and wildlife a duty. Plant and tend a tree, refuse single-use plastic, keep a water body clean. The environment is the one inheritance every future Indian will share.", hi: "अनुच्छेद 51A(g) वन, नदी, झील और वन्यजीव की रक्षा को कर्तव्य बनाता है। पेड़ लगाएँ और सँभालें, एक-बार-इस्तेमाल प्लास्टिक से इनकार करें, किसी जलस्रोत को साफ़ रखें। पर्यावरण ही वह विरासत है जो हर आने वाला भारतीय साझा करेगा।" },
        ],
      },
    ],
    callout: {
      en: "Don't ask only what your country can do for you. Do one concrete thing for it.",
      hi: "केवल यह मत पूछें कि देश आपके लिए क्या कर सकता है। उसके लिए एक ठोस काम करें।",
    },
    doThis: {
      en: "Pick one civic problem near you and take a single first step this month — a complaint filed, a tree planted, an RTI sent, or a clean-up organised.",
      hi: "अपने पास की एक नागरिक समस्या चुनें और इस महीने एक पहला कदम उठाएँ — शिकायत दर्ज करें, पेड़ लगाएँ, RTI भेजें, या सफ़ाई आयोजित करें।",
    },
  },

  "rational-patriots": {
    intro: {
      en: "Reason and patriotism are not opposites. These Indians proved you can love your country and think for yourself.",
      hi: "तर्क और देशभक्ति विरोधी नहीं हैं। इन भारतीयों ने सिद्ध किया कि आप अपने देश से प्यार भी कर सकते हैं और स्वयं सोच भी सकते हैं।",
    },
    sections: [
      {
        h: { en: "Dr. B. R. Ambedkar", hi: "डॉ. बी. आर. अंबेडकर" },
        body: [
          { en: "Architect of the Constitution and a scholar of formidable reason. He fought caste injustice with argument and law, insisting that liberty, equality and fraternity were not borrowed ideas but moral necessities.", hi: "संविधान के शिल्पकार और प्रचंड तर्क के विद्वान। उन्होंने जातिगत अन्याय से तर्क और कानून के सहारे लड़ाई लड़ी, इस आग्रह के साथ कि स्वतंत्रता, समता और बंधुत्व उधार के विचार नहीं, नैतिक आवश्यकताएँ हैं।" },
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
    callout: {
      en: "The Indians we remember longest did not follow the crowd — they asked better questions.",
      hi: "जिन भारतीयों को हम सबसे लंबे समय तक याद रखते हैं, उन्होंने भीड़ का अनुसरण नहीं किया — उन्होंने बेहतर सवाल पूछे।",
    },
    doThis: {
      en: "Read one short biography or speech of an Indian you admire for their reason and service. Note one habit of theirs you can borrow.",
      hi: "किसी ऐसे भारतीय की एक छोटी जीवनी या भाषण पढ़ें जिसके तर्क और सेवा की आप कद्र करते हैं। उनकी एक आदत नोट करें जिसे आप अपना सकते हैं।",
    },
  },
};

export const lessonBySlug = (slug) => LESSONS[slug];
