import React, { useEffect, useState } from "react";
import Footer from "../footer/footer";
import Style from "./style.module.scss";
import Link from "next/link";

function Header() {
  const [scroll, setScroll] = useState(false);
  const listenScrollEvent = (event: any) => {
    if (window.scrollY >= 70) {
      return setScroll(true);
    } else {
      return setScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);
  return (
    <>
      <header
        className={Style.header_page}
        style={
          scroll
            ? { display: "block" }
            : { display: "none", position: "static" }
        }
      >
        <nav className={Style.nav_container}>
          <div className={Style.logo}>
            <h1>NGỌC DIỆU</h1>
          </div>
          <div className={Style.navbar_collapse}>
            <ul className={Style.navbar_nav}>
              <li className={Style.item}>
                <Link href="#home_banner">
                  <a>HOME</a>
                </Link>
              </li>
              <li className={Style.item}>
                <Link href="/">
                  <a>ABOUT</a>
                </Link>
              </li>
              <li className={Style.item}>
                <Link href="/">
                  <a>SERVICES</a>
                </Link>
              </li>
              <li className={Style.item}>
                <Link href="/">
                  <a>PORTFOLIO</a>
                </Link>
              </li>
              <li className={Style.item}>
                <Link href="/">
                  <a>CONTACT</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
