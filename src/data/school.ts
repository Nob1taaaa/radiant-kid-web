export const school = {
  name: "Devanath Public School",
  shortName: "Devanath",
  location: "Singraur, Varanasi",
  tagline: "A progressive learning space where every child thrives",
  overview:
    "Devanath Public School in Singraur, Varanasi offers a comprehensive approach to education that balances academics, creativity and character-building. Experienced educators, modern classrooms and a child‑first philosophy ensure joyful learning and steady growth.",
  curriculum:
    "The school follows a structured, age‑appropriate curriculum combining activity‑based learning, experiential projects and strong fundamentals in language, math, science and life skills.",
  levels: [
    "Pre‑Primary and Kindergarten",
    "Primary School (Foundational Learning)",
    "Upper Primary and Middle School",
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
  address: "Near Lalimakot, Singraur, Varanasi, Uttar Pradesh",
  contact: {
    phone: "",
    whatsapp: "",
    email: null as string | null,
  },
  stats: {
    udise: "09670605502",
    yearEstablished: 2010,
    category: "Primary with Upper Primary",
    coEd: true,
    classesOffered: ["Pre‑Primary","I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII"],
    totals: { students: 475, teachers: 9 },
    enrollmentByClass: [] as { classLabel: string; students: number }[],
    facilities: [] as { label: string; value: boolean | null }[],
  },
} as const;

export type School = typeof school;
