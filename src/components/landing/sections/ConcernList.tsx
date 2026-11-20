import type { ConcernListSection } from "@/lib/landing/types";

/** "What Can a Sukoon Therapist Help With?" — concern tags + online counselling link. */
export default function ConcernList(s: ConcernListSection) {
  const headingId = `concern-list-${s.id}`;
  const link = s.link;
  return (
    <section className="therapists-section therapists-secondary" aria-labelledby={headingId}>
      <div className="therapists-container">
        <h2 id={headingId} className="t-heading">
          {s.heading}
        </h2>
        {s.description && <p className="t-body therapists-intro">{s.description}</p>}

        <ul className="therapists-conditions">
          {s.items.map((item, i) => (
            <li key={item.id ?? i} className="t-body">
              <span aria-hidden="true">●</span>
              {item.text}
            </li>
          ))}
        </ul>

        {link?.url && (
          <a className="therapists-online t-button" href={link.url}>
            {link.label} <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </section>
  );
}
