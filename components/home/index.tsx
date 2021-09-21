import React from "react";
import Style from "./style.module.scss";
import { ReactTypical } from "@deadcoder0904/react-typical";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGooglePlus,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

function HomeBanner() {
  return (
    <>
      <section id={Style.home_banner}>
        <div className={Style.container}>
          <p>Hi all, I am</p>
          <h1>TRẦN THỊ NGỌC DIỆU</h1>
          <div className={Style.animation_profile}>
            <span>I am</span>
            <ReactTypical
              steps={[
                "Flutter Developer 💖💖💖",
                1200,
                "FrontEnd Developer! 💖💖💖",
                2000,
                "QA 💖💖💖",
                1000,
              ]}
              loop={Infinity}
              wrapper="p"
            />
          </div>
          <div className={Style.icon_link}>
            <ul>
              <li>
                <Link href="https://www.facebook.com/ngocdieu.tran.9469">
                  <a>
                    <FontAwesomeIcon icon={faFacebook} size="sm" fixedWidth />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://www.facebook.com/ngocdieu.tran.9469">
                  <a>
                    <FontAwesomeIcon icon={faInstagram} size="sm" fixedWidth />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://www.facebook.com/ngocdieu.tran.9469">
                  <a>
                    <FontAwesomeIcon icon={faTwitter} size="sm" fixedWidth />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://www.facebook.com/ngocdieu.tran.9469">
                  <a>
                    <FontAwesomeIcon icon={faGooglePlus} size="sm" fixedWidth />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeBanner;
