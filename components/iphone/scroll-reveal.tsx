"use client";

import {
  createElement,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

type RevealStyle = CSSProperties & {
  "--reveal-delay": string;
};

function useRevealOnce<T extends HTMLElement>() {
  const elementRef = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsVisible(true);
        observer.disconnect();
      },
      { rootMargin: "0px 0px -12%", threshold: 0.12 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return { elementRef, isVisible };
}

type ScrollRevealProps = {
  as?: Extract<ElementType, "article" | "div" | "p" | "span">;
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function ScrollReveal({
  as = "div",
  children,
  className = "",
  delay = 0,
}: ScrollRevealProps) {
  const { elementRef, isVisible } = useRevealOnce<HTMLElement>();

  return createElement(
    as,
    {
      ref: elementRef,
      className: `scroll-reveal${isVisible ? " is-visible" : ""}${className ? ` ${className}` : ""}`,
      style: { "--reveal-delay": `${delay}ms` } as RevealStyle,
    },
    children,
  );
}

type WordRevealProps = {
  as?: "h1" | "h2" | "h3";
  text: string;
  className?: string;
  delay?: number;
  id?: string;
};

type WordRevealStyle = CSSProperties & {
  "--word-delay": string;
};

export function WordReveal({
  as = "h2",
  text,
  className = "",
  delay = 0,
  id,
}: WordRevealProps) {
  const { elementRef, isVisible } = useRevealOnce<HTMLHeadingElement>();

  return createElement(
    as,
    {
      ref: elementRef,
      id,
      className: `word-reveal${isVisible ? " is-visible" : ""}${className ? ` ${className}` : ""}`,
      "aria-label": text,
      style: { "--word-delay": `${delay}ms` } as WordRevealStyle,
    },
    text.split(" ").map((word, index) => (
      <span
        key={`${word}-${index}`}
        aria-hidden="true"
        style={{ "--word-index": index } as CSSProperties}
      >
        {word}
      </span>
    )),
  );
}
