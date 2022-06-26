import { Container, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import SectionHeader from 'src/components/SectionHeader';
import quickLinks from 'src/assets/data/quick_links.json';

export default function QuickLinks() {
  const navigate = useNavigate();

  function quickLinkTrigger(quickLink: {
    name: string;
    path: string;
    buttonColor: string;
  }) {
    console.log(quickLink.path);
    navigate(quickLink.path);
  }
  return (
    <Container fluid className="pb-4 px-4">
      <SectionHeader title="Quick Links" />
      <Container className="">
        <Row className="justify-content-center">
          {quickLinks.map((quickLink) => (
            <Col
              className="d-flex justify-content-center align-items-stretch col-12 col-sm-3 col-xl-2 gy-1 gx-2"
              key={quickLink.name}
            >
              <Button
                className="w-100"
                style={{ backgroundColor: quickLink.buttonColor }}
                onClick={() => quickLinkTrigger(quickLink)}
              >
                {quickLink.name}
              </Button>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}
