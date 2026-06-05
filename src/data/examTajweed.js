// ============================================
// TRACK 2 — TAJWEED (مسار التجويد والتلاوة)
// Item banks for sections 2A, 2B, 2C.
//
// ITEM SCHEMA — same as Track 1 (see examLanguage.js). Section 2C uses:
//   type: "audio"  with a `passage` (the verse to recite); no options/correct.
// ============================================

export const tajweedSections = {
  "2A": {
    track: "tajweed",
    title: "Section 2A — Tajweed Theory",
    titleArabic: "نظرية التجويد",
    description: "Tests theoretical knowledge of makharij, sifaat, rules of noon and meem sakinah, types of madd, qalqala, and waqf categories.",
    instructions: "All items are multiple-choice. Each item is worth equal marks; there is no penalty for guessing.",
    time: 25,
    weight: "40% of Track 2",
    itemsList: [
      {
        id: "L2-2A-001",
        tag: "Makharij",
        stem: "The articulation point (مخرج) of the letter <span class='arabic-inline'>ض</span> is:",
        options: [
          "The tip of the tongue against the upper front teeth",
          "One edge of the tongue against the upper molars (the ض الضَّادِيَّة of the side of the tongue)",
          "The middle of the tongue against the palate",
          "The throat"
        ],
        correct: 1
      },
      {
        id: "L2-2A-002",
        tag: "Noon Sakinah Rule",
        stem: "When a <span class='arabic-inline'>نون ساكنة</span> (or tanwin) is followed by the letter <span class='arabic-inline'>ب</span>, the rule that applies is:",
        options: [
          "الإظهار (clear pronunciation)",
          "الإدغام (merging)",
          "الإقلاب (conversion of the noon into a hidden meem sound with ghunna)",
          "الإخفاء (concealment)"
        ],
        correct: 2
      },
      {
        id: "L2-2A-003",
        tag: "Madd Classification",
        stem: "In Surah al-Kafiroon the word <span class='arabic-inline'>الكافِرون</span> contains which type of madd?",
        options: [
          "مد لازم (obligatory madd, 6 counts)",
          "مد منفصل (separated madd, 4–5 counts)",
          "مد متصل (connected madd, 4–5 counts)",
          "مد طبيعي (natural madd, 2 counts)"
        ],
        correct: 3
      },
      {
        id: "L2-2A-004",
        tag: "Qalqala",
        stem: "Which of the following letters is from the <span class='arabic-inline'>حروف القلقلة</span> (letters of qalqala)?",
        options: [
          "ت",
          "س",
          "ج (and also ق، ط، ب، د — mnemonic: قطب جد)",
          "ف"
        ],
        correct: 2,
        arabicOptions: true
      },
      {
        id: "L2-2A-005",
        tag: "Waqf Technique",
        stem: "When reciting and stopping at a word ending in a kasra-nunation (e.g. <span class='arabic-inline'>حَكِيمٍ</span>), the correct waqf practice is:",
        options: [
          "Retain the tanwin exactly as in continuous reading",
          "Drop the tanwin and stop on the bare sukun (read: ḥakīm)",
          "Replace the tanwin with an alif",
          "Extend the kasra into a yaa madd"
        ],
        correct: 1
      }
    ]
  },

  "2B": {
    track: "tajweed",
    title: "Section 2B — Applied Tajweed",
    titleArabic: "تطبيق التجويد",
    description: "Tests the ability to apply tajweed rules in context — identifying which rule operates in a given verse and classifying waqf points.",
    instructions: "Select the most accurate identification or classification for each scenario.",
    time: 20,
    weight: "25% of Track 2",
    itemsList: [
      {
        id: "L2-2B-001",
        tag: "Rule Identification",
        stem: "In the phrase <span class='arabic-inline'>مِنْ بَعْدِ</span>, which tajweed rule applies?",
        options: [
          "Izhar (clear pronunciation)",
          "Iqlab (conversion of noon to hidden meem)",
          "Idgham (merging)",
          "Ikhfa' (concealment)"
        ],
        correct: 1
      },
      {
        id: "L2-2B-002",
        tag: "Waqf Classification",
        stem: "Stopping at the word <span class='arabic-inline'>الرَّحِيم</span> at the end of Surah al-Fatiha verse 3 is classified as:",
        options: [
          "Waqf Lazim (obligatory stop)",
          "Waqf Kafi or Hasan (permitted, meaningful)",
          "Waqf Qabih (forbidden stop)",
          "Not a valid stopping point at all"
        ],
        correct: 1
      }
    ]
  },

  "2C": {
    track: "tajweed",
    title: "Section 2C — Practical Recitation",
    titleArabic: "التلاوة التطبيقية",
    description: "Audio-recorded recitation of an unseen passage from Juz 'Amma, graded by certified raters on articulation, rule application, fluency, and waqf.",
    instructions: "You will be presented with one passage in this demo (three in live administrations). Use the record button below the verse to record your recitation. You may listen to your recording before submitting.",
    time: 5,
    weight: "35% of Track 2",
    itemsList: [
      {
        id: "L2-2C-001",
        tag: "Recitation Prompt · ~40 sec",
        stem: "<strong>Task:</strong> Recite Surah al-Nas in its entirety. Observe makharij, apply rules of noon sakinah, and stop correctly at each verse-end. Use the recorder below.",
        passage: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَٰهِ النَّاسِ ۝ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ",
        type: "audio"
      }
    ]
  }
};
