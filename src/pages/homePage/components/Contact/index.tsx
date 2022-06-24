import { ForwardedRef, forwardRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SectionHeader from 'src/components/SectionHeader';
import { contacts, downloads } from 'src/pages/homePage/constants';
import DownloadIcon from 'src/assets/icons/contact/download/download.svg';
import styles from './styles.scss';
import Icon from 'src/components/Icon';

//to return specific contact icon
function ContactIconSelector({
  className,
  IconSVGComponent,
}: {
  className: string;
  IconSVGComponent: React.ElementType;
}) {
  return <IconSVGComponent className={className} />;
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
                IconSVGComponent={contact.icon}
              />
            </a>
          </Col>
        ))}
      </Row>
      <Row className="my-4 justify-content-evenly">
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
              <Icon
                IconSvgComponent={DownloadIcon}
                className={styles.documentDownloadIcon}
                altText={`Download ${document.name}`}
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
