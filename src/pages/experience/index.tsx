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
import usePageSectionRefMapCreator from 'src/util/hooks/usePageSectionRefMapCreator';

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
  /** Ref containing all the page sections of experience page */
  const experiencePageSectionsRef = usePageSectionRefMapCreator(
    experiencePageSections
  );
  const subNavbarRef = useRef(null);

  //take note all subcomponents other than main container are set to React.memo, so as to prevent unecessary updates when the state, whcih
  //is used for subNaavBar changes.
  return (
    <div>
      <MainNavbar ref={mainNavbarRef}></MainNavbar>
      <Container fluid className="h-100 p-0 knowledge">
        <SubNavbar
          mainNavbarRef={mainNavbarRef}
          subNavbarRef={subNavbarRef}
          pageSections={experiencePageSectionsRef.current}
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
          ref={
            experiencePageSectionsRef.current[
              ExperiencePageSectionName.CAREER_EXPERIENCE
            ].ref
          }
        />
        <AchievementsSection
          ref={
            experiencePageSectionsRef.current[
              ExperiencePageSectionName.ACHIEVEMENTS
            ].ref
          }
        />
        <Projects
          ref={
            experiencePageSectionsRef.current[
              ExperiencePageSectionName.PROJECTS
            ].ref
          }
        />
      </Container>
    </div>
  );
}
