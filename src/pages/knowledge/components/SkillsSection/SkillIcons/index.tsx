import React, { RefObject, useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Icon, { Position } from 'src/components/Icon';
import {
  skills,
  SkillsSortingCriteria,
  sortingCategories,
} from 'src/pages/knowledge/components/SkillsSection/constants';
import { skillIconColClasses } from 'src/pages/knowledge/components/SkillsSection/SkillIcons/constants';

import styles from './styles.scss';

interface SkillIconsProps {
  sortMethod: string;
}

/**
 * Container for all the skill icons.
 * Takes in a sortMethod as a prop which determines layout of the skills.
 */
export default function SkillIcons({ sortMethod }: SkillIconsProps) {
  // map of name of skill icon to the ref containg the icon element itself
  const iconsMapRef = useRef(new Map<string, RefObject<HTMLDivElement>>());

  // for each skill icon, create a ref to the icon, to track its position
  for (const skill in skills) {
    iconsMapRef.current.set(skill, useRef<HTMLDivElement>(null));
  }

  // returns the previous position of the icon with the given skill name
  function getPreviousPosition(skill: string): Position | undefined {
    if (!iconsMapRef.current.get(skill)!.current) {
      return undefined;
    }
    return {
      top: iconsMapRef.current.get(skill)!.current!.offsetTop,
      left: iconsMapRef.current.get(skill)!.current!.offsetLeft,
    };
  }

  // contains the skillIcons, arranged depending on the sort method
  let skillIcons;
  if (sortMethod === SkillsSortingCriteria.ALPHABET) {
    skillIcons = (
      <Row>
        {Object.keys(skills)
          .sort()
          .map((skill) => (
            <Col key={skill} className={skillIconColClasses}>
              <Icon
                iconSvg={skills[skill].icon}
                altText={`${skill} icon`}
                iconRef={iconsMapRef.current.get(skill)}
                previousPositionFromParent={getPreviousPosition(skill)}
                className={styles.skillIcon}
              />
              <p className={styles.skillIconLabel}>{skill}</p>
            </Col>
          ))}
      </Row>
    );
  } else {
    for (const sortingMethodKey in sortingCategories) {
      if (sortingMethodKey === sortMethod) {
        //go through each sorting cat in the array of sortingCategories for this sortingMethod
        skillIcons =
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore sortingMethodKey guaranteed to exist on sortingCategories
          sortingCategories[sortingMethodKey].map((cat) => (
            <React.Fragment key={cat}>
              <Row>
                <Col>
                  <h4>{cat}</h4>
                </Col>
              </Row>
              <Row>
                {Object.keys(skills).map((skill) =>
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore sortingMethodKey guranteed to exist on skills[skill]
                  skills[skill][sortingMethodKey] !== cat ? null : (
                    <Col key={skill} className={skillIconColClasses}>
                      <Icon
                        iconSvg={skills[skill].icon}
                        altText={`${skill} icon`}
                        iconRef={iconsMapRef.current.get(skill)}
                        previousPositionFromParent={getPreviousPosition(skill)}
                        className={styles.skillIcon}
                      />
                      <p className={styles.skillIconLabel}>{skill}</p>
                    </Col>
                  )
                )}
              </Row>
            </React.Fragment>
          ));
      }
    }
  }

  return <Container>{skillIcons}</Container>;
}
