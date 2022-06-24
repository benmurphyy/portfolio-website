import { useState, useEffect, useRef, RefObject } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Icon, { Position } from 'src/components/Icon';
import {
  skills,
  SkillsSortingCriteria,
  sortingCategories,
} from 'src/pages/knowledgePage/components/SkillsSection/constants';

/**
 * Definition for object that contains the dimensions (height and width) of
 * the icons in SkillIcons.
 */
interface IconDimensions {
  width: number;
  height: number;
}

interface SkillIconsProps {
  sortMethod: string;
}

/**
 * Container for all the skill icons.
 * Takes in a sortMethod as a prop which determines layout of the skills.
 */
export default function SkillIcons({ sortMethod }: SkillIconsProps) {
  //icon dimension state variables
  //controls the heights of iconHousings and icons themselves, through props
  const [iconDimensions, setIconDimensions] = useState<IconDimensions>({
    width: 50,
    height: 50,
  });

  // map of name of skill icon to a Position object.
  // represents
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

  useEffect(() => {
    sizeIconAccordingToScreenSize();
    //event listener to change icon size when screen is resized
    window.addEventListener('resize', sizeIconAccordingToScreenSize);
    return () =>
      window.removeEventListener('resize', sizeIconAccordingToScreenSize);
  }, []);

  //sizing according to bootstrap standard sizes
  function sizeIconAccordingToScreenSize() {
    const width = window.innerWidth;
    //md and above
    if (width >= 768) {
      setIconDimensions({
        width: 80,
        height: 80,
      });
      //xs
    } else {
      setIconDimensions({
        width: 50,
        height: 50,
      });
    }
  }

  if (sortMethod === SkillsSortingCriteria.ALPHABET) {
    return (
      <Container fluid className="p-0">
        <Row className="m-0">
          {Object.keys(skills).map((skill) => (
            <Col key={skill} className="col-3 p-3">
              <Icon
                IconSvgComponent={skills[skill].icon}
                height={iconDimensions.height}
                width={iconDimensions.width}
                altText={`${skill} icon`}
                iconRef={iconsMapRef.current.get(skill)}
                previousPositionFromParent={getPreviousPosition(skill)}
              />
              <p className="fs-6 text-wrap">{skill}</p>
            </Col>
          ))}
        </Row>
      </Container>
    );
  } else {
    //render each sorting category for the matching sortingMethod
    //sortingMethod must exist as key in sortingCategories
    for (const sortingMethodKey in sortingCategories) {
      if (sortingMethodKey === sortMethod) {
        //go through each sorting cat in the array of sortingCategories for this sortingMethod
        return (
          <Container fluid className="p-0">
            {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              //@ts-ignore sortingMethodKey guaranteed to exist on sortingCategories
              sortingCategories[sortingMethodKey].map((cat) => (
                <Row key={cat} className="p-0 m-0">
                  <Row className="m-0 my-2 p-0">
                    <Col className="p-0">
                      <h4>{cat}</h4>
                    </Col>
                  </Row>
                  <Row className="m-0">
                    {Object.keys(skills).map((skill) =>
                      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                      //@ts-ignore sortingMethodKey guranteed to exist on skills[skill]
                      skills[skill][sortingMethodKey] !== cat ? null : (
                        <Col key={skill} className="col-3 p-3">
                          <Icon
                            IconSvgComponent={skills[skill].icon}
                            height={iconDimensions.height}
                            width={iconDimensions.width}
                            altText={`${skill} icon`}
                            iconRef={iconsMapRef.current.get(skill)}
                            previousPositionFromParent={getPreviousPosition(
                              skill
                            )}
                          />
                          <p className="fs-6 text-wrap">{skill}</p>
                        </Col>
                      )
                    )}
                  </Row>
                </Row>
              ))
            }
          </Container>
        );
      }
    }
    return null;
  }
}
