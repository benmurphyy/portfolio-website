import { useSpring, animated } from "@react-spring/web";

export default function AnimatedGreeting() {
  const style = useSpring({
    from: {
      y: -window.innerHeight / 2,
    },
    y: 0,
    config: {
      bounce: 1,
      tension: 600,
      friction: 13,
    },
  });
  return (
    <animated.h1 className="greeting-text" style={style}>
      Welcome!
    </animated.h1>
  );
}
