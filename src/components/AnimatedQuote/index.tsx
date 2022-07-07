import { motion } from 'framer-motion';
import { Container } from 'react-bootstrap';

import styles from './styles.scss';

export enum AnimatedQuoteVariants {
  DARK,
  LIGHT,
}

interface AnimatedQuoteProps {
  quoteText: string;
  quoteOrigin: string;
  variant?: AnimatedQuoteVariants;
}

// two variants - dark and light for font colour
// default is light
export default function AnimatedQuote({
  quoteText,
  quoteOrigin,
  variant = AnimatedQuoteVariants.LIGHT,
}: AnimatedQuoteProps) {
  return variant === AnimatedQuoteVariants.DARK ? (
    <Container>
      <motion.h1 className={styles.darkQuote}>{quoteText}</motion.h1>
      <motion.h4 className={styles.darkFooter}>
        &#8211;&nbsp;{quoteOrigin}
      </motion.h4>
    </Container>
  ) : (
    <Container>
      <motion.h1 className={styles.lightQuote}>{quoteText}</motion.h1>
      <motion.h4 className={styles.lightFooter}>
        &#8211;&nbsp;{quoteOrigin}
      </motion.h4>
    </Container>
  );
}
