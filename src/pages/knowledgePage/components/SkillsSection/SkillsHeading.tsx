import { animated, useSpring } from '@react-spring/web';
import { Container, Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import { skillsSortingCriteriaDetails } from 'src/pages/knowledgePage/components/SkillsSection/constants';

interface SkillsHeaderProps {
  // callback for when the sorting method is changed in header
  setSortMethodCallback: (newSortCriteria: string) => void;
}
/**
 * Header for the skills section.
 */
export default function SkillsHeader({
  setSortMethodCallback,
}: SkillsHeaderProps) {
  const AnimatedContainer = animated(Container);
  const [style, api] = useSpring(() => ({
    backgroundColor: skillsSortingCriteriaDetails.alphabet.backgroundColor,
  }));

  // handler for clicking of sort critieria buttons
  function onButtonClick(sortMethod: string) {
    api.start({
      backgroundColor: skillsSortingCriteriaDetails[sortMethod].backgroundColor,
    });
    setSortMethodCallback(sortMethod);
  }

  return (
    <AnimatedContainer className="p-0" style={style}>
      <Row className="m-0 pt-2">
        <Col>
          <h3 className="fw-bold">Sort By</h3>
        </Col>
      </Row>
      <Row className="justify-content-center pb-2 m-0">
        <Col>
          <ButtonGroup>
            {Object.keys(skillsSortingCriteriaDetails).map((sortMethod) => (
              <Button
                className="sortButton"
                key={sortMethod}
                onClick={() => onButtonClick(sortMethod)}
              >
                {skillsSortingCriteriaDetails[sortMethod].title}
              </Button>
            ))}
          </ButtonGroup>
        </Col>
      </Row>
    </AnimatedContainer>
  );
}
