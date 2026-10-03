export type DefinitionItem = {
  term: string;
  definition: string;
  context: string;
};

type DefinitionBlocksProps = {
  items: readonly DefinitionItem[];
};

export function DefinitionBlocks({ items }: DefinitionBlocksProps) {
  return (
    <section className="definition-section" aria-labelledby="definition-heading">
      <div className="site-container definition-section-grid">
        <header>
          <p className="eyebrow">Standards glossary</p>
          <h2 id="definition-heading">What do these terms mean?</h2>
          <p>
            A plain-language guide to the standards referenced across our
            materials, products and manufacturing systems.
          </p>
        </header>

        <dl className="definition-list">
          {items.map((item, index) => (
            <div key={item.term}>
              <dt>
                <span>{String(index + 1).padStart(2, "0")}</span>
                What is {item.term}?
              </dt>
              <dd>
                <p>{item.definition}</p>
                <small>{item.context}</small>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
