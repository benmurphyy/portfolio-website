/**
 * custom sub nab bar to be used in pages wherein this subnav bar appears and stays at top of page only when user scrolls past the main navbar
 * props:
 * 1) map containing page names as keys, and their refs as their value
 * 2) animated prop - whether we want this navbar animated or not
 * 3) observer options object to control intersection observer settings
 * 4) forwardRef is used so that the parent component that contains this subnavbar can reference it
 *
 */
import { AnimatePresence, motion } from 'framer-motion';
import { RefObject, useEffect, useRef } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import {
  observerOptionsDefaultLong,
  observerOptionsDefaultShort,
  SUBPAGE_WINDOW_RATIO,
  useVisibilityController,
} from 'src/components/SubNavbar/constants';
import { PageSectionWithRef, QuickLink, quickLinks } from 'src/constants';
import useGeneratePath from 'src/util/hooks/useGeneratePath';

interface SubNavbarProps {
  pageSections: { [pageSectionName: string]: PageSectionWithRef };
  observerOptionsShort?: IntersectionObserverInit;
  observerOptionsLong?: IntersectionObserverInit;
  subNavbarRef: RefObject<HTMLDivElement>;
  // ref to the main navbar, so that subnavbar only appears when the main navbar is no longer available
  mainNavbarRef: RefObject<HTMLDivElement>;
}

export default function SubNavbar({
  pageSections,
  observerOptionsShort = observerOptionsDefaultShort,
  observerOptionsLong = observerOptionsDefaultLong,
  subNavbarRef,
  mainNavbarRef,
}: SubNavbarProps) {
  const [isVisible, setIsVisible] = useVisibilityController(mainNavbarRef);
  // currentPath contains the current pathname of browser url
  const [currentPath, generatePath] = useGeneratePath();
  // create a map of each page section name to the ref of the nav link button that scrolls to it
  const navLinkRefsMap = new Map<string, RefObject<HTMLAnchorElement>>();

  Object.keys(pageSections).forEach((pageSectionName) => {
    navLinkRefsMap.set(pageSectionName, useRef<HTMLAnchorElement>(null));
  });

  // ref for navlinkRefs
  const navLinkRefs = useRef(navLinkRefsMap);

  /**
   * Sets up intersection observers to handle the lightening of subnavbar links when sections are scrolled on screen.
   */
  useEffect(() => {
    const intersectionObservers: IntersectionObserver[] = [];
    // set up an intersection observer for each page section ref
    for (const pageSectionName of Object.keys(pageSections)) {
      // set up the intersection observer which watches for page sections being scrolled on screen
      const intersectionObserver = new IntersectionObserver(
        ([entry]) => {
          // manual writing of style when the page section is intersecting/not interesecting.
          // This makes the corresponding page section link become light when its section is on screen.
          if (navLinkRefs.current.get(pageSectionName)!.current) {
            if (!entry.isIntersecting) {
              navLinkRefs.current.get(pageSectionName)!.current!.style.color =
                'rgba(255, 255, 255, 0.55)';
            } else {
              navLinkRefs.current.get(pageSectionName)!.current!.style.color =
                'rgba(255, 255, 255)';
            }
          }
        },
        pageSections[pageSectionName].ref.current!.getBoundingClientRect()
          .height <
        window.innerHeight * SUBPAGE_WINDOW_RATIO
          ? observerOptionsShort
          : observerOptionsLong
      );
      intersectionObserver.observe(pageSections[pageSectionName].ref.current!);
      intersectionObservers.push(intersectionObserver);
    }
    return () => {
      // stop all the intersection observers
      intersectionObservers.forEach((observer) => observer.disconnect);
    };
  });

  /**
   * Returns true if a quicklink was pressed on homepage.
   */
  function wasQuickLinkPressed(quickLink: QuickLink) {
    return (
      generatePath(quickLink.path) ===
      window.location.pathname + window.location.search
    );
  }

  /**
   * Sets up the quick links from homepage, by monitoring the url, if match with a quicklink,
   * if so makes the navbar visible so that the page can be scrolled down correctly to the
   * quicklink section on next render.
   *
   * Only run if currentPath has changed.
   */
  useEffect(() => {
    for (const quickLink of quickLinks) {
      if (wasQuickLinkPressed(quickLink)) {
        setIsVisible(true);
        return;
      }
    }
  }, [currentPath]);

  /**
   * Once subnavbar is visible, check if there is a query param from a quicklink having been pressed,
   * if so, then scroll to the page section that quicklink represents.
   */
  useEffect(() => {
    if (isVisible) {
      for (const quickLink of quickLinks) {
        if (wasQuickLinkPressed(quickLink)) {
          quickLinkScroll(quickLink);
        }
      }
    }
  }, [isVisible]);

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
  }

  /**
   * Scrolls to the page section that the quicklink that was pressed refers to.
   */
  function quickLinkScroll(quickLink: QuickLink) {
    // removes the query param from quicklink url
    window.history.replaceState(
      {},
      '',
      quickLink.path.slice(0, quickLink.path.indexOf('?'))
    );
    scrollTo(pageSections[quickLink.name].ref);
  }

  /**
   * Runs on select of navlink, scrolls to the corresponding page section AND removes the focus from the navlink
   * so it dosent stay focused if the user scrolls away
   * @param eventKey
   * @returns
   */
  function onSelectFunc(eventKey: string | null) {
    if (!eventKey) {
      return;
    }
    scrollTo(pageSections[eventKey].ref);
  }

  // Because of a bug with AnimatePresence where it is not able to properly remove custom component (NavBar),
  // in that the navbar would be not visible, but still in the DOM and clickable, when not supposed to!
  // so wrap Navbar with a motion.div to give it its animated behavious whilst avoiding the bug.
  // the motion.div needs to have a height of 0 so it doesnt get seen at all on DOm (no blank spot appears temporarily).
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          style={{ height: 0 }}
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          (
          <Navbar
            key={'navbar'}
            ref={subNavbarRef}
            onSelect={onSelectFunc}
            fixed="top"
            bg="primary"
            className="justify-content-center"
            style={{ overflow: 'hidden' }}
          >
            <Nav>
              {Object.keys(pageSections).map((pageSectionName) => (
                <Nav.Item key={pageSectionName}>
                  <Nav.Link
                    ref={navLinkRefs.current.get(pageSectionName)}
                    eventKey={pageSectionName}
                  >
                    {pageSections[pageSectionName].title}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Navbar>
          )
        </motion.div>
      )}
    </AnimatePresence>
  );
}
