import React from "react";
import Nav from "./components/nav";
import About from "./components/about";

function Nav() {
  return (
    <header>
      <h2>
        <a href="/">
          <span role="img" aria-label="camera">
            📸
          </span>{" "}
          Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about">About Me</a>
          </li>
          <li>
            <Span>Contact</Span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
