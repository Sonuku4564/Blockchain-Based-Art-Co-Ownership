import React from "react";
import { NavLink } from "react-router-dom";
import WalletButton from "./WalletButton";

export default function Navbar() {
  return (
    <header style={styles.header}>
      {/* Left side: logo + brand */}
      <div style={styles.left}>
        <img src="/logo2.svg" alt="logo" style={styles.logo} />
        <span style={styles.brand}>Fractional Art</span>
      </div>

      {/* Center nav links */}
      <nav style={styles.nav}>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            ...styles.link,
            color: isActive ? "#2563eb" : styles.link.color,
          })}
          end
        >
          Home
        </NavLink>

        <NavLink
          to="/marketplace"
          style={({ isActive }) => ({
            ...styles.link,
            color: isActive ? "#2563eb" : styles.link.color,
          })}
        >
          Marketplace
        </NavLink>

        <NavLink
          to="/how-it-works"
          style={({ isActive }) => ({
            ...styles.link,
            color: isActive ? "#2563eb" : styles.link.color,
          })}
        >
          How it works
        </NavLink>

        <NavLink
          to="/sell"
          style={({ isActive }) => ({
            ...styles.link,
            color: isActive ? "#2563eb" : styles.link.color,
          })}
        >
          Sell Artwork
        </NavLink>

        <NavLink
          to="/my-listings"
          style={({ isActive }) => ({
            ...styles.link,
            color: isActive ? "#2563eb" : styles.link.color,
          })}
        >
          My Listings
        </NavLink>
      </nav>

      {/* Right side: auth + wallet */}
      <div style={styles.right}>
        <NavLink
          to="/login"
          style={({ isActive }) => ({
            ...styles.authLink,
            border: "1px solid #2563eb",
            color: isActive ? "#2563eb" : "#2563eb",
          })}
        >
          Login
        </NavLink>

        <NavLink
          to="/signup"
          style={({ isActive }) => ({
            ...styles.authLink,
            background: "#2563eb",
            color: "white",
          })}
        >
          Signup
        </NavLink>

        <WalletButton />
      </div>
    </header>
  );
}

const styles = {
  header: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 16px",
    background: "rgba(255,255,255,0.65)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid rgba(0,0,0,0.06)",
  },
  left: { display: "flex", alignItems: "center", gap: 8 },
  logo: { width: 28, height: 28 },
  brand: { fontWeight: 800, fontSize: "1.1rem" },
  nav: { display: "flex", gap: 16 },
  link: {
    textDecoration: "none",
    color: "#2d2d2d",
    fontWeight: 600,
    transition: "color 0.2s ease",
  },
  right: { display: "flex", alignItems: "center", gap: 12 },
  authLink: {
    textDecoration: "none",
    fontWeight: 600,
    padding: "6px 14px",
    borderRadius: 6,
    transition: "all 0.2s ease",
  },
};
