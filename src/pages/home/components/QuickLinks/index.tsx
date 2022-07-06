import { Button, Col, Container, Row } from 'react-bootstrap';
import SectionHeader from 'src/components/SectionHeader';
import { quickLinks } from 'src/constants';

import styles from './styles.scss';

export default function QuickLinks() {
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
                className={`${styles.button} w-100`}
                style={{ backgroundColor: quickLink.buttonColor }}
                href={quickLink.path}
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
