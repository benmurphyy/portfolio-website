/**
 * custom sub nab bar to be used in pages wherein this subnav bar appears and stays at top of page only when user scrolls past the main navbar
 * props:
 * 1) map containing page names as keys, and their refs as their value
 * 2) animated prop - whether we want this navbar animated or not
 * 3) observer options object to control intersection observer settings
 * 4) forwardRef is used so that the parent component that contains this subnavbar can reference it
 *
 */
import { useEffect, useRef, RefObject, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Nav, Navbar } from 'react-bootstrap';

// used to determine when to use observer options short or long
const SUBPAGE_WINDOW_RATIO = 9 / 5;

//two different observer options for short elements (smaller than 2x of viewport), and long elements (double of viewport)
const observerOptionsDefaultShort: IntersectionObserverInit = {
  rootMargin: '0px',
  threshold: 0.5,
};

const observerOptionsDefaultLong: IntersectionObserverInit = {
  rootMargin: '0px',
  threshold: 0.1,
};

// observer options for the main nav bar, controls when the subnavbar will be hidden upon scrolling away from the mainnavbar
const mainNavbarObserverOptions = {
    rootMargin: '0px',
    threshold: 0.1
};

interface SubNavbarProps {
  subPageRefs: Map<string, RefObject<HTMLDivElement>>;
  isAnimated?: boolean;
  observerOptionsShort?: IntersectionObserverInit;
  observerOptionsLong?: IntersectionObserverInit;
  subNavbarRef: RefObject<HTMLDivElement>;
  // ref to the main navbar, so that subnavbar only appears when the main navbar is no longer available
  mainNavbarRef: RefObject<HTMLDivElement>;
}


/**
 * Reponsible for setting up the observer on the mainNavbar which controls the visibility of the subNavBar.
 * When mainNavbar is no longer visible, then the subNavbar should become visible and vice versa.
 * @param mainNavbarRef 
 * @returns react state variable indicating if the subNavState should be visible.
 */
function useSetUpMainNavbarObserver(mainNavbarRef: RefObject<HTMLDivElement>) {
   const [isSubNavbarVisible, setIsSubNavbarVisible] = useState(false);

  const observer = new IntersectionObserver(([entry]) => 
        setIsSubNavbarVisible(!entry.isIntersecting)
    , mainNavbarObserverOptions);
    useEffect (() => {
        observer.observe(mainNavbarRef.current!);
        //to avoid ref change warning
        const refCur = mainNavbarRef.current!;
        return (() => observer.unobserve(refCur));
    });

  return isSubNavbarVisible;
}

export default function SubNavbar({
  subPageRefs,
  isAnimated,
  observerOptionsShort = observerOptionsDefaultShort,
  observerOptionsLong = observerOptionsDefaultLong,
  subNavbarRef,
  mainNavbarRef
}: SubNavbarProps) {
  const isVisible = useSetUpMainNavbarObserver(mainNavbarRef);
  // create a map of each navlink button page name to nav link button ref, for use in resolving focus after nav link press
  const navLinkRefsMap = new Map<string, RefObject<HTMLAnchorElement>>();
  
  // navlink names
  const subPageNames: string[] = [];

  for (const page of subPageRefs.keys()) {
    navLinkRefsMap.set(page, { current: null });
    subPageNames.push(page);
  }
  // ref for navlinkRefs
  const navLinkRefs = useRef(navLinkRefsMap);

  useEffect(() => {
    const intersectionObservers: IntersectionObserver[] = [];
    // set up an intersection observer for each subpage ref
    for (const subPage of subPageNames) {
      // set up the intersection observer which watches for subpages being scrolled on screen
      //TODO: adjust based on experimentation
      const intersectionObserver = new IntersectionObserver(
        ([entry]) => {
          //manual writing of style when the subpage is intersecting/not interesecting. THe reason for this is to handle the
          //style colour light of focus/hover events, such as on mobile, where hover is triggered until you press elsewhere
          //check that navlink refs exist first...
          if (navLinkRefs.current.get(subPage)!.current) {
            if (!entry.isIntersecting) {
              navLinkRefs.current.get(subPage)!.current!.style.color =
                'rgba(255, 255, 255, 0.55)';
            } else {
              navLinkRefs.current.get(subPage)!.current!.style.color =
                'rgba(255, 255, 255)';
            }
          }
        },
        subPageRefs.get(subPage)!.current!.getBoundingClientRect().height <
        window.innerHeight * SUBPAGE_WINDOW_RATIO
          ? observerOptionsShort
          : observerOptionsLong
      );
      intersectionObserver.observe(subPageRefs.get(subPage)!.current!);
      intersectionObservers.push(intersectionObserver);
    }
    return () => {
      // stop all the intersection observers
      intersectionObservers.forEach((observer) => observer.disconnect);
    };
  });

  //scroll to subpage using ref, for the event key callback at the animatednavbar
  function scrollTo(pageRef: RefObject<HTMLDivElement>) {
    const yOffset = -subNavbarRef.current!.offsetHeight;
    const y =
      pageRef.current!.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  //animated nav bar animation
  const style = useSpring({
    from: {
      opacity: 0,
    },
    opacity: 1,
  });

  //func to run on select of navlink, scrolls to the corresponding subpage AND removes the focus from the navlink
  //so it dosent stay focused if the user scrolls away
  function onSelectFunc(eventKey: string | null) {
    if (!eventKey) {
      return;
    }
    // a ref object linked to the eventkey in subPageRefs map is guaranteed to exist
    scrollTo(subPageRefs.get(eventKey)!);
  }

  const AnimatedNavbar = animated(Navbar);
  return (
    isVisible ? 
    <AnimatedNavbar
      ref={subNavbarRef}
      onSelect={onSelectFunc}
      fixed="top"
      variant="dark"
      bg="secondary"
      className="justify-content-center"
      style={isAnimated ? style : {}}
    >
      <Nav>
        {subPageNames.map((pageName: string) => (
          <Nav.Item key={pageName}>
            <Nav.Link
              ref={navLinkRefs.current.get(pageName)}
              eventKey={pageName}
              key={pageName}
            >
              {pageName}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </AnimatedNavbar> : null
  );
}