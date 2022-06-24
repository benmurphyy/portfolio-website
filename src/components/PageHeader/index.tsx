import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './styles.scss';

/**
 * Header component used for each page, consisting of a background image, with the header taking hup the whole height of the viewport.
 * Takes an innercomponent for its contents
 * also this header does not rerender if no props changes, since it is a minimal component, and we dont want unecessary slowdowns in performance.
 */

interface HeaderProps {
  backgroundImage: string;
  children: React.ReactNode;
}

export default function PageHeader({ backgroundImage, children }: HeaderProps) {
  return (
    <Container
      fluid
      className={`h-100 p-0 ${styles.headerContainer}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Row className="h-100 align-items-center justify-content-center m-0">
        <Col>{children}</Col>
      </Row>
    </Container>
  );
}
