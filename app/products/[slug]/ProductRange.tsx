import type { ReactNode } from "react";
import styles from "./category-middle.module.css";

export function ProductRange({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className={styles.range} aria-labelledby="specifications-heading">
      <div className={styles.container}>
        <div className={styles.sectionHeading}>
          <div><p className={styles.eyebrow}>Our standard range</p><h2 id="specifications-heading">Popular {title}</h2></div>
          <p>Select a model to view full technical specifications and product gallery.</p>
        </div>
        <div id="category-product-range" className={styles.productGrid} role="region" aria-label={`${title} models`}>
          {children}
        </div>
      </div>
    </section>
  );
}
