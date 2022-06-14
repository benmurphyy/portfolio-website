import React, { forwardRef, useState, useEffect, ForwardedRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

//array of career experience objects, with 4 keys
//1) Title
//2) Company
//3) Duration
//4) Summary - an array in itself of bulleted points
import careerExperienceData from 'src/assets/data/career_experience.json';
import { careerExperienceFontResizeBreakpoint } from 'src/pages/experiencePage/constants';
// want it in descendng order of date added, hence reverse the entry order, so latest entries
// will be shown first
const careerExperiences = careerExperienceData.reverse();

/**
 * Career experience subpage of experience page.
 */
const CareerExperienceSubpage = forwardRef(function (
  _,
  ref: ForwardedRef<HTMLDivElement>
) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function windowResizeAction() {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', windowResizeAction);
  });
  return (
    <Container fluid className="background-grunge" ref={ref}>
      <Row className="heading-background color py-2">
        <Col>
          <h1 className="display-5">Career Experience</h1>
        </Col>
      </Row>
      {careerExperiences.map((career) => (
        <Container fluid="md" className="py-2" key={career.Company}>
          <Row>
            <Col className="d-flex align-items-center p-0">
              {windowWidth < careerExperienceFontResizeBreakpoint ? (
                <h5 className="career-title-and-company fw-bold">
                  {career.Title + ', ' + career.Company}
                </h5>
              ) : (
                <h3 className="career-title-and-company fw-bold">
                  {career.Title + ', ' + career.Company}
                </h3>
              )}
            </Col>
            <Col className="d-flex align-items-center justify-content-center p-0 col-lg-4">
              {windowWidth < careerExperienceFontResizeBreakpoint ? (
                <h5 className="career-duration fw-bold">{career.Duration}</h5>
              ) : (
                <h3 className="career-duration fw-bold">{career.Duration}</h3>
              )}
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col className="p-0">
              <ul className="career-summary-list">
                {career.Summary.map((point) => (
                  <li key={point} className="fs-5">
                    {point}
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      ))}
    </Container>
  );
});

CareerExperienceSubpage.displayName = 'CareerExperienceSubpage';
export default CareerExperienceSubpage;
