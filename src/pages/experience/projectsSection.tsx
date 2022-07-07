/* eslint-disable react/no-unescaped-entities */
import { ForwardedRef, forwardRef, useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
//array of project data objects - consisting of Title and Description
import Icon from 'src/components/Icon';
import SectionHeader from 'src/components/SectionHeader';
import { projects } from 'src/pages/experience/constants';

/**
 * Projects section of experience page.
 */
const ProjectsSection = forwardRef(function (
  _,
  ref: ForwardedRef<HTMLDivElement>
) {
  const [iconHeight, setIconHeight] = useState(80);
  const [iconWidth, setIconWidth] = useState(80);
  useEffect(() => {
    sizeIconAccordingToScreenSize();
    //event listener to change icon size when screen is resized
    window.addEventListener('resize', sizeIconAccordingToScreenSize);
    return () =>
      window.removeEventListener('resize', sizeIconAccordingToScreenSize);
  }, []);
  //sizing according to bootstrap standard sizes
  function sizeIconAccordingToScreenSize() {
    const width = window.innerWidth;
    //md and above
    if (width >= 992) {
      setIconHeight(100);
      setIconWidth(100);
    } else {
      setIconHeight(80);
      setIconWidth(80);
    }
  }

  return (
    <Container ref={ref}>
      <SectionHeader title="Projects" isHiddenOnPhone></SectionHeader>
      <Row className="justify-content-end pt-2">
        <Col className="d-flex flex-column justify-content-center">
          <h2>A Short Write-Up.</h2>
          <hr className="mt-0 mb-2"></hr>
          <p>
            I've always been interested in electronic projects from a young age,
            and programming projects extend nicely from there. I'm always keen
            to try out new technologies, and see what I can build from them.
            Every technical project involves problem solving - which I enjoy. As
            a person with interests in many things technology, I have a varied
            array of projects under my belt - not just limited to software
            development. So here's just a collection of projects I would like to
            share.
          </p>
        </Col>
      </Row>

      <Row className="">
        {projects.map((project) => (
          <Col key={project.title} className="d-flex g-3 col-12 col-lg-6">
            <Card className="w-100">
              <Card.Header>
                <Container fluid className="p-0">
                  <Row>
                    <Col className="col-auto">
                      <Icon
                        iconSvg={project.icon}
                        height={iconHeight}
                        width={iconWidth}
                        altText={`${project}`}
                      />
                    </Col>
                    <Col className="d-flex align-items-center justify-content-center">
                      <h3 className="fw-bold text-center">{project.title}</h3>
                    </Col>
                  </Row>
                </Container>
              </Card.Header>
              <Card.Body>
                <Card.Title className="fw-bold mb-3">
                  {project.subtitle}
                </Card.Title>
                <ul className="text-start">
                  {project.summary.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                {project.repository && (
                  <Card.Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.repository}
                  >
                    Repository
                  </Card.Link>
                )}
                <div className="py-1">
                  <hr className="w-25 mx-auto"></hr>
                </div>
                <h5>Description</h5>
                <Card.Text>{project.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
});

ProjectsSection.displayName = 'ProjectsSubpage';
export default ProjectsSection;
