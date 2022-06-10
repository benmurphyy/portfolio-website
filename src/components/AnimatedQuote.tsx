import { Container } from 'react-bootstrap';
import { animated, useSpring } from '@react-spring/web';

export enum AnimatedQuoteVariants {
  DARK,
  LIGHT
}

interface AnimatedQuoteProps {
  quoteText: string,
  quoteOrigin: string,
  variant?: AnimatedQuoteVariants,
}

// two variants - dark and light for font colour
// default is light
export default function AnimatedQuote({quoteText, quoteOrigin, variant = AnimatedQuoteVariants.LIGHT}: AnimatedQuoteProps) {
    const style = useSpring({
        from: {
            opacity: 0
        },
        opacity: 1
    });

    return variant === AnimatedQuoteVariants.DARK ? (
        <Container>
            <animated.h1 style={style} className="fw-bold text-dark text-shadow">
                {quoteText}
            </animated.h1>
            <animated.h2 style={style} className="text-dark text-shadow">
                - {quoteOrigin}
            </animated.h2>
        </Container>
    ) :
        (
            <Container>
                <animated.h1 style={style} className="fw-bold text-light text-shadow">
                    {quoteText}
                </animated.h1>
                <animated.h2 style={style} className="text-light">
                    - {quoteOrigin}
                </animated.h2>
            </Container>
        );
}