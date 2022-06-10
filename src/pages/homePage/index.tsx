import { RefObject, useRef } from 'react';
import { Container } from 'react-bootstrap';
import Header from 'src/components/Header';
import SubNavbar from 'src/components/SubNavbar';
import AboutMe from 'src/pages/homePage/components/AboutMe';
import Contact from 'src/pages/homePage/components/Contact';
import QuickLinks from 'src/pages/homePage/components/QuickLinks';
import { subPages } from 'src/pages/homePage/constants';
import useSubNavbarTrigger from 'src/util/hooks/useSubNavbarTrigger';
import useSubPageRefMapCreator from 'src/util/hooks/useSubPageRefMapCreator';
import headerBackgroundImage from 'src/assets/images/homepage_background-min.jpg';
import AnimatedGreeting from 'src/pages/homePage/components/AnimatedGreeting';

export default function Homepage({ navigatorRef }: { navigatorRef: RefObject<HTMLDivElement>}) {
  const subPageRefs = useSubPageRefMapCreator(subPages);
  const subNavState = useSubNavbarTrigger(navigatorRef);
  const subNavbarRef = useRef<HTMLDivElement>(null);
  return (
    <Container fluid className="p-0 h-100">
      {subNavState && (
        <SubNavbar
          subNavbarRef={subNavbarRef}
          subPageRefs={subPageRefs.current}
        />
      )}
      <Header backgroundImage={headerBackgroundImage}>
        <AnimatedGreeting />
      </Header>
      <AboutMe ref={subPageRefs.current.get('About Me')} />
      <QuickLinks />
      <Contact ref={subPageRefs.current.get('Contact')} />
    </Container>
  );
}
