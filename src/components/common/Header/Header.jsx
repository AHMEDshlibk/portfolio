import { useEffect, useState } from "react";

// icon
import LightIcon from "../../../assets/dark-light-mode-svg/Name=icon-light-mode, Size=24, Theme Mode=Light.svg?react";
import DarkIcon from "../../../assets/dark-light-mode-svg/Name=icon-dark-mode, Size=24, Theme Mode=Dark.svg?react";

import LightMenu from "../../../assets/mega-menu/Name=icon-menu, Size=24, Theme Mode=Light.svg?react";
import DarkMenu from "../../../assets/mega-menu/Name=icon-menu, Size=24, Theme Mode=Dark.svg?react";

import LightClose from "../../../assets/mega-menu/Name=icon-close, Size=24, Theme Mode=Light.svg?react";
import DarkClose from "../../../assets/mega-menu/Name=icon-close, Size=24, Theme Mode=Dark.svg?react";

// style
import { Container } from "react-bootstrap";
import style from "./style.module.css";
const {
  navbar,
  navbarContainer,
  links,
  button,
  icon,
  vr,
  ToggleButton,
  active,
  textShow,
  navContainer,
} = style;

// redux
import { changeTheme } from "../../../store/theme/themeSlice";
import { useDispatch } from "react-redux";

function Header() {
  const dispatch = useDispatch();
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    dispatch(changeTheme(theme));
  }, [dispatch, theme]);

  const changeThemeHandller = () => {
    if (theme === "light") {
      setTheme("dark");
    }
    if (theme === "dark") {
      setTheme("light");
    }
  };

  const [isActive, setIsActive] = useState(false);

  if (isActive === true) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  const navbarIcon = () => {
    if (theme === "light" && isActive === false) {
      return <LightMenu />;
    } else if (theme === "dark" && isActive === false) {
      return <DarkMenu />;
    } else if (theme === "light" && isActive === true) {
      return <LightClose />;
    } else if (theme === "dark" && isActive === true) {
      return <DarkClose />;
    }
  };

  return (
    <header className={navbar}>
      <Container className={navbarContainer}>
        <div style={{ zIndex: "10000" }}>
          <h1>{`<Ptf />`}</h1>
        </div>
        <div className={ToggleButton} onClick={() => setIsActive(!isActive)}>
          {navbarIcon()}
        </div>
        <nav id="nav" className={isActive ? active : ""}>
          <Container className={navContainer}>
            <ul>
              <li className={`${links} body-2 medium`}>
                <a href="#about" onClick={() => setIsActive(false)}>
                  About
                </a>
              </li>
              <li className={`${links} body-2 medium`}>
                <a href="#skills" onClick={() => setIsActive(false)}>
                  Skills
                </a>
              </li>
              <li className={`${links} body-2 medium`}>
                <a href="#works" onClick={() => setIsActive(false)}>
                  Works
                </a>
              </li>
              <li className={`${links} body-2 medium`}>
                <a href="#contact" onClick={() => setIsActive(false)}>
                  Contact
                </a>
              </li>
            </ul>
            <div className={`${vr} vr`}></div>
            <ul>
              <li className={`${links} body-2 medium`}>
                <p className={textShow}>Switch Theme</p>
                {theme === "light" ? (
                  <LightIcon onClick={changeThemeHandller} className={icon} />
                ) : (
                  <DarkIcon onClick={changeThemeHandller} className={icon} />
                )}
              </li>
              <li>
                <button className={`${button} rounded-4 body-2 medium`}>
                  Download CV
                </button>
              </li>
            </ul>
          </Container>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
