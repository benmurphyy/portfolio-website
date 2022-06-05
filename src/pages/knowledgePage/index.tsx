import React, { forwardRef, useRef } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import Skills from 'components/pages/knowledgePage/Skills'
import SubNavbar from "components/custom/SubNavbar";
import Header from 'components/custom/Header';
import AnimatedQuote from 'components/custom/AnimatedQuote';
import headerBackgroundImage from 'assets/images/knowledge_background-min.jpg'
import useScrollToSubpageBasedOnPath from "components/util/custom_react_hooks/useScrollToSubpage";
import useSubNavbarTrigger from "components/util/custom_react_hooks/useSubNavbarTrigger";
import useSubPageRefMapCreator from "components/util/custom_react_hooks/useSubPageRefMapCreator";
/**
 * Skills component for all skill icons.
 * TODO: add hover/click popup for each skill icons- attach it to the icon itself
 * TODO: add other ksills like fusion360
 */


//setting up data variables
//quicklinks array for quicklinks (scroll to specific subpage immediately upon render depending on path name)
const quickLinks = require('data/quick_links.json');
const universityModules = require('data/university_modules');
const subPages = [
    "Skills",
    "University Modules"
];
//quotes
const quotes = require('data/quotes');
const quoteText = quotes.knowledgePage.quoteText;
const quoteOrigin = quotes.knowledgePage.quoteOrigin;

//quote in header
function Quote() {
    return (
        <Container>
            <Row className="justify-content-center">
                <Col className="col-lg-6">
                    <AnimatedQuote quoteText={quoteText} quoteOrigin={quoteOrigin} />
                </Col>
            </Row>
        </Container>
    )
}

const UniModules = React.memo(forwardRef((props, ref) => {
    return (
        <Container ref={ref} fluid className="background-grunge rounded">
            <Row>
                <Container>
                    <Row className="heading-background py-2">
                        <Col>
                            <h1 className="display-5">University Modules</h1>
                            <h5>Current CAP: 5.0/5.0</h5>
                        </Col>
                    </Row>
                    <Row>

                    </Row>
                </Container>
            </Row>
            <Row>
                <Col className="p-2">
                    <h2 className="m-0 fw-bold">Computer Science</h2>
                </Col>
                <Table bordered striped>
                    <thead className="table-dark">
                        <tr>
                            <th className="w-25">Code</th>
                            <th>Name</th>
                            <th className="w-25">Grade</th>
                        </tr>
                    </thead>
                    <tbody className="table-light">
                        {universityModules.map((module) => {
                            return module.type === 'cs' ? (
                                <tr key={module.code}>
                                    <td>{module.code}</td>
                                    <td>{module.name}</td>
                                    <td>{module.grade}</td>
                                </tr>
                            ) : null;
                        }
                        )}
                    </tbody>
                </Table>
            </Row>
            <Row>
                <Col className="p-2">
                    <h2 className="m-0 fw-bold">Technical</h2>
                </Col>
                <Table bordered striped>
                    <thead className="table-dark">
                        <tr>
                            <th className="w-25">Code</th>
                            <th className="">Name</th>
                            <th className="w-25">Grade</th>
                        </tr>
                    </thead>
                    <tbody className="table-light">
                        {universityModules.map((module) => {
                            return module.type === 'technical' ? (
                                <tr key={module.code}>
                                    <td>{module.code}</td>
                                    <td>{module.name}</td>
                                    <td>{module.grade}</td>
                                </tr>
                            ) : null;
                        }
                        )}
                    </tbody>
                </Table>
            </Row>
            <Row>
                <Col className="p-2">
                    <h2 className="m-0 fw-bold">Others</h2>
                </Col>
                <Table bordered striped className="rounded">
                    <thead className="table-dark">
                        <tr>
                            <th className="w-25">Code</th>
                            <th className="">Name</th>
                            <th className="w-25">Grade</th>
                        </tr>
                    </thead>
                    <tbody className="table-light">
                        {universityModules.map((module) => {
                            return module.type === 'others' ? (
                                <tr key={module.code}>
                                    <td>{module.code}</td>
                                    <td>{module.name}</td>
                                    <td>{module.grade}</td>
                                </tr>
                            ) : null;
                        }
                        )}
                    </tbody>
                </Table>
            </Row>
        </Container>
    );
}));



export default function Knowledge({ navigator }) {
    //create a mapping object of page to its ref
    const subPageRefs = useSubPageRefMapCreator(subPages);

    //subNavBar Ref
    const subNavbarRef = useRef();


    const subNavState = useSubNavbarTrigger(navigator);

    //for quicklink functionality from homepage
    useScrollToSubpageBasedOnPath(subNavbarRef, subNavState, quickLinks, navigator, subPageRefs);

    //take note all subcomponents other than main container are set to React.memo, so as to prevent unecessary updates when the state, whcih 
    //is used for subNaavBar changes.
    return (
        <Container fluid className="h-100 p-0 knowledge">
            {subNavState && <SubNavbar ref={subNavbarRef} subPageRefs={subPageRefs.current} />}
            <Header InnerComponent={Quote} backgroundImage={headerBackgroundImage} />
            <Skills ref={subPageRefs.current.get('Skills')} />
            <UniModules ref={subPageRefs.current.get('University Modules')} />
        </Container>
    );

}