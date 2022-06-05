import React, { forwardRef, useRef } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { animated, useSpring } from 'react-spring';
import { useNavigate } from 'react-router-dom';
import useSubNavbarTrigger from 'src/util/custom_react_hooks/useSubNavbarTrigger';
import useSubPageRefMapCreator from 'src/util/custom_react_hooks/useSubPageRefMapCreator';
import SubNavbar from 'src/components/custom/SubNavbar';
import DownloadIcon from 'assets/icons/contact/download/download.svg';

//@ts-ignore
import homepageBackground from 'src/assets/images/homepage_background-min.jpg';
/**
 * Homepage of the website
 */

const quickLinks = require('data/quick_links.json');

function AnimatedGreeting({ springRef }) {
  const style = useSpring({
    from: {
      y: -window.innerHeight / 2,
    },
    y: 0,
    ref: springRef,
    config: {
      bounce: 1,
      tension: 600,
      friction: 13,
    },
  });
  return (
    <animated.h1 className="greeting-text" style={style}>
      Welcome!
    </animated.h1>
  );
}

//header containing the background image and initial greeting
function Header() {
  return (
    <Container
      fluid
      className="h-100 homepage-background p-0"
      style={{ backgroundImage: `url(${homepageBackground})` }}
    >
      <Row className="m-0 h-90 align-items-center justify-content-center">
        <Col>
          <AnimatedGreeting />
        </Col>
      </Row>
    </Container>
  );
}

//custom underline for the headers
function CustomLineBreaker() {
  return (
    <Container className="">
      <Row className="justify-content-center">
        <hr size="3" className="custom-line-breaker"></hr>
      </Row>
    </Container>
  );
}

//heading for subpages
function Heading({ title }) {
  return (
    <Container className="py-3">
      <Row>
        <Col>
          <h1 className="mb-2">{title}</h1>
          <CustomLineBreaker></CustomLineBreaker>
        </Col>
      </Row>
    </Container>
  );
}

//about me write up + picture
const AboutMe = forwardRef(({ springRef }, ref) => {
  const style = useSpring({
    from: {
      opacity: 0,
    },
    opacity: 1,
    config: {
      duration: 500,
    },
    ref: springRef,
  });
  const AnimatedContainer = animated(Container);
  return (
    <AnimatedContainer fluid className="py-4" ref={ref} style={style}>
      <Row>
        <Col>
          <Image
            className="portrait"
            src="assets/images/ben_photo.jpg"
            alt="portrait photo of myself"
          ></Image>
        </Col>
      </Row>
      <Row className="pt-4">
        <Col>
          <h3 className="text">
            I'm Ben, a year 2 student in the National University of Singapore
            (NUS), pursuing a Bachelor's degree (Hons) in Computer Science. I
            created this website to be a space for me to share my technical
            skills and industry experience, along with projects I've done over
            the years. Thanks for taking a look, and feel free to connect with
            me!
          </h3>
        </Col>
      </Row>
    </AnimatedContainer>
  );
});

AboutMe.displayName = 'AboutMe';

function QuickLinks() {
  const navigate = useNavigate();

  function quickLinkTrigger(quickLink) {
    navigate(quickLink.path);
  }
  return (
    <Container fluid className="pb-4 px-4 background-light-green">
      <Heading title="Quick Links" />
      <Container className="d-grid gap-2 d-sm-block">
        {quickLinks.map((quickLink) => (
          <Button
            className="quick-link-button mx-1"
            key={quickLink.name}
            style={{ backgroundColor: quickLink.buttonColor }}
            onClick={() => quickLinkTrigger(quickLink)}
          >
            {quickLink.name}
          </Button>
        ))}
      </Container>
    </Container>
  );
}

//to return specific contact icon
function ContactIconSelector({ IconSVGComponent }) {
  return <IconSVGComponent />;
}

const Contact = forwardRef((props, ref) => {
  return (
    <Container fluid ref={ref}>
      <Heading title="Contact" />
      <Row>
        {contacts.map((contact) => (
          <Col className="p-0" key={contact.name}>
            <a href={contact.link} target="_blank" rel="noreferrer">
              <Container className="contact-icon p-0">
                <ContactIconSelector IconSVGComponent={contact.icon} />
              </Container>
            </a>
          </Col>
        ))}
      </Row>
      <Row className="p-4 justify-content-evenly">
        {downloads.map((document) => (
          <Col className="p-0 m-2 col-sm-4 col-xl-3" key={document.name}>
            <a
              className="document-download-link"
              href={document.link}
              target="_blank"
              rel="noreferrer"
              download
            >
              <Container className="p-1 rounded-3 download-document-container">
                <Row>
                  <Col>
                    <h4>{document.name}</h4>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Container className="download-document-icon">
                      <DownloadIcon />
                    </Container>
                  </Col>
                </Row>
              </Container>
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  );
});

export default function Homepage({ navigator }) {
  const subPageRefs = useSubPageRefMapCreator(subPages);
  const subNavState = useSubNavbarTrigger(navigator);
  const subNavbarRef = useRef();
  return (
    <Container fluid className="p-0 h-100">
      {subNavState && (
        <SubNavbar ref={subNavbarRef} subPageRefs={subPageRefs.current} />
      )}
      <Header />
      <AboutMe ref={subPageRefs.current.get('About Me')} />
      <QuickLinks />
      <Contact ref={subPageRefs.current.get('Contact')} />
    </Container>
  );
}
