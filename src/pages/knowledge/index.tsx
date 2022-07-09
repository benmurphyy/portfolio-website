import 'src/styles/index.scss';

import { useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import quotes from 'src/assets/data/quotes.json';
import headerBackgroundImage from 'src/assets/images/background/knowledge_background-min.jpg';
import AnimatedQuote from 'src/components/AnimatedQuote';
import MainNavbar from 'src/components/MainNavbar';
import PageHeader from 'src/components/PageHeader';
import SubNavbar from 'src/components/SubNavbar';
import SkillsSection from 'src/pages/knowledge/components/SkillsSection';
import UniModulesSection from 'src/pages/knowledge/components/UniModulesSection';
import {
  KnowledgePageSectionName,
  knowledgePageSections,
} from 'src/pages/knowledge/constants';
import usePageSectionRefMapCreator from 'src/util/hooks/usePageSectionRefMapCreator';

/**
 * Skills component for all skill icons.
 */
//setting up data variables

function Root() {
  const mainNavbarRef = useRef<HTMLDivElement>(null);
  /** Ref containing an object where page section name is key, and PageSectionWithRef is value */
  const pageSectionsRef = usePageSectionRefMapCreator(knowledgePageSections);
  const subNavbarRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <MainNavbar ref={mainNavbarRef}></MainNavbar>
      <Container fluid className="h-100 p-0 knowledge">
        <SubNavbar
          mainNavbarRef={mainNavbarRef}
          subNavbarRef={subNavbarRef}
          pageSections={pageSectionsRef.current}
        />
        <PageHeader backgroundImage={headerBackgroundImage}>
          <Container>
            <Row className="justify-content-center">
              <Col className="col-lg-6">
                <AnimatedQuote
                  quoteText={quotes.knowledgePage.quoteText}
                  quoteOrigin={quotes.knowledgePage.quoteOrigin}
                />
              </Col>
            </Row>
          </Container>
        </PageHeader>
        <SkillsSection
          ref={pageSectionsRef.current[KnowledgePageSectionName.SKILLS].ref}
        />
        <UniModulesSection
          ref={
            pageSectionsRef.current[KnowledgePageSectionName.UNIVERSITY_MODULES]
              .ref
          }
        />
      </Container>
    </div>
  );
}
