import { ForwardedRef, forwardRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

//list of achievements
import achievementsList from 'src/assets/data/achievements.json';

/**
 * Achievements subpage on experience page.
 */
const AchievementsSubpage = forwardRef(function (
  _,
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <Container ref={ref} fluid className="background-grunge">
      <Row className="heading-background justify-content-center p-0 py-2">
        <Col className="">
          <h1 className="display-5">Achievements</h1>
        </Col>
      </Row>
      <Container fluid="md" className="py-2">
        <Row className="p-0">
          <Col className="p-0">
            <ul className="achievements-list">
              {achievementsList.map((achievement) => (
                <li key={achievement} className="fs-5">
                  {achievement}
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
});

AchievementsSubpage.displayName = 'AchievementSubPage';
export default AchievementsSubpage;
//use React.memo to prevent unecessary rerenders from expereince component
