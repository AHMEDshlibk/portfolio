import TitleSection from "../../common/TitleSection/TitleSection";
import DiscriptionSection from "../../common/DiscriptionSection/DiscriptionSection";

import LinkDark from "../../../assets/link/Name=icon-external-link, Size=24, Theme Mode=Dark.svg?react";
import LinkLight from "../../../assets/link/Name=icon-external-link, Size=24, Theme Mode=Light.svg?react";

import { Container, Row, Col, Image } from "react-bootstrap";
import style from "./style.module.css";
const { workConatiner, projectContainer, view, img, info, skillsContainer } =
  style;

import Data from "../../../data/workData.json";
const { projects } = Data;

import { useSelector } from "react-redux";

const Work = () => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div className={workConatiner} id="works">
      <Container>
        <TitleSection>Work</TitleSection>
        <DiscriptionSection>
          Some of the noteworthy projects I have built:
        </DiscriptionSection>
        {projects.map((project) => (
          <Row className={projectContainer} key={project.id}>
            <Col className={view} lg={6}>
              <Image src={project.image} className={img} />
            </Col>
            <Col className={info} lg={6}>
              <h4 className="subtitle semibold">{project.name}</h4>
              <p className="body-2 normal">{project.discription}</p>
              <div className={skillsContainer}>
                {project.skills.map((skill, index) => (
                  <span key={index} className="body-3 medium">
                    {skill}
                  </span>
                ))}
              </div>
              {theme === "light" ? <LinkLight /> : <LinkDark />}
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default Work;
