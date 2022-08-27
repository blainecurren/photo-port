import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import ProjectList from "../projectList/ProjectList";
import scss from "./gallery.scss";

export default function Gallery(props) {
  
  const { currentCategory } = props;
  return (
    <div className="portfolio">
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
