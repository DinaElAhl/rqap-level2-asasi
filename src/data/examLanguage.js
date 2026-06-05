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
          "The One who depends on none, upon whom all depend",
          "Both (A) and (D) — the Eternal Refuge who is self-sufficient",
          "The Compassionate and Merciful",
          "The One who is eternally sought after, the Refuge"
        ],
        correct: 1
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
          "Root: ق-ر-ر; اسم مفعول (passive participle) — 'that which is made stable'",
          "Root: ق-ر-ر; اسم مكان/زمان (noun of place/time) — 'a place or time of settlement'",
          "Root: س-ق-ر; اسم فاعل (active participle)",
          "Root: ق-ر-ر; مصدر (verbal noun)"
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
