/* eslint-disable react/no-unescaped-entities */
import { forwardRef, useState, useEffect, ForwardedRef } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

//array of project data objects - consisting of Title and Description
import Icon from 'src/components/Icon';
import { projects } from 'src/pages/experiencePage/constants';

/**
 * Projects subpage of experience page.
 */
const ProjectsSubpage = forwardRef(function (
  _,
  ref: ForwardedRef<HTMLDivElement>
) {
  const [iconHeight, setIconHeight] = useState(80);
  const [iconWidth, setIconWidth] = useState(80);
  useEffect(() => {
    //event listener to change icon size when screen is resized
    window.addEventListener('resize', sizeIconAccordingToScreenSize);
    return () =>
      window.removeEventListener('resize', sizeIconAccordingToScreenSize);
  });

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

  sizeIconAccordingToScreenSize();

  return (
    <Container fluid className=" background-grunge" ref={ref}>
      <Row className="heading-background py-2">
        <Col>
          <h1 className="display-5">Projects</h1>
        </Col>
      </Row>
      <Row>
        <Col className="p-0">
          <Container fluid className="projects-header-background">
            <Row className="justify-content-end">
              <Col className="d-flex flex-column justify-content-center">
                <Container className="background-grunge my-5 p-2 rounded">
                  <h1 className="fw-bold">A Short Write-Up.</h1>
                  <Container className="w-15">
                    <hr className="projects-description-header-linebreak"></hr>
                  </Container>
                  <p className="fs-5 short-writeup-text">
                    I've always been interested in electronic projects from a
                    young age, and programming projects extend nicely from
                    there. I'm always keen to try out new technologies, and see
                    what I can build from them. Every technical project involves
                    problem solving - which I enjoy. Being a person with
                    interests in many things technology, I have a varied array
                    of projects under my belt - not just limited to software
                    development. So here's just a collection of projects I would
                    like to share.
                  </p>
                </Container>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <Row className="">
        {projects.map((project) => (
          <Col
            key={project.title}
            className="d-flex py-4 col-12 col-md-6 col-lg-6 col-xl-4"
          >
            <Card className="w-100">
              <Card.Header className="project-card-header-background">
                <Container fluid className="p-0">
                  <Row>
                    <Col className="p-2">
                      <Icon
                        IconSvgComponent={project.icon}
                        height={iconHeight}
                        width={iconWidth}
                        altText={`${project}`}
                      />
                    </Col>
                    <Col className="d-flex align-items-center justify-content-center">
                      <h3 className="fw-bold">{project.title}</h3>
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
                <h5>Description</h5>
                <Container className="w-25">
                  <hr className="projects-description-header-linebreak"></hr>
                </Container>
                <Card.Text
                  className="text-start"
                  style={{ whiteSpace: 'pre-wrap' }}
                >
                  {project.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
});

ProjectsSubpage.displayName = 'ProjectsSubpage';
export default ProjectsSubpage;
