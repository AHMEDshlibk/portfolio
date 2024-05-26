import TitleSection from "../../common/TitleSection/TitleSection";

import UserImage from "../../../assets/photo/photo_2024-05-11_13-02-09.jpg";

import { Container, Row, Col, Image } from "react-bootstrap";
import style from "./style.module.css";
const { aboutContainer, listDetails, imageContainer } = style;

const About = () => {
  return (
    <div className={aboutContainer} id="about">
      <TitleSection>About me</TitleSection>
      <Container style={{ marginTop: "32px" }}>
        <Row>
          <Col lg="6" className={imageContainer}>
            <Image
              src={UserImage}
              style={{ width: "400px", maxWidth: "100%" }}
            />
          </Col>
          <Col lg="6">
            <h3 className="heading-h3 semibold">
              Curious about me? Here you have it:
            </h3>
            <p className="body-2 normal">
              Im a passionate, self-proclaimed designer who specializes in full
              stack development (React.js & Node.js). I am very enthusiastic
              about bringing the technical and visual aspects of digital
              products to life. User experience, pixel perfect design, and
              writing clear, readable, highly performant code matters to me.
            </p>
            <p className="body-2 normal">
              I began my journey as a web developer in 2015, and since then, Ive
              continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way.
              Now, in my early thirties, 7 years after starting my web
              development journey, Im building cutting-edge web applications
              using modern technologies such as Next.js, TypeScript, Nestjs,
              Tailwindcss, Supabase and much more.
            </p>
            <p className="body-2 normal">
              I am very much a progressive thinker and enjoy working on products
              end to end, from ideation all the way to development.
            </p>
            <p className="body-2 normal">
              When Im not in full-on developer mode, you can find me hovering
              around on twitter or on indie hacker, witnessing the journey of
              early startups or enjoying some free time. You can follow me on
              Twitter where I share tech-related bites and build in public, or
              you can follow me on GitHub.
            </p>
            <p className="body-2 normal">Finally, some quick bits about me.</p>
            <div className={listDetails}>
              <p className="body-2 normal">B.E. in Computer Engineering</p>
              <p className="body-2 normal">Avid learner</p>

              <p className="body-2 normal">Full time freelancer</p>
              <p className="body-2 normal">Aspiring indie hacker</p>
            </div>
            <p className="body-2 normal">
              One last thing, Im available for freelance work, so feel free to
              reach out and say hello! I promise I dont bite
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
