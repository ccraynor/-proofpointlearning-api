import React from "react";

export default function Home() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Welcome to Proofpoint Learning API</h1>
      <p>Your deployment is working! 🎉</p>
      <p>Try calling <code>/api/export_pdf</code> to test your endpoint.</p>
    </div>
  );
}
