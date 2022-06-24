import { ForwardedRef, forwardRef, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SkillIcons from 'src/pages/knowledgePage/components/SkillsSection/SkillIcons';
import SkillsHeading from 'src/pages/knowledgePage/components/SkillsSection/SkillsHeading';

const SkillsSection = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  const [sortMethod, setSortMethod] = useState('alphabet');
  return (
    <Container fluid className="background-grunge" ref={ref}>
      <Row>
        <SkillsHeading setSortMethodCallback={setSortMethod} />
      </Row>
      <Row>
        <SkillIcons sortMethod={sortMethod} />
      </Row>
      <Row></Row>
    </Container>
  );
});

SkillsSection.displayName = 'SkillsSection';

export default SkillsSection;
