import React, { useState } from "react";
import { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import { Person, Mail } from "@material-ui/icons";

export default function Nav(props, menuOpen, setMenuOpen) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header className="flex-row px-1">
      <div className="wrapper">
        <div className="left">
          <h2>
            <a data-testid="link" href="/">
              Portfolio.
            </a>
          </h2>
          <div className="itemContainer">
            <Mail className="icon" />
            <a href="mailto:blaine.curren@gmail.com?body=My custom mail body">
              blaine.curren@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
          <nav>
            <ul className="flex-row">
              <li className="mx-2">
                <a
                  data-testid="about"
                  href="#about"
                  onClick={() => setContactSelected(false)}
                >
                  About me
                </a>
              </li>
              <li className={`mx-2 ${contactSelected && "navActive"}`}>
                <span onClick={() => setContactSelected(true)}>Contact</span>
              </li>
              {categories.map((category) => (
                <li
                  className={`mx-1 ${
                    currentCategory.name === category.name &&
                    !contactSelected &&
                    `navActive`
                  }`}
                  key={category.name}
                >
                  <span
                    onClick={() => {
                      setCurrentCategory(category);
                      setContactSelected(false);
                    }}
                  >
                    {capitalizeFirstLetter(category.name)}
                  </span>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
