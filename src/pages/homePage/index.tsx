import { RefObject, useRef } from 'react';
import { Container } from 'react-bootstrap';
import PageHeader from 'src/components/PageHeader';
import SubNavbar from 'src/components/SubNavbar';
import AboutMe from 'src/pages/homePage/components/AboutMe';
import Contact from 'src/pages/homePage/components/Contact';
import QuickLinks from 'src/pages/homePage/components/QuickLinks';
import { subPages } from 'src/pages/homePage/constants';
import useSubPageRefMapCreator from 'src/util/hooks/useSubPageRefMapCreator';
import headerBackgroundImage from 'src/assets/images/homepage_background-min.jpg';
import AnimatedGreeting from 'src/pages/homePage/components/AnimatedGreeting';

interface HomepageProps {
  mainNavbarRef: RefObject<HTMLDivElement>;
}

export default function Homepage({ mainNavbarRef }: HomepageProps) {
  const subPageRefs = useSubPageRefMapCreator(subPages);
  const subNavbarRef = useRef<HTMLDivElement>(null);
  return (
    <Container fluid className="p-0 h-100">
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
    </Container>
  );
}
