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
import {
  HomePageSectionNames,
  homePageSections,
} from 'src/pages/home/constants';
import usePageSectionRefMapCreator from 'src/util/hooks/usePageSectionRefMapCreator';

/**
 * React component defining homepage of application.
 */
function Root() {
  /** Ref containing information on page sections */
  const homePageSectionsRef = usePageSectionRefMapCreator(homePageSections);
  const mainNavbarRef = useRef<HTMLDivElement>(null);
  const subNavbarRef = useRef<HTMLDivElement>(null);
  return (
    <div>
      <MainNavbar ref={mainNavbarRef}></MainNavbar>
      <div className="h-100">
        <SubNavbar
          mainNavbarRef={mainNavbarRef}
          subNavbarRef={subNavbarRef}
          pageSections={homePageSectionsRef.current}
        />
        <PageHeader backgroundImage={headerBackgroundImage}>
          <AnimatedGreeting />
        </PageHeader>
        <AboutMe
          ref={homePageSectionsRef.current[HomePageSectionNames.ABOUT_ME].ref}
        />
        <QuickLinks />
        <Contact
          ref={homePageSectionsRef.current[HomePageSectionNames.CONTACT].ref}
        />
      </div>
    </div>
  );
}
