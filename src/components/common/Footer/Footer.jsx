import CopyRightDark from "../../../assets/footer/Name=icon-copyright, Size=24, Theme Mode=Dark.svg?react";
import CopyRightLight from "../../../assets/footer/Name=icon-copyright, Size=24, Theme Mode=Light.svg?react";

import style from "./style.module.css";
const { footer, info } = style;

import { useSelector } from "react-redux";

const Footer = () => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div className={footer}>
      <div className={info}>
        {theme === "light" ? <CopyRightLight /> : <CopyRightDark />}
        <p className="body-2 normal">
          2023 | <span className="body-2 normal underline">coded</span> with by
          Ahmed Shlibek
        </p>
      </div>
    </div>
  );
};

export default Footer;
