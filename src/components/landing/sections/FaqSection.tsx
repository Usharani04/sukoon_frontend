import type { FaqSection as FaqSectionType } from "@/lib/landing/types";
import type { Faq } from "@/lib/landing/types";
import Blocks, { blocksToPlainText } from "../ui/Blocks";

const hasRich = (f: Faq) => Array.isArray(f.answer_rich) && f.answer_rich.length > 0;
const plainAnswer = (f: Faq) => (hasRich(f) ? blocksToPlainText(f.answer_rich) : f.answer);

/** FAQ accordion (native <details>, only one open at a time) + optional FAQPage JSON-LD. */
export default function FaqSection(s: FaqSectionType) {
  const headingId = `faq-${s.id}`;
  if (!s.faqs.length) return null;

  const schema =
    s.output_schema !== false
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: s.faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: plainAnswer(f) },
          })),
        }
      : null;

  return (
    <section className="therapists-section" id="therapist-faq" aria-labelledby={headingId}>
      <div className="therapists-container">
        <h2 id={headingId} className="t-heading">
          {s.heading}
        </h2>
        {s.description && <p className="t-body therapists-intro">{s.description}</p>}

        <div className="therapists-faq">
          {s.faqs.map((f, i) => (
            <details key={f.documentId ?? i} name={headingId}>
              <summary className="t-faq-q">
                <h3 className="t-card-title">{f.question}</h3>
                <span className="therapists-faq-icon" aria-hidden="true" />
              </summary>
              <div className="therapists-faq-answer">
                {hasRich(f) ? (
                  <Blocks content={f.answer_rich} paragraphClassName="t-body" />
                ) : (
                  f.answer
                    .split(/\n\s*\n/)
                    .map((para) => para.trim())
                    .filter(Boolean)
                    .map((para, j) => (
                      <p key={j} className="t-body">
                        {para}
                      </p>
                    ))
                )}
              </div>
            </details>
          ))}
        </div>
      </div>

      {schema && (
        <script
          type="application/ld+json"
          // JSON.stringify output with "<" escaped so content cannot close the script tag.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
        />
      )}
    </section>
  );
}
