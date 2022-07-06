import 'src/styles/index.scss';

import { useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// import and set up data variables
import quotes from 'src/assets/data/quotes.json';
import headerBackgroundImage from 'src/assets/images/background/experience_background-min.jpg';
import AnimatedQuote, {
  AnimatedQuoteVariants,
} from 'src/components/AnimatedQuote';
import PageHeader from 'src/components/PageHeader';
import SubNavbar from 'src/components/SubNavbar';
import AchievementsSection from 'src/pages/experience/achievementsSection';
import {
  ExperiencePageSectionName,
  experiencePageSections,
} from 'src/pages/experience/constants';
import useScrollToSubpageBasedOnPath from 'src/util/hooks/useScrollToSubpageBasedOnPath';
import useSubPageRefMapCreator from 'src/util/hooks/useSubPageRefMapCreator';

import CareerExperienceSection from './careerExperienceSection';
import Projects from './projectsSection';
const quoteText = quotes.experiencePage.quoteText;
const quoteOrigin = quotes.experiencePage.quoteOrigin;

import MainNavbar from 'src/components/MainNavbar';

/**
 * Experience page.
 */
function Root() {
  const mainNavbarRef = useRef<HTMLDivElement>(null);
  //create a mapping object of page to its ref
  const subPageRefs = useSubPageRefMapCreator(experiencePageSections);

  //subNavBar ref
  const subNavbarRef = useRef(null);

  //handles all scrolling to subpage based on path logic, used for quicklinks
  useScrollToSubpageBasedOnPath(subNavbarRef, mainNavbarRef, subPageRefs);

  //take note all subcomponents other than main container are set to React.memo, so as to prevent unecessary updates when the state, whcih
  //is used for subNaavBar changes.
  return (
    <div>
      <MainNavbar ref={mainNavbarRef}></MainNavbar>
      <Container fluid className="h-100 p-0 knowledge">
        <SubNavbar
          mainNavbarRef={mainNavbarRef}
          subNavbarRef={subNavbarRef}
          subPageRefs={subPageRefs.current}
        />
        <PageHeader backgroundImage={headerBackgroundImage}>
          <Container>
            <Row className="justify-content-center">
              <Col className="col-md-6">
                <AnimatedQuote
                  quoteText={quoteText}
                  quoteOrigin={quoteOrigin}
                  variant={AnimatedQuoteVariants.DARK}
                />
              </Col>
            </Row>
          </Container>
        </PageHeader>
        <CareerExperienceSection
          ref={subPageRefs.current.get(
            ExperiencePageSectionName.CAREER_EXPERIENCE
          )}
        />
        <AchievementsSection
          ref={subPageRefs.current.get(ExperiencePageSectionName.ACHIEVEMENTS)}
        />
        <Projects
          ref={subPageRefs.current.get(ExperiencePageSectionName.PROJECTS)}
        />
      </Container>
    </div>
  );
}
