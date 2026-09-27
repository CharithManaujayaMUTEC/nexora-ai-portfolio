"use client";

import { useEffect, useState } from "react";

const links = [
  ["WORK", "#work"],
  ["SERVICES", "#services"],
  ["AI", "#ai"],
  ["ABOUT", "#about"],
  ["CONTACT", "#contact"]
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav">
        <a className="brand" href="#" aria-label="NEXORA home">
          <span className="brand-mark" />
          NEXORA
        </a>

        <nav className="nav-links" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>

        <button className="menu-button" aria-label="Open menu">
          <span style={{fontSize: 24}}>☰</span>
        </button>
      </div>
    </header>
  );
}