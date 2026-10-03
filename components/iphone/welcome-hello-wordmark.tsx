import type { CSSProperties } from "react";

const helloLetters = ["H", "e", "l", "l", "o"] as const;

type HelloLetterStyle = CSSProperties & {
  "--hello-index": number;
};

const letterGradients = [
  ["#ff5f96", "#ff8a68"],
  ["#ff8a68", "#ffd36a"],
  ["#ffd36a", "#78e3ad"],
  ["#78e3ad", "#55cfff"],
  ["#55cfff", "#b98cff"],
] as const;

function renderLetters(kind: "fill" | "trace") {
  return helloLetters.map((letter, index) => (
    <tspan
      className={`welcome-overlay__hello-letter--${kind}`}
      fill={kind === "fill" ? `url(#hello-letter-${index})` : "transparent"}
      key={`${letter}-${index}`}
      stroke={kind === "trace" ? `url(#hello-letter-${index})` : undefined}
      style={{ "--hello-index": index } as HelloLetterStyle}
    >
      {letter}
    </tspan>
  ));
}

export function WelcomeHelloWordmark() {
  return (
    <svg
      className="welcome-overlay__hello"
      viewBox="0 0 520 150"
      focusable="false"
    >
      <defs>
        <linearGradient id="hello-spectrum" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ff5f96" />
          <stop offset="0.24" stopColor="#ff9b65" />
          <stop offset="0.48" stopColor="#f4df73" />
          <stop offset="0.7" stopColor="#64dbc5" />
          <stop offset="1" stopColor="#a77bff" />
        </linearGradient>
        {letterGradients.map(([start, end], index) => (
          <linearGradient
            id={`hello-letter-${index}`}
            x1="0"
            y1="0"
            x2="1"
            y2="1"
            key={`${start}-${end}`}
          >
            <stop offset="0" stopColor={start} />
            <stop offset="1" stopColor={end} />
          </linearGradient>
        ))}
      </defs>

      <text
        className="welcome-overlay__hello-spectrum"
        x="260"
        y="108"
        textAnchor="middle"
      >
        Hello
      </text>
      <text
        className="welcome-overlay__hello-trace"
        x="260"
        y="108"
        textAnchor="middle"
      >
        {renderLetters("trace")}
      </text>
      <text
        className="welcome-overlay__hello-fill"
        x="260"
        y="108"
        textAnchor="middle"
      >
        {renderLetters("fill")}
      </text>
    </svg>
  );
}
