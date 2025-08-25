// src/pages/Home.jsx
import React from "react";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "20px",
        background: "linear-gradient(135deg,#f0f4ff,#e0e7ff,#faf5ff)",
      }}
    >
      <h1 style={{ fontSize: "3rem", fontWeight: "bold", color: "#1f2937" }}>
        Welcome To Digital Art Gallery
      </h1>
      <p
        style={{
          marginTop: "20px",
          fontSize: "1.3rem",
          color: "#4b5563",
          maxWidth: "600px",
        }}
      >
        Buy and sell your favorite art with fractional ownership.
      </p>
    </div>
  );
}
