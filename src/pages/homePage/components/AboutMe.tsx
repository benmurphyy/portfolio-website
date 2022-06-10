import { useSpring, animated } from "@react-spring/web";
import { forwardRef, ForwardedRef } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import potraitImage from 'src/assets/images/ben_photo.jpg';

//about me write up + picture
const AboutMe = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  const style = useSpring({
    from: {
      opacity: 0,
    },
    opacity: 1,
    config: {
      duration: 500,
    },
  });
  const AnimatedContainer = animated(Container);
  return (
    <AnimatedContainer fluid className="py-4" ref={ref} style={style}>
      <Row>
        <Col>
          <Image
            className="portrait"
            src={potraitImage}
            alt="portrait photo of myself"
          ></Image>
        </Col>
      </Row>
      <Row className="pt-4">
        <Col>
          <h3 className="text">
            I'm Ben, a year 2 student in the National University of Singapore
            (NUS), pursuing a Bachelor's degree (Hons) in Computer Science. I
            created this website to be a space for me to share my technical
            skills and industry experience, along with projects I've done.
            Thanks for taking a look, and feel free to connect with me!
          </h3>
        </Col>
      </Row>
    </AnimatedContainer>
  );
});

AboutMe.displayName = 'AboutMe';

export default AboutMe;
