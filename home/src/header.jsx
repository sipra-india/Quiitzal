import react from "react";
import "./header.css";

const Header = () => {
  return (
    <header>
      <h4>Quiitzal</h4>
      <nav>
        <ul>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
