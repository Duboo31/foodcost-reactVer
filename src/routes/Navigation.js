import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import styles from "../styles/Navigation.module.css";
import "../styles/Navigation.css";
import About from "../components/About";

const Navigation = () => {
  const [isMobileActive, setIsMobileActive] = useState(false);
  const mobileBtActive = () => {
    setIsMobileActive((cur) => !cur);
  }
  const mobileBtnClick = (event) => {
    if(event.target.innerText === "재료 추가하기" || event.target.innerText === "사용방법" || event.target.innerText === "원가 계산기") {
      setIsMobileActive((cur) => !cur);
    }
  }

  const links = [
    {
      path: "/",
      label: "사용방법",
      exact: "true",
      end: "true",
    },
    {
      path: "/ingredient",
      label: "재료 추가하기",
      exact: "false",
      end: "false",
    },
    {
      path: "/foodCost",
      label: "원가 계산기",
      exact: "false",
      end: "false",
    },
  ];
  return (
    <div className={styles.wrap}>
      <section className={isMobileActive ? styles.navContainer : `${styles.navContainer} ${styles.showNav}`}>
        <div>
          <h1 className={styles.logo}>FOOCO</h1>
          <nav>
            <ul>
              {links.map(({ path, label, exact, end }) => (
                <li key={label}>
                  <NavLink onClick={mobileBtnClick} to={path} exact={exact} end={end}>
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <About />
        <div onClick={mobileBtActive} className={isMobileActive ? styles.mobile_menu : `${styles.mobile_menu} ${styles.mobileClick}`}>
          <div className={styles.bar}></div>
        </div>
      </section>
      <section className={styles.mainContents}>
        <Outlet />
      </section>
    </div>
  );
};

export default Navigation;
