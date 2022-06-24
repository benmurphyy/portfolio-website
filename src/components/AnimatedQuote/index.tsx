import { Container } from 'react-bootstrap';
import { animated, useSpring } from '@react-spring/web';
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
  const style = useSpring({
    from: {
      opacity: 0,
    },
    opacity: 1,
  });

  return variant === AnimatedQuoteVariants.DARK ? (
    <Container>
      <animated.h1 style={style} className={styles.darkQuote}>
        {quoteText}
      </animated.h1>
      <animated.h4 style={style} className={styles.darkFooter}>
        - {quoteOrigin}
      </animated.h4>
    </Container>
  ) : (
    <Container>
      <animated.h1 style={style} className={styles.lightQuote}>
        {quoteText}
      </animated.h1>
      <animated.h4 style={style} className={styles.lightFooter}>
        - {quoteOrigin}
      </animated.h4>
    </Container>
  );
}
