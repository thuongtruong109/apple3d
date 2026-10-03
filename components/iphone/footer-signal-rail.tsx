const footerSignals = [
  "APPLE AR ASSETS",
  "MATERIAL STUDY",
  "SPATIAL GEOMETRY",
  "CAMERA TOPOLOGY",
  "CURVE & LIGHT",
  "INDEPENDENT ARCHIVE",
] as const;

export function FooterSignalRail() {
  return (
    <div className="footer-signal-rail" aria-hidden="true">
      <div className="footer-signal-rail__track">
        {[...footerSignals, ...footerSignals].map((signal, index) => (
          <span key={`${signal}-${index}`}>
            <i />
            {signal}
          </span>
        ))}
      </div>
    </div>
  );
}
