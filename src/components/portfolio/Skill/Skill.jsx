import data from "../../../data/workData.json";
const { skills } = data;

import TitleSection from "../../common/TitleSection/TitleSection";
import DiscriptionSection from "../../common/DiscriptionSection/DiscriptionSection";

import { Container, Row, Col } from "react-bootstrap";
import style from "./style.module.css";
const { skillsContainer, skillDataContainer, imgContainer } = style;

const Skill = () => {
  return (
    <div className={skillsContainer} id="skills">
      <Container>
        <TitleSection>Skills</TitleSection>
        <DiscriptionSection>
          The skills, tools and technologies I am really good at:
        </DiscriptionSection>
        <Row className={skillDataContainer}>
          {skills.map((skill) => (
            <Col lg={2} xs={4} sm={3} key={skill.id}>
              <div className={imgContainer}>
                <img
                  src={skill.img}
                  alt={skill.title}
                  style={{ height: "64px" }}
                />
              </div>
              <h4 className="body-1">{skill.title}</h4>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Skill;
