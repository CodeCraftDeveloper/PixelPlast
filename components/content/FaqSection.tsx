export type FaqItem = {
  question: string;
  answer: string;
};

type FaqSectionProps = {
  items: readonly FaqItem[];
  headingId: string;
  eyebrow?: string;
  title?: string;
  className?: string;
};

export function faqPageSchema(items: readonly FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function FaqSection({
  items,
  headingId,
  eyebrow = "Frequently Asked Questions",
  title = "Practical answers for planning and procurement.",
  className = "",
}: FaqSectionProps) {
  return (
    <section
      className={`faq-section ${className}`.trim()}
      aria-labelledby={headingId}
    >
      <div className="site-container faq-section-grid">
        <header className="faq-section-heading">
          <p className="eyebrow">{eyebrow}</p>
          <h2 id={headingId}>{title}</h2>
        </header>

        <div className="faq-list">
          {items.map((item, index) => (
            <details key={item.question} open={index === 0}>
              <summary>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item.question}</strong>
                <i aria-hidden="true" />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
