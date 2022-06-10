import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import Heading from "src/pages/homePage/components/CustomLineBreaker";
import quickLinks from 'src/assets/data/quick_links.json';

export default function QuickLinks() {
  const navigate = useNavigate();

  function quickLinkTrigger(quickLink: {
    name: string;
    path: string;
    buttonColor: string;
  }) {
    navigate(quickLink.path);
  }
  return (
    <Container fluid className="pb-4 px-4 background-light-green">
      <Heading title="Quick Links" />
      <Container className="d-grid gap-2 d-sm-block">
        {quickLinks.map((quickLink) => (
          <Button
            className="quick-link-button mx-1"
            key={quickLink.name}
            style={{ backgroundColor: quickLink.buttonColor }}
            onClick={() => quickLinkTrigger(quickLink)}
          >
            {quickLink.name}
          </Button>
        ))}
      </Container>
    </Container>
  );
}
