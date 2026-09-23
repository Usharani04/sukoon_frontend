import { GlobalSettings, Location, Doctor, Service, Disorder, Testimonial, FaqItem, InsurancePartner, DynamicSection, BlogPost } from "@/types/content";

export const globalSettings: GlobalSettings = {
  site_name: "Sukoon Health",
  primary_phone: "+91 8448156500",
  secondary_phone: "+91 1244265238",
  whatsapp_number: "+91 8448156500",
  admissions_email: "admissions@sukoonhealth.com",
  company_legal_name: "SUKOON HEALTHCARE SERVICES PRIVATE LIMITED",
  cin_number: "U85110DL2019PTC352490",
  registered_address: "#31, The Oasis, Okhla Phase III, Okhla Industrial Estate, New Delhi, Delhi - 110020",
  copyright_text: "© 2026 Sukoon Healthcare Services Pvt. Ltd. All Rights Reserved. NABH Accredited.",
  default_cta: {
    label: "Book Appointment",
    url: "/contact-us",
    style: "primary"
  },
  seo_defaults: {
    meta_title: "Sukoon Health | India's Leading Acute Psychiatry & Behavioral Health Hospitals",
    meta_description: "NABH-accredited psychiatric hospital network in Delhi NCR, Bengaluru & Hyderabad offering 24/7 inpatient psychiatry, de-addiction and evidence-based mental health care."
  },
  nav_links: [
    {
      label: "Specialties & Care",
      url: "/services",
      has_submenu: true,
      submenu_items: [
        { label: "Acute Inpatient Psychiatry", url: "/services/acute-inpatient-psychiatry" },
        { label: "Addiction & De-addiction", url: "/services/addiction-deaddiction" },
        { label: "Intensive Psychiatric Care (ICU)", url: "/services/intensive-psychiatric-care" },
        { label: "Women's Mental Health Care", url: "/services/womens-mental-health" },
        { label: "Geriatric Psychiatry", url: "/services/geriatric-psychiatry" },
        { label: "Child & Adolescent Psychiatry", url: "/services/child-adolescent-psychiatry" }
      ]
    },
    {
      label: "Conditions",
      url: "/conditions",
      has_submenu: true,
      submenu_items: [
        { label: "Bipolar Disorder", url: "/conditions/bipolar-disorder" },
        { label: "Clinical Depression", url: "/conditions/depression" },
        { label: "Schizophrenia & Psychosis", url: "/conditions/schizophrenia" },
        { label: "Obsessive Compulsive Disorder (OCD)", url: "/conditions/ocd" },
        { label: "Severe Anxiety & Panic", url: "/conditions/anxiety" },
        { label: "Substance Use & Alcoholism", url: "/conditions/substance-use" }
      ]
    },
    {
      label: "Our Hospitals",
      url: "/locations",
      has_submenu: true,
      submenu_items: [
        { label: "Gurugram (Sector 56)", url: "/locations/gurugram" },
        { label: "South Delhi (Chhatarpur)", url: "/locations/chhatarpur" },
        { label: "Bengaluru (Koramangala)", url: "/locations/bengaluru" },
        { label: "Hyderabad (Jubilee Hills)", url: "/locations/hyderabad" }
      ]
    },
    { label: "Doctors & Clinical Team", url: "/doctors" },
    { label: "About Sukoon", url: "/about-us" },
    { label: "24/7 Emergency Retrieval", url: "/emergency" }
  ],
  footer_columns: [
    {
      heading: "Clinical Services",
      links: [
        { label: "Acute Psychiatry Inpatient", url: "/services/acute-inpatient-psychiatry" },
        { label: "De-addiction & Rehab", url: "/services/addiction-deaddiction" },
        { label: "Psychiatric Intensive Care", url: "/services/intensive-psychiatric-care" },
        { label: "A2R+ & D2R+ Care Pathways", url: "/about-us#clinical-models" },
        { label: "MERA Sukoon 24/7 Retrieval", url: "/emergency" }
      ]
    },
    {
      heading: "Hospitals & Locations",
      links: [
        { label: "Gurugram, Haryana", url: "/locations/gurugram" },
        { label: "Chhatarpur, New Delhi", url: "/locations/chhatarpur" },
        { label: "Koramangala, Bengaluru", url: "/locations/bengaluru" },
        { label: "Jubilee Hills, Hyderabad", url: "/locations/hyderabad" },
        { label: "Expanding to 40 Network Centers", url: "/about-us#scale" }
      ]
    },
    {
      heading: "Patients & Families",
      links: [
        { label: "Insurance & Cashless Cover", url: "/#insurance" },
        { label: "Admissions Process", url: "/contact-us" },
        { label: "Clinical Advisory Board", url: "/about-us#guiding-lights" },
        { label: "Frequently Asked Questions", url: "/faqs" },
        { label: "Patient Recovery Stories", url: "/#testimonials" }
      ]
    },
    {
      heading: "Corporate & Legal",
      links: [
        { label: "About Sukoon Health", url: "/about-us" },
        { label: "Doctors & Leadership", url: "/doctors" },
        { label: "Privacy Policy", url: "/privacy-policy" },
        { label: "Terms & Conditions", url: "/terms-and-condition" },
        { label: "Bio-Medical Waste Reports", url: "/bio-medical-waste" }
      ]
    }
  ],
  social_links: [
    { platform: "linkedin", url: "https://linkedin.com/company/sukoonhealth" },
    { platform: "instagram", url: "https://instagram.com/sukoonhealth" },
    { platform: "youtube", url: "https://youtube.com/sukoonhealth" },
    { platform: "facebook", url: "https://facebook.com/sukoonhealth" }
  ]
};

export const locationsList: Location[] = [
  {
    id: 1,
    name: "Gurugram Hospital",
    slug: "gurugram",
    short_description: "India's premier standalone psychiatric inpatient hospital with 50+ beds, female-only floors, ICU, and sensory gardens.",
    full_address: "Plot No. 1, Sector 56, Golf Course Road Extension, Gurugram, Haryana - 122011",
    phone: "+91 8448156500",
    map_link: "https://maps.google.com/?q=Sukoon+Hospital+Gurugram",
    hero_image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=1200&auto=format&fit=crop",
    accreditations: [{ label: "NABH Accredited" }, { label: "MHCA 2017 Compliant" }, { label: "24/7 MERA Station" }]
  },
  {
    id: 2,
    name: "South Delhi Hospital (Chhatarpur)",
    slug: "chhatarpur",
    short_description: "State-of-the-art mental health and acute stabilization facility serving Delhi NCR with personalized multidisciplinary suites.",
    full_address: "Main Chhatarpur Road, Near Qutub Minar Metro, New Delhi - 110074",
    phone: "+91 8448156500",
    map_link: "https://maps.google.com/?q=Sukoon+Hospital+Delhi",
    hero_image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop",
    accreditations: [{ label: "NABH Accredited" }, { label: "Sensory Therapy Suites" }]
  },
  {
    id: 3,
    name: "Bengaluru Hospital (Koramangala)",
    slug: "bengaluru",
    short_description: "Advanced behavioral health center providing acute psychiatric care, luxury residential de-addiction, and neuromodulation.",
    full_address: "80 Feet Road, 4th Block, Koramangala, Bengaluru, Karnataka - 560034",
    phone: "+91 8448156500",
    map_link: "https://maps.google.com/?q=Sukoon+Hospital+Bengaluru",
    hero_image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=1200&auto=format&fit=crop",
    accreditations: [{ label: "NABH Accredited" }, { label: "TMS & Neuromodulation" }]
  },
  {
    id: 4,
    name: "Hyderabad Hospital (Jubilee Hills)",
    slug: "hyderabad",
    short_description: "Flagship South India psychiatric hospital with dedicated emergency stabilization, therapeutic art studios, and acute wards.",
    full_address: "Road No. 36, Jubilee Hills, Hyderabad, Telangana - 500033",
    phone: "+91 8448156500",
    map_link: "https://maps.google.com/?q=Sukoon+Hospital+Hyderabad",
    hero_image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1200&auto=format&fit=crop",
    accreditations: [{ label: "NABH Accredited" }, { label: "24/7 Emergency ICU" }]
  }
];

export const doctorsList: Doctor[] = [
  {
    id: 1,
    name: "Dr. Somnath Chatterji",
    slug: "dr-somnath-chatterji",
    photo: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=600&auto=format&fit=crop",
    qualifications: "MD (Psychiatry, NIMHANS), Former Director at WHO",
    role: "Clinical Advisory Board",
    experience_years: 32,
    bio: "Former Director at the World Health Organization and NIMHANS alumnus. Listed among the top 0.1% most cited researchers globally with 200+ publications in The Lancet, JAMA, and Nature. Serves as the independent reviewer of Sukoon's clinical outcomes data."
  },
  {
    id: 2,
    name: "Dr. Nachiket Mor",
    slug: "dr-nachiket-mor",
    photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600&auto=format&fit=crop",
    qualifications: "PhD, Yale University | Visiting Professor at ISB",
    role: "Clinical Advisory Board",
    experience_years: 28,
    bio: "Health systems and public health leader. Commissioner on the Lancet Commission on Reimagining India's Health System and Visiting Scientist at the Banyan Academy of Leadership in Mental Health."
  },
  {
    id: 3,
    name: "Dr. Michelle Tempest",
    slug: "dr-michelle-tempest",
    photo: "https://images.unsplash.com/photo-1594824813620-4a0b224168a6?q=80&w=600&auto=format&fit=crop",
    qualifications: "MB BChir, Cambridge University | Partner, Candesic",
    role: "Clinical Advisory Board",
    experience_years: 24,
    bio: "Cambridge-trained psychiatrist, healthcare system designer, and author of Big Brain Revolution. Advises Sukoon on international clinical governance and cutting-edge psychiatric technology."
  },
  {
    id: 4,
    name: "Dr. Vipul Rastogi",
    slug: "dr-vipul-rastogi",
    photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=600&auto=format&fit=crop",
    qualifications: "MBBS, MD (Psychiatry), MRCPsych (UK)",
    role: "Psychiatrist",
    experience_years: 18,
    bio: "Senior Consultant Neuropsychiatrist specializing in severe affective disorders, treatment-resistant depression, and neurostimulation therapies."
  },
  {
    id: 5,
    name: "Dr. Shivani Agarwal",
    slug: "dr-shivani-agarwal",
    photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop",
    qualifications: "M.Phil Clinical Psychology (NIMHANS), PhD",
    role: "Psychologist",
    experience_years: 14,
    bio: "Lead Clinical Psychologist specializing in Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), and crisis intervention protocols."
  },
  {
    id: 6,
    name: "Dr. Raghavendra Pratap",
    slug: "dr-raghavendra-pratap",
    photo: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=600&auto=format&fit=crop",
    qualifications: "MD (Psychiatry), DNB (Psychiatry)",
    role: "Psychiatrist",
    experience_years: 16,
    bio: "Chief Inpatient Psychiatrist overseeing emergency triage, acute stabilization, and personalized pharmacological recovery pathways."
  }
];

export const servicesList: Service[] = [
  { id: 1, name: "Acute Inpatient Psychiatry", slug: "acute-inpatient-psychiatry", category: "Residential", icon: "Hospital", summary: "24/7 medically monitored inpatient care for individuals experiencing acute psychiatric distress, psychosis, or severe mood episodes in safe, NABH-accredited facilities." },
  { id: 2, name: "Addiction & De-addiction Care", slug: "addiction-deaddiction", category: "Rehabilitation", icon: "ShieldAlert", summary: "Comprehensive medical detoxification, psychological restructuring, and relapse prevention programs in a dignified, non-judgmental environment." },
  { id: 3, name: "Intensive Psychiatric Care (ICU)", slug: "intensive-psychiatric-care", category: "Residential", icon: "Activity", summary: "High-dependency psychiatric intensive unit equipped with continuous vitals monitoring, anti-ligature safety infrastructure, and 1:1 clinical nursing." },
  { id: 4, name: "Women's Mental Health Wing", slug: "womens-mental-health", category: "Residential", icon: "HeartHandshake", summary: "Dedicated female-only inpatient floor with female clinical teams, addressing postpartum depression, trauma, affective disorders, and holistic recovery." },
  { id: 5, name: "Geriatric Psychiatry", slug: "geriatric-psychiatry", category: "Residential", icon: "Users", summary: "Specialized psychiatric and cognitive care for older adults managing dementia-related behavioral issues, late-onset depression, and neurological conditions." },
  { id: 6, name: "Day Care & Neuromodulation (TMS)", slug: "neuromodulation-tms", category: "Outpatient", icon: "Zap", summary: "US-FDA approved Transcranial Magnetic Stimulation (TMS), biofeedback, and day rehabilitation therapies for treatment-resistant conditions." },
  
  // Additional Rehabilitation Subsections
  { id: 7, name: "Alcohol Rehab", slug: "alcohol-rehab", category: "Rehabilitation", summary: "Specialized medical detoxification and residential rehabilitation for alcohol dependence." },
  { id: 8, name: "Drug Rehab", slug: "drug-rehab", category: "Rehabilitation", summary: "Evidence-based clinical rehabilitation and relapse prevention for substance use disorders." },
  { id: 9, name: "Habit Rehab", slug: "habit-rehab", category: "Rehabilitation", summary: "Therapeutic interventions for behavioral addictions, compulsive habits, and behavioral modification." },
  { id: 10, name: "Gambling Deaddiction", slug: "gambling-deaddiction", category: "Rehabilitation", summary: "Specialized cognitive behavioral therapy and crisis intervention for pathological gambling." },
  { id: 11, name: "Nicotine Deaddiction", slug: "nicotine-deaddiction", category: "Rehabilitation", summary: "Structured smoking cessation programs combining medical support and psychological counselling." },
  { id: 12, name: "Porn Deaddiction", slug: "porn-deaddiction", category: "Rehabilitation", summary: "Confidential individual therapy addressing compulsive sexual behavior and digital addiction." },

  // Additional Inpatient Subsections
  { id: 13, name: "Acute Psychiatric Care", slug: "acute-psychiatric-care", category: "Residential", summary: "Immediate 24/7 crisis stabilization and acute psychiatric intervention." },
  { id: 14, name: "Psychiatric ICU", slug: "psychiatric-icu", category: "Residential", summary: "High-dependency intensive care unit with anti-ligature safety and continuous nursing." },
  { id: 15, name: "Sukoon at Home Care", slug: "sukoon-at-home-care", category: "Residential", summary: "Structured home-based psychiatric nursing and clinical support." },
  { id: 16, name: "Geriatric Care", slug: "geriatric-care", category: "Residential", summary: "Specialized inpatient dementia, Alzheimer's, and late-life psychiatric care." },
  { id: 17, name: "Children's Mental Health", slug: "childrens-mental-health", category: "Residential", summary: "Child and adolescent psychiatric assessment, emotional regulation, and family therapy." },

  // Additional Outpatient Subsections
  { id: 18, name: "Clinical Psychologist", slug: "clinical-psychologist", category: "Outpatient", summary: "Diagnostic psychometric evaluation, psychotherapy, and individual counseling." },
  { id: 19, name: "Mental Health Counselling", slug: "mental-health-counselling", category: "Outpatient", summary: "Personalized supportive counseling for stress, anxiety, relationship issues, and life transitions." },
  { id: 20, name: "Art Therapy", slug: "art-therapy", category: "Outpatient", summary: "Expressive arts therapy for emotional expression, trauma processing, and self-discovery." },
  { id: 21, name: "RTMS Treatment", slug: "rtms-treatment", category: "Outpatient", summary: "Repetitive Transcranial Magnetic Stimulation for treatment-resistant depression and anxiety." },
  { id: 22, name: "Cognitive Remediation", slug: "cognitive-remediation", category: "Outpatient", summary: "Neurocognitive training to enhance attention, memory, executive functioning, and problem solving." },
  { id: 23, name: "Psychoanalytic Therapy", slug: "psychoanalytic-therapy", category: "Outpatient", summary: "Deep exploratory psychodynamic therapy uncovering subconscious patterns and unresolved conflicts." },
  { id: 24, name: "Occupational Therapy", slug: "occupational-therapy", category: "Outpatient", summary: "Functional skill retraining, sensory integration, and daily living rehabilitation." },
  { id: 25, name: "Psychiatric Treatment", slug: "psychiatric-treatment", category: "Outpatient", summary: "Outpatient psychiatric consultations, medication management, and clinical reviews." },
  { id: 26, name: "Psycho Oncology", slug: "psycho-oncology", category: "Outpatient", summary: "Specialized psychological support for cancer patients, survivors, and their families." },
  { id: 27, name: "Psychometric Testing", slug: "psychometric-testing", category: "Outpatient", summary: "Standardized psychological, cognitive, personality, and diagnostic testing." },
  { id: 28, name: "Ketamine Infusion Therapy", slug: "ketamine-infusion-therapy", category: "Outpatient", summary: "Medically supervised low-dose ketamine infusions for severe treatment-resistant depression." },
  { id: 29, name: "Electroconvulsive Therapy", slug: "electroconvulsive-therapy", category: "Outpatient", summary: "Modern ultra-brief pulse modified ECT under full anesthesia for severe depression and catatonia." }
];

export const disordersList: Disorder[] = [
  { id: 1, name: "Bipolar Disorder", slug: "bipolar-disorder", summary: "Evidence-based stabilization for acute mania, mixed states, and severe bipolar depression through structured circadian regulation and pharmacology." },
  { id: 2, name: "Clinical Depression", slug: "depression", summary: "Comprehensive inpatient and outpatient treatment pathways achieving 100% full remission threshold tracking for major depressive episodes." },
  { id: 3, name: "Schizophrenia & Psychosis", slug: "schizophrenia", summary: "Multidisciplinary 24/7 acute stabilization, cognitive rehabilitation, and family integration for individuals experiencing hallucinations or delusional episodes." },
  { id: 4, name: "Obsessive Compulsive Disorder (OCD)", slug: "ocd", summary: "Intensive Exposure and Response Prevention (ERP) combined with advanced neuro-psychiatric care achieving 74% symptom reduction." },
  { id: 5, name: "Substance & Alcohol Dependence", slug: "substance-use", summary: "Safe clinical detox, behavioral therapies (MET, CBT), and relapse-proofing designed with deep respect and medical accountability." },
  { id: 6, name: "Severe Anxiety & Panic Disorder", slug: "anxiety", summary: "Specialized inpatient relaxation protocols, somatic regulation, and psychotherapy for debilitating anxiety and panic attacks." },

  // Additional Conditions matching Navbar Dropdown
  { id: 7, name: "Alcohol Addiction", slug: "alcohol-addiction", summary: "Comprehensive medical detoxification, withdrawal management, and long-term sobriety rehabilitation." },
  { id: 8, name: "Antisocial Personality Disorder", slug: "antisocial-personality-disorder", summary: "Structured behavioral therapy and impulse control management." },
  { id: 9, name: "Borderline Personality Disorder", slug: "borderline-personality-disorder", summary: "Dialectical Behavior Therapy (DBT) focusing on emotional regulation, distress tolerance, and interpersonal effectiveness." },
  { id: 10, name: "Claustrophobia", slug: "claustrophobia", summary: "Desensitization therapy and cognitive reframing for specific phobias and enclosed space anxiety." },
  { id: 11, name: "Drug Addiction", slug: "drug-addiction", summary: "Medical detox and psychological rehabilitation for prescription drug and illicit substance dependence." },
  { id: 12, name: "Narcissistic Personality Disorder", slug: "narcissistic-personality-disorder", summary: "Psychodynamic psychotherapy to foster empathy, self-awareness, and healthier relationships." },
  { id: 13, name: "Persistent Depressive Disorder", slug: "persistent-depressive-disorder", summary: "Long-term outpatient therapy and pharmacological balance for chronic low-grade depression (Dysthymia)." },
  { id: 14, name: "Seasonal Affective Disorder", slug: "seasonal-affective-disorder", summary: "Bright light therapy, circadian rhythm alignment, and cognitive behavioral therapy." },
  { id: 15, name: "Social Anxiety Disorder", slug: "social-anxiety-disorder", summary: "Gradual exposure therapy and social skills training for debilitating social phobia." }
];

export const insurancePartners: InsurancePartner[] = [
  { id: 1, name: "HDFC ERGO Health" },
  { id: 2, name: "Star Health Insurance" },
  { id: 3, name: "Care Health Insurance" },
  { id: 4, name: "ICICI Lombard" },
  { id: 5, name: "Niva Bupa Health" },
  { id: 6, name: "Bajaj Allianz" },
  { id: 7, name: "Tata AIG" },
  { id: 8, name: "Aditya Birla Health" }
];

export const testimonialsList: Testimonial[] = [
  {
    id: 1,
    name: "Family of an Individual in Care",
    designation: "Gurugram Inpatient Ward",
    organization: "Bipolar Mania Recovery",
    quote: "When my son experienced an acute manic episode, we were terrified and lost. Sukoon did not judge us; they gave us a clear 14-day clinical roadmap. The transparency, daily updates from the Clinical Care Manager, and respectful environment changed everything.",
    type: "patient"
  },
  {
    id: 2,
    name: "Consultant Psychiatrist",
    designation: "MRCPsych, London",
    organization: "Referring Clinician",
    quote: "Sukoon has elevated behavioral healthcare in India to global standards. Their adherence to evidence-based A2R+ care protocols and independent verification by WHO reviewers gives me total confidence when referring patients.",
    type: "clinical_expert"
  },
  {
    id: 3,
    name: "Caregiver - Spouse",
    designation: "South Delhi Hospital",
    organization: "Depression & Anxiety Care",
    quote: "The MERA emergency team was prompt, gentle, and profoundly professional during our crisis. Sukoon treated my wife as a human being first, not just a psychiatric diagnosis.",
    type: "patient"
  }
];

export const faqsList: FaqItem[] = [
  {
    id: 1,
    question: "What makes Sukoon Health different from traditional psychiatric wards or wellness retreats?",
    answer: "Sukoon is India's first purpose-built network of NABH-accredited psychiatric hospitals. Unlike general hospitals with small wards or non-medical wellness retreats, Sukoon combines 24/7 multidisciplinary acute medical psychiatry, anti-ligature safety architecture, proprietary A2R+ clinical protocols, and measurable outcome tracking with an 8% readmission rate (versus 27% globally).",
    category: "General"
  },
  {
    id: 2,
    question: "What is MERA Sukoon psychiatric emergency service?",
    answer: "MERA (Medical Emergency Retrieval Ambulance) is India's only 24x7 structured psychiatric emergency response fleet. Fully compliant with the Mental Healthcare Act (MHCA 2017), it is staffed by trained psychiatric nurses, paramedics, and mental health responders equipped to safely de-escalate and transport individuals in acute crisis.",
    category: "Emergency"
  },
  {
    id: 3,
    question: "Are treatments covered by health insurance policies?",
    answer: "Yes. Under the Mental Healthcare Act 2017 and IRDAI regulations, mental health inpatient care is eligible for cashless insurance claims. Sukoon has partnered with all major insurers including Star Health, HDFC ERGO, Care Health, ICICI Lombard, and Niva Bupa to provide seamless cashless hospitalization.",
    category: "Insurance"
  },
  {
    id: 4,
    question: "How long is the typical inpatient stay at Sukoon?",
    answer: "The average length of stay for acute stabilization at Sukoon is 12–14 days (compared to the global average of 19–39 days). Every patient receives a tailored daily schedule of medical oversight, psychotherapy, occupational therapy, and family integration before transitioning to outpatient aftercare.",
    category: "Admissions"
  },
  {
    id: 5,
    question: "Can family members stay or visit during the treatment?",
    answer: "Yes, family involvement is a core pillar of our recovery model. While certain acute phases require structured rest, families receive dedicated updates from the Clinical Care Manager (CDM) every 3 days and participate in weekly family therapy sessions.",
    category: "Admissions"
  }
];

export const homePageSections: DynamicSection[] = [
  {
    __component: "sections.hero-section",
    heading: "Transforming Mental Healthcare in India",
    subheading: "India's leading network of NABH-accredited acute psychiatric hospitals. Grounded in compassion, proprietary clinical systems, and measurable recovery.",
    stats: [
      { number: "20,000+", label: "Individuals Treated", sublabel: "Across Network" },
      { number: "4", label: "Hospitals Operational", sublabel: "Delhi NCR, BLR, HYD" },
      { number: "4.8 / 5", label: "Overall Rating", sublabel: "Verified Patient Reviews" },
      { number: "NABH", label: "Accredited Network", sublabel: "Highest Safety Standard" }
    ],
    cta: {
      label: "Book Confidential Consultation",
      url: "/contact-us",
      style: "primary"
    }
  },
  {
    __component: "sections.care-pathways-section"
  },
  {
    __component: "sections.about-section",
    heading: "Care That Is Designed, Not Improvised",
    body: "Sukoon replaces fragmented psychiatric treatment with proprietary clinical pathways designed for repeatable quality and real outcomes. Every decision begins and ends with the individual in care.",
    icon_features: [
      { title: "Proprietary A2R+ Model", description: "Standardized clinical care pathways making quality repeatable across every hospital, every time." },
      { title: "Measurable Outcomes", description: "40-60% faster symptom reduction tracked through validated international clinical scales." },
      { title: "Purpose-Built Infrastructure", description: "Anti-ligature safety, sensory gardens, art therapy studios, and private recovery suites." },
      { title: "Dedicated Family Continuity", description: "A single Clinical Decision Manager (CDM) to keep families informed, involved, and reassured." }
    ]
  },
  {
    __component: "sections.treatment-model-section",
    heading: "The Sukoon Clinical Care Architecture",
    description: "Built on rigorous scientific foundations under the guidance of former WHO Directors and global healthcare leaders. Our protocols transition psychiatry from subjective guesswork into structured, accountable medicine.",
    cta: { label: "Explore Our Clinical Models", url: "/about-us#clinical-models", style: "outline" }
  },
  {
    __component: "sections.condition-cards-section",
    heading: "Conditions We Treat",
    cards: [
      { name: "Bipolar Disorder", description: "Rapid mania stabilization, mood charting, and long-term circadian balance.", link: "/conditions/bipolar-disorder" },
      { name: "Clinical Depression", description: "Multi-modal pharmacological, psychotherapeutic, and TMS recovery plans.", link: "/conditions/depression" },
      { name: "Schizophrenia & Psychosis", description: "24/7 acute stabilization, cognitive re-training, and family reintegration.", link: "/conditions/schizophrenia" },
      { name: "Obsessive Compulsive Disorder", description: "Intensive Exposure and Response Prevention (ERP) with 74% symptom reduction.", link: "/conditions/ocd" },
      { name: "Addiction & Substance Use", description: "Medically managed detox, relapse prevention, and dignified rehabilitation.", link: "/conditions/substance-use" },
      { name: "Severe Anxiety & Panic", description: "Somatic regulation, dialectical strategies, and intensive crisis decompression.", link: "/conditions/anxiety" }
    ]
  },
  {
    __component: "sections.emergency-section",
    heading: "MERA Sukoon — 24/7 Psychiatric Emergency Retrieval",
    description: "India's only structured, MHCA-compliant psychiatric ambulance and crisis response service. When an acute behavioral crisis occurs, our specialized retrieval team responds rapidly to keep your loved one safe.",
    phone: "+91 8448156500",
    cta: { label: "Call Emergency Response", url: "tel:+918448156500", style: "white" }
  },
  {
    __component: "sections.locations-section",
    heading: "Our Network of Hospitals",
    description: "Experience world-class psychiatric inpatient care across major metropolitan hubs in India.",
    locations: locationsList
  },
  {
    __component: "sections.team-section",
    heading: "Multidisciplinary Clinical Leadership",
    subheading: "Our team combines psychiatrists, clinical psychologists, psychiatric social workers, and global advisors with over 75+ years of combined experience.",
    featured_doctors: doctorsList
  },
  {
    __component: "sections.insurance-section",
    heading: "Cashless Health Insurance Partners",
    partners: insurancePartners
  },
  {
    __component: "sections.testimonial-section",
    heading: "Real Journeys to Recovery",
    filter_type: "all",
    testimonials: testimonialsList
  },
  {
    __component: "sections.faq-section",
    heading: "Frequently Asked Questions",
    faqs: faqsList,
    show_view_all: true
  },
  {
    __component: "sections.contact-form-section",
    heading: "Take the First Step Toward Recovery",
    description: "Speak directly with our clinical admissions team. Confidential, immediate guidance 24/7.",
    appointment_types: ["Inpatient Admission", "Outpatient Consultation", "Emergency Retrieval (MERA)", "Second Opinion / Assessment"]
  }
];
