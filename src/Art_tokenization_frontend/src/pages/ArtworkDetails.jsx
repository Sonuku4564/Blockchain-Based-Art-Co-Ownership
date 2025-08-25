import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { artworks } from "../data"; // adjust path if needed

export default function ArtworkDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find artwork by id
  const artwork = artworks.find((a) => a.id.toString() === id);

  if (!artwork) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2>Artwork not found</h2>
        <button
          onClick={() => navigate("/marketplace")}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            borderRadius: "8px",
            background: "#4f46e5",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Back to Marketplace
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "40px 20px",
        background: "white",
        borderRadius: "16px",
        boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
      }}
    >
      <button
        onClick={() => navigate("/marketplace")}
        style={{
          marginBottom: "20px",
          padding: "8px 16px",
          borderRadius: "8px",
          background: "#e5e7eb",
          border: "none",
          cursor: "pointer",
        }}
      >
        ← Back
      </button>

      <img
        src={artwork.image}
        alt={artwork.title}
        style={{
          width: "100%",
          maxHeight: "400px",
          objectFit: "cover",
          borderRadius: "12px",
        }}
      />

      <h1 style={{ marginTop: "20px", fontSize: "2rem", fontWeight: "800", color: "#1f2937" }}>
        {artwork.title}
      </h1>
      <p style={{ fontSize: "1.1rem", color: "#4b5563", margin: "10px 0" }}>
        by {artwork.artist}
      </p>
      <p style={{ fontSize: "1rem", color: "#6b7280", marginBottom: "20px" }}>
        {artwork.description}
      </p>

      <div style={{ fontSize: "1.1rem", color: "#111827", marginBottom: "20px" }}>
        <strong>Price:</strong> {artwork.price} ICP <br />
        <strong>Fractions available:</strong> {artwork.fractions}
      </div>

      <button
        style={{
          padding: "12px 24px",
          borderRadius: "10px",
          background: "#4f46e5",
          color: "white",
          fontWeight: "600",
          fontSize: "1rem",
          border: "none",
          cursor: "pointer",
          transition: "background 0.2s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#4338ca")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "#4f46e5")}
      >
        Buy Fractions
      </button>
    </div>
  );
}
