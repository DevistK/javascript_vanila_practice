import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <h1 className="logo">movieFlix</h1>
      </div>
      <div className="header__search">
        <input
          class="search"
          type="search"
          placeholder="무슨 영화를 찾으시나요 ?"
        ></input>
      </div>
    </header>
  );
}

export default Header;
