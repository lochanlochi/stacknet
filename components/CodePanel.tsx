"use client";

import { useEffect, useRef } from "react";

export default function CodePanel() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!fine || reduced) return;

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) / rect.width;
        const dy = (e.clientY - cy) / rect.height;
        el.style.setProperty("--rx", `${(-dy * 5).toFixed(2)}deg`);
        el.style.setProperty("--ry", `${(dx * 6).toFixed(2)}deg`);
      });
    };
    const onLeave = () => {
      el.style.setProperty("--rx", "0deg");
      el.style.setProperty("--ry", "0deg");
    };

    window.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="code-panel-wrap" ref={wrapRef} aria-hidden="true">
      <div className="code-panel">
        <div className="code-panel-bar">
          <span className="code-dots">
            <i />
            <i />
            <i />
          </span>
          <span className="mono code-file">stacknet.config.ts</span>
          <span className="mono code-status">
            <span className="dot" /> BUILD 0042
          </span>
        </div>
        <pre className="code-body mono">
          <code>
            <span className="c-kw">export default</span>{" "}
            <span className="c-fn">defineProduct</span>({"{"}
            {"\n"}
            {"  "}render: <span className="c-str">&quot;edge&quot;</span>,
            {"\n"}
            {"  "}firstPaint: <span className="c-str">&quot;&lt; 1s&quot;</span>,
            {"\n"}
            {"  "}a11y: <span className="c-str">&quot;WCAG 2.2 AA&quot;</span>,
            {"\n"}
            {"  "}aiReady: <span className="c-bool">true</span>,
            {"\n"}
            {"  "}scale: <span className="c-str">&quot;global&quot;</span>,
            {"\n"}
            {"  "}legacy: <span className="c-bool">false</span>
            {"\n"}
            {"}"})
          </code>
        </pre>
        <div className="code-panel-out mono">
          <span className="c-ok">✓</span> typed · tested · 0 errors
          <br />
          <span className="text-muted">→ live at the edge, worldwide</span>
        </div>
      </div>
    </div>
  );
}
