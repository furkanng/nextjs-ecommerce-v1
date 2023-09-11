"use client";
import React from "react";

function MenuItem({ icon, title }) {
  return (
    <div
      className="flex flex-col justify-center content-center"
      onClick={() => {
        alert(title);
      }}
    >
      <div className="flex justify-center">{icon}</div>
      <p style={{ fontSize: "12px" }}>{title}</p>
    </div>
  );
}

export default MenuItem;
