import React from "react";

export default function LandingPage({ pageContext }) {
  const { name, referralCode } = pageContext;

  return (
    <div style={{ textAlign: "center", padding: "20px", fontFamily: "Arial" }}>
      <h1 style={{ color: "#333" }}>Welcome, {name} Affiliates!</h1>
      <p style={{ fontSize: "18px" }}>Click below to join:</p>
      <a
        href={`https://main.example.com/register?affiliate_id=${referralCode}`}
        style={{
          display: "inline-block",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          textDecoration: "none",
          borderRadius: "5px"
        }}
      >
        Register Now
      </a>
    </div>
  );
}
