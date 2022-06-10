import React, { RefObject, useRef } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { Header } from "semantic-ui-react";
import AnimatedQuote from "src/components/AnimatedQuote";
import SubNavbar from "src/components/SubNavbar";
import useScrollToSubpageBasedOnPath from "src/util/hooks/useScrollToSubpageBasedOnPath";
import useSubPageRefMapCreator from "src/util/hooks/useSubPageRefMapCreator";
import headerBackgroundImage from "src/assets/images/knowledge_background-min.jpg";
import quotes from "src/assets/data/quotes.json";

/**
 * Skills component for all skill icons.
 * TODO: add hover/click popup for each skill icons- attach it to the icon itself
 * TODO: add other ksills like fusion360
 */
//setting up data variables
const subPages = [
    "Skills",
    "University Modules"
];


interface KnowledgePageProps {
  mainNavbarRef: RefObject<HTMLDivElement>
}

export default function Knowledge({ mainNavbarRef }: KnowledgePageProps) {
    //create a mapping object of page to its ref
    const subPageRefs = useSubPageRefMapCreator(subPages);

    //subNavBar Ref
    const subNavbarRef = useRef<HTMLDivElement>(null);

    //for quicklink functionality from homepage
    useScrollToSubpageBasedOnPath(subNavbarRef, mainNavbarRef, subPageRefs);

    //take note all subcomponents other than main container are set to React.memo, so as to prevent unecessary updates when the state, whcih 
    //is used for subNavBar changes.
    return (
        <Container fluid className="h-100 p-0 knowledge">
        <SubNavbar mainNavbarRef={mainNavbarRef}  subNavbarRef={subNavbarRef} subPageRefs={subPageRefs.current} />
          <Header backgroundImage={headerBackgroundImage}>
            <Container>
              <Row className="justify-content-center">
                  <Col className="col-lg-6">
                      <AnimatedQuote quoteText={quotes.knowledgePage.quoteText} quoteOrigin={quotes.knowledgePage.quoteOrigin}/>
                  </Col>
              </Row>
            </Container>
          </Header>
              <Skills ref={subPageRefs.current.get('Skills')} />
              <UniModules ref={subPageRefs.current.get('University Modules')} />
        </Container>
    );
}