import { Container, Row, Col } from "react-bootstrap";

//custom underline for the headers
function CustomLineBreaker() {
  return (
    <Container className="">
      <Row className="justify-content-center">
        <hr className="custom-line-breaker"></hr>
      </Row>
    </Container>
  );
}

//heading for subpages
export default function Heading({ title }: { title: string }) {
  return (
    <Container className="py-3">
      <Row>
        <Col>
          <h1 className="mb-2">{title}</h1>
          <CustomLineBreaker></CustomLineBreaker>
        </Col>
      </Row>
    </Container>
  );
}
