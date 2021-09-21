import Link from "next/link";
import React, { useEffect, useState } from "react";
import Style from "./style.module.scss";

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
            ? {
                display: "block",
              }
            : { display: "none" }
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
                  <a>Cute</a>
                </Link>
              </li>
              <li className={Style.item}>
                <Link href="/#footer">
                  <a>Thông Tin</a>
                </Link>
              </li>
              <li className={Style.item}>
                <Link href="/">
                  <a>Công Việc</a>
                </Link>
              </li>
              <li className={Style.item}>
                <Link href="/">
                  <a>Hình Ảnh</a>
                </Link>
              </li>
              <li className={Style.item}>
                <Link href="/">
                  <a>Liên Hệ</a>
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
