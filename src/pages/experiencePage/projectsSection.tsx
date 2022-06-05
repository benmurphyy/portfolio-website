import React, { forwardRef , useState, useEffect } from "react";
import { Container, Row, Col, Card} from "react-bootstrap";
import { ReactComponent as BjmIcon } from 'assets/icons/projects/bjm.svg';
import { ReactComponent as ThreeDPrintIcon } from 'assets/icons/projects/3d_printing.svg';
import { ReactComponent as AlexaIcon } from 'assets/icons/projects/alexa.svg';
import { ReactComponent as PongIcon } from 'assets/icons/projects/pong.svg';
import { ReactComponent as TelegramIcon } from 'assets/icons/projects/telegram.svg';

/**
 * Projects page.
 */


//array of project data objects - consisting of Title and Description
const projectList = require('data/projects.json');

//project title to icons mapping
const projectToIconsMap = new Map();
projectToIconsMap.set("This Webpage", BjmIcon);
projectToIconsMap.set("Thinking in 3 Dimensions", ThreeDPrintIcon);
projectToIconsMap.set("Smart Room", AlexaIcon);
projectToIconsMap.set("Fridge View Bot", TelegramIcon);
projectToIconsMap.set("Pong Connect", PongIcon);


function IconContainer({ IconComponent, iconHeight, iconWidth }) {
    return (
        <Container className="p-0" style={{ height: iconHeight, width: iconWidth }}>
            <IconComponent />
        </Container>
    );
}

const Projects = forwardRef(function (props, ref) {
    const [ iconHeight, setIconHeight ] = useState();
    const [ iconWidth, setIconWidth ] = useState();
    useEffect(() => {
        sizeIconAccordingToScreenSize();
        //event listener to change icon size when screen is resized
        window.addEventListener('resize', sizeIconAccordingToScreenSize);
        return (() => window.removeEventListener('resize', sizeIconAccordingToScreenSize));
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
                                    <h1 className="fw-bold">
                                        A Short Write-Up.
                                    </h1>
                                    <Container className="w-15">
                                        <hr size="3" className="projects-description-header-linebreak"></hr>
                                    </Container>
                                    <p className="fs-5 short-writeup-text">
                                        I've always been interested in electronic projects from a young age, and programming projects extend nicely from there.
                                        I'm always keen to try out new technologies, and see what I can build from them. Every technical project involves problem solving - which I enjoy. Being a person with interests in many things technology, I have a varied array of projects
                                        under my belt - not just limited to software development. So here's just a collection of projects I would like to share.
                                    </p>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
            <Row className="">
            {
                projectList.map(project => (
                    <Col key={project.Title} className="d-flex py-4 col-12 col-md-6 col-lg-6 col-xl-4">
                        <Card className="w-100">
                            <Card.Header className="project-card-header-background">
                                <Container fluid className="p-0">
                                    <Row>
                                        <Col className="p-2">
                                            <IconContainer IconComponent={projectToIconsMap.get(project.Title)} iconHeight={iconHeight} iconWidth={iconWidth}/>
                                        </Col>
                                        <Col className="d-flex align-items-center justify-content-center">
                                            <h3 className="fw-bold">
                                                {project.Title}
                                            </h3>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title className="fw-bold mb-3">{project.Subtitle}</Card.Title>
                                <ul className="text-start">
                                    {project.Summary.map(point => 
                                        <li key={point}>{point}</li>
                                    )}
                                </ul>
                                <h5>Description</h5>
                                <Container className="w-25">
                                    <hr size="3" className="projects-description-header-linebreak"></hr>
                                </Container>
                                <Card.Text className="text-start" style={{whiteSpace: "pre-wrap"}}>{project.Description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))
            }
            </Row>
        </Container>
    )
});

//use React.memo to prevent unecessary rerenders from expereince component
export default React.memo(Projects);