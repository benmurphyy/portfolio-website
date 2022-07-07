import { Col, Container, Row } from 'react-bootstrap';

import styles from './styles.scss';

//custom underline for the headers
function CustomLineBreaker() {
  return <hr className={styles.customLineBreaker}></hr>;
}

interface SectionHeaderProps extends React.HTMLProps<HTMLDivElement> {
  title: string;
  subtitle?: string;
  // controls whether the SectionHeader will be hidden on phones
  isHiddenOnPhone?: boolean;
}
/**
 * Header for a section of a page.
 * Consists of title and line breaker.
 */
export default function SectionHeader({
  title,
  subtitle,
  isHiddenOnPhone = false,
  // add extra classes to this header if needed
  className,
}: SectionHeaderProps) {
  return (
    <Container
      className={`${
        isHiddenOnPhone ? styles.isHiddenOnPhone : ''
      } py-2 ${className}`}
    >
      <Row>
        <Col className="align-items-center">
          <h1 className="display-6 mb-2 text-center">{title}</h1>
          {subtitle && <h5 className="text-center">{subtitle}</h5>}
          <CustomLineBreaker></CustomLineBreaker>
        </Col>
      </Row>
    </Container>
  );
}
