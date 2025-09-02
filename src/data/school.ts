export const school = {
  name: "Devnath Public School Lalmankot",
  shortName: "Devanath",
  location: "Cholapur, Varanasi",
  tagline: "Co‑educational private school focusing on strong fundamentals and values",
  overview:
    "Devanath Public School in Singraur, Varanasi offers a comprehensive approach to education that balances academics, creativity and character-building. Experienced educators, modern classrooms and a child‑first philosophy ensure joyful learning and steady growth.",
  curriculum:
    "The school follows a structured, age‑appropriate curriculum combining activity‑based learning, experiential projects and strong fundamentals in language, math, science and life skills.",
  levels: [
    "Primary (Classes I–V)",
    "Upper Primary (Classes VI–VIII)",
  ],
  facilities: [
    "Smart, well‑ventilated classrooms",
    "Library and reading corner",
    "Computer lab and science resources",
    "Safe outdoor play area",
    "CCTV and secure campus",
    "Transport facility (routes as per demand)",
  ],
  admissions:
    "Admissions are open to students from diverse backgrounds. The process includes form submission, interaction/assessment appropriate to the grade and verification of documents.",
  documents: [
    "Birth certificate",
    "Aadhar/ID proof",
    "Previous school record (if applicable)",
    "Recent passport size photographs",
  ],
  hours: [
    { day: "Monday – Friday", time: "08:00 AM – 05:00 PM" },
    { day: "Saturday", time: "08:00 AM – 02:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  address: "Lalmankot, Cholapur, Varanasi, Uttar Pradesh",
  contact: {
    phone: "",
    whatsapp: "",
    email: null as string | null,
  },
  stats: {
    udise: "09670605502",
    yearEstablished: 2018,
    category: "Primary with Upper Primary",
    coEd: true,
    classesOffered: ["I","II","III","IV","V","VI","VII","VIII"],
    totals: { students: 475, teachers: 7 },
    enrollmentByClass: [
      { classLabel: "I", students: 82 },
      { classLabel: "II", students: 76 },
      { classLabel: "III", students: 91 },
      { classLabel: "IV", students: 72 },
      { classLabel: "V", students: 44 },
      { classLabel: "VI", students: 47 },
      { classLabel: "VII", students: 37 },
      { classLabel: "VIII", students: 26 },
    ],
    facilities: [
      { label: "Co‑educational", value: true },
      { label: "Rural Location", value: true },
      { label: "Boundary Wall (Pucca)", value: true },
      { label: "Playground", value: true },
      { label: "Drinking Water", value: true },
      { label: "Hand‑wash Facility", value: true },
      { label: "Library", value: true },
      { label: "Reading Corner", value: true },
      { label: "Book Bank", value: true },
      { label: "Internet", value: false },
      { label: "Computers Available", value: false },
      { label: "Digital Board", value: false },
    ],
  },
} as const;

export type School = typeof school;
