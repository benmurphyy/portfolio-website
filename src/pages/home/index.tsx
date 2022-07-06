import 'src/styles/index.scss';

import { useRef } from 'react';
import headerBackgroundImage from 'src/assets/images/background/homepage_background-min.jpg';
import MainNavbar from 'src/components/MainNavbar';
import PageHeader from 'src/components/PageHeader';
import SubNavbar from 'src/components/SubNavbar';
import AboutMe from 'src/pages/home/components/AboutMe';
import AnimatedGreeting from 'src/pages/home/components/AnimatedGreeting';
import Contact from 'src/pages/home/components/Contact';
import QuickLinks from 'src/pages/home/components/QuickLinks';
import { subPages } from 'src/pages/home/constants';
import useSubPageRefMapCreator from 'src/util/hooks/useSubPageRefMapCreator';

/**
 * React component defining homepage of application.
 */
function Root() {
  const subPageRefs = useSubPageRefMapCreator(subPages);
  const mainNavbarRef = useRef<HTMLDivElement>(null);
  const subNavbarRef = useRef<HTMLDivElement>(null);
  return (
    <div>
      <MainNavbar ref={mainNavbarRef}></MainNavbar>
      <div className="h-100">
        <SubNavbar
          mainNavbarRef={mainNavbarRef}
          subNavbarRef={subNavbarRef}
          subPageRefs={subPageRefs.current}
        />
        <PageHeader backgroundImage={headerBackgroundImage}>
          <AnimatedGreeting />
        </PageHeader>
        <AboutMe ref={subPageRefs.current.get('About Me')} />
        <QuickLinks />
        <Contact ref={subPageRefs.current.get('Contact')} />
      </div>
    </div>
  );
}
