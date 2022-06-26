/**
 * Icon component that comes with the ability to move to its new position wiht animation when it is moved in its parent container.
 */

import { MutableRefObject, useEffect, useLayoutEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

/**
 * Type which tracks position of a DOM node with the top and left keys.
 */
export interface Position {
  top: number;
  left: number;
}

/**
 * Prop types definition for the Icon component.
 */
type IconProps = {
  iconSvg: string;
  altText?: string;
  height?: number;
  width?: number;
  previousPositionFromParent?: Position;
  iconRef?: MutableRefObject<HTMLDivElement | null>;
  className?: string;
};

/**
 * Contains a div and a img displaying the icon.
 * The div component serves as the housing for the actual icon.
 * The div exact position is determined entirely by the parent container which contains
 * the Icon component.
 * When the position of the div changes, the icon will move (animated)
 * to the new position of Container component.
 *
 * @param iconSvg data URI of the SVG of the icon to render
 * @param previousPositionFromParent optional: manually controls the previous position of the Icon.
 * Useful when the Icon is not rendered in a similar arrangment (changing of parent layout etc),
 * which prevents the inbuilt previous position tracking from working.
 * @param altText optional: accessibility text
 * @param height optional: height of icon
 * @param width optional: width of icon
 */
export default function Icon({
  iconSvg,
  altText,
  height,
  width,
  previousPositionFromParent,
  iconRef,
  className,
}: IconProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const animationControls = useAnimation();

  // if previousPositionFromParent is given, then set previous position to be that, else
  // set it to be the top and left values from containerRef.current
  // containerRef would have the old HTMLDivElement in the previous render at this point,
  // thus we can use it to get out the previous position of the Icon.
  const previousPosition = previousPositionFromParent
    ? previousPositionFromParent
    : containerRef.current
    ? {
        top: containerRef.current.offsetTop,
        left: containerRef.current.offsetLeft,
      }
    : null;

  // set up the window resize listeners on Icon mount to move icon to its div housing position when window resized
  useEffect(() => {
    function moveIconSvgToCorrectPosition() {
      if (containerRef.current) {
        animationControls.set({
          top: containerRef.current.offsetTop,
          left: containerRef.current.offsetLeft,
        });
      }
    }
    window.addEventListener('resize', moveIconSvgToCorrectPosition);
    return () =>
      window.removeEventListener('resize', moveIconSvgToCorrectPosition);
  }, []);

  // This needs to run before any DOM paints can be performed, hence useLayoutEffect is the right choice here
  useEffect(() => {
    const newPosition = {
      top: containerRef.current!.offsetTop,
      left: containerRef.current!.offsetLeft,
    };
    if (previousPosition === null) {
      // first time being rendered, no need for any animation
      animationControls.set(newPosition);
      return;
    }
    // The icon SVG was in a previous position, need to move it with animation
    // set the SVG to its prv position, then just move it to the new position with animation
    animationControls.set(previousPosition);
    animationControls.start(newPosition);
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
      ref={containerRefCallback}
      style={{
        height: height,
        width: width,
      }}
      className={className}
    >
      <motion.img
        src={iconSvg}
        alt={altText + ' Icon'}
        style={{
          position: 'absolute',
          height: height,
          width: width,
        }}
        animate={animationControls}
        transition={{
          type: 'spring',
          duration: 0.44,
        }}
        className={className}
      />
    </div>
  );
}
