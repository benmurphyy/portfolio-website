/**
 * Icon component that comes with the ability to move to its new position wiht animation when it is moved in its parent container.
 */

import { animated, useSpring } from '@react-spring/web';
import { MutableRefObject, useEffect, useLayoutEffect, useRef } from 'react';


/**
 * Type which tracks position of a DOM node with the top and left keys.
 */
interface Position {
  top: number;
  left: number;
}

/**
 * Prop types definition for the Icon component.
 */
type IconProps = {
  IconSvgComponent: React.ElementType;
  // accessibility text
  altText: string;
  // a ref containing a object that has SkillSortingCritiria as keys, and the refs to the corresponding icon housing refs as values
  height: number;
  width: number;
  // optional: manually controls the previous position of the Icon. Useful when the Icon is not rendered in a similar arrangment (changing of parent layout etc),
  // which prevents the inbuilt previous position tracking from working
  previousPositionFromParent?: Position;
  // optional: to give parent container access to the ref to the Icon, so it can get its position if needed
  iconRef?: MutableRefObject<HTMLDivElement>
};

/**
 * Contains a div and a IconSVG component.
 * The div component serves as the housing for the IconSVGComponent,
 * meaning it determines the position of the IconSVGComponent.
 * The div exact position is determined entirely by the parent container which contains
 * the Icon component.
 * When the position of the div changes, the IconSVGComponent will move (animated)
 * to the new position of Container component.
 */
export default function Icon({
  IconSvgComponent,
  altText,
  height,
  width,
  previousPositionFromParent,
  iconRef
}: IconProps) {
  const AnimatedIcon = animated(IconSvgComponent);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // if previousPositionFromParent is given, then set previous position to be that, else
  // set it to be the top and left values from containerRef.current
  // containerRef would have the old HTMLDivElement in the previous render at this point, 
  // thus we can store the old position of the SVG icon here
  const previousPosition = previousPositionFromParent ? previousPositionFromParent : containerRef.current
    ? {
        top: containerRef.current.offsetTop,
        left: containerRef.current.offsetLeft,
      }
    : null;

  const [svgStyle, api] = useSpring(() => ({
    top: 0,
    left: 0,
  }));

  // sets the position of IconSvgComponent without any animation. This is used for position initialization and window resizing
  function setSvgPosition(position: Position) {
    api.set(position);
  }

  // move the IconSvgComponent to a new position.
  function moveSvg(newPosition: Position) {
    api.start(newPosition);
  }

  // set up the window resize listeners to move icon to its div housing position when window resized
  useEffect(() => {
    function moveIconSvgToCorrectPosition() {
      if (containerRef.current) {
        setSvgPosition({
          top: containerRef.current.offsetTop,
          left: containerRef.current.offsetLeft,
        });
      }
    }
    window.addEventListener('resize', moveIconSvgToCorrectPosition);
    return () =>
      window.removeEventListener('resize', moveIconSvgToCorrectPosition);
  });

  // This needs to run before any DOM paints can be performed, hence useLayoutEffect is the right choice here
  useLayoutEffect(() => {
    const newPosition = {
      top: containerRef.current!.offsetTop,
      left: containerRef.current!.offsetLeft,
    };
    if (previousPosition === null) {
      // first time being rendered, no need for any animation
      setSvgPosition(newPosition);
      return;
    }
    // The icon SVG was in a previous position, need to move it with animation
    // set the SVG to its prv position, then just move it to the new position with animation
    setSvgPosition(previousPosition);
    moveSvg(newPosition);
  });

  // callback function to pass as ref to the div container 
  // so that both containerRef and iconRef can contain the div container in their current properties
  function containerRefCallback(element: HTMLDivElement) {
    if (iconRef) {
      iconRef.current = element;
    }
    containerRef.current = element;
  }

  return (
    <div
      className="iconHousing"
      ref={containerRefCallback}
      style={{
        height: height,
        width: width,
      }}
    >
      <AnimatedIcon
        alt={altText + ' Icon'}
        className="skillIcon"
        style={{
          position: 'absolute',
          top: svgStyle.top,
          left: svgStyle.left,
          height: height,
          width: width,
        }}
      />
    </div>
  );
}
