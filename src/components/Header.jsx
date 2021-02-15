import React, { useState } from "react";

export default function Header() {
  const [isDark, setTheme] = useState(localStorage.getItem("isDark") || false);
  const toogleSwitch = () => {
    try {
      localStorage.setItem("isDark", "true");
      setTheme(!isDark);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <header>
      <nav>
        <div class="container">
          <h1>Where in the world</h1>
          <div id="Dark-mode-toggle" class="darkmode">
            <button onClick={toogleSwitch}>
              <i class={isDark ? "ri-sun-line" : "ri-moon-line"}></i>
              {isDark ? "Light " : "Dark "}
              Mode
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
