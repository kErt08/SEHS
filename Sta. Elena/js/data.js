/**
 * Demo data for Sta. Elena School Performance Tracking System
 */
const STA_ELENA = {
  schoolName: "Sta. Elena High School",
  passingGrade: 75,

  users: {
    admin: { id: "ADM001", name: "Dr. Maria Santos", role: "admin", title: "School Principal" },
    teacher: { id: "TCH042", name: "Mr. Juan Dela Cruz", role: "teacher", title: "Mathematics Teacher" },
    student: {
      id: "STU2024-0891",
      name: "Ana Patricia Reyes",
      role: "student",
      gradeLevel: "Grade 11",
      strand: "STEM",
      section: "Einstein",
      schoolYear: "2025–2026",
      email: "ana.reyes@student.staelena.edu.ph",
    },
  },

  documents: [
    { id: "doc_handbook", title: "Student Handbook 2025–2026", module: "Policies & Guidelines", category: "Handbook", date: "2025-06-01", size: "2.4 MB" },
    { id: "doc_conduct", title: "Code of Conduct & Discipline Policy", module: "Policies & Guidelines", category: "Policy", date: "2025-05-15", size: "890 KB" },
    { id: "doc_grading", title: "Grading System & Assessment Guidelines", module: "Policies & Guidelines", category: "Policy", date: "2025-05-01", size: "1.1 MB" },
    { id: "doc_anti_bully", title: "Anti-Bullying Policy & Reporting", module: "Policies & Guidelines", category: "Policy", date: "2025-04-01", size: "620 KB" },
    { id: "doc_enroll", title: "Enrollment Form (New Students)", module: "Enrollment & Registration", category: "Form", date: "2025-04-20", size: "320 KB" },
    { id: "doc_cor_guide", title: "Certificate of Registration (COR) Guide", module: "Enrollment & Registration", category: "Manual", date: "2025-05-08", size: "410 KB" },
    { id: "doc_transfer", title: "Transfer Credentials Request Form", module: "Enrollment & Registration", category: "Form", date: "2025-03-22", size: "290 KB" },
    { id: "doc_curriculum", title: "SHS Curriculum Guide (STEM / ABM / HUMSS)", module: "Academic", category: "Manual", date: "2025-05-12", size: "3.2 MB" },
    { id: "doc_class_sched", title: "Class Scheduling & Load Guidelines", module: "Academic", category: "Manual", date: "2025-02-15", size: "780 KB" },
    { id: "doc_research", title: "Research & Practical Work Rubrics", module: "Academic", category: "Manual", date: "2025-01-30", size: "950 KB" },
    { id: "doc_ptc", title: "Parent-Teacher Conference Guidelines", module: "Student Affairs", category: "Manual", date: "2025-03-10", size: "540 KB" },
    { id: "doc_clubs", title: "Student Organizations & Clubs Manual", module: "Student Affairs", category: "Handbook", date: "2025-02-20", size: "1.1 MB" },
    { id: "doc_guidance", title: "Guidance & Counseling Services Overview", module: "Student Affairs", category: "Manual", date: "2025-04-05", size: "480 KB" },
    { id: "doc_scholar", title: "Scholarship Application Form", module: "Student Affairs", category: "Form", date: "2025-02-28", size: "280 KB" },
    { id: "doc_teacher_eval", title: "Teacher Performance Evaluation Form", module: "Faculty & Staff", category: "Form", date: "2025-03-01", size: "350 KB" },
    { id: "doc_faculty_handbook", title: "Faculty Handbook 2025–2026", module: "Faculty & Staff", category: "Handbook", date: "2025-06-01", size: "2.1 MB" },
    { id: "doc_health", title: "School Health & Safety Protocols", module: "Health & Safety", category: "Policy", date: "2025-05-20", size: "720 KB" },
    { id: "doc_emergency", title: "Emergency Response & Drill Manual", module: "Health & Safety", category: "Manual", date: "2025-01-15", size: "860 KB" },
    { id: "doc_data_privacy", title: "Data Privacy Notice (RA 10173)", module: "Policies & Guidelines", category: "Policy", date: "2025-06-01", size: "340 KB" },
  ],

  announcements: [
    {
      title: "Quarter 2 Grade Release",
      date: "2026-01-15",
      body: "Official grades for Quarter 2 are now available on the Student Portal for all completed subjects.",
      author: "Registrar's Office",
    },
    {
      title: "Science Fair Registration Open",
      date: "2026-01-10",
      body: "STEM students may register their projects through their advisers until January 25.",
      author: "Science Department",
    },
    {
      title: "Campus Maintenance Schedule",
      date: "2026-01-05",
      body: "Selected classrooms will undergo maintenance on weekends. Classes will proceed as scheduled on weekdays.",
      author: "Administration",
    },
  ],

  schoolEvents: [
    { title: "Foundation Day Program", date: "2026-02-14", time: "8:00 AM", location: "School Gymnasium", type: "school" },
    { title: "Parent-Teacher Conference", date: "2026-02-21", time: "1:00 PM", location: "All Classrooms", type: "school" },
    { title: "Intramurals Week", date: "2026-03-02", time: "All day", location: "Sports Complex", type: "school" },
  ],

  upcomingEvents: [
    { title: "Quarter 3 Opening", date: "2026-01-20", time: "7:30 AM", location: "Main Grounds", type: "upcoming" },
    { title: "Career Guidance Seminar", date: "2026-01-28", time: "9:00 AM", location: "AVR", type: "upcoming" },
    { title: "Quarter 3 Midterm Exams", date: "2026-02-10", time: "7:30 AM", location: "Campus-wide", type: "upcoming" },
    { title: "Report Card Distribution", date: "2026-03-15", time: "8:00 AM", location: "Registrar", type: "upcoming" },
  ],

  quarters: [
    { id: "q1", label: "Quarter 1", status: "completed" },
    { id: "q2", label: "Quarter 2", status: "completed" },
    { id: "q3", label: "Quarter 3", status: "ongoing" },
    { id: "q4", label: "Quarter 4", status: "ongoing" },
  ],

  grades: {
    "Grade 11": {
      q1: [
        { subject: "Pre-Calculus", code: "STEM-MATH01", grade: 88, units: 1 },
        { subject: "General Chemistry 1", code: "STEM-SCI01", grade: 82, units: 1 },
        { subject: "English for Academic Purposes", code: "CORE-ENG01", grade: 91, units: 1 },
        { subject: "Komunikasyon at Pananaliksik", code: "CORE-FIL01", grade: 87, units: 1 },
        { subject: "Physical Education & Health", code: "CORE-PE01", grade: 95, units: 1 },
        { subject: "Introduction to Philosophy", code: "CORE-HUM01", grade: 72, units: 1 },
      ],
      q2: [
        { subject: "Basic Calculus", code: "STEM-MATH02", grade: 85, units: 1 },
        { subject: "General Chemistry 2", code: "STEM-SCI02", grade: 78, units: 1 },
        { subject: "Research Methods", code: "STEM-RES01", grade: 90, units: 1 },
        { subject: "21st Century Literature", code: "CORE-ENG02", grade: 88, units: 1 },
        { subject: "Physical Science", code: "CORE-SCI01", grade: 68, units: 1 },
        { subject: "Personal Development", code: "CORE-PD01", grade: 93, units: 1 },
      ],
      q3: [
        { subject: "General Biology 1", code: "STEM-BIO01", grade: null, units: 1 },
        { subject: "Statistics & Probability", code: "STEM-MATH03", grade: null, units: 1 },
        { subject: "Practical Research 1", code: "STEM-RES02", grade: null, units: 1 },
        { subject: "Media and Information Literacy", code: "CORE-MIL01", grade: null, units: 1 },
      ],
      q4: [
        { subject: "General Physics 1", code: "STEM-PHY01", grade: null, units: 1 },
        { subject: "Practical Research 2", code: "STEM-RES03", grade: null, units: 1 },
      ],
    },
  },

  subjectFlow: {
    completed: [
      { code: "CORE-ENG01", name: "English for Academic Purposes", units: 1 },
      { code: "CORE-FIL01", name: "Komunikasyon at Pananaliksik", units: 1 },
      { code: "STEM-MATH01", name: "Pre-Calculus", units: 1 },
      { code: "STEM-SCI01", name: "General Chemistry 1", units: 1 },
      { code: "STEM-MATH02", name: "Basic Calculus", units: 1 },
      { code: "STEM-SCI02", name: "General Chemistry 2", units: 1 },
    ],
    current: [
      { code: "STEM-BIO01", name: "General Biology 1", units: 1 },
      { code: "STEM-MATH03", name: "Statistics & Probability", units: 1 },
      { code: "STEM-RES02", name: "Practical Research 1", units: 1 },
      { code: "CORE-MIL01", name: "Media and Information Literacy", units: 1 },
    ],
    future: [
      { code: "STEM-PHY01", name: "General Physics 1", units: 1 },
      { code: "STEM-RES03", name: "Practical Research 2", units: 1 },
      { code: "STEM-BIO02", name: "General Biology 2", units: 1 },
      { code: "CORE-EMP01", name: "Empowerment Technologies", units: 1 },
    ],
  },

  calendarEvents: [
    { date: "2026-01-20", title: "Q3 Opening Ceremony", type: "academic" },
    { date: "2026-01-28", title: "Career Guidance Seminar", type: "event" },
    { date: "2026-02-10", title: "Q3 Midterm Exams Start", type: "deadline" },
    { date: "2026-02-14", title: "Foundation Day", type: "event" },
    { date: "2026-02-21", title: "Parent-Teacher Conference", type: "event" },
    { date: "2026-03-02", title: "Intramurals Week", type: "event" },
    { date: "2026-03-15", title: "Report Card Distribution", type: "deadline" },
    { date: "2026-03-28", title: "Q3 Ends", type: "academic" },
  ],

  cor: {
    studentId: "STU2024-0891",
    name: "Ana Patricia Reyes",
    gradeLevel: "Grade 11",
    strand: "STEM",
    section: "Einstein",
    schoolYear: "2025–2026",
    subjects: [
      { code: "STEM-BIO01", name: "General Biology 1", schedule: "MWF 7:30–8:30", units: 1 },
      { code: "STEM-MATH03", name: "Statistics & Probability", schedule: "TTh 9:30–10:30", units: 1 },
      { code: "STEM-RES02", name: "Practical Research 1", schedule: "TTh 1:00–2:30", units: 1 },
      { code: "CORE-MIL01", name: "Media and Information Literacy", schedule: "MWF 10:30–11:30", units: 1 },
      { code: "CORE-PE02", name: "Physical Education & Health", schedule: "F 2:30–4:00", units: 1 },
      { code: "CORE-AP01", name: "Understanding Culture & Society", schedule: "TTh 7:30–8:30", units: 1 },
    ],
    totalUnits: 6,
    dateIssued: "2026-01-08",
  },
};
