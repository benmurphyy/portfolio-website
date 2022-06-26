/**
 * custom sub nab bar to be used in pages wherein this subnav bar appears and stays at top of page only when user scrolls past the main navbar
 * props:
 * 1) map containing page names as keys, and their refs as their value
 * 2) animated prop - whether we want this navbar animated or not
 * 3) observer options object to control intersection observer settings
 * 4) forwardRef is used so that the parent component that contains this subnavbar can reference it
 *
 */
import { useEffect, useRef, RefObject } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { AnimatePresence, motion } from 'framer-motion';
import {
  observerOptionsDefaultLong,
  observerOptionsDefaultShort,
  SUBPAGE_WINDOW_RATIO,
  useVisibilityController,
} from 'src/components/SubNavbar/constants';

interface SubNavbarProps {
  subPageRefs: Map<string, RefObject<HTMLDivElement>>;
  isAnimated?: boolean;
  observerOptionsShort?: IntersectionObserverInit;
  observerOptionsLong?: IntersectionObserverInit;
  subNavbarRef: RefObject<HTMLDivElement>;
  // ref to the main navbar, so that subnavbar only appears when the main navbar is no longer available
  mainNavbarRef: RefObject<HTMLDivElement>;
}

export default function SubNavbar({
  subPageRefs,
  isAnimated = true,
  observerOptionsShort = observerOptionsDefaultShort,
  observerOptionsLong = observerOptionsDefaultLong,
  subNavbarRef,
  mainNavbarRef,
}: SubNavbarProps) {
  const isVisible = useVisibilityController(mainNavbarRef);
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
      const intersectionObserver = new IntersectionObserver(
        ([entry]) => {
          // manual writing of style when the subpage is intersecting/not interesecting.
          // This makes the corresponding subpage link become light when its section is on screen.
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

  /**
   * Scrolls to the section of the page with the given ref.
   */
  function scrollTo(sectionRef: RefObject<HTMLDivElement>) {
    const yOffset = -subNavbarRef.current!.offsetHeight;
    const y =
      sectionRef.current!.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
    sectionRef.current!.scrollIntoView();
  }

  /**
   * Runs on select of navlink, scrolls to the corresponding subpage AND removes the focus from the navlink
   * so it dosent stay focused if the user scrolls away
   * @param eventKey
   * @returns
   */
  function onSelectFunc(eventKey: string | null) {
    if (!eventKey) {
      return;
    }
    // a ref object linked to the eventkey in subPageRefs map is guaranteed to exist
    scrollTo(subPageRefs.get(eventKey)!);
  }

  const AnimatedNavbar = motion(Navbar);

  return (
    <AnimatePresence>
      {isVisible && (
        <AnimatedNavbar
          key={'navbar'}
          ref={subNavbarRef}
          onSelect={onSelectFunc}
          fixed="top"
          bg="primary"
          className="justify-content-center"
          style={{ overflow: 'hidden' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
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
        </AnimatedNavbar>
      )}
    </AnimatePresence>
  );
}
