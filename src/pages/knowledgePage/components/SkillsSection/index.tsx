import { ForwardedRef, forwardRef, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SectionHeader from 'src/components/SectionHeader';
import SkillIcons from 'src/pages/knowledgePage/components/SkillsSection/SkillIcons';
import SkillsHeader from 'src/pages/knowledgePage/components/SkillsSection/SkillsHeader';

const SkillsSection = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  const [sortMethod, setSortMethod] = useState('alphabet');
  return (
    <Container className="background-grunge" ref={ref}>
      <SectionHeader title="Skills" isHiddenOnPhone />
      <Row>
        <SkillsHeader setSortMethodCallback={setSortMethod} />
      </Row>
      <Row>
        <SkillIcons sortMethod={sortMethod} />
      </Row>
    </Container>
  );
});

SkillsSection.displayName = 'SkillsSection';

export default SkillsSection;
