import { BadgeCheck, ExternalLink } from "lucide-react";
import type { Language } from "./i18n";
import type { Model } from "./product-data";
import { ScrollReveal, WordReveal } from "./scroll-reveal";
import { groupedSpecFields } from "./product-specs/field-order";
import { productTechnicalSpecs } from "./product-specs";
import {
  localizeFact,
  technicalSpecsCopy,
} from "./product-specs/types";

type ProductTechnicalSpecsProps = {
  language: Language;
  model: Model;
  productName: string;
};

export function ProductTechnicalSpecs({
  language,
  model,
  productName,
}: ProductTechnicalSpecsProps) {
  const details = productTechnicalSpecs[model];
  if (!details) return null;

  const copy = technicalSpecsCopy[language === "vi" ? "vi" : "en"];

  return (
    <section className="technical-profile" aria-labelledby="technical-profile-title">
      <div className="technical-profile__heading">
        <div>
          <ScrollReveal as="p" className="technical-profile__eyebrow">
            {copy.eyebrow}
          </ScrollReveal>
          <WordReveal
            id="technical-profile-title"
            text={copy.title}
            delay={70}
          />
          <ScrollReveal as="p" delay={180}>{copy.description}</ScrollReveal>
        </div>
        <ScrollReveal className="technical-profile__verification" delay={240}>
          <BadgeCheck aria-hidden="true" />
          <span>
            {copy.official}
            <small>{copy.verified}</small>
          </span>
        </ScrollReveal>
      </div>

      <ScrollReveal className="technical-profile__identity" delay={100}>
        <strong>{productName}</strong>
        <span>{copy.introduced} · {details.introduced}</span>
      </ScrollReveal>

      <div className="technical-profile__grid">
        {groupedSpecFields.map(({ group, fields }) => {
          const populatedFields = fields.filter((field) => details.fields[field]);
          if (populatedFields.length === 0) return null;

          return (
            <ScrollReveal
              as="article"
              className="technical-profile__group"
              delay={80 + groupedSpecFields.findIndex((item) => item.group === group) * 70}
              key={group}
            >
              <h3>{copy.groups[group]}</h3>
              <dl>
                {populatedFields.map((field) => (
                  <div key={field}>
                    <dt>{copy.fields[field]}</dt>
                    <dd>{localizeFact(details.fields[field]!, language)}</dd>
                  </div>
                ))}
              </dl>
            </ScrollReveal>
          );
        })}
      </div>

      <ScrollReveal className="technical-profile__source" delay={120}>
        <p>{copy.disclaimer}</p>
        <a href={details.sourceUrl} target="_blank" rel="noreferrer">
          {copy.source} <ExternalLink aria-hidden="true" />
        </a>
      </ScrollReveal>
    </section>
  );
}
