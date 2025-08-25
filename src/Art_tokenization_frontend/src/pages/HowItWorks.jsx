// src/pages/HowItWorks.jsx
import React from "react";

export default function HowItWorks() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>How Fractional Art Ownership Works</h1>

      <section style={styles.section}>
        <h2 style={styles.subtitle}>1. Browse Artwork</h2>
        <p style={styles.text}>
          Explore our curated marketplace of digital artworks. Each piece is verified
          and available for fractional investment.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subtitle}>2. Buy Fractions</h2>
        <p style={styles.text}>
          Instead of purchasing an entire artwork, you can buy fractional shares.
          This lowers the barrier to entry and increases liquidity.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subtitle}>3. Track Ownership</h2>
        <p style={styles.text}>
          Your ownership fractions are securely stored on the blockchain. You can
          view, trade, or hold them directly from your connected wallet.
        </p>
      </section>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 900,
    margin: "40px auto",
    padding: "20px",
    background: "rgba(255,255,255,0.75)",
    borderRadius: 12,
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  },
  title: {
    fontSize: "2.2rem",
    fontWeight: 800,
    textAlign: "center",
    marginBottom: 30,
    color: "#1f2937",
  },
  section: { marginBottom: 28 },
  subtitle: { fontSize: "1.4rem", fontWeight: 700, marginBottom: 8 },
  text: { fontSize: "1rem", lineHeight: 1.6, color: "#374151" },
};
