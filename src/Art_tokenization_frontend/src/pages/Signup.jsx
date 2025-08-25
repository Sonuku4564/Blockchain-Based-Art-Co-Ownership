import React, { useState, useEffect } from "react";
import { getActor, initAuth } from "../icp";

export default function Signup() {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [actor, setActor] = useState(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    (async () => {
      const { actor } = await initAuth();
      setActor(actor || null);
    })();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    const a = getActor();
    if (!a) {
      setStatus("Please connect your Internet Identity first (top-right).");
      return;
    }

    try {
      const profile = await a.upsert_my_profile(displayName, email ? [email] : []);
      setStatus("Profile saved! Welcome, " + profile.display_name);
    } catch (err) {
      console.error(err);
      setStatus("Failed to save profile: " + err);
    }
  };

  return (
    <div style={{ minHeight:"80vh", display:"flex", alignItems:"center", justifyContent:"center" }}>
      <div style={{ background:"#fff", padding:24, borderRadius:12, width:"100%", maxWidth:380 }}>
        <h2 style={{ textAlign:"center", marginBottom:16 }}>Sign Up</h2>
        <p style={{ fontSize: "0.9rem", color: "#6b7280", marginBottom: 12 }}>
          Tip: Click <b>Connect II</b> (top-right) before submitting.
        </p>
        <form onSubmit={handleSubmit} style={{ display:"flex", flexDirection:"column", gap:12 }}>
          <div>
            <label>Display Name</label>
            <input
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              required
              style={{ width:"100%", padding:10, border:"1px solid #ddd", borderRadius:6 }}
            />
          </div>
          <div>
            <label>Email (optional)</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width:"100%", padding:10, border:"1px solid #ddd", borderRadius:6 }}
            />
          </div>
          <button type="submit" style={{ padding:12, background:"#10b981", color:"#fff", border:"none", borderRadius:6, fontWeight:700 }}>
            Save Profile
          </button>
        </form>
        {status && <p style={{ marginTop:12, color:"#111827" }}>{status}</p>}
      </div>
    </div>
  );
}
