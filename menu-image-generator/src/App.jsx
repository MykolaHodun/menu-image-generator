import React, { useState } from "react";

export default function App() {
  const [menuText, setMenuText] = useState("");
  const [items, setItems] = useState([]);

  function parseMenu() {
    const lines = menuText.split("\n").filter((line) => line.includes(":"));
    setItems(
      lines.map((line) => {
        const [name, ...desc] = line.split(":");
        return { name: name.trim(), description: desc.join(":").trim() };
      })
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Menu Image Generator</h1>
      <textarea
        rows={6}
        style={{ width: "100%" }}
        placeholder="Paste menu items here, e.g.&#10;Grilled Chicken: Juicy chicken breast"
        value={menuText}
        onChange={(e) => setMenuText(e.target.value)}
      />
      <button onClick={parseMenu}>Parse Menu</button>
      <ul>
        {items.map((i, idx) => (
          <li key={idx}>
            <b>{i.name}:</b> {i.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
