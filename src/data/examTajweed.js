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
      },
      {
        id: "L2-2A-006",
        tag: "Sifaat",
        stem: "The characteristic <span class='arabic-inline'>الهمس</span> (whispering / hams) is defined as:",
        options: [
          "The flow of breath when pronouncing the letter",
          "The flow of sound (not breath) when pronouncing the letter",
          "The trapping of both breath and sound",
          "The vibration of the vocal cords"
        ],
        correct: 0
      },
      {
        id: "L2-2A-007",
        tag: "Sifaat",
        stem: "The letters of <span class='arabic-inline'>الهمس</span> are collected in the mnemonic <span class='arabic-inline'>فَحَثَّهُ شَخْصٌ سَكَتْ</span>. The opposite characteristic, in which the breath is held back, is called:",
        options: [
          "الرخاوة (rakhawa)",
          "الجهر (jahr)",
          "الإطباق (itbaq)",
          "القلقلة (qalqala)"
        ],
        correct: 1
      },
      {
        id: "L2-2A-008",
        tag: "Sifaat",
        stem: "The characteristic <span class='arabic-inline'>الشدة</span> (shidda) — collected in <span class='arabic-inline'>أَجِدْ قَطٍ بَكَتْ</span> — refers to:",
        options: [
          "The complete running of sound through the letter",
          "The complete stopping (imprisonment) of the sound when the letter is pronounced with sukun",
          "Raising the back of the tongue toward the palate",
          "The echoing/bouncing quality of the letter"
        ],
        correct: 1
      },
      {
        id: "L2-2A-009",
        tag: "Sifaat",
        stem: "The letters of <span class='arabic-inline'>الاستعلاء</span> (elevation), in which the tongue rises toward the upper palate, are collected in the mnemonic:",
        options: [
          "خُصَّ ضَغْطٍ قِظْ (خ، ص، ض، غ، ط، ق، ظ)",
          "قطب جد",
          "فَحَثَّهُ شَخْصٌ سَكَتْ",
          "يرملون"
        ],
        correct: 0,
        arabicOptions: true
      },
      {
        id: "L2-2A-010",
        tag: "Sifaat",
        stem: "<span class='arabic-inline'>الإطباق</span> (itbaq), the strongest cause of full tafkhim, applies to exactly which four letters?",
        options: [
          "ص، ض، ط، ظ",
          "خ، غ، ق، ط",
          "ق، ط، ب، ج",
          "ص، س، ز، ث"
        ],
        correct: 0,
        arabicOptions: true
      },
      {
        id: "L2-2A-011",
        tag: "Makharij",
        stem: "How many main articulation points (<span class='arabic-inline'>المخارج العامة</span>) of the Arabic letters are there according to the majority (al-Jazari)?",
        options: [
          "Three",
          "Five",
          "Seventeen distributed over five general regions",
          "Twenty-nine"
        ],
        correct: 2
      },
      {
        id: "L2-2A-012",
        tag: "Makharij",
        stem: "The three throat letters from the deepest part of the throat (<span class='arabic-inline'>أقصى الحلق</span>) are:",
        options: [
          "ح، ع",
          "ء، هـ (the hamza and the haa)",
          "غ، خ",
          "ق، ك"
        ],
        correct: 1,
        arabicOptions: true
      },
      {
        id: "L2-2A-013",
        tag: "Noon Sakinah Rule",
        stem: "The letters of <span class='arabic-inline'>الإظهار الحلقي</span> (clear pronunciation of noon sakinah) are the six throat letters, collected as:",
        options: [
          "ي، ر، م، ل، و، ن",
          "ء، هـ، ع، ح، غ، خ",
          "ب only",
          "The fifteen remaining letters"
        ],
        correct: 1,
        arabicOptions: true
      },
      {
        id: "L2-2A-014",
        tag: "Noon Sakinah Rule",
        stem: "The letters of <span class='arabic-inline'>الإدغام بغنة</span> (idgham with ghunna) for noon sakinah and tanwin are collected in the mnemonic <span class='arabic-inline'>ينمو</span>. These letters are:",
        options: [
          "ي، ن، م، و",
          "ل، ر",
          "ب، م",
          "ء، هـ، ع، ح"
        ],
        correct: 0,
        arabicOptions: true
      },
      {
        id: "L2-2A-015",
        tag: "Noon Sakinah Rule",
        stem: "The two letters of <span class='arabic-inline'>الإدغام بغير غنة</span> (idgham WITHOUT ghunna) for noon sakinah and tanwin are:",
        options: [
          "ي، و",
          "ل، ر (laam and raa)",
          "ن، م",
          "ب only"
        ],
        correct: 1,
        arabicOptions: true
      },
      {
        id: "L2-2A-016",
        tag: "Noon Sakinah Rule",
        stem: "How many letters cause <span class='arabic-inline'>الإخفاء الحقيقي</span> (real concealment) of noon sakinah and tanwin?",
        options: [
          "Six",
          "Two",
          "Four",
          "Fifteen (the remaining letters after izhar, idgham, and iqlab)"
        ],
        correct: 3
      },
      {
        id: "L2-2A-017",
        tag: "Meem Sakinah",
        stem: "When a <span class='arabic-inline'>ميم ساكنة</span> is followed by the letter <span class='arabic-inline'>ب</span>, the applicable rule is:",
        options: [
          "إظهار شفوي (clear labial pronunciation)",
          "إخفاء شفوي (labial concealment with ghunna)",
          "إدغام شفوي / إدغام مثلين (labial merging)",
          "إقلاب (conversion)"
        ],
        correct: 1
      },
      {
        id: "L2-2A-018",
        tag: "Meem Sakinah",
        stem: "When a <span class='arabic-inline'>ميم ساكنة</span> is followed by another <span class='arabic-inline'>م</span>, the rule is <span class='arabic-inline'>إدغام مثلين (شفوي)</span> with ghunna. When it is followed by any letter OTHER than ب and م, the rule is:",
        options: [
          "إخفاء شفوي",
          "إقلاب",
          "إظهار شفوي (clear labial pronunciation)",
          "إدغام بغنة"
        ],
        correct: 2
      },
      {
        id: "L2-2A-019",
        tag: "Madd Classification",
        stem: "<span class='arabic-inline'>المد المتصل</span> (connected madd) occurs when a madd letter is followed by a hamza in the same word. Its obligatory length is:",
        options: [
          "2 counts",
          "4 or 5 counts (waajib / obligatory)",
          "6 counts always",
          "It is not lengthened"
        ],
        correct: 1
      },
      {
        id: "L2-2A-020",
        tag: "Madd Classification",
        stem: "<span class='arabic-inline'>المد اللازم</span> (necessary madd), as in <span class='arabic-inline'>الضَّالِّينَ</span> and the letter <span class='arabic-inline'>ص</span> in fawatih, is lengthened for:",
        options: [
          "2 counts",
          "4 counts",
          "6 counts (obligatory)",
          "2 or 4 or 6 counts as preferred"
        ],
        correct: 2
      },
      {
        id: "L2-2A-021",
        tag: "Madd Classification",
        stem: "<span class='arabic-inline'>مد العوض</span> (madd of compensation) occurs when one stops on a word ending in <span class='arabic-inline'>تنوين النصب</span> (fatha tanwin), e.g. stopping on <span class='arabic-inline'>عَلِيمًا</span> → 'ʿalīmā'. It is lengthened:",
        options: [
          "6 counts",
          "2 counts (replacing the tanwin with an alif madd)",
          "4 counts",
          "Not at all"
        ],
        correct: 1
      },
      {
        id: "L2-2A-022",
        tag: "Madd Classification",
        stem: "<span class='arabic-inline'>مد البدل</span> (substitute madd), as in <span class='arabic-inline'>آمَنُوا</span> and <span class='arabic-inline'>إِيمَان</span>, occurs when a hamza PRECEDES the madd letter. Its length is:",
        options: [
          "2 counts (natural length)",
          "4 or 5 counts",
          "6 counts",
          "It is omitted"
        ],
        correct: 0
      },
      {
        id: "L2-2A-023",
        tag: "Qalqala",
        stem: "<span class='arabic-inline'>القلقلة الكبرى</span> (major qalqala) occurs when a qalqala letter:",
        options: [
          "Has an original sukun in the middle of a word",
          "Carries a vowel",
          "Has a sukun due to stopping (waqf) at the end of a word, e.g. stopping on الفَلَق",
          "Is followed by a madd letter"
        ],
        correct: 2
      },
      {
        id: "L2-2A-024",
        tag: "Raa Rule",
        stem: "The letter <span class='arabic-inline'>ر</span> is pronounced with <span class='arabic-inline'>الترقيق</span> (thinning) when:",
        options: [
          "It carries a fatha or damma",
          "It is saakin after a fatha",
          "It carries a kasra, or is saakin after an original kasra not followed by a letter of isti'la, e.g. فِرْعَوْن vs. شِرْعَة",
          "It is doubled with shadda"
        ],
        correct: 2
      },
      {
        id: "L2-2A-025",
        tag: "Laam Rule",
        stem: "The <span class='arabic-inline'>لام لفظ الجلالة</span> (the laam in the name الله) is pronounced with <span class='arabic-inline'>التفخيم</span> (heavy/full) when:",
        options: [
          "It is preceded by a kasra, e.g. بِسْمِ اللَّهِ",
          "It is preceded by a fatha or damma, e.g. قَالَ اللَّهُ / عَبْدُ اللَّهِ",
          "It occurs at the start of an ayah always",
          "It is always pronounced light (tarqiq)"
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
      },
      {
        id: "L2-2B-003",
        tag: "Rule Identification",
        stem: "In Surah al-Fatiha, the phrase <span class='arabic-inline'>أَنْعَمْتَ عَلَيْهِمْ</span> contains a noon sakinah followed by <span class='arabic-inline'>ع</span>. Which rule applies to that noon?",
        options: [
          "Ikhfa' (concealment)",
          "Iqlab (conversion)",
          "Izhar Halqi (clear pronunciation), since ع is a throat letter",
          "Idgham with ghunna"
        ],
        correct: 2
      },
      {
        id: "L2-2B-004",
        tag: "Rule Identification",
        stem: "In Surah al-Falaq, the phrase <span class='arabic-inline'>مِن شَرِّ</span> has a noon sakinah followed by <span class='arabic-inline'>ش</span>. Which rule applies?",
        options: [
          "Izhar",
          "Ikhfa' Haqiqi (real concealment), since ش is one of the fifteen ikhfa' letters",
          "Iqlab",
          "Idgham without ghunna"
        ],
        correct: 1,
        verse: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ مِن شَرِّ مَا خَلَقَ"
      },
      {
        id: "L2-2B-005",
        tag: "Rule Identification",
        stem: "In Surah al-Ikhlas, the phrase <span class='arabic-inline'>لَمْ يَلِدْ وَلَمْ يُولَدْ</span> contains a meem sakinah in <span class='arabic-inline'>لَمْ يَلِدْ</span> followed by <span class='arabic-inline'>ي</span>. Which rule applies to that meem?",
        options: [
          "Ikhfa' Shafawi",
          "Idgham Shafawi",
          "Izhar Shafawi (clear labial pronunciation)",
          "Iqlab"
        ],
        correct: 2,
        verse: "لَمْ يَلِدْ وَلَمْ يُولَدْ"
      },
      {
        id: "L2-2B-006",
        tag: "Qalqala Classification",
        stem: "In <span class='arabic-inline'>قَدْ أَفْلَحَ</span> (Surah al-Mu'minoon / al-A'la), the <span class='arabic-inline'>د</span> of <span class='arabic-inline'>قَدْ</span> carries a sukun in the middle of continuous speech. This qalqala is classified as:",
        options: [
          "Qalqala Sughra (minor), because the sukun is original and within continuous reading",
          "Qalqala Kubra (major)",
          "No qalqala",
          "Idgham"
        ],
        correct: 0
      },
      {
        id: "L2-2B-007",
        tag: "Madd Identification",
        stem: "In Surah al-Fil, the word <span class='arabic-inline'>جَاءَ</span>-type structure aside, the word <span class='arabic-inline'>السَّمَاءِ</span> (where a madd alif is followed by a hamza in the same word) is an example of which madd?",
        options: [
          "Madd Munfasil (separated)",
          "Madd Muttasil (connected), 4–5 counts",
          "Madd Tabi'i (natural)",
          "Madd Lazim"
        ],
        correct: 1,
        verse: "وَإِذَا السَّمَاءُ كُشِطَتْ"
      },
      {
        id: "L2-2B-008",
        tag: "Madd Identification",
        stem: "Across two words, <span class='arabic-inline'>يَا أَيُّهَا</span> — a madd letter at the end of one word followed by a hamza at the start of the next — is an example of:",
        options: [
          "Madd Muttasil",
          "Madd Munfasil (separated madd), 4–5 counts",
          "Madd 'Iwad",
          "Madd Badal"
        ],
        correct: 1,
        verse: "قُلْ يَا أَيُّهَا الْكَافِرُونَ"
      },
      {
        id: "L2-2B-009",
        tag: "Madd Identification",
        stem: "When stopping at the end of Surah al-Falaq on <span class='arabic-inline'>إِذَا حَسَدَ</span> — the final <span class='arabic-inline'>حَسَدْ</span> with a saakin daal due to waqf — the daal exhibits qalqala kubra. But the madd in <span class='arabic-inline'>الْعَالَمِينَ</span> when stopping at it (al-Fatiha) is:",
        options: [
          "Madd Tabi'i (2 counts)",
          "Madd Lazim (6 counts always)",
          "Madd Badal",
          "Madd 'Arid lis-Sukun (2, 4, or 6 counts), because the sukun is temporary due to stopping"
        ],
        correct: 3
      },
      {
        id: "L2-2B-010",
        tag: "Waqf Classification",
        stem: "Stopping in the middle of <span class='arabic-inline'>صِرَاطَ الَّذِينَ أَنْعَمْتَ</span> right after <span class='arabic-inline'>صِرَاطَ</span> — separating the mudaf from its mudaf ilayh and breaking the meaning — is classified as:",
        options: [
          "Waqf Tam (complete)",
          "Waqf Kafi (sufficient)",
          "Waqf Qabih (an ugly/forbidden stop) because it severs connected meaning",
          "Waqf Lazim (obligatory)"
        ],
        correct: 2
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
