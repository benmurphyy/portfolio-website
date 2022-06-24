import { Container, Row, Col } from 'react-bootstrap';
import styles from './styles.scss';

//custom underline for the headers
function CustomLineBreaker() {
  return <hr className={styles.customLineBreaker}></hr>;
}

/**
 * Header for a section of a page.
 * Consists of title and line breaker.
 */
export default function SectionHeader({ title }: { title: string }) {
  return (
    <Container className="py-3">
      <Row>
        <Col className="align-items-center">
          <h1 className="mb-2 text-center">{title}</h1>
          <CustomLineBreaker></CustomLineBreaker>
        </Col>
      </Row>
    </Container>
  );
}
