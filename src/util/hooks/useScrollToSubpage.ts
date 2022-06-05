import { RefObject, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/**
 * custom react hook to handle the scrolling to a specific subpage on a page based on path name. Used for quicklink navigation.
 * @param {*} subNavBarRef  ref to subnavbar
 * @param {*} quickLinkPaths  array of paths to the quick link
 * @param {*} navigator  ref to main nav bar
 * @param {*} subPageRefs  ref that contains a map of all subpage names to their own refs
 */
export default function useScrollToSubpageBasedOnPath(
  subNavBarRef: RefObject<HTMLDivElement>,
  quickLinkPaths: string[],
  navigator: RefObject<HTMLDivElement>,
  subPageRefs: RefObject<HTMLDivElement>
) {
  //scroll to section of page using its ref, taking into account the height of the subnavbar, so scroll correct amount
  function scrollTo(sectionRef: RefObject<HTMLDivElement>) {
    //dont execute if any of the current objects in the ref are null
    if (!subNavBarRef.current || !sectionRef.current) {
      return;
    }
    const yOffset = -subNavBarRef.current.offsetHeight;
    const y =
      sectionRef.current.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  const navigate = useNavigate();
  const currentPath = useLocation();
  //check the url path, and
  useEffect(() => {
    for (const quickLinkPath of quickLinkPaths) {
      if (quickLinkPath === currentPath.pathname && navigator.current) {
        const yOffset = navigator.current.offsetHeight;
        const y = window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  });

  //conditional effect only if subnavbar is already active, this is so the ref for it exists, and we can scroll to the subpage in
  //scrollTo function
  useEffect(() => {
    if (subNavBarRef.current) {
      //scroll to the subpage
      for (const quickLinkPath of quickLinkPaths) {
        if (quickLinkPath.path === currentPath.pathname) {
          console.log(subNavBarRef.current);
          scrollTo(subPageRefs.current.get(quickLinkPath.name));
          //2nd arg is replace true so as to replace that extra /pathname after the actual pathname, so backtrack works as expected
          navigate('/' + currentPath.pathname.split('/')[1], { replace: true });
        }
      }
    }
  });
}
