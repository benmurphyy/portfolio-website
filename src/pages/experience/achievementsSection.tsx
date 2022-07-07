import { ForwardedRef, forwardRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
//list of achievements
import achievementsList from 'src/assets/data/achievements.json';
import SectionHeader from 'src/components/SectionHeader';

/**
 * Achievements section on experience page.
 */
const AchievementsSection = forwardRef(function (
  _,
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <Container ref={ref}>
      <SectionHeader title="Achievements"></SectionHeader>
      <Container>
        <Row>
          <Col>
            <ul className="achievements-list">
              {achievementsList.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
});

AchievementsSection.displayName = 'AchievementSubPage';

export default AchievementsSection;
