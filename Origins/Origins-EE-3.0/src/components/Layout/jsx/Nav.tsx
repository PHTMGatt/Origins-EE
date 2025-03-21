// src/components/Layout/jsx/Nav.tsx
import styles from "../css/Nav.module.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className={styles.navContainer}>
      <ul>
        <li><Link to="/">Main Guide</Link></li>
        <li><Link to="/staffs/ice">Ice Staff</Link></li>
        <li><Link to="/staffs/fire">Fire Staff</Link></li>
        <li><Link to="/staffs/wind">Wind Staff</Link></li>
        <li><Link to="/staffs/lightning">Lightning Staff</Link></li>
      </ul>
    </nav>
  );
};