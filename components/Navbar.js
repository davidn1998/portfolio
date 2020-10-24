import React from "react";
import Link from "next/link";
import { Link as LinkAnim, animateScroll as scroll } from "react-scroll";

import styles from "../components/Navbar.module.css";

const Navbar = ({ homepage }) => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href="/">
            <a>HOME</a>
          </Link>
        </li>
        <li>
          {homepage ? (
            <LinkAnim to="portfolio" smooth={true}>
              <span>PORTFOLIO</span>
            </LinkAnim>
          ) : (
            <Link href="/#portfolio">
              <a>PORTFOLIO</a>
            </Link>
          )}
        </li>
        <li>
          <Link href="contact">
            <a>CONTACT</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
