import "./nav.scss";
import { Person, Mail } from "@material-ui/icons";

export default function Nav({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            portfolio.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>940-704-2282</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>blaine.curren@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

// For later use
// function Nav(props) {
//   const {
//     categories = [],
//     setCurrentCategory,
//     currentCategory,
//     contactSelected,
//     setContactSelected,
//   } = props;

//   useEffect(() => {
//     document.title = capitalizeFirstLetter(currentCategory.name);
//   }, [currentCategory]);

//   return (
//     <header className="flex-row px-1">
//       <h2>
//         <a data-testid="link" href="/">
//           <span role="img" aria-label="camera">
//             📸
//           </span>
//           Oh Snap!
//         </a>
//       </h2>
//       <nav>
//         <ul className="flex-row">
//           <li className="mx-2">
//             <a
//               data-testid="about"
//               href="#about"
//               onClick={() => setContactSelected(false)}
//             >
//               About me
//             </a>
//           </li>
//           <li className={`mx-2 ${contactSelected && "navActive"}`}>
//             <span onClick={() => setContactSelected(true)}>Contact</span>
//           </li>
//           {categories.map((category) => (
//             <li
//               className={`mx-1 ${
//                 currentCategory.name === category.name &&
//                 !contactSelected &&
//                 `navActive`
//               }`}
//               key={category.name}
//             >
//               <span
//                 onClick={() => {
//                   setCurrentCategory(category);
//                   setContactSelected(false);
//                 }}
//               >
//                 {capitalizeFirstLetter(category.name)}
//               </span>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Nav;
