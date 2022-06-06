/**
 * custom sub nab bar to be used in pages wherein this subnav bar appears and stays at top of page only when user scrolls past the main navbar
 * props:
 * 1) map containing page names as keys, and their refs as their value
 * 2) animated prop - whether we want this navbar animated or not
 * 3) observer options object to control intersection observer settings
 * 4) forwardRef is used so that the parent component that contains this subnavbar can reference it
 * 
 */
import { useState, useEffect, useRef, forwardRef, RefObject } from "react";
import { useSpring, animated } from 'react-spring';
import { Nav, Navbar } from 'react-bootstrap';


//two different observer options for short elements (smaller than 2x of viewport), and long elements (double of viewport)
const observerOptionsDefaultShort = {
    rootMargin: '0px',
    threshold: 0.5
};

const observerOptionsDefaultLong = {
    rootMargin: '0px',
    threshold: 0.1
}

interface SubNavbarProps {
  subPageRefs: {
    [key: string]: RefObject<HTMLDivElement>
  },
  isAnimated: boolean,
  observerOptionsShort: 
}

const SubNavbar = forwardRef(({ subPageRefs, isAnimated, observerOptionsShort, observerOptionsLong}, ref) => {
    //allows for default or custom observer option depending on the page
    observerOptionsShort = observerOptionsShort === undefined ? observerOptionsDefaultShort : observerOptionsShort;
    observerOptionsLong = observerOptionsLong === undefined ? observerOptionsDefaultLong : observerOptionsLong;
    //default isAnimated true
    isAnimated = isAnimated === undefined ? true : isAnimated;
    //create a map of page to state variable (boolean indicating pages visibility)
    const subPageStateObject = new Map();
    for (const page of subPageRefs.keys()) {
        subPageStateObject.set(page, false)
    }
    const [subPageStates, setSubPageStates] = useState(subPageStateObject);

    //createa a map of each navlnk button page to nav link button ref, for use in reoving focus after nav link press
    let navLinkRefs = new Map();

    for (const page of subPageRefs.keys()) {
        navLinkRefs.set(page, {current: null});
    }
    //ref for navlinkRefs 
    navLinkRefs = useRef(navLinkRefs);

    //set up the subPages array which we use to record all the variables and functions for each page
    const subPages = {};
    for (const page of subPageRefs.keys()) {
        subPages[page] = {};
        subPages[page].state = subPageStates.get(page);
        subPages[page].setState = ((newState) => {
            const newMap = new Map(subPageStates);
            newMap.set(page, newState);
            setSubPageStates(newMap);
        });
        //observer for when the page is on screen
        subPages[page].observer = new IntersectionObserver(([entry]) => {
            //only call setstate when the observation has actually changed, because we always create a new map
            //upon entry change
            if (entry.isIntersecting !== subPageStates.get(page)) {
                subPages[page].setState(entry.isIntersecting);
                //manual writing of style when the subpage is intersecting/not interesecting. THe reason for this is to handle the 
                //style colour light of focus/hover events, such as on mobile, where hover is triggered until you press elsewhere
                //check that navlink refs exist first...
                if (navLinkRefs.current.get(page).current) {
                    if (!entry.isIntersecting) {
                        navLinkRefs.current.get(page).current.style.color = "rgba(255, 255, 255, 0.55)";
                    } else {
                        navLinkRefs.current.get(page).current.style.color = "rgba(255, 255, 255)";
                    }
                }
            }
        }, subPageRefs.get(page).current.getBoundingClientRect().offsetHeight < window.innerHeight * 9/5 ? observerOptionsShort : observerOptionsLong);
        subPages[page].ref = subPageRefs.get(page);
    };

    useEffect(() => {
        const subPageRefElements = {};
        for (const page in subPages) {
            subPages[page].observer.observe(subPages[page].ref.current);
            subPageRefElements[page] = {};
            subPageRefElements[page].observer = subPages[page].observer;
            subPageRefElements[page].element = subPages[page].ref.current; 
        } 
        return (() => {
            for (const page in subPageRefElements) {
                subPageRefElements[page].observer.unobserve(subPageRefElements[page].element); 
            }
        });
    });

    //scroll to subpage using ref, for the event key callback at the animatednavbar
    function scrollTo(pageRef) {
        const yOffset =  -ref.current.offsetHeight;
        const y = pageRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
    }

    //animated nav bar animation
    const style = useSpring({
        from: {
            opacity: 0
        },
        opacity: 1
    });

    //func to run on select of navlink, scrolls to the corresponding subpage AND removes the focus from the navlink
    //so it dosent stay focused if the user scrolls away
    function onSelectFunc(eventKey) {
        scrollTo(subPages[eventKey].ref);
    }

    const AnimatedNavbar = animated(Navbar);
    return (
        <AnimatedNavbar ref={ref} onSelect={onSelectFunc} fixed="top" variant="dark" bg="secondary" className="justify-content-center" style={isAnimated && style}>
            <Nav>
                {Object.keys(subPages).map(page =>
                    <Nav.Item key={page}>
                        <Nav.Link ref={navLinkRefs.current.get(page)} eventKey={page} active={subPageStates.get(page)} key={page}>
                            {page}
                        </Nav.Link>
                    </Nav.Item>
                )}
            </Nav>
        </AnimatedNavbar>
    )
});

SubNavbar.displayName = "SubNavbar"

export default SubNavbar;