import { Sparkles } from "lucide-react";
import type { Translation } from "./i18n";
import { FooterGlow } from "./footer-glow";
import { FooterOrbitNav } from "./footer-orbit-nav";
import { FooterSignalRail } from "./footer-signal-rail";
import { ScrollReveal, WordReveal } from "./scroll-reveal";

type ExperienceFooterProps = {
  content: Translation["sources"];
};

export function ExperienceFooter({ content }: ExperienceFooterProps) {
  return (
    <footer className="experience-footer" id="sources">
      <FooterGlow resourcesLabel={content.resources} />
      <FooterSignalRail />

      <div className="footer-closing">
        <article className="footer-manifesto">
          <ScrollReveal className="footer-badge">
            <Sparkles aria-hidden="true" />
            <span>{content.badge}</span>
          </ScrollReveal>
          <WordReveal text={content.title} delay={90} />
          <ScrollReveal as="p" className="footer-manifesto__intro" delay={180}>
            {content.description}
          </ScrollReveal>
          <ScrollReveal className="footer-manifesto__note" delay={260}>
            <span className="footer-column__label">{content.experience}</span>
            <p>{content.conceptNote}</p>
          </ScrollReveal>
        </article>

        <FooterOrbitNav
          backToTop={content.backToTop}
          experienceLabel={content.experience}
          navLabel={content.navLabel}
          resourcesLabel={content.resources}
        />
      </div>

      <div className="footer-bottom">
        <span>APPLE PRODUCT LAB / 2026</span>
        <span className="footer-bottom__status">
          <i aria-hidden="true" /> APPLE AR / INDEPENDENT SPATIAL STUDY
        </span>
      </div>
    </footer>
  );
}
