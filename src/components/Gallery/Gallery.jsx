import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import ProjectList from "../projectList/ProjectList";
import scss from "./gallery.scss";
// import about from "../about/About.jsx";

export default function Gallery(props) {
  const {
    categories,
    currentCategory,
    setCurrentCategory,
    contactSelected,
    setContactSelected,
  } = props;

  return (
    <div className="gallery">
      <header>
        <h2>
          <a data-testid="link" href="/">
            <span role="img" aria-label="camera">
              {" "}
              📸
            </span>{" "}
            Oh Snap!
          </a>
        </h2>
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
                  "navActive"
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
      </header>
      <section>
        <h1 data-testid="h1tag">
          {capitalizeFirstLetter(currentCategory.name)}
        </h1>
        <p>{currentCategory.description}</p>
        <ProjectList category={currentCategory.name} />
      </section>
    </div>
  );
}
