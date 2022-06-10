import { Container, Row, Col } from "react-bootstrap";
import { AnimatedGreeting } from "src/pages/homePage/components/AnimatedGreeting";
import homepageBackground from 'src/assets/images/homepage_background-min.jpg';

//header containing the background image and initial greeting
export default function Header() {
  return (
    <Container
      fluid
      className="h-100 homepage-background p-0"
      style={{ backgroundImage: homepageBackground }}
    >
      <Row className="m-0 h-90 align-items-center justify-content-center">
        <Col>
          <AnimatedGreeting />
        </Col>
      </Row>
    </Container>
  );
}
