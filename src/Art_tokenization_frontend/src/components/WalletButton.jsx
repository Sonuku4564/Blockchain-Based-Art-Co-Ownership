import React, { useEffect, useState } from "react";
import { initAuth, loginWithII, logout, getIdentity } from "../icp";

export default function WalletButton() {
  const [connected, setConnected] = useState(false);
  const [short, setShort] = useState("");

  useEffect(() => {
    (async () => {
      await initAuth();
      const id = getIdentity();
      if (id) {
        setConnected(true);
        const p = id.getPrincipal().toText();
        setShort(p.slice(0,5) + "…" + p.slice(-4));
      }
    })();
  }, []);

  const handleConnect = async () => {
    try {
      await loginWithII();
      const id = getIdentity();
      if (id) {
        setConnected(true);
        const p = id.getPrincipal().toText();
        setShort(p.slice(0,5) + "…" + p.slice(-4));
      }
    } catch (e) {
      alert("Login failed: " + e);
    }
  };

  const handleDisconnect = async () => {
    await logout();
    setConnected(false);
    setShort("");
  };

  return connected ? (
    <button
      onClick={handleDisconnect}
      style={{
        padding: "6px 12px",
        borderRadius: 6,
        border: "1px solid #e11d48",
        background: "white",
        color: "#e11d48",
        fontWeight: 700,
        cursor: "pointer",
      }}
      title="Disconnect Internet Identity"
    >
      {short} • Disconnect
    </button>
  ) : (
    <button
      onClick={handleConnect}
      style={{
        padding: "6px 12px",
        borderRadius: 6,
        border: "1px solid #2563eb",
        background: "#2563eb",
        color: "white",
        fontWeight: 700,
        cursor: "pointer",
      }}
      title="Connect with Internet Identity"
    >
      Connect II
    </button>
  );
}
