import type { Language } from "./i18n";
import { getProductCategoryCopy } from "./product-category-copy";
import type { ProductCategory } from "./product-category-data";
import { ScrollReveal, WordReveal } from "./scroll-reveal";

type ProductCategoryPreviewProps = {
  category: ProductCategory;
  language: Language;
};

export function ProductCategoryPreview({
  category,
  language,
}: ProductCategoryPreviewProps) {
  const copy = getProductCategoryCopy(language, category);

  return (
    <div className="category-preview">
      <div className="category-preview__orb" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <article className="category-preview__copy">
        <ScrollReveal as="p" className="journey-kicker">
          {copy.kicker}
        </ScrollReveal>
        <WordReveal as="h1" text={copy.title} delay={70} />
        <WordReveal text={copy.eyebrow} delay={140} />
        <ScrollReveal as="p" delay={220}>{copy.intro}</ScrollReveal>
        <ScrollReveal className="category-preview__series" delay={300}>
          <small>{copy.plannedLabel}</small>
          <p>{copy.plannedSeries.join(" · ")}</p>
        </ScrollReveal>
      </article>
    </div>
  );
}
