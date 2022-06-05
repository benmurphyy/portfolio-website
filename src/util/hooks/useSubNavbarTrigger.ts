/**
 * A custom react hook that takes in a main navbar ref.
 * A subnavbar state is set and returned from this hook corresponding to whether the subnavbar should render.
 * A intersection observer is set up that triggers ts the setting of the subnavbar state when the subnavbar is visible/not visible.
 * main nav bar is no longer visible, thus triggering the subnavbar to render.
 */
import { useState, useEffect } from 'react'; 
const observerOptions = {
    rootMargin: '0px',
    threshold: 0.1
};

export default function useSubNavbarTrigger(mainNavbarRef) {
    const [subNavState, setSubNavState] = useState(false);

    const observer = new IntersectionObserver(([entry]) => 
        setSubNavState(!entry.isIntersecting)
    , observerOptions);

    useEffect (() => {
        observer.observe(mainNavbarRef.current);
        //to avoid ref change warning
        const refCur = mainNavbarRef.current;
        return (() => observer.unobserve(refCur));
    });

    return subNavState;
}