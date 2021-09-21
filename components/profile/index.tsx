import {
  faGraduationCap,
  faLaptopHouse,
  faMailBulk,
  faMapMarkedAlt,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Progress, Row } from "antd";
import React from "react";
import Style from "./style.module.scss";
import Image from "next/dist/client/image";
import Avatar from "../../public/images/avatar.jpg";

function Profile() {
  return (
    <>
      <section id={Style.profile}>
        <div className="container">
          <Row>
            <Col span={24} className={Style.title}>
              <h1>ABOUT ME</h1>
              <div className={Style.line_bottom}></div>
            </Col>
          </Row>
          <Row className={Style.content}>
            <Col span={8}>
              <h2>Ngọc Diệu</h2>
              <p style={{ color: "#565353", fontSize: "1.1em" }}>
                Xin chào mọi người! Mình giới thiệu một ít về mình nè... Mình là
                một người khá là vui vẻ và hòa đồng với mọi người, đặc biệt là
                mình hát cũng khá là oke hihi 💖💖💖 (đấy là người yêu mình nhận
                xét), mình cũng là một người con gái làm việc với niềm đam mê
                mảnh liệt.
                <br /> Công việc của mình thì khá là nhiều thứ, thứ gì cũng biết
                một chút ít... hì hì <br /> Và mình có biệt danh là{" "}
                <span style={{ color: "#d23d57", fontWeight: 600 }}>
                  Diệu Cute Phô Mai Que 💖💖💖
                </span>
              </p>
              <h5>
                <FontAwesomeIcon icon={faMapMarkedAlt} size="1x" fixedWidth />
                <span className={Style.sub_title}>
                  Duy Châu, Duy Xuyên, Quảng Nam
                </span>
              </h5>
              <h5>
                <FontAwesomeIcon icon={faPhoneVolume} size="1x" fixedWidth />
                <span className={Style.sub_title}>0396804567</span>
              </h5>
              <h5>
                <FontAwesomeIcon icon={faMailBulk} size="1x" fixedWidth />
                <span className={Style.sub_title}>chidieu4134@gmail.com</span>
              </h5>
              <h5>
                <FontAwesomeIcon icon={faLaptopHouse} size="1x" fixedWidth />
                <span className={Style.sub_title}>SNT Solutions</span>
              </h5>
              <h5>
                <FontAwesomeIcon icon={faGraduationCap} size="1x" fixedWidth />
                <span className={Style.sub_title}>Đại Học Quy Nhơn</span>
              </h5>
            </Col>
            <Col span={8} className={Style.col_avatar}>
              <div className={Style.avatar}>
                <Image
                  src={Avatar}
                  width={320}
                  height={320}
                  alt="Diệu cute nè!"
                />
              </div>
            </Col>
            <Col span={8} className={Style.col_skill}>
              <div className={Style.professional}>
                <h2>Kĩ Năng Professional hihi</h2>
                <p style={{ color: "#565353", fontSize: "1.1em" }}>
                  Và đây là một số kĩ năng của mình nè...!!! 🚀🚀🚀
                </p>
                <div></div>
                <div className={Style.progress_skill}>
                  <h5>HTML, CSS</h5>
                  <Progress percent={90} />
                  <h5>JavaScript</h5>
                  <Progress percent={70} />
                  <h5>ReactJS</h5>
                  <Progress percent={70} />
                  <h5>Flutter</h5>
                  <Progress percent={90} />
                  <h5>English</h5>
                  <Progress percent={100} />
                </div>
                <h2 style={{ borderTop: "1px solid #000", marginTop: "30px" }}>
                  Kĩ Năng Bla Bla
                </h2>
                <div className={Style.progress_skill}>
                  <h5>Hát Hò</h5>
                  <Progress percent={100} />
                  <h5>TikToker</h5>
                  <Progress percent={100} />
                  <h5>Thơ Ngang</h5>
                  <Progress percent={100} />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}

export default Profile;
