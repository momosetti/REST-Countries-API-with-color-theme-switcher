import React from "react";

export default function Header() {
  return (
    <header>
      <nav>
        <div class="container">
          <h1>Where in the world</h1>
          <div id="Dark-mode-toggle" class="darkmode">
            <button>
              <i class="ri-moon-line" /> Dark Mode
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
