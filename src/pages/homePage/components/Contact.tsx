import { ForwardedRef, forwardRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Heading from "src/pages/homePage/components/CustomLineBreaker";
import { contacts, downloads } from "src/pages/homePage/constants";
import DownloadIcon from 'src/assets/icons/download/download.svg';

//to return specific contact icon
function ContactIconSelector({ IconSVGComponent }: { IconSVGComponent: React.ElementType}) {
  return <IconSVGComponent />;
}

const Contact = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <Container fluid ref={ref}>
      <Heading title="Contact" />
      <Row>
        {contacts.map((contact) => (
          <Col className="p-0" key={contact.name}>
            <a href={contact.link} target="_blank" rel="noreferrer">
              <Container className="contact-icon p-0">
                <ContactIconSelector IconSVGComponent={contact.icon} />
              </Container>
            </a>
          </Col>
        ))}
      </Row>
      <Row className="p-4 justify-content-evenly">
        {downloads.map((document) => (
          <Col className="p-0 m-2 col-sm-4 col-xl-3" key={document.name}>
            <a
              className="document-download-link"
              href={document.link}
              target="_blank"
              rel="noreferrer"
              download
            >
              <Container className="p-1 rounded-3 download-document-container">
                <Row>
                  <Col>
                    <h4>{document.name}</h4>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Container className="download-document-icon">
                      <DownloadIcon />
                    </Container>
                  </Col>
                </Row>
              </Container>
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  );
});

Contact.displayName = "Contact";

export default Contact;
