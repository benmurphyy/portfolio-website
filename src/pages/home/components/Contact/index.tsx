import { ForwardedRef, forwardRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import downloadIcon from 'src/assets/icons/contact/download/download.svg';
import SectionHeader from 'src/components/SectionHeader';
import { contacts, downloads } from 'src/pages/home/constants';

import styles from './styles.scss';

//to return specific contact icon
function ContactIconSelector({
  className,
  iconSvg,
}: {
  className: string;
  iconSvg: string;
}) {
  return <img src={iconSvg} className={className} />;
}

const Contact = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <Container ref={ref}>
      <SectionHeader title="Contact" />
      <Row className="my-2 justify-content-center">
        {contacts.map((contact) => (
          <Col
            className="d-flex g-0 justify-content-center align-items-center col-xl-2"
            key={contact.name}
          >
            <a href={contact.link} target="_blank" rel="noreferrer">
              <ContactIconSelector
                className={styles.contactIcon}
                iconSvg={contact.icon}
              />
            </a>
          </Col>
        ))}
      </Row>
      <Row className="my-4 justify-content-center">
        {downloads.map((document) => (
          <Col
            className="d-flex flex-column align-items-center col-sm-4 col-xl-3"
            key={document.name}
          >
            <a
              className={styles.documentDownloadLink}
              href={document.file}
              target="_blank"
              rel="noreferrer"
              download
            >
              <h4 className="text-center">{document.name}</h4>
              <img
                src={downloadIcon}
                className={styles.documentDownloadIcon}
                alt={`Download ${document.name}`}
              />
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  );
});

Contact.displayName = 'Contact';

export default Contact;
