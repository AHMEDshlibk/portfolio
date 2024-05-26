import LoactionIconDark from "../../../assets/location/Name=icon-location, Size=24, Theme Mode=Dark.svg?react";
import LocationIconLight from "../../../assets/location/Name=icon-location, Size=24, Theme Mode=Light.svg?react";

import GithubIconDark from "../../../assets/social-media/Name=icon-github, Size=24, Theme Mode=Dark.svg?react";
import GithubIconLight from "../../../assets/social-media/Name=icon-github, Size=24, Theme Mode=Light.svg?react";
import TwitterIconDark from "../../../assets/social-media/Name=icon-twitter, Size=24, Theme Mode=Dark.svg?react";
import TwitterIconLight from "../../../assets/social-media/Name=icon-twitter, Size=24, Theme Mode=Light.svg?react";
import FigmaIconDark from "../../../assets/social-media/Name=icon-figma, Size=24, Theme Mode=Dark.svg?react";
import FigmaIconLight from "../../../assets/social-media/Name=icon-figma, Size=24, Theme Mode=Light.svg?react";

import { Container, Row, Col, Image } from "react-bootstrap";
import style from "./style.module.css";
const {
  landingContainer,
  image,
  information,
  locationPart,
  activePart,
  iconContainer,
  active,
  imageContainer,
  textContainer,
  socialMediaList,
} = style;

import UserImage from "../../../assets/photo/photo_2024-05-11_13-02-09.jpg";

import { useSelector } from "react-redux";

const Landing = () => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div className={landingContainer}>
      <Container>
        <Row>
          <Col lg="8" className={textContainer}>
            <h1 style={{ marginBottom: "8px", color: "var(--gray-900)" }}>
              Hi, I am Ahmed
            </h1>
            <p className="body-2 normal" style={{ color: "var(--gray-600)" }}>
              Is m a full stack developer React.js & Node.js with a focus on
              creating and occasionally designing exceptional digital
              experiences that are fast, accessible, visually appealing, and
              responsive. Even though I have been creating web applications for
              over 7 years, I still love it as if it was something new.
            </p>

            <div className={information}>
              <div className={locationPart}>
                <div className={iconContainer}>
                  {theme === "light" ? (
                    <LocationIconLight />
                  ) : (
                    <LoactionIconDark />
                  )}
                </div>
                <p
                  className="d-inline body-2 normal"
                  style={{ color: "var(--gray-600)" }}
                >
                  Soq Aljoomea, tripoli
                </p>
              </div>

              <div className={activePart}>
                <div className={iconContainer}>
                  <span className={active}></span>
                </div>
                <p
                  className="d-inline body-2 normal"
                  style={{ color: "var(--gray-600)" }}
                >
                  Available for new projects
                </p>
              </div>
            </div>

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
          </Col>
          <Col lg="4" className={imageContainer}>
            <Image className={image} src={UserImage} alt="user_image" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Landing;
