import { RefObject, useEffect, useState } from 'react';

// used to determine when to use observer options short or long
export const SUBPAGE_WINDOW_RATIO = 9 / 5;

//two different observer options for short elements (smaller than 2x of viewport), and long elements (double of viewport)
export const observerOptionsDefaultShort: IntersectionObserverInit = {
  rootMargin: '0px',
  threshold: 0.5,
};

export const observerOptionsDefaultLong: IntersectionObserverInit = {
  rootMargin: '0px',
  threshold: 0.1,
};

// observer options for the main nav bar, controls when the subnavbar will be hidden upon scrolling away from the mainnavbar
const mainNavbarObserverOptions = {
  rootMargin: '0px',
  threshold: 0.1,
};

/**
 * Controls the visibility of the the SubNavbar.
 * 1. When mainNavbar is no longer visible, then the subNavbar appears.
 * 2. When the user has not scrolled for a duration of time, the SubNavbar disappears.
 *    It reappears when the user scrolls again.
 * @param mainNavbarRef
 * @returns react state variable indicating if the subNavState should be visible.
 */
export function useVisibilityController(
  mainNavbarRef: RefObject<HTMLDivElement>
) {
  const [isSubNavbarVisible, setIsSubNavbarVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsSubNavbarVisible(!entry.isIntersecting),
      mainNavbarObserverOptions
    );
    observer.observe(mainNavbarRef.current!);
    //to avoid ref change warning
    const refCur = mainNavbarRef.current!;
    return () => observer.unobserve(refCur);
  });

  return isSubNavbarVisible;
}
