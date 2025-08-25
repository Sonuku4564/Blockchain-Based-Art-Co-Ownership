// src/pages/MyListings.jsx
import React from "react";

export default function MyListings() {
  // Temporary mock data
  const listings = [
    { id: 1, title: "Digital Sunset", price: "0.8 ETH" },
    { id: 2, title: "Pixel Mountains", price: "0.5 ETH" },
  ];

  return (
    <div style={{ padding: "32px" }}>
      <h2 style={{ marginBottom: "20px" }}>My Listings</h2>
      {listings.length === 0 ? (
        <p>You have not listed any artworks yet.</p>
      ) : (
        <ul>
          {listings.map((art) => (
            <li key={art.id} style={{ marginBottom: "10px" }}>
              {art.title} — {art.price}
              <button style={{ marginLeft: "10px" }}>Edit</button>
              <button style={{ marginLeft: "10px" }}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
