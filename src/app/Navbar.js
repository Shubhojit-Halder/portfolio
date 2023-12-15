"use client";

import styles from "./pages/styles/Navbar.module.css";
import Link from "next/link";
// import {useScroll} from "next/router";
import { usePathname } from "next/navigation";

const Navbar = () => {
  // const scroll = useScroll();
  const pathname = usePathname();
  return (
    <main className={styles.main}>
      <div className={styles.nav}>
        <ul className={styles.nav_ul}>
          <Link
            href={"#about"}
            className={`link ${pathname === "#about" ? "active" : ""}`}
          >
            <li>About</li>
          </Link>
          <Link
            href={"#resume"}
            className={`link ${pathname === "#resume" ? "active" : ""}`}
          >
            <li>Resume</li>
          </Link>

          <Link
            href={"#projects"}
            className={`${pathname === "#projects" ? "active" : ""}`}
          >
            <li>Projects</li>
          </Link>
          <Link
            href={"#contact"}
            className={`${pathname === "#projects" ? "active" : ""}`}
          >
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </main>
  );
};

export default Navbar;
