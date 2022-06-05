import React, { forwardRef, useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";

/**
 * Career experience page.
 */

//array of career experience objects, with 4 keys
//1) Title
//2) Company
//3) Duration
//4) Summary - an array in itself of bulleted points
const careerExperiences = require('data/career_experience.json').reverse();

const Career = forwardRef(function(props, ref) {
    const fontResizeBreakpoint = 576; //the same as boostrap sm breakpoint
    const [ windowWidth, setWindowWidth ] = useState(window.innerWidth);

    function windowResizeAction() {
        setWindowWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', windowResizeAction);
    }    

    )
    return (
        <Container fluid className="background-grunge" ref={ref} >
            <Row className="heading-background color py-2">
                <Col>
                    <h1 className="display-5">Career Experience</h1>
                </Col>
            </Row>
            {careerExperiences.map(career =>
            (
                <Container fluid="md" className="py-2" key={career.Company}>
                    <Row>
                        <Col className="d-flex align-items-center p-0">
                            {windowWidth < fontResizeBreakpoint ? <h5 className="career-title-and-company fw-bold">{career.Title + ", " + career.Company}</h5> :
                                <h3 className="career-title-and-company fw-bold">{career.Title + ", " + career.Company}</h3>  
                            }
                        </Col>
                        <Col className="d-flex align-items-center justify-content-center p-0 col-lg-4">
                            {windowWidth < fontResizeBreakpoint ? <h5 className="career-duration fw-bold">{career.Duration}</h5> :
                                <h3 className="career-duration fw-bold">{career.Duration}</h3>} 
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col className="p-0">
                            <ul className="career-summary-list">
                                {career.Summary.map(point =>
                                    <li key={point} className="fs-5">{point}</li>
                                )}
                            </ul>
                        </Col>
                    </Row>
                </Container>
            )
            )}
        </Container>
    )
});

//use React.memo to prevent unecessary rerenders from expereince component
export default React.memo(Career);