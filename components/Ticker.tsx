import { tickerItems } from "@/lib/data";

export default function Ticker() {
  const row = [...tickerItems, ...tickerItems];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {[0, 1].map((dup) => (
          <div className="ticker-group" key={dup}>
            {row.map((item, i) => (
              <span className="ticker-item mono" key={`${dup}-${i}`}>
                {item}
                <span className="ticker-star accent">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
