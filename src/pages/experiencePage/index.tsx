import headerBackgroundImage from 'assets/images/experience_background-min.jpg';
import { useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Header } from 'semantic-ui-react';
import AnimatedQuote from 'src/components/AnimatedQuote';
import SubNavbar from 'src/components/SubNavbar';
import useScrollToSubpageBasedOnPath from 'src/util/hooks/useScrollToSubpageBasedOnPath';
import useSubNavbarTrigger from 'src/util/hooks/useSubNavbarTrigger';
import useSubPageRefMapCreator from 'src/util/hooks/useSubPageRefMapCreator';
import CareerExperience from './careerExperienceSection';
import Achievements from 'src/pages/experiencePage/achievementsSection';
import Projects from './projectsSection';

// import and set up data variables
import quotes from 'src/assets/data/quotes.json';
import quickLinks from 'src/assets/data/quick_links.json';
const quoteText = quotes.experiencePage.quoteText;
const quoteOrigin = quotes.experiencePage.quoteOrigin;

const subPages = [
    "Career Experience",
    "Achievements",
    "Projects"
];

function Quote() {
    return (
        <Container>
            <Row className="justify-content-center">
                <Col className="col-md-6">
                    <AnimatedQuote quoteText={quoteText} quoteOrigin={quoteOrigin} variant="dark"/>
                </Col>
            </Row>
        </Container>
    )
}

export default function Experience({ navigator }) {
    //create a mapping object of page to its ref
    const subPageRefs = useSubPageRefMapCreator(subPages);

    const subNavState = useSubNavbarTrigger(navigator);
    
    //subNavBar ref
    const subNavbarRef = useRef();

    //handles all scrolling to subpage based on path logic, used for quicklinks
    useScrollToSubpageBasedOnPath(subNavbarRef, subNavState, quickLinks, navigator, subPageRefs);

    //take note all subcomponents other than main container are set to React.memo, so as to prevent unecessary updates when the state, whcih 
    //is used for subNaavBar changes.
    return (
        <Container fluid className="h-100 p-0 knowledge">
            {subNavState && <SubNavbar ref={subNavbarRef} subPageRefs={subPageRefs.current}/>}
            <Header InnerComponent={Quote} backgroundImage={headerBackgroundImage}/>
            <CareerExperience ref={subPageRefs.current.get('Career Experience')}/>
            <Achievements ref={subPageRefs.current.get('Achievements')}/>
            <Projects ref={subPageRefs.current.get('Projects')}/>

        </Container>
    );

}