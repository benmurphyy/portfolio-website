/**
 * custom sub nab bar to be used in pages wherein this subnav bar appears and stays at top of page only when user scrolls past the main navbar
 * props:
 * 1) map containing page names as keys, and their refs as their value
 * 2) animated prop - whether we want this navbar animated or not
 * 3) observer options object to control intersection observer settings
 * 4) forwardRef is used so that the parent component that contains this subnavbar can reference it
 *
 */
import {
  useState,
  useEffect,
  useRef,
  forwardRef,
  RefObject,
  ForwardedRef,
} from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Nav, Navbar } from 'react-bootstrap';

//two different observer options for short elements (smaller than 2x of viewport), and long elements (double of viewport)
const observerOptionsDefaultShort: IntersectionObserverInit = {
  rootMargin: '0px',
  threshold: 0.5,
};

const observerOptionsDefaultLong: IntersectionObserverInit = {
  rootMargin: '0px',
  threshold: 0.1,
};

interface SubNavbarProps {
  subPageRefs: Map<string, RefObject<HTMLDivElement>>;
  isAnimated: boolean;
  observerOptionsShort: IntersectionObserverInit;
  observerOptionsLong: IntersectionObserverInit;
}

const SubNavbar = forwardRef(
  (
    {
      subPageRefs,
      isAnimated,
      observerOptionsShort,
      observerOptionsLong,
    }: SubNavbarProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    //allows for default or custom observer option depending on the page
    observerOptionsShort =
      observerOptionsShort === undefined
        ? observerOptionsDefaultShort
        : observerOptionsShort;
    observerOptionsLong =
      observerOptionsLong === undefined
        ? observerOptionsDefaultLong
        : observerOptionsLong;
    //default isAnimated true
    isAnimated = isAnimated === undefined ? true : isAnimated;
    //create a map of page to state variable (boolean indicating pages visibility)
    const subPageStateObject = new Map();
    for (const page of subPageRefs.keys()) {
      subPageStateObject.set(page, false);
    }
    const [subPageStates, setSubPageStates] = useState(subPageStateObject);

    //create a map of each navlink button page to nav link button ref, for use in resolving focus after nav link press
    const navLinkRefsMap = new Map<string, RefObject<HTMLDivElement>>();

    for (const page of subPageRefs.keys()) {
      navLinkRefsMap.set(page, { current: null });
    }
    //ref for navlinkRefs
    const navLinkRefs = useRef(navLinkRefsMap);

    interface SubPageInformation {
      state: boolean;
      setState: (newState: boolean) => void;
      observer: IntersectionObserver;
      ref: RefObject<HTMLDivElement>;
    }

    //set up the subPages array which we use to record all the variables and functions for each page
    const subPages: {
      [page: string]: SubPageInformation;
    } = {};
    for (const page of subPageRefs.keys()) {
      subPages[page] = {} as SubPageInformation;
      subPages[page].state = subPageStates.get(page);
      subPages[page].setState = (newState) => {
        const newMap = new Map(subPageStates);
        newMap.set(page, newState);
        setSubPageStates(newMap);
      };
      //observer for when the page is on screen
      subPages[page].observer = new IntersectionObserver(
        ([entry]) => {
          //only call setstate when the observation has actually changed, because we always create a new map
          //upon entry change
          if (entry.isIntersecting !== subPageStates.get(page)) {
            subPages[page].setState(entry.isIntersecting);
            //manual writing of style when the subpage is intersecting/not interesecting. THe reason for this is to handle the
            //style colour light of focus/hover events, such as on mobile, where hover is triggered until you press elsewhere
            //check that navlink refs exist first...
            if (navLinkRefs.current.get(page).current) {
              if (!entry.isIntersecting) {
                navLinkRefs.current.get(page).current.style.color =
                  'rgba(255, 255, 255, 0.55)';
              } else {
                navLinkRefs.current.get(page).current.style.color =
                  'rgba(255, 255, 255)';
              }
            }
          }
        },
        subPageRefs.get(page).current.getBoundingClientRect().offsetHeight <
        (window.innerHeight * 9) / 5
          ? observerOptionsShort
          : observerOptionsLong
      );
      subPages[page].ref = subPageRefs.get(page);
    }

    useEffect(() => {
      const subPageRefElements = {};
      // set up the intersection observer which watches for subpages being scrolled on screen
      //TODO: adjust based on experimentation
      const intersectionObserver = new IntersectionObserver(
        ([entry]) => {
          //only call setstate when the observation has actually changed, because we always create a new map
          //upon entry change
          if (entry.isIntersecting !== subPageStates.get(page)) {
            subPages[page].setState(entry.isIntersecting);
            //manual writing of style when the subpage is intersecting/not interesecting. THe reason for this is to handle the
            //style colour light of focus/hover events, such as on mobile, where hover is triggered until you press elsewhere
            //check that navlink refs exist first...
            if (navLinkRefs.current.get(page).current) {
              if (!entry.isIntersecting) {
                navLinkRefs.current.get(page).current.style.color =
                  'rgba(255, 255, 255, 0.55)';
              } else {
                navLinkRefs.current.get(page).current.style.color =
                  'rgba(255, 255, 255)';
              }
            }
          }
        },
        subPageRefs.get(page).current.getBoundingClientRect().offsetHeight <
        (window.innerHeight * 9) / 5
          ? observerOptionsShort
          : observerOptionsLong
      );
      for (const page in subPages) {
        subPages[page].observer.observe(subPages[page].ref.current);
        subPageRefElements[page] = {};
        subPageRefElements[page].observer = subPages[page].observer;
        subPageRefElements[page].element = subPages[page].ref.current;
      }
      return () => {
        for (const page in subPageRefElements) {
          subPageRefElements[page].observer.unobserve(
            subPageRefElements[page].element
          );
        }
      };
    });

    //scroll to subpage using ref, for the event key callback at the animatednavbar
    function scrollTo(pageRef) {
      const yOffset = -ref.current.offsetHeight;
      const y =
        pageRef.current.getBoundingClientRect().top +
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
    function onSelectFunc(eventKey) {
      scrollTo(subPages[eventKey].ref);
    }

    const AnimatedNavbar = animated(Navbar);
    return (
      <AnimatedNavbar
        ref={ref}
        onSelect={onSelectFunc}
        fixed="top"
        variant="dark"
        bg="secondary"
        className="justify-content-center"
        style={isAnimated && style}
      >
        <Nav>
          {Object.keys(subPages).map((page) => (
            <Nav.Item key={page}>
              <Nav.Link
                ref={navLinkRefs.current.get(page)}
                eventKey={page}
                active={subPageStates.get(page)}
                key={page}
              >
                {page}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </AnimatedNavbar>
    );
  }
);

SubNavbar.displayName = 'SubNavbar';

export default SubNavbar;
