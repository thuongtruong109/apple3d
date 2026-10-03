import { ArrowUp, ArrowUpRight } from "lucide-react";
import { footerProductLinks } from "./footer-source-data";

type FooterOrbitNavProps = {
  backToTop: string;
  experienceLabel: string;
  navLabel: string;
  resourcesLabel: string;
};

export function FooterOrbitNav({
  backToTop,
  experienceLabel,
  navLabel,
  resourcesLabel,
}: FooterOrbitNavProps) {
  return (
    <nav className="footer-orbit-nav" aria-label={navLabel}>
      <svg
        className="footer-orbit-nav__constellation"
        viewBox="0 0 720 640"
        aria-hidden="true"
      >
        <path d="M70 324C154 112 318 40 548 92C658 118 703 220 645 316C577 429 397 482 218 430C124 403 64 369 70 324Z" />
        <path d="M132 116C289 223 437 341 602 528" />
        <path d="M96 508C260 382 431 230 623 142" />
        <g>
          <circle cx="132" cy="116" r="4" />
          <circle cx="623" cy="142" r="3" />
          <circle cx="70" cy="324" r="3" />
          <circle cx="645" cy="316" r="4" />
          <circle cx="96" cy="508" r="3" />
          <circle cx="602" cy="528" r="4" />
        </g>
      </svg>
      <span className="footer-orbit-nav__eyebrow">{resourcesLabel}</span>
      <span className="footer-orbit-nav__ring" aria-hidden="true" />
      <span className="footer-orbit-nav__satellite" aria-hidden="true" />
      <span className="footer-orbit-nav__beam" aria-hidden="true" />

      <a href="#experience" className="footer-orbit-nav__center">
        <span>{experienceLabel}</span>
        <strong>{backToTop}</strong>
        <ArrowUp aria-hidden="true" />
      </a>

      <ol className="footer-orbit-nav__links">
        {footerProductLinks.map((product, index) => (
          <li className={`footer-orbit-nav__item footer-orbit-nav__item--${index + 1}`} key={product.label}>
            <a href={product.href} target="_blank" rel="noreferrer">
              <small>{String(index + 1).padStart(2, "0")}</small>
              <span>{product.label}</span>
              <ArrowUpRight aria-hidden="true" />
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
