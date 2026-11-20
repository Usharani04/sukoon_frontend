/**
 * PHASE 1 content — copied from the live page (sukoon.sbprism.com/therapists/).
 * Shaped exactly like the Strapi 5 response for /api/landing-pages?filters[slug]=therapists (dynamic zone: page_builder),
 * so components do not change when you switch CONTENT_SOURCE from "static" to "strapi".
 *
 * Images live in /public/therapists/. Once Strapi is live, this file is only a
 * reference for content entry and a local fallback for design work.
 */
import type { BlocksContent, Doctor, Faq, LandingPage, StrapiMedia } from "@/lib/landing/types";

const img = (url: string, alt: string, width: number, height: number): StrapiMedia => ({
  url,
  alternativeText: alt,
  width,
  height,
});

const p = (...paras: (string | [string, { url: string; label: string }])[]): BlocksContent =>
  paras.map((para) =>
    typeof para === "string"
      ? { type: "paragraph", children: [{ type: "text", text: para }] }
      : {
          type: "paragraph",
          children: [
            { type: "text", text: para[0] },
            { type: "link", url: para[1].url, children: [{ type: "text", text: para[1].label }] },
          ],
        },
  );

/** FAQ: plain `answer` (existing field) always filled; `answer_rich` only when the answer contains a link. */
const toFaqs = (items: { question: string; answer: BlocksContent }[]): Faq[] =>
  items.map(({ question, answer }) => {
    const text = answer
      .map((b) => ("children" in b ? (b.children as { type: string; text?: string; children?: { text: string }[] }[]) : []))
      .map((kids) => kids.map((k) => (k.type === "link" ? (k.children ?? []).map((c) => c.text).join("") : k.text ?? "")).join(""))
      .join("\n\n");
    const hasLink = JSON.stringify(answer).includes('"type":"link"');
    return { question, answer: text, answer_rich: hasLink ? answer : null };
  });

const why = [
  img("/therapists/why-1.jpg", "A clinician in a consultation room", 1024, 1024),
  img("/therapists/why-2.jpg", "Mental health professionals working together", 1024, 1024),
  img("/therapists/why-3.jpg", "A welcoming care environment", 1024, 1024),
  img("/therapists/why-4.jpg", "Compassionate mental health support", 1024, 1024),
];

const drSatish: Doctor = {
  name: "Dr. Satish Ramaiah",
  designation: "Executive Director, Psychiatry Services · Sukoon Health",
  photo: img("/therapists/dr-satish-ramaiah.webp", "Dr. Satish Ramaiah", 64, 64),
  slug: "dr-satish-ramaiah",
};

const BOOK = "https://patient.sukoonhealth.com/";
const PHONE = "tel:+918448156500";

export const therapistsStatic: LandingPage = {
  title: "Therapists",
  slug: "therapists",
  breadcrumb_label: "Therapists",
  seo: {
    meta_title: "Connect With Experienced Therapists in India | Sukoon Health",
    meta_description:
      "Meet experienced therapists in India at Sukoon Health for personalised support for all your mental health needs. Find the right care for you.",
    canonical_url: "https://sukoonhealth.com/therapists/",
    robots_index: true,
    robots_follow: true,
    og_image: img("/therapists/hero-hands.jpg", "Hands offering support and comfort", 1600, 1000),
  },
  page_builder: [
    {
      __component: "landing.hero",
      id: 1,
      eyebrow: "In person mental health support in Delhi, Gurgaon, Bangalore and Hyderabad",
      title: "Experienced Therapists in India for Personalised Mental Health Support",
      description:
        "Whether you’re struggling with anxiety, depression, or simply finding things difficult, our therapists are here to listen and support you with care that’s tailored to you",
      background_image: img("/therapists/hero-hands.jpg", "Hands offering support and comfort", 1600, 1000),
      primary_cta: { label: "Call Us", url: PHONE, style: "white" },
      reviewer_label: "Clinically reviewed by",
      reviewer: drSatish,
    },
    {
      __component: "landing.feature-cards",
      id: 2,
      heading: "Why A Sukoon Therapist",
      description:
        "The right therapist can shape your recovery experience. At Sukoon, therapy combines compassion with clinical expertise. Here's what makes our therapists different.",
      cards: [
        {
          title: "Psychiatrist-Supervised Therapy",
          description:
            "Every therapist works under the clinical oversight of consultant psychiatrists trained in the UK's NHS system, ensuring every therapy plan is personalised.",
          image: why[0],
        },
        {
          title: "Specialist Collaboration Approach",
          description:
            "Your therapist works closely with psychiatrists, psychologists, nurses, and other specialists to understand what you’re going through and ensure your care is tailored to your needs.",
          image: why[1],
        },
        {
          title: "Excellence At Every Step",
          description:
            "Sukoon delivers every therapy plan at NABH-accredited hospitals, in line with evidence-based clinical protocols and the Mental Healthcare Act, 2017.",
          image: why[2],
        },
        {
          title: "Touching 85,000 Lives and Counting",
          description:
            "Good therapy starts with feeling heard and understood. Having supported over 85,000 people, our therapists meet you where you are and create a safe, personalised space to help you move forward.",
          image: why[3],
        },
      ],
    },
    {
      __component: "landing.city-cards",
      id: 3,
      heading: "Meet Our Therapists",
      description: "Find the right therapist or counsellor at a Sukoon centre near you. Select your city to begin.",
      cards: [
        {
          city: "Delhi",
          title: "Therapists in Delhi",
          description:
            "NABH-accredited psychiatric care in the capital, with inpatient, rehabilitation, and outpatient services.",
          link: { label: "View Therapists", url: "/rehabilitation-centre-in-delhi/" },
        },
        {
          city: "Gurgaon",
          title: "Therapists in Gurgaon",
          description:
            "Expert counselling and therapy at our Gurgaon centre, alongside acute inpatient and outpatient care.",
          link: { label: "View Therapists", url: "/psychiatric-hospital-in-gurgaon/" },
        },
        {
          city: "Bangalore",
          title: "Therapists in Bangalore",
          description:
            "We provide compassionate mental healthcare in the heart of India's southern hub, with counselling, OPD services, acute inpatient psychiatry, and 24/7 support through MERA Sukoon.",
          link: { label: "View Therapists", url: "/psychiatric-hospital-in-bengaluru/" },
        },
        {
          city: "Hyderabad",
          title: "Therapists in Hyderabad",
          description:
            "Trusted counselling and structured therapy at our Hyderabad facility, with psychiatrist-supervised care and MDT support.",
          link: { label: "View Therapists", url: "/psychiatric-hospital-in-hyderabad/" },
        },
      ],
      cta_heading: "Get personalised therapy from experts who care",
      cta: { label: "Book An Appointment", url: BOOK, style: "primary" },
    },
    {
      __component: "landing.concern-list",
      id: 4,
      heading: "What Can a Sukoon Therapist Help With?",
      description:
        "Our therapists and counsellors in India support a wide range of mental health concerns. Care is personalised to each person.",
      items: [
        "Anxiety & GAD",
        "Depression",
        "Relationship difficulties",
        "Marriage counselling",
        "Grief & Loss",
        "PTSD & Trauma",
        "OCD",
        "Stress & burnout",
        "ADHD (Adult)",
        "Borderline Personality Disorder",
        "Substance Use Disorder",
        "Child & adolescent concerns",
      ].map((text) => ({ text })),
      link: { label: "Online counselling across India", url: BOOK },
    },
    {
      __component: "landing.steps",
      id: 5,
      heading: "How To Consult A Sukoon Therapist",
      description:
        "Starting therapy can feel like a vulnerable step. We’re here to make it feel a little easier with a gentle, supportive process shaped around you and your pace.",
      steps: [
        {
          title: "Reach Out",
          description:
            "Call MERA Sukoon (Mental Health Emergency Response and Admission) on +91 84481 56500 or request a call back through our website.",
        },
        {
          title: "Initial Screening",
          description:
            "A clinician takes your call, understands the current situation, and confirms whether outpatient, inpatient, or emergency care is the right fit.",
        },
        {
          title: "Consult a Psychiatrist",
          description:
            "You speak with a consultant psychiatrist, online or in person, who takes the time to understand your concerns and connect you with the right clinician for your needs.",
        },
        {
          title: "A Plan Built Around You",
          description:
            "Your psychiatrist listens to what you’re going through and creates a care plan around you, with A2R+ guiding the next steps when needed.",
        },
      ],
    },
    {
      __component: "landing.expert-spotlight",
      id: 6,
      heading: "Hear From Our Experts",
      description: "Deep Impact of Complex PTSD — from Sukoon Health’s mental health experts.",
      video_title: "Deep Impact of Complex PTSD",
      video_url: "https://www.youtube.com/watch?v=sC-1C4tH3Vw",
      quote:
        "With the kind of expertise you have, the kind of well-trained professionals you have, this is going to be a real boon to patients and families who come to you for care.",
      expert: { ...drSatish, photo: img("/therapists/dr-satish-ramaiah.webp", "Dr. Satish Ramaiah", 56, 56) },
    },
    {
      __component: "landing.image-gallery",
      id: 7,
      heading: "Find your space to be heard",
      subheading: "Care At Sukoon Looks Like",
      images: why,
    },
    {
      __component: "landing.process-stages",
      id: 8,
      heading: "How Therapy Fits Into Your Recovery",
      subheading: "Introducing The Therapist's Role in A2R+ (Acute to Recovery Plus) Model Of Recovery",
      description:
        "Therapy is an integral part of inpatient care from day one. Your therapist works closely with the multidisciplinary team throughout treatment, helping shape clinical decisions, recovery goals, and discharge planning. This integrated approach is guided by our A2R+ (Acute to Recovery Plus) model.",
      stages: [
        {
          title: "Stage 1 - Acute Phase",
          subtitle: "Observe, Assess, Build Trust",
          bullets: [
            "The therapist joins the MDT within the first 24 hours of admission.",
            "No structured therapy sessions yet as the priority is safety and stabilisation.",
            "Begins a background assessment: history, relationships, coping patterns.",
          ].map((text) => ({ text })),
        },
        {
          title: "Stage 2 - Stabilise Phase",
          subtitle: "Reducing symptoms and developing coping strategies",
          bullets: [
            "Therapy begins in earnest using CBT, DBT, or the clinically appropriate modality.",
            "Sessions focus on the specific concern: thought patterns, emotional regulation, behaviour.",
            "Family or couples sessions introduced where relevant and consented.",
          ].map((text) => ({ text })),
        },
        {
          title: "Stage 3 - Embed Phase",
          subtitle: "Preparing for long-term stability",
          bullets: [
            "Sessions shift from symptom management to long-term coping and relapse prevention.",
            "The therapist leads aftercare planning",
            "Outpatient therapy continues as part of the transition plan.",
          ].map((text) => ({ text })),
        },
      ],
      download_label: "Learn More",
      download_file: { url: "/therapists/a2r-plus.pdf", name: "a2r-plus.pdf", mime: "application/pdf" },
    },
    {
      __component: "landing.video-embed",
      id: 9,
      eyebrow: "Inside Sukoon",
      heading: "Take a walk through our facility",
      video_url: "https://www.youtube.com/watch?v=wuPzvQzU3Qs",
      start_seconds: 6,
    },
    {
      __component: "landing.video-list",
      id: 10,
      heading: "More From Our Experts",
      description: "Hear Sukoon Health’s experts explain mental health conditions, treatment and recovery.",
      videos: [
        { title: "Deep Impact of Complex PTSD", youtube_url: "https://www.youtube.com/watch?v=sC-1C4tH3Vw" },
        { title: "Alcohol Abuse", youtube_url: "https://www.youtube.com/watch?v=x_wj32FXBV8" },
        { title: "Body Dysmorphic Disorder", youtube_url: "https://www.youtube.com/watch?v=PP9fnNXCsYY" },
        { title: "Persistent Depressive Disorder", youtube_url: "https://www.youtube.com/watch?v=oKCgrDxzm-s" },
        { title: "Complex PTSD", youtube_url: "https://www.youtube.com/watch?v=ZNWNOthphkw" },
        { title: "Opioid Use Disorder", youtube_url: "https://www.youtube.com/watch?v=VdSijc97674" },
      ],
    },
    {
      __component: "landing.testimonials",
      id: 11,
      heading: "Stories of Hope",
      description: "Hear from those finding strength with our Mental Health Treatment",
      testimonials: [
        {
          name: "Senior Manager, 38, Delhi",
          quote:
            "I came in convinced I wasn’t the kind of person who needed therapy. I’d managed everything on my own for fifteen years. My therapist at Sukoon didn’t try to change that overnight. She listened, asked questions I had never been asked before, and gave me space to understand myself. That made it easier to keep coming back.",
          consent_confirmed: true,
        },
        {
          name: "Couple in their 40s, Gurgaon",
          quote:
            "We’d tried marriage counselling before, but it felt like being told what we were doing wrong. At Sukoon, our therapist helped us slow down and actually listen to each other. It sounds simple. For us, it wasn’t.",
          consent_confirmed: true,
        },
        {
          name: "Freelance Designer, 29, Bangalore",
          quote:
            "I had spent six months barely getting out of bed. My therapist didn’t rush me through the first session or make me feel like I had to have the right words. She simply stayed with me and helped me make sense of what I was going through. For the first time in a long time, I felt hopeful.",
          consent_confirmed: true,
        },
      ],
    },
    {
      __component: "landing.faq",
      id: 12,
      heading: "Frequently Asked Questions",
      output_schema: true,
      faqs: toFaqs([
        {
          question: "What does a therapist do?",
          answer: p(
            "A therapist gives you a safe, confidential space to talk about what you’re going through. They listen, help you understand patterns in your thoughts and emotions, and use evidence-based techniques to help you cope and move forward. Unlike a psychiatrist, a therapist does not prescribe medication. At Sukoon Health, therapists work as part of a multidisciplinary clinical team, so you can access psychiatric support when needed.",
          ),
        },
        {
          question: "What happens during the first therapy session?",
          answer: p([
            "The first session is about getting to know you, not fixing everything at once. Your therapist will ask about what you’re experiencing, your history, and what you would like help with. You don’t need to prepare or know exactly what to say. Together, you’ll decide what the next steps should look like. ",
            { url: BOOK, label: "You can book a first session here." },
          ]),
        },
        {
          question: "What if I don't know what to say in therapy?",
          answer: p(
            "That’s completely okay. You can simply start by saying, “I don’t know where to begin.” Your therapist will help you from there. You don’t need to have the right words or know exactly what you need. Therapy is a space where you can take your time and talk at your own pace.",
          ),
        },
        {
          question: "What is the difference between a therapist, counsellor, and psychiatrist in India?",
          answer: p(
            "A psychiatrist is a medical doctor who can diagnose mental health conditions and prescribe medication. A therapist works with you through psychological approaches such as CBT, DBT, or family therapy. A counsellor may support you through concerns such as grief, relationship difficulties, or stressful life changes.",
            "Sometimes, you may benefit from more than one type of support. At Sukoon Health, these professionals work within the same Multidisciplinary Team (MDT), helping keep your care connected.",
          ),
        },
        {
          question: "How do I find a good therapist in India?",
          answer: p(
            "Start with three things: their qualifications, their experience, and whether their approach suits what you’re going through. It can also help to choose a therapist who has access to clinical supervision and a wider mental health team when needed.",
            "Sukoon Health has therapists supporting people across Delhi, Gurgaon, Bangalore, and Hyderabad, with care tailored to each person’s needs.",
          ),
        },
        {
          question: "Is online therapy as effective as in-person therapy?",
          answer: p(
            "For many concerns, including anxiety, low mood, grief, relationship difficulties, and life changes, online therapy can be a helpful option. What matters most is having a qualified therapist and a space where you feel comfortable and can speak privately.",
            "For more acute or complex concerns, in-person care may be more appropriate. If you’re unsure, Sukoon Health’s team can help you understand which option may suit you.",
          ),
        },
        {
          question: "How many therapy sessions will I need?",
          answer: p(
            "There’s no fixed number. Some people may feel better after a few focused sessions, while others may need longer-term support. It depends on what you’re going through and what you want to work on.",
            "Your therapist will check in on your progress and adjust the approach when needed. The goal isn’t to complete a certain number of sessions. It’s to help you make meaningful, lasting progress.",
          ),
        },
        {
          question: "What types of therapy does Sukoon offer?",
          answer: p(
            "Sukoon Health offers several evidence-based approaches, including CBT, DBT (Dialectical Behaviour Therapy), MET, ACT, family therapy, couples counselling, and art therapy.",
            "Your therapist will recommend an approach based on your concerns and what you need. When inpatient care is involved, therapy is also part of the A2R+ (Acute to Recovery Plus) care model, with therapists working alongside the wider clinical team. For substance dependence, therapy is included as part of the programme at our rehabilitation centre in Delhi.",
          ),
        },
        {
          question: "Can a therapist help with anxiety and depression?",
          answer: p(
            "Yes. Therapy can be very helpful for anxiety and depression, particularly in mild to moderate cases. Approaches such as CBT can help you understand difficult thought patterns, manage emotions, and gradually change behaviours that may be keeping you stuck.",
            "If symptoms are severe or affecting your safety, a psychiatrist may also need to be involved. At Sukoon Health, the MDT looks at the whole picture and helps determine what combination of support is right for you.",
          ),
        },
      ]),
    },
    {
      __component: "landing.cta-banner",
      id: 13,
      heading: "We Are Here For You",
      style: "brand",
      points: [
        { text: "100% confidential conversations." },
        { text: "In your own time, at your own pace." },
        { text: "With the discretion you deserve." },
      ],
      buttons: [
        { label: "Book An Appointment", url: BOOK, style: "primary" },
        { label: "Call Us", url: PHONE, style: "outline" },
      ],
    },
  ],
};
