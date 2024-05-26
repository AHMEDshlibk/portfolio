import TitleSection from "../../common/TitleSection/TitleSection";
import DiscriptionSection from "../../common/DiscriptionSection/DiscriptionSection";

import CallIconLight from "../../../assets/contact/Name=icon-phone, Size=24, Theme Mode=Light.svg?react";
import CallIconDark from "../../../assets/contact/Name=icon-phone, Size=24, Theme Mode=Dark.svg?react";
import InboxIconLight from "../../../assets/contact/Name=icon-inbox, Size=24, Theme Mode=Light.svg?react";
import InboxIconDark from "../../../assets/contact/Name=icon-inbox, Size=24, Theme Mode=Dark.svg?react";
import CopyIconLight from "../../../assets/contact/Name=icon-copy, Size=24, Theme Mode=Light.svg?react";
import CopyIconDark from "../../../assets/contact/Name=icon-copy, Size=24, Theme Mode=Dark.svg?react";

import GithubIconDark from "../../../assets/social-media/Name=icon-github, Size=24, Theme Mode=Dark.svg?react";
import GithubIconLight from "../../../assets/social-media/Name=icon-github, Size=24, Theme Mode=Light.svg?react";
import TwitterIconDark from "../../../assets/social-media/Name=icon-twitter, Size=24, Theme Mode=Dark.svg?react";
import TwitterIconLight from "../../../assets/social-media/Name=icon-twitter, Size=24, Theme Mode=Light.svg?react";
import FigmaIconDark from "../../../assets/social-media/Name=icon-figma, Size=24, Theme Mode=Dark.svg?react";
import FigmaIconLight from "../../../assets/social-media/Name=icon-figma, Size=24, Theme Mode=Light.svg?react";

import { Container } from "react-bootstrap";
import style from "./style.module.css";
const { getInTouchContainer, contactContainer, callMe, socialMediaList } =
  style;

import { useSelector } from "react-redux";

const GetInTouch = () => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div className={getInTouchContainer} id="contact">
      <Container>
        <TitleSection>Get in touch</TitleSection>
        <DiscriptionSection>
          Whats next? Feel free to reach out to me if youre looking for a
          developer, have a query, or simply want to connect.
        </DiscriptionSection>
        <div className={contactContainer}>
          <div className={callMe}>
            {theme === "light" ? <InboxIconLight /> : <InboxIconDark />}
            <h2 className="heading-h2">reachsagarshah@gmail.com</h2>
            {theme === "light" ? <CopyIconLight /> : <CopyIconDark />}
          </div>
          <div className={callMe}>
            {theme === "light" ? <CallIconLight /> : <CallIconDark />}
            <h2 className="heading-h2">+91 8980500565</h2>
            {theme === "light" ? <CopyIconLight /> : <CopyIconDark />}
          </div>
          <p className="body-2 normal">
            You may also find me on these platforms!
          </p>
          <ul className={socialMediaList}>
            <li>
              {theme === "light" ? <GithubIconLight /> : <GithubIconDark />}
            </li>
            <li>
              {theme === "light" ? <TwitterIconLight /> : <TwitterIconDark />}
            </li>
            <li>
              {theme === "light" ? <FigmaIconLight /> : <FigmaIconDark />}
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default GetInTouch;
