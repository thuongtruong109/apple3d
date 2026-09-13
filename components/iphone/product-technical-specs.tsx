import { BadgeCheck, ExternalLink } from "lucide-react";
import type { Language } from "./i18n";
import type { Model } from "./product-data";
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
          <p className="technical-profile__eyebrow">{copy.eyebrow}</p>
          <h2 id="technical-profile-title">{copy.title}</h2>
          <p>{copy.description}</p>
        </div>
        <div className="technical-profile__verification">
          <BadgeCheck aria-hidden="true" />
          <span>
            {copy.official}
            <small>{copy.verified}</small>
          </span>
        </div>
      </div>

      <div className="technical-profile__identity">
        <strong>{productName}</strong>
        <span>{copy.introduced} · {details.introduced}</span>
      </div>

      <div className="technical-profile__grid">
        {groupedSpecFields.map(({ group, fields }) => {
          const populatedFields = fields.filter((field) => details.fields[field]);
          if (populatedFields.length === 0) return null;

          return (
            <article className="technical-profile__group" key={group}>
              <h3>{copy.groups[group]}</h3>
              <dl>
                {populatedFields.map((field) => (
                  <div key={field}>
                    <dt>{copy.fields[field]}</dt>
                    <dd>{localizeFact(details.fields[field]!, language)}</dd>
                  </div>
                ))}
              </dl>
            </article>
          );
        })}
      </div>

      <div className="technical-profile__source">
        <p>{copy.disclaimer}</p>
        <a href={details.sourceUrl} target="_blank" rel="noreferrer">
          {copy.source} <ExternalLink aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
