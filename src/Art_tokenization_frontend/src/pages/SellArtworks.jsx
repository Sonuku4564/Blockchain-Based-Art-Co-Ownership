// src/pages/SellArtwork.jsx
import React, { useState } from "react";

export default function SellArtwork() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !price || !image) {
      alert("Please fill all required fields.");
      return;
    }

    // TODO: Send to backend or blockchain
    console.log({ title, description, price, image });

    alert("Artwork listed for sale!");
  };

  return (
    <div
      style={{
        maxWidth: 600,
        margin: "40px auto",
        background: "#fff",
        padding: "32px",
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ marginBottom: "20px", textAlign: "center" }}>
        Sell Your Artwork
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Artwork Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={inputStyle}
        />

        <textarea
          placeholder="Description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ ...inputStyle, height: "100px" }}
        />

        <input
          type="number"
          placeholder="Price (ETH)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={inputStyle}
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          style={inputStyle}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            background: "#4f46e5",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          List Artwork
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  marginBottom: "15px",
  padding: "12px",
  border: "1px solid #ddd",
  borderRadius: "8px",
  fontSize: "16px",
};
