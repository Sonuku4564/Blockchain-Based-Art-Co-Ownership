// src/pages/Login.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Login</h2>
        <form style={styles.form}>
          <label style={styles.label}>Email</label>
          <input type="email" style={styles.input} />

          <label style={styles.label}>Password</label>
          <input type="password" style={styles.input} />

          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>

        <p style={styles.footer}>
          Don’t have an account?{" "}
          <Link to="/signup" style={styles.link}>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to bottom right, #eef2ff, #e0f2fe)",
  },
  card: {
    width: "400px",
    background: "white",
    padding: "36px 28px",
    borderRadius: "14px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
    textAlign: "center",
  },
  title: {
    fontSize: "1.8rem",
    fontWeight: "700",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  label: {
    textAlign: "left",
    fontSize: "0.95rem",
    fontWeight: "500",
    color: "#374151",
  },
  input: {
    width: "100%",         // 🔥 make input stretch across
    padding: "12px",
    fontSize: "1rem",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    outline: "none",
    boxSizing: "border-box", // ensure padding doesn’t shrink width
    transition: "border 0.2s ease",
  },
  button: {
    marginTop: "12px",
    padding: "12px",
    fontSize: "1rem",
    fontWeight: "600",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background 0.2s ease",
  },
  footer: {
    marginTop: "22px",
    fontSize: "0.9rem",
    color: "#374151",
  },
  link: {
    color: "#2563eb",
    fontWeight: "600",
    textDecoration: "none",
  },
};

