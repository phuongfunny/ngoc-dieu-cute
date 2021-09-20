import React from "react";
import Style from "./style.module.scss";

function HomeBanner() {
  return (
    <>
      <section id={Style.home_banner}>
        <div className={Style.container}>
          <p>Hi all, I am</p>
          <h1>TRẦN THỊ NGỌC DIỆU</h1>
          <div className={Style.icon_link}></div>
        </div>
      </section>
    </>
  );
}

export default HomeBanner;
