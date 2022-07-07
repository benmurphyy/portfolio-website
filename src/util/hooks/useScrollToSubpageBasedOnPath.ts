import { RefObject, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { quickLinks } from 'src/constants';

/**
 * custom react hook to handle the scrolling to a specific subpage on a page based on path name. Used for quicklink navigation.
 * @param {*} subNavbarRef  ref to subnavbar
 * @param {*} mainNavbarRef  ref to main nav bar
 * @param {*} subPageRefs  ref that contains a map of all subpage names to their own refs
 */
export default function useScrollToSubpageBasedOnPath(
  subNavbarRef: RefObject<HTMLDivElement>,
  mainNavbarRef: RefObject<HTMLDivElement>,
  subPageRefs: RefObject<Map<string, RefObject<HTMLDivElement>>>
) {
  //TODO: REWRITE! COME UP WITH BETTER SOLUTION
  //scroll to section of page using its ref, taking into account the height of the subnavbar, so scroll correct amount
  function scrollTo(sectionRef: RefObject<HTMLDivElement>) {
    //dont execute if any of the current objects in the ref are null
    const yOffset = -mainNavbarRef.current!.offsetHeight;
    const y =
      sectionRef.current!.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  const navigate = useNavigate();
  const currentPath = useLocation();
  // check the url path, if the quicklink is equal, then scroll down past the main navbar, so that it will no longer by visible,
  // thus making the subnavbar visible so that can use its height on screen to control the exact scroll amount.
  useEffect(() => {
    for (const quickLink of quickLinks) {
      if (quickLink.path === currentPath.pathname && mainNavbarRef.current) {
        const yOffset = mainNavbarRef.current.offsetHeight;
        const y = window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  });

  // conditional effect only if subnavbar is already active, this is so the ref for it exists, and we can scroll to the subpage in
  // scrollTo function
  useEffect(() => {
    //scroll to the subpage
    for (const quickLink of quickLinks) {
      if (quickLink.path === currentPath.pathname) {
        scrollTo(subPageRefs.current!.get(quickLink.name)!);
        //2nd arg is replace true so as to replace that extra /pathname after the actual pathname, so backtrack works as expected
        navigate('/' + currentPath.pathname.split('/')[1], { replace: true });
      }
    }
  });
}
