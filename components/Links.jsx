import React from "react";

export default function Links() {
  const links = ["Services", "Projects", "About"];
  return (
    <div className="link">
      {links.map((link) => (
        <a href="#">
          <h4>{link}</h4>
        </a>
      ))}
    </div>
  );
}
