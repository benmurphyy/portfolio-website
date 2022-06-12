import { useSpring, animated } from '@react-spring/web';
import React, {
  forwardRef,
  RefObject,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Container, Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import Icon from 'src/components/Icon';
import Heading from 'src/pages/homePage/components/CustomLineBreaker';
import { skills, SkillsSortingCriteria, sortingCategories } from 'src/pages/knowledgePage/constants';



export default const SkillsSection = forwardRef((props, ref) => {
  const [sortMethod, setSortMethod] = useState("alphabet");
  return (
    <Container fluid className="background-grunge" ref={ref}>
      <Row>
        <Heading setSortMethod={setSortMethod} />
      </Row>
      <Row>
        <SkillIcons sortMethod={sortMethod} />
      </Row>
      <Row></Row>
    </Container>
  );
});

//we dont want this component being unecessarily rerendered upon irrelevant state change in parent that dosent affect it.
