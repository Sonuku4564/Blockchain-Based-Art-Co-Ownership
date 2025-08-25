import React from "react";
import ArtworkCard from "./ArtworkCard";
import { artworks } from "../data";


export default function ArtworkGrid() {
  return (
    <div style={styles.grid}>
      {artworks.map((art) => (
        <ArtworkCard key={art.id} artwork={art} />
      ))}
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    padding: "20px",
  },
};
