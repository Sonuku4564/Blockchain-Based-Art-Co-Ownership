import React from "react";
import { useNavigate } from "react-router-dom";

export default function ArtworkCard({ artwork }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/artwork/${artwork.id}`);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        cursor: "pointer",
        background: "white",
        borderRadius: "16px",
        padding: "16px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
      }}
    >
      <img
        src={artwork.image}
        alt={artwork.title}
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover",
          borderRadius: "12px",
        }}
      />
      <h3 style={{ marginTop: "12px", fontSize: "1.2rem", fontWeight: "700", color: "#1f2937" }}>
        {artwork.title}
      </h3>
      <p style={{ fontSize: "0.95rem", color: "#4b5563" }}>{artwork.artist}</p>
      <p style={{ fontSize: "0.9rem", color: "#6b7280" }}>
        {artwork.price} ICP • {artwork.fractions} fractions
      </p>
    </div>
  );
}
