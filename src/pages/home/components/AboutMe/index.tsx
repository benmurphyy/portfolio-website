/* eslint-disable react/no-unescaped-entities */
import { ForwardedRef, forwardRef } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import potraitImage from 'src/assets/images/ben_photo.jpg';
import SectionHeader from 'src/components/SectionHeader';

import styles from './styles.scss';

//about me write up + picture
const AboutMe = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <Container fluid className="" ref={ref}>
      <SectionHeader title="About Me" isHiddenOnPhone />
      <Row className="pt-4">
        <Col className="d-flex justify-content-center">
          <Image
            className={styles.portraitImage}
            src={potraitImage}
            alt="portrait photo of Ben Murphy"
          ></Image>
        </Col>
      </Row>
      <Row className="pt-4 justify-content-center">
        <Col className="align-items-center" lg={7} xl={6}>
          <p className="fs-4 text-center">
            I'm Ben, a final year student in the National University of
            Singapore (NUS), pursuing a Bachelor's degree (Hons) in Computer
            Science. I created this website to be a space for me to share my
            technical skills and industry experience, along with projects I've
            done. Thanks for taking a look, and feel free to connect with me!
          </p>
        </Col>
      </Row>
    </Container>
  );
});

AboutMe.displayName = 'AboutMe';

export default AboutMe;
