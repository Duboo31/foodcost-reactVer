import { useState } from "react";
import styles from "../styles/About.module.css";

const About = () => {
  const [showDetail, setShowDetail] = useState(false);
  const openDetail = () => {
    setShowDetail((cur) => !cur);
  };

  const detailInfo = [
    {
      style: "detailInfo",
      text: "Name: Hyunwoo Kim",
    },
    {
      style: "detailInfo",
      text: "Email: duboo31@gmail.com",
    },
    {
      style: "detailInfo",
      text: "KaKao: zlwhs807@naver.com",
    },
  ];

  return (
    <section  className={styles.wrap}>
      <div onClick={openDetail} className={styles.headerInfo}>
        <div className={styles.img}></div>
        <div className={styles.clickBox}>
          <h4>Developer</h4>
          <div>Click Here</div>
        </div>
      </div>
        <div className={showDetail ? styles.detail : styles.hide}>
          {detailInfo.map(({ style, text }) => (
            <div className={styles[style]} key={text}>
              {text}
            </div>
          ))}
          <div className={styles.tagBox}>
            <a
              className={styles.aTag}
              rel="noopener noreferrer"
              href="https://github.com/Duboo31"
              target="_blank"
            >
              Github
            </a>
            <a
              className={styles.aTag}
              rel="noopener noreferrer"
              href="https://velog.io/@duboo"
              target="_blank"
            >
              Blog
            </a>
          </div>
        </div>
    </section>
  );
};

export default About;
