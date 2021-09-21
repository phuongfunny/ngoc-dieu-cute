import { ReactTypical } from "@deadcoder0904/react-typical";
import {
  faFacebookF,
  faGooglePlus,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import Style from "./style.module.scss";

function HomeBanner() {
  return (
    <>
      <section className={Style.home_banner} id="home_banner">
        <div className={Style.container}>
          <p>Hi all, Tớ là</p>
          <h1>TRẦN THỊ NGỌC DIỆU</h1>
          <div className={Style.animation_profile}>
            <span>Một dev làm vì đam mê...</span>
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
                    <FontAwesomeIcon icon={faFacebookF} size="sm" fixedWidth />
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
          <div className={Style.mouse}>
            <div className={Style.mouse_btn}></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeBanner;
