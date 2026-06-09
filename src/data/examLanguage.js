// ============================================
// TRACK 1 — LANGUAGE (مسار اللغة القرآنية)
// Item banks for sections 1A, 1B, 1C, 1D.
//
// ITEM SCHEMA (keep consistent — the renderer & scorer depend on these fields):
//   id            : string  unique, e.g. "L2-1A-006"
//   tag           : string  short category shown as a chip
//   stem          : string  HTML allowed; wrap inline Arabic in <span class='arabic-inline'>…</span>
//   options       : string[]  (MCQ only) exactly 4 entries
//   correct       : number    (MCQ only) 0-based index of the correct option
//   arabicOptions : boolean   (optional) render the options RTL/Amiri
//   verse         : string    (optional) short Arabic verse shown in a highlighted box
//   passage       : string    (optional) longer Arabic passage shown in a justified box
//   type          : "essay-arabic" | "essay-target" | undefined (MCQ)
//   minWords      : number    (essay only) minimum words to count as answered
// ============================================

export const languageSections = {
  "1A": {
    track: "language",
    title: "Section 1A — Vocabulary & Roots",
    titleArabic: "المفردات والجذور",
    description: "Tests recognition of common Quranic vocabulary, ability to extract trilateral roots, and word families. All multiple-choice.",
    instructions: "Choose the single best answer for each item. There is no penalty for guessing. Each item is worth equal marks.",
    time: 25,
    weight: "20% of Track 1",
    itemsList: [
      {
        id: "L2-1A-001",
        tag: "Vocabulary · Theological Term",
        stem: "In Surah al-Ikhlas, the name <span class='arabic-inline'>الصَّمَد</span> describes Allah. Its closest meaning is:",
        options: [
          "The eternally self-sufficient Master, sought by all while needing none",
          "The Compassionate and Merciful to His servants",
          "The Creator of the heavens and the earth",
          "The One who forgives all sins"
        ],
        correct: 0
      },
      {
        id: "L2-1A-002",
        tag: "Root Extraction",
        stem: "The trilateral root (الجذر) of the word <span class='arabic-inline'>الكَوْثَر</span> in Surah al-Kawthar is:",
        options: ["ك – و – ر", "ك – ث – ل", "ك – ث – ر", "ك – ي – ر"],
        correct: 2,
        arabicOptions: true
      },
      {
        id: "L2-1A-003",
        tag: "Word Family",
        stem: "Which of the following words shares the root of <span class='arabic-inline'>مَلِك</span> as it appears in Surah al-Nas (<span class='arabic-inline'>مَلِكِ النَّاس</span>)?",
        options: [
          "مالك (as in مالك يوم الدين)",
          "ملاك (angel)",
          "سلك (to traverse)",
          "هلك (to perish)"
        ],
        correct: 0,
        arabicOptions: true
      },
      {
        id: "L2-1A-004",
        tag: "Contextual Meaning",
        stem: "In Surah al-Zalzalah, the word <span class='arabic-inline'>زِلْزَال</span> (in <span class='arabic-inline'>إِذَا زُلْزِلَتِ الْأَرْضُ زِلْزَالَهَا</span>) is best understood as:",
        options: [
          "A small tremor",
          "A great and thorough shaking, specific to the earth's ultimate quake",
          "The sound of the earthquake",
          "The aftermath of the shaking"
        ],
        correct: 1
      },
      {
        id: "L2-1A-005",
        tag: "Morphology · Pattern",
        stem: "The word <span class='arabic-inline'>مُسْتَقَرّ</span> (as in <span class='arabic-inline'>لِكُلِّ نَبَإٍ مُسْتَقَرّ</span>) is derived from which root, and what is its grammatical type?",
        options: [
          "Root: ق-ص-ر; اسم مفعول (passive participle)",
          "Root: ق-ر-ر; اسم مكان/زمان (noun of place/time) — 'a place or time of settlement / occurrence'",
          "Root: س-ق-ر; اسم فاعل (active participle)",
          "Root: ق-ر-ب; مصدر (verbal noun)"
        ],
        correct: 1
      },
      {
        id: "L2-1A-006",
        tag: "Vocabulary Meaning",
        stem: "In Surah an-Naba, the word <span class='arabic-inline'>النَّبَإِ الْعَظِيمِ</span> (the great tidings) refers most directly to:",
        options: [
          "The story of the elephant",
          "The migration to Madinah",
          "The revelation of the Qur'an only",
          "The Day of Resurrection / the Hereafter"
        ],
        correct: 3
      },
      {
        id: "L2-1A-007",
        tag: "Root Extraction",
        stem: "The trilateral root of the word <span class='arabic-inline'>الفَجْر</span> (Surah al-Fajr) is:",
        options: ["ف – ج – ر", "ف – ج – و", "ف – ر – ج", "ف – ج – ل"],
        correct: 0,
        arabicOptions: true
      },
      {
        id: "L2-1A-008",
        tag: "Contextual Meaning",
        stem: "In Surah ad-Duha, the word <span class='arabic-inline'>الضُّحَىٰ</span> refers to:",
        options: [
          "The depth of night",
          "The setting of the sun",
          "The forenoon / brightness of the morning",
          "The middle of the night"
        ],
        correct: 2
      },
      {
        id: "L2-1A-009",
        tag: "Root Extraction",
        stem: "The trilateral root of <span class='arabic-inline'>سَجَىٰ</span> in <span class='arabic-inline'>وَاللَّيْلِ إِذَا سَجَىٰ</span> (Surah ad-Duha) is:",
        options: ["س – ج – د", "س – ج – و", "ش – ج – ا", "س – ج – ل"],
        correct: 1,
        arabicOptions: true
      },
      {
        id: "L2-1A-010",
        tag: "Vocabulary Meaning",
        stem: "In Surah ash-Sharh, the phrase <span class='arabic-inline'>أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ</span> uses <span class='arabic-inline'>نَشْرَحْ</span>, whose meaning is:",
        options: [
          "Did We not seal",
          "Did We not expand / open up",
          "Did We not narrow",
          "Did We not test"
        ],
        correct: 1
      },
      {
        id: "L2-1A-011",
        tag: "Word Family",
        stem: "Which word shares the root of <span class='arabic-inline'>الْعَلَق</span> in Surah al-ʿAlaq (<span class='arabic-inline'>خَلَقَ الْإِنسَانَ مِنْ عَلَقٍ</span>)?",
        options: [
          "عَلِقَ (to cling / be attached)",
          "عَلِمَ (to know)",
          "عَمِلَ (to act)",
          "أَعْلَى (higher)"
        ],
        correct: 0,
        arabicOptions: true
      },
      {
        id: "L2-1A-012",
        tag: "Vocabulary Meaning",
        stem: "In Surah al-Qadr, the word <span class='arabic-inline'>الْقَدْر</span> (<span class='arabic-inline'>لَيْلَةِ الْقَدْرِ</span>) carries the meaning of:",
        options: [
          "Sleep",
          "Forgiveness only",
          "Travel",
          "Decree / measure / honour and majesty"
        ],
        correct: 3
      },
      {
        id: "L2-1A-013",
        tag: "Root Extraction",
        stem: "The trilateral root of <span class='arabic-inline'>الْقَارِعَة</span> (Surah al-Qariʿah) is:",
        options: ["ق – ر – أ", "ق – ر – ع", "ق – ر – ر", "ق – ر – ب"],
        correct: 1,
        arabicOptions: true
      },
      {
        id: "L2-1A-014",
        tag: "Contextual Meaning",
        stem: "In Surah at-Takathur, the word <span class='arabic-inline'>التَّكَاثُر</span> (<span class='arabic-inline'>أَلْهَاكُمُ التَّكَاثُرُ</span>) denotes:",
        options: [
          "Mutual rivalry for increase (in wealth, children, status)",
          "Generosity to the poor",
          "Quiet contemplation",
          "Fear of death"
        ],
        correct: 0
      },
      {
        id: "L2-1A-015",
        tag: "Morphology · Pattern",
        stem: "The word <span class='arabic-inline'>الْحُطَمَة</span> in Surah al-Humazah is derived from the root <span class='arabic-inline'>ح-ط-م</span> (to crush). Its pattern <span class='arabic-inline'>فُعَلَة</span> here conveys:",
        options: [
          "A single past act of crushing",
          "Intensity / one that crushes greatly — a name of the Fire",
          "A place of safety",
          "A diminutive form"
        ],
        correct: 1
      },
      {
        id: "L2-1A-016",
        tag: "Root Extraction",
        stem: "The trilateral root of <span class='arabic-inline'>الصَّابِرِين</span> and related forms, and specifically of <span class='arabic-inline'>الصَّبْر</span> in Surah al-ʿAsr, is:",
        options: ["ص – ب – ر", "ص – ب – ا", "ص – و – ر", "ش – ب – ر"],
        correct: 0,
        arabicOptions: true
      },
      {
        id: "L2-1A-017",
        tag: "Vocabulary Meaning",
        stem: "In Surah al-Falaq, the word <span class='arabic-inline'>الْفَلَق</span> (<span class='arabic-inline'>قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ</span>) most precisely means:",
        options: [
          "The ocean",
          "The mountain",
          "The dawn / the daybreak (that which splits the darkness)",
          "The night"
        ],
        correct: 2
      },
      {
        id: "L2-1A-018",
        tag: "Vocabulary Meaning",
        stem: "In Surah an-Nas, the word <span class='arabic-inline'>الْوَسْوَاس</span> (<span class='arabic-inline'>مِن شَرِّ الْوَسْوَاسِ الْخَنَّاس</span>) refers to:",
        options: [
          "The loud crier",
          "The one who whispers (evil suggestions), then withdraws",
          "The open enemy",
          "The forgetful one"
        ],
        correct: 1
      },
      {
        id: "L2-1A-019",
        tag: "Word Family",
        stem: "Which word shares the root of <span class='arabic-inline'>الْكَافِرُون</span> in Surah al-Kafirun?",
        options: [
          "كَفَرَ (to disbelieve / to cover)",
          "كَفَى (to suffice)",
          "كَفَّ (to restrain)",
          "كَافُور (camphor)"
        ],
        correct: 0,
        arabicOptions: true
      },
      {
        id: "L2-1A-020",
        tag: "Morphology · Pattern",
        stem: "The word <span class='arabic-inline'>الْمُتَطَفِّفِين</span> / <span class='arabic-inline'>الْمُطَفِّفِين</span> (Surah al-Mutaffifin) is an اسم فاعل (active participle). It denotes those who:",
        options: [
          "Give generously in trade",
          "Defraud in measure and weight — give less than due",
          "Refuse to trade at all",
          "Travel for commerce"
        ],
        correct: 1
      }
    ]
  },

  "1B": {
    track: "language",
    title: "Section 1B — Grammar & Morphology",
    titleArabic: "النحو والصرف",
    description: "Tests recognition of classical Arabic grammatical categories: verb tense and person, noun case, and particle function.",
    instructions: "Each item presents a grammatical analysis question based on a Juz 'Amma verse. Select the most accurate analysis.",
    time: 20,
    weight: "20% of Track 1",
    itemsList: [
      {
        id: "L2-1B-001",
        tag: "Verb Analysis",
        stem: "In the opening of Surah al-Masad, the verb <span class='arabic-inline'>تَبَّتْ</span> is:",
        verse: "تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ",
        options: [
          "Present tense, third person masculine singular",
          "Past tense, third person feminine singular",
          "Command form",
          "Past tense, third person masculine singular"
        ],
        correct: 1
      },
      {
        id: "L2-1B-002",
        tag: "Particle Function",
        stem: "In Surah al-Quraysh, the particle <span class='arabic-inline'>لـِ</span> at the beginning of <span class='arabic-inline'>لِإِيلَاف</span> is:",
        verse: "لِإِيلَافِ قُرَيْشٍ",
        options: [
          "A حرف جر (preposition) expressing cause or purpose",
          "A حرف نصب (particle of accusative)",
          "A حرف جزم (jussive particle)",
          "A conjunction (حرف عطف)"
        ],
        correct: 0
      },
      {
        id: "L2-1B-003",
        tag: "Simplified I'rab",
        stem: "In <span class='arabic-inline'>إِنَّا أَعْطَيْنَاكَ الْكَوْثَر</span>, identify the فاعل (subject) and مفعول به (direct object) of the verb <span class='arabic-inline'>أَعْطَيْنَا</span>.",
        options: [
          "Subject: explicit noun; Object: الكَوْثَر only",
          "Subject: implicit 'we' in نا; Objects: first object = ك (you), second object = الكَوْثَر",
          "Subject: الكَوْثَر; Object: ك",
          "No object; it is an intransitive verb"
        ],
        correct: 1
      },
      {
        id: "L2-1B-004",
        tag: "Noun Case",
        stem: "The grammatical case (الإعراب) of <span class='arabic-inline'>نَارٌ</span> in <span class='arabic-inline'>نَارٌ حَامِيَةٌ</span> (Surah al-Qari'ah) is:",
        options: [
          "مرفوع (nominative) — as خبر for an implied مبتدأ",
          "منصوب (accusative)",
          "مجرور (genitive)",
          "مبني (indeclinable)"
        ],
        correct: 0
      },
      {
        id: "L2-1B-005",
        tag: "Verb Analysis",
        stem: "In <span class='arabic-inline'>قُلْ هُوَ اللَّهُ أَحَدٌ</span> (Surah al-Ikhlas), the word <span class='arabic-inline'>قُلْ</span> is:",
        verse: "قُلْ هُوَ اللَّهُ أَحَدٌ",
        options: [
          "Past tense verb",
          "فعل أمر (command/imperative verb), 2nd person masculine singular",
          "Present tense verb",
          "A noun (مصدر)"
        ],
        correct: 1
      },
      {
        id: "L2-1B-006",
        tag: "Noun Case",
        stem: "In <span class='arabic-inline'>قُلْ هُوَ اللَّهُ أَحَدٌ</span>, the case of <span class='arabic-inline'>أَحَدٌ</span> is:",
        verse: "قُلْ هُوَ اللَّهُ أَحَدٌ",
        options: [
          "منصوب (accusative)",
          "مجرور (genitive)",
          "مرفوع (nominative) — it is خبر",
          "مبني (indeclinable)"
        ],
        correct: 2
      },
      {
        id: "L2-1B-007",
        tag: "Particle Function",
        stem: "In <span class='arabic-inline'>لَمْ يَلِدْ وَلَمْ يُولَدْ</span> (Surah al-Ikhlas), the particle <span class='arabic-inline'>لَمْ</span> is:",
        verse: "لَمْ يَلِدْ وَلَمْ يُولَدْ",
        options: [
          "A حرف جزم (jussive particle) that negates and puts the present verb in the jussive (مجزوم), giving past meaning",
          "A حرف نصب (subjunctive particle)",
          "A حرف جر (preposition)",
          "A conjunction"
        ],
        correct: 0
      },
      {
        id: "L2-1B-008",
        tag: "Verb Analysis",
        stem: "In <span class='arabic-inline'>إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ</span> (Surah an-Nasr), the verb <span class='arabic-inline'>جَاءَ</span> is:",
        verse: "إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ",
        options: [
          "Present tense, 3rd person masculine singular",
          "Imperative",
          "Past tense, 3rd person feminine singular",
          "Past tense, 3rd person masculine singular"
        ],
        correct: 3
      },
      {
        id: "L2-1B-009",
        tag: "Noun Case",
        stem: "In <span class='arabic-inline'>إِذَا جَاءَ نَصْرُ اللَّهِ</span>, the word <span class='arabic-inline'>نَصْرُ</span> functions as the فاعل (subject) of <span class='arabic-inline'>جَاءَ</span>; its case is:",
        verse: "إِذَا جَاءَ نَصْرُ اللَّهِ",
        options: [
          "مرفوع (nominative)",
          "منصوب (accusative)",
          "مجرور (genitive)",
          "مبني (indeclinable)"
        ],
        correct: 0
      },
      {
        id: "L2-1B-010",
        tag: "Simplified I'rab",
        stem: "In <span class='arabic-inline'>نَصْرُ اللَّهِ</span>, the word <span class='arabic-inline'>اللَّهِ</span> is مجرور (genitive). Why?",
        verse: "نَصْرُ اللَّهِ",
        options: [
          "Because it is preceded by a preposition",
          "Because it is a subject",
          "Because it is مضاف إليه (the second term of an iḍāfah / possessive construction)",
          "Because it is a direct object"
        ],
        correct: 2
      },
      {
        id: "L2-1B-011",
        tag: "Verb Analysis",
        stem: "In <span class='arabic-inline'>فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ</span> (Surah an-Nasr), the verbs <span class='arabic-inline'>سَبِّحْ</span> and <span class='arabic-inline'>اسْتَغْفِرْ</span> are:",
        verse: "فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ",
        options: [
          "Past tense verbs",
          "Present tense verbs",
          "أفعال أمر (imperative verbs), addressed to a single male",
          "Verbal nouns"
        ],
        correct: 2
      },
      {
        id: "L2-1B-012",
        tag: "Particle Function",
        stem: "In <span class='arabic-inline'>إِنَّا أَعْطَيْنَاكَ الْكَوْثَر</span>, the particle <span class='arabic-inline'>إِنَّ</span> (in <span class='arabic-inline'>إِنَّا</span>) is:",
        verse: "إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ",
        options: [
          "A حرف توكيد ونصب (particle of emphasis that puts its noun in the accusative)",
          "A jussive particle",
          "A preposition",
          "A conjunction"
        ],
        correct: 0
      },
      {
        id: "L2-1B-013",
        tag: "Verb Analysis",
        stem: "In <span class='arabic-inline'>فَصَلِّ لِرَبِّكَ وَانْحَرْ</span> (Surah al-Kawthar), the verb <span class='arabic-inline'>صَلِّ</span> is:",
        verse: "فَصَلِّ لِرَبِّكَ وَانْحَرْ",
        options: [
          "Past tense",
          "Present tense feminine",
          "A noun",
          "فعل أمر (imperative) — 'so pray', addressed to a single male"
        ],
        correct: 3
      },
      {
        id: "L2-1B-014",
        tag: "Noun Case",
        stem: "In <span class='arabic-inline'>تَبَّتْ يَدَا أَبِي لَهَبٍ</span> (Surah al-Masad), the word <span class='arabic-inline'>يَدَا</span> is the فاعل; it is marked by أَلِف rather than ضمة because it is:",
        verse: "تَبَّتْ يَدَا أَبِي لَهَبٍ",
        options: [
          "A broken plural",
          "A مثنى (dual) — the nominative dual takes alif (يَدَا)",
          "A diptote",
          "Indeclinable"
        ],
        correct: 1
      },
      {
        id: "L2-1B-015",
        tag: "Particle Function",
        stem: "In Surah al-Falaq, the particle <span class='arabic-inline'>مِن</span> in <span class='arabic-inline'>مِن شَرِّ مَا خَلَقَ</span> is:",
        verse: "مِن شَرِّ مَا خَلَقَ",
        options: [
          "A conjunction (حرف عطف)",
          "A حرف جر (preposition) — putting <span class='arabic-inline'>شَرِّ</span> in the genitive (مجرور)",
          "A jussive particle",
          "An emphatic particle"
        ],
        correct: 1
      }
    ]
  },

  "1C": {
    track: "language",
    title: "Section 1C — Verse Comprehension",
    titleArabic: "فهم الآيات",
    description: "Tests reading comprehension across complete short surahs of Juz 'Amma — narrative, theological, and inferential understanding.",
    instructions: "Read each passage carefully before answering. Some questions test direct comprehension; others test thematic synthesis.",
    time: 40,
    weight: "30% of Track 1",
    itemsList: [
      {
        id: "L2-1C-001",
        tag: "Passage Comprehension",
        stem: "<strong>Passage:</strong> Surah al-Feel (complete, 5 verses).<br><br><strong>Question:</strong> Who are <span class='arabic-inline'>أصحاب الفيل</span> and what is the central message of the surah?",
        passage: "أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ الْفِيلِ ۝ أَلَمْ يَجْعَلْ كَيْدَهُمْ فِي تَضْلِيلٍ ۝ وَأَرْسَلَ عَلَيْهِمْ طَيْرًا أَبَابِيلَ ۝ تَرْمِيهِم بِحِجَارَةٍ مِّن سِجِّيلٍ ۝ فَجَعَلَهُمْ كَعَصْفٍ مَّأْكُولٍ",
        options: [
          "The early Muslims; the message is patience",
          "Abraha's army that attempted to destroy the Ka'ba; the message is that Allah defends His sacred house and repels the arrogant",
          "The ancient prophets; the message is obedience",
          "The Quraysh leaders; the message is tribal pride"
        ],
        correct: 1
      },
      {
        id: "L2-1C-002",
        tag: "Inferential Comprehension",
        stem: "What does Surah al-Ma'un teach about the relationship between belief in the Day of Judgment and social ethics?",
        passage: "أَرَأَيْتَ الَّذِي يُكَذِّبُ بِالدِّينِ ۝ فَذَٰلِكَ الَّذِي يَدُعُّ الْيَتِيمَ ۝ وَلَا يَحُضُّ عَلَىٰ طَعَامِ الْمِسْكِينِ",
        options: [
          "Disbelief in the Day of Judgment manifests in cruelty to orphans and indifference to the poor; true belief produces responsibility for the vulnerable",
          "Belief is purely a matter of the heart and does not affect conduct",
          "Ritual prayer is more important than care for the poor",
          "Only open disbelief is condemned; private cruelty is acceptable"
        ],
        correct: 0
      },
      {
        id: "L2-1C-003",
        tag: "Theological Comprehension",
        stem: "<strong>Passage:</strong> Surah al-Ikhlas (complete).<br><br><strong>Question:</strong> Which doctrine of Allah does this surah most centrally affirm?",
        passage: "قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
        options: [
          "The mercy of Allah toward sinners",
          "The absolute oneness (tawḥīd) and uniqueness of Allah — He neither begets nor is begotten, with nothing comparable to Him",
          "The reward of the righteous in Paradise",
          "The duty of pilgrimage"
        ],
        correct: 1
      },
      {
        id: "L2-1C-004",
        tag: "Narrative Comprehension",
        stem: "<strong>Passage:</strong> Surah al-Kawthar (complete).<br><br><strong>Question:</strong> What is the surah's response to those who mocked the Prophet for having no surviving sons?",
        passage: "إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ ۝ فَصَلِّ لِرَبِّكَ وَانْحَرْ ۝ إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ",
        options: [
          "That the Prophet should retaliate against his enemies",
          "That worldly children are the true measure of legacy",
          "That Allah granted him abundant good (al-Kawthar), and it is his hater who is cut off (al-abtar)",
          "That he should remain silent and withdraw"
        ],
        correct: 2
      },
      {
        id: "L2-1C-005",
        tag: "Inferential Comprehension",
        stem: "<strong>Passage:</strong> Surah al-ʿAsr (complete).<br><br><strong>Question:</strong> According to the surah, who is exempted from loss?",
        passage: "وَالْعَصْرِ ۝ إِنَّ الْإِنسَانَ لَفِي خُسْرٍ ۝ إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ",
        options: [
          "Those who have great wealth and power",
          "Those who live the longest",
          "Those who travel and trade widely",
          "Those who believe, do righteous deeds, and mutually enjoin truth and patience"
        ],
        correct: 3
      },
      {
        id: "L2-1C-006",
        tag: "Theological Comprehension",
        stem: "<strong>Passage:</strong> Surah al-Quraysh (complete).<br><br><strong>Question:</strong> What blessings does Allah remind Quraysh of, and what is the response He calls for?",
        passage: "لِإِيلَافِ قُرَيْشٍ ۝ إِيلَافِهِمْ رِحْلَةَ الشِّتَاءِ وَالصَّيْفِ ۝ فَلْيَعْبُدُوا رَبَّ هَٰذَا الْبَيْتِ ۝ الَّذِي أَطْعَمَهُم مِّن جُوعٍ وَآمَنَهُم مِّنْ خَوْفٍ",
        options: [
          "Military victory; the response is conquest",
          "Safe trade journeys (winter and summer), food against hunger, and security against fear; the response is to worship the Lord of this House (the Ka'ba)",
          "Rainfall; the response is gratitude to the tribe",
          "Wealth in gold; the response is to hoard it"
        ],
        correct: 1
      },
      {
        id: "L2-1C-007",
        tag: "Inferential Comprehension",
        stem: "<strong>Passage:</strong> Surah al-Humazah (opening).<br><br><strong>Question:</strong> What conduct does the surah condemn, and what fate is described?",
        passage: "وَيْلٌ لِّكُلِّ هُمَزَةٍ لُّمَزَةٍ ۝ الَّذِي جَمَعَ مَالًا وَعَدَّدَهُ ۝ يَحْسَبُ أَنَّ مَالَهُ أَخْلَدَهُ ۝ كَلَّا ۖ لَيُنبَذَنَّ فِي الْحُطَمَةِ",
        options: [
          "Generosity and humility; the reward is Paradise",
          "Slander and backbiting combined with hoarding wealth and thinking it grants immortality; the fate is being cast into al-Ḥuṭamah (the Crushing Fire)",
          "Fasting and prayer; the reward is forgiveness",
          "Travel and trade; the fate is poverty"
        ],
        correct: 1
      },
      {
        id: "L2-1C-008",
        tag: "Theological Comprehension",
        stem: "<strong>Passage:</strong> Surah al-Qadr (complete).<br><br><strong>Question:</strong> What is described about Laylat al-Qadr in this surah?",
        passage: "إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ ۝ وَمَا أَدْرَاكَ مَا لَيْلَةُ الْقَدْرِ ۝ لَيْلَةُ الْقَدْرِ خَيْرٌ مِّنْ أَلْفِ شَهْرٍ ۝ تَنَزَّلُ الْمَلَائِكَةُ وَالرُّوحُ فِيهَا بِإِذْنِ رَبِّهِم مِّن كُلِّ أَمْرٍ ۝ سَلَامٌ هِيَ حَتَّىٰ مَطْلَعِ الْفَجْرِ",
        options: [
          "It is a night of fear and punishment",
          "It is the night the Prophet was born",
          "It marks the end of Ramadan fasting only",
          "It is better than a thousand months; angels and the Spirit descend; it is peace until the break of dawn — and the Qur'an was sent down in it"
        ],
        correct: 3
      },
      {
        id: "L2-1C-009",
        tag: "Inferential Comprehension",
        stem: "<strong>Passage:</strong> Surah az-Zalzalah (closing verses).<br><br><strong>Question:</strong> What principle of divine justice do the final two verses establish?",
        passage: "فَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ ۝ وَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ شَرًّا يَرَهُ",
        options: [
          "Only major deeds are accounted for",
          "Even the smallest atom's weight of good or evil will be seen and recompensed — perfect, exhaustive accountability",
          "Good deeds erase the need for any accounting",
          "Deeds are weighed only for prophets"
        ],
        correct: 1
      },
      {
        id: "L2-1C-010",
        tag: "Narrative Comprehension",
        stem: "<strong>Passage:</strong> Surah ad-Duha (opening).<br><br><strong>Question:</strong> What reassurance does Allah give the Prophet here?",
        passage: "وَالضُّحَىٰ ۝ وَاللَّيْلِ إِذَا سَجَىٰ ۝ مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ ۝ وَلَلْآخِرَةُ خَيْرٌ لَّكَ مِنَ الْأُولَىٰ",
        options: [
          "That his enemies will be defeated in battle",
          "That he will be granted great wealth in this world",
          "That his Lord has neither forsaken him nor become displeased with him, and that the Hereafter is better for him than this life",
          "That revelation will cease permanently"
        ],
        correct: 2
      },
      {
        id: "L2-1C-011",
        tag: "Inferential Comprehension",
        stem: "<strong>Passage:</strong> Surah ad-Duha (closing).<br><br><strong>Question:</strong> What three directives close the surah, recalling the Prophet's own past?",
        passage: "أَلَمْ يَجِدْكَ يَتِيمًا فَآوَىٰ ۝ وَوَجَدَكَ ضَالًّا فَهَدَىٰ ۝ وَوَجَدَكَ عَائِلًا فَأَغْنَىٰ ۝ فَأَمَّا الْيَتِيمَ فَلَا تَقْهَرْ ۝ وَأَمَّا السَّائِلَ فَلَا تَنْهَرْ ۝ وَأَمَّا بِنِعْمَةِ رَبِّكَ فَحَدِّثْ",
        options: [
          "Hoard wealth, ignore the poor, and stay silent",
          "Do not oppress the orphan, do not repel the one who asks, and proclaim the favour of your Lord",
          "Fight enemies, build a house, and travel",
          "Fast, give zakat, and perform hajj"
        ],
        correct: 1
      },
      {
        id: "L2-1C-012",
        tag: "Theological Comprehension",
        stem: "<strong>Passage:</strong> Surah at-Tin (complete).<br><br><strong>Question:</strong> What contrast does the surah draw about the human being?",
        passage: "وَالتِّينِ وَالزَّيْتُونِ ۝ وَطُورِ سِينِينَ ۝ وَهَٰذَا الْبَلَدِ الْأَمِينِ ۝ لَقَدْ خَلَقْنَا الْإِنسَانَ فِي أَحْسَنِ تَقْوِيمٍ ۝ ثُمَّ رَدَدْنَاهُ أَسْفَلَ سَافِلِينَ ۝ إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ فَلَهُمْ أَجْرٌ غَيْرُ مَمْنُونٍ",
        options: [
          "Humans are created in the best of forms, yet can be reduced to the lowest — except the believers who do good, who have an unending reward",
          "Humans are inherently evil with no path to redemption",
          "All humans are equal in fate regardless of deeds",
          "Only prophets are created in the best form"
        ],
        correct: 0
      },
      {
        id: "L2-1C-013",
        tag: "Narrative Comprehension",
        stem: "<strong>Passage:</strong> Surah al-ʿAlaq (opening — the first revelation).<br><br><strong>Question:</strong> What does the opening command and its themes emphasize?",
        passage: "اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ ۝ خَلَقَ الْإِنسَانَ مِنْ عَلَقٍ ۝ اقْرَأْ وَرَبُّكَ الْأَكْرَمُ ۝ الَّذِي عَلَّمَ بِالْقَلَمِ ۝ عَلَّمَ الْإِنسَانَ مَا لَمْ يَعْلَمْ",
        options: [
          "A command to fight and a theme of warfare",
          "A command to migrate and a theme of travel",
          "A command to fast and a theme of hunger",
          "A command to read/recite in the name of the creating Lord, and the theme of knowledge — Allah taught by the pen what humans did not know"
        ],
        correct: 3
      },
      {
        id: "L2-1C-014",
        tag: "Inferential Comprehension",
        stem: "<strong>Passage:</strong> Surah al-Layl (opening).<br><br><strong>Question:</strong> What does this passage say about the diversity of human effort?",
        passage: "وَاللَّيْلِ إِذَا يَغْشَىٰ ۝ وَالنَّهَارِ إِذَا تَجَلَّىٰ ۝ وَمَا خَلَقَ الذَّكَرَ وَالْأُنثَىٰ ۝ إِنَّ سَعْيَكُمْ لَشَتَّىٰ",
        options: [
          "That all human striving leads to the same end",
          "That human endeavours are diverse and divergent (lashattā) — leading to different outcomes",
          "That effort is meaningless before fate",
          "That only night-time worship counts"
        ],
        correct: 1
      },
      {
        id: "L2-1C-015",
        tag: "Theological Comprehension",
        stem: "<strong>Passage:</strong> Surah al-Layl (continued).<br><br><strong>Question:</strong> What two paths and their consequences does the passage describe?",
        passage: "فَأَمَّا مَنْ أَعْطَىٰ وَاتَّقَىٰ ۝ وَصَدَّقَ بِالْحُسْنَىٰ ۝ فَسَنُيَسِّرُهُ لِلْيُسْرَىٰ ۝ وَأَمَّا مَن بَخِلَ وَاسْتَغْنَىٰ ۝ وَكَذَّبَ بِالْحُسْنَىٰ ۝ فَسَنُيَسِّرُهُ لِلْعُسْرَىٰ",
        options: [
          "The one who gives, is mindful, and affirms the best — eased toward ease; and the one who is stingy, deems himself self-sufficient, and denies — eased toward hardship",
          "The rich are saved and the poor are doomed regardless of conduct",
          "Both paths lead to the same reward",
          "Only physical strength determines one's path"
        ],
        correct: 0
      },
      {
        id: "L2-1C-016",
        tag: "Narrative Comprehension",
        stem: "<strong>Passage:</strong> Surah an-Nasr (complete).<br><br><strong>Question:</strong> What event does the surah anticipate, and what response does it command?",
        passage: "إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ ۝ وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا ۝ فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ ۖ إِنَّهُ كَانَ تَوَّابًا",
        options: [
          "A military defeat; the response is mourning",
          "The coming of Allah's help and victory with people entering His religion in crowds; the response is to glorify and praise the Lord and seek His forgiveness",
          "A famine; the response is migration",
          "A celebration of tribal honour; the response is pride"
        ],
        correct: 1
      },
      {
        id: "L2-1C-017",
        tag: "Theological Comprehension",
        stem: "<strong>Passage:</strong> Surah al-Kafirun (complete).<br><br><strong>Question:</strong> What principle does this surah establish regarding worship?",
        passage: "قُلْ يَا أَيُّهَا الْكَافِرُونَ ۝ لَا أَعْبُدُ مَا تَعْبُدُونَ ۝ وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ ۝ وَلَا أَنَا عَابِدٌ مَّا عَبَدتُّمْ ۝ وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ ۝ لَكُمْ دِينُكُمْ وَلِيَ دِينِ",
        options: [
          "A call to combine all religions into one",
          "A clear disavowal of compromise in worship — total distinction between worshipping Allah alone and the disbelievers' practice: 'For you is your religion, and for me is mine'",
          "Permission to worship idols occasionally",
          "An invitation to abandon prayer entirely"
        ],
        correct: 1
      },
      {
        id: "L2-1C-018",
        tag: "Inferential Comprehension",
        stem: "<strong>Passage:</strong> Surah al-Falaq (complete).<br><br><strong>Question:</strong> From which evils does this surah seek refuge in the Lord of the daybreak?",
        passage: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِن شَرِّ مَا خَلَقَ ۝ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ",
        options: [
          "From poverty, illness, and old age",
          "From the evil of created things, of darkness when it settles, of those who blow on knots (sorcery), and of the envier when he envies",
          "From travel, trade losses, and hunger",
          "From forgetfulness and sleep"
        ],
        correct: 1
      },
      {
        id: "L2-1C-019",
        tag: "Theological Comprehension",
        stem: "<strong>Passage:</strong> Surah an-Nas (complete).<br><br><strong>Question:</strong> Which three attributes of Allah are invoked, and from what does one seek refuge?",
        passage: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَٰهِ النَّاسِ ۝ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ",
        options: [
          "Creator, Sustainer, Destroyer; refuge from poverty",
          "Lord (Rabb), King (Malik), and God (Ilāh) of mankind; refuge from the retreating whisperer who whispers in human breasts, from jinn and men",
          "Merciful, Forgiving, Just; refuge from illness",
          "First, Last, Hidden; refuge from enemies in war"
        ],
        correct: 1
      },
      {
        id: "L2-1C-020",
        tag: "Inferential Comprehension",
        stem: "<strong>Passage:</strong> Surah al-Qariʿah (opening).<br><br><strong>Question:</strong> What scene does this passage depict, and what does it concern?",
        passage: "الْقَارِعَةُ ۝ مَا الْقَارِعَةُ ۝ وَمَا أَدْرَاكَ مَا الْقَارِعَةُ ۝ يَوْمَ يَكُونُ النَّاسُ كَالْفَرَاشِ الْمَبْثُوثِ ۝ وَتَكُونُ الْجِبَالُ كَالْعِهْنِ الْمَنفُوشِ",
        options: [
          "A description of a peaceful garden in Paradise",
          "A historical battle between two tribes",
          "The migration of birds in spring",
          "The Striking Calamity (Day of Judgment): people scattered like moths and mountains like carded wool — the terror and upheaval of the Last Day"
        ],
        correct: 3
      }
    ]
  },

  "1D": {
    track: "language",
    title: "Section 1D — Constructed Response",
    titleArabic: "الإنتاج المكتوب",
    description: "Two productive tasks. The first asks for an Arabic paraphrase; the second asks for a thematic explanation in your native language or English.",
    instructions: "Take your time. Each task is graded on Content, Linguistic Control, and Organisation. In live RQAP administrations, two trained raters grade each response.",
    time: 35,
    weight: "30% of Track 1",
    itemsList: [
      {
        id: "L2-1D-001",
        tag: "Arabic Paraphrase · 60–80 words",
        stem: "<strong>Task:</strong> Read Surah al-Zalzalah carefully. Then, <strong>in Arabic</strong>, write a paraphrase of approximately 60–80 words in your own words, preserving the meaning but not the exact wording of the Qur'anic text.",
        passage: "إِذَا زُلْزِلَتِ الْأَرْضُ زِلْزَالَهَا ۝ وَأَخْرَجَتِ الْأَرْضُ أَثْقَالَهَا ۝ وَقَالَ الْإِنسَانُ مَا لَهَا ۝ يَوْمَئِذٍ تُحَدِّثُ أَخْبَارَهَا ۝ بِأَنَّ رَبَّكَ أَوْحَىٰ لَهَا ۝ يَوْمَئِذٍ يَصْدُرُ النَّاسُ أَشْتَاتًا لِّيُرَوْا أَعْمَالَهُمْ ۝ فَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ ۝ وَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ شَرًّا يَرَهُ",
        type: "essay-arabic",
        minWords: 50
      },
      {
        id: "L2-1D-002",
        tag: "Thematic Explanation · 150–200 words",
        stem: "<strong>Task:</strong> In your native language (or English), write 150–200 words explaining how Surah al-'Asr presents a complete philosophy of human success and loss. What are the four conditions it names? Why is time invoked as witness?",
        passage: "وَالْعَصْرِ ۝ إِنَّ الْإِنسَانَ لَفِي خُسْرٍ ۝ إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ",
        type: "essay-target",
        minWords: 100
      }
    ]
  }
};
