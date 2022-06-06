import { Container } from 'react-bootstrap';
import { animated, useSpring } from 'react-spring';

interface AnimatedQuoteProps {
  quoteText: string,
  quoteOrigin: string,
  variant: string,
}

//two variants - dark and light for font colour
function AnimatedQuote({quoteText, quoteOrigin, variant}: AnimatedQuoteProps) {
    const style = useSpring({
        from: {
            opacity: 0
        },
        opacity: 1
    });

    return variant === 'dark' ? (
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
export default AnimatedQuote;