"use client";

import { ArrowUpRight, Sparkles } from "lucide-react";
import type { Language } from "./i18n";
import { ScrollReveal, WordReveal } from "./scroll-reveal";
import { getStorePolicyCopy } from "./store-policy-copy";

type StorePolicyExperienceProps = {
  language: Language;
};

export function StorePolicyExperience({
  language,
}: StorePolicyExperienceProps) {
  const copy = getStorePolicyCopy(language);
  const marquee = `${copy.marquee}${copy.marquee}`;

  return (
    <section className="store-policy" aria-labelledby="store-policy-title">
      <div className="store-policy__ambient" aria-hidden="true" />

      <div className="store-policy__intro">
        <ScrollReveal className="store-policy__eyebrow">
          <Sparkles aria-hidden="true" />
          <span>{copy.eyebrow}</span>
        </ScrollReveal>
        <WordReveal
          id="store-policy-title"
          text={copy.title}
          className="store-policy__title"
        />
        <ScrollReveal delay={180} className="store-policy__description">
          <p>{copy.description}</p>
        </ScrollReveal>
      </div>

      <div className="store-policy__marquee" aria-hidden="true">
        <div className="store-policy__marquee-track">
          <span>{marquee}</span>
          <span>{marquee}</span>
        </div>
      </div>

      <div className="store-policy__stores" aria-label={copy.storeLabel}>
        {copy.stores.map((store, index) => {
          const Icon = store.icon;
          return (
            <ScrollReveal key={store.title} delay={index * 110}>
              <a
                className="store-card"
                href={store.href}
                target="_blank"
                rel="noreferrer"
              >
                <span className="store-card__icon">
                  <Icon aria-hidden="true" />
                </span>
                <span className="store-card__label">{store.label}</span>
                <h3>{store.title}</h3>
                <p>{store.description}</p>
                <ArrowUpRight className="store-card__arrow" aria-hidden="true" />
              </a>
            </ScrollReveal>
          );
        })}
      </div>

      <div className="store-policy__policies">
        <div className="store-policy__policy-heading">
          <ScrollReveal className="store-policy__eyebrow">
            <span>{copy.policyEyebrow}</span>
          </ScrollReveal>
          <WordReveal
            text={copy.policyTitle}
            className="store-policy__title store-policy__title--policy"
          />
          <ScrollReveal delay={180} className="store-policy__description">
            <p>{copy.policyDescription}</p>
          </ScrollReveal>
        </div>

        <div className="policy-list">
          {copy.policies.map((policy, index) => {
            const Icon = policy.icon;
            return (
              <ScrollReveal key={policy.title} delay={index * 90}>
                <a
                  className="policy-row"
                  href={policy.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="policy-row__index">{policy.index}</span>
                  <span className="policy-row__icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <span className="policy-row__copy">
                    <small>{policy.label}</small>
                    <strong>{policy.title}</strong>
                    <span>{policy.description}</span>
                  </span>
                  <ArrowUpRight className="policy-row__arrow" aria-hidden="true" />
                </a>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
