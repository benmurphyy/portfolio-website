import React, { forwardRef, useState, useEffect, ForwardedRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import careerExperienceData from 'src/assets/data/career_experience.json';
import SectionHeader from 'src/components/SectionHeader';

// reverse the order of career experience entries, so that most recently entered are shown first
const careerExperiences = careerExperienceData.reverse();

/**
 * Career experience section of experience page.
 */
const CareerExperienceSection = forwardRef(function (
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
    <Container ref={ref}>
      <SectionHeader title="Career Experience"></SectionHeader>
      {careerExperiences.map((career) => (
        <Container key={career.Company}>
          <Row className="gx-2 justify-content-between">
            <Col className="col-12 col-md-auto d-flex">
              <h5 className="fw-bold">
                {career.Title + ', ' + career.Company}
              </h5>
            </Col>
            <Col className="col-auto">
              <h6>{career.Duration}</h6>
            </Col>
          </Row>
          <Row>
            <Col>
              <ul className="career-summary-list">
                {career.Summary.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      ))}
    </Container>
  );
});

CareerExperienceSection.displayName = 'CareerExperienceSubpage';
export default CareerExperienceSection;
