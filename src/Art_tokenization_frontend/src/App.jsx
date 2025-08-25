// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Marketplace from "./pages/Marketplace";
import ArtworkDetails from "./pages/ArtworkDetails";
import HowItWorks from "./pages/HowItWorks";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SellArtwork from "./pages/SellArtworks";
import MyListings from "./pages/Mylistings";

// Wrapper to conditionally apply <main> only for non-auth pages
function AppContent() {
  const location = useLocation();
  const isAuthPage = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#f0f4ff,#e0e7ff,#faf5ff)",
      }}
    >
      <Navbar />

      {isAuthPage ? (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      ) : (
        <main
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "32px 20px",
          }}
        >
          <Routes>
            {/* Home (Landing Page) */}
            <Route
              path="/"
              element={
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "70vh",
                  }}
                >
                  <h1
                    style={{
                      textAlign: "center",
                      marginBottom: 20,
                      fontSize: "2.6rem",
                      fontWeight: 800,
                      color: "#1f2937",
                    }}
                  >
                    Welcome To Digital Art Gallery
                  </h1>

                  <p
                    style={{
                      textAlign: "center",
                      marginBottom: 40,
                      fontSize: "1.2rem",
                      color: "#374151",
                    }}
                  >
                    Buy and sell your favorite art pieces securely on the
                    blockchain.
                  </p>
                </div>
              }
            />

            {/* Marketplace Page */}
            <Route path="/marketplace" element={<Marketplace />} />

            {/* Artwork Details Page */}
            <Route path="/artwork/:id" element={<ArtworkDetails />} />

            {/* How It Works Page */}
            <Route path="/how-it-works" element={<HowItWorks />} />

            <Route path="/sell" element={<SellArtwork />} />

            <Route path="/my-listings" element={<MyListings />} />

          </Routes>
        </main>
      )}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
