import React, { useState } from "react";
import About from "./components/about/About";
import Gallery from "./components/gallery/Gallery";
import Nav from "./components/nav/Nav";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu.jsx";

function App() {
  const [categories] = useState([
    {
      name: "commercial",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    { name: "portraits", description: "Portraits of people in my life" },
    { name: "food", description: "Delicious delicacies" },
    {
      name: "landscape",
      description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <About />
        <Gallery
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
          contactSelected={contactSelected}
          setContactSelected={setContactSelected}
        ></Gallery>

        <Contact />
      </div>
    </div>
  );
}

export default App;
