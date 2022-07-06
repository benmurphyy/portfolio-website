import { useState } from 'react';
import { Button, ButtonGroup, Col, Container, Row } from 'react-bootstrap';
import {
  SkillsSortingCriteria,
  skillsSortingCriteriaDetails,
} from 'src/pages/knowledge/components/SkillsSection/constants';

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
  const [currentSort, setCurrentSort] = useState<SkillsSortingCriteria>(
    SkillsSortingCriteria.ALPHABET
  );
  // handler for clicking of sort critieria buttons
  function onButtonClick(sortMethod: SkillsSortingCriteria) {
    setSortMethodCallback(sortMethod);
    setCurrentSort(sortMethod);
  }

  return (
    <Container className="my-2">
      <Row className="justify-content-center">
        <Col className="col-auto">
          <h3>Sort By:</h3>
        </Col>
        <Col className="col-auto">
          <ButtonGroup>
            {(
              Object.keys(
                skillsSortingCriteriaDetails
              ) as SkillsSortingCriteria[]
            ).map((sortMethod) => (
              <Button
                key={sortMethod}
                onClick={() => onButtonClick(sortMethod)}
                variant="outline-secondary"
                active={currentSort === sortMethod}
              >
                {skillsSortingCriteriaDetails[sortMethod].title}
              </Button>
            ))}
          </ButtonGroup>
        </Col>
      </Row>
    </Container>
  );
}
