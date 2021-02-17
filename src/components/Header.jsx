import React, { useState, useEffect } from "react";

export default function Header() {
  const [isDark, setTheme] = useState(localStorage.getItem("isDark") || false);
  useEffect(() => {
    if (localStorage.getItem("isDark")) {
      document.body.classList.add("dark-mode");
    }
  }, []);
  const toogleSwitch = () => {
    try {
      if (!isDark) {
        localStorage.setItem("isDark", "true");
        document.body.classList.add("dark-mode");
        setTheme(!isDark);
      } else {
        localStorage.removeItem("isDark");
        document.body.classList.remove("dark-mode", "false");
        setTheme(!isDark);
      }
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <header>
      <nav>
        <div className="container">
          <h1>Where in the world</h1>
          <div id="Dark-mode-toggle" className="darkmode">
            <button onClick={toogleSwitch}>
              <i className={isDark ? "ri-sun-line" : "ri-moon-line"}></i>
              {isDark ? "Light " : "Dark "}
              Mode
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
