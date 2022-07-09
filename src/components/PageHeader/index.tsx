import React from 'react';
import { Container } from 'react-bootstrap';

import styles from './styles.scss';

/**
 * Header component used for each page, consisting of a background image, with the header taking hup the whole height of the viewport.
 * Takes an innercomponent for its contents.
 */

interface HeaderProps {
  backgroundImage: string;
  children: React.ReactNode;
}

export default function PageHeader({ backgroundImage, children }: HeaderProps) {
  return (
    <Container
      fluid
      className={styles.headerContainer}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.content}>{children}</div>
    </Container>
  );
}
