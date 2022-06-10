import { useSpring, animated } from '@react-spring/web';
import React, {
  forwardRef,
  RefObject,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Container, Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import { SkillsSortingCriteria } from 'src/pages/knowledgePage/constants';

/**
 * Prop types definition for the Icon component.
 */
type IconProps = {
  IconSVG: React.ElementType;
  // accessibility text
  altText: string;
  // a ref containing a object that has SkillSortingCritiria as keys, and the refs to the corresponding icon housing refs as values
  iconHousingRefs: {
    [key in SkillsSortingCriteria]: RefObject<HTMLDivElement>;
  };
  height: number;
  width: number; 
}

/**
 * Prop types definition for the IconSVG component, just an extension of IconProps.
 */
type IconSVGComponentProps = 
  IconProps & 
  {passSortIconFuncBackToParent: (
    sortFunc: (newSort: SkillsSortingCriteria) => void
) => void;}

/**
 * Icon component contains the actual icon SVG, and it controls the animation and positioning of the actual icon SVG.
 * It is wrapped in a react.memo to avoid unecessary rerenders which would prevent the animation.
 */
const IconSVGComponent = React.memo(({
  IconSVG,
  altText,
  iconHousingRefs,
  height,
  width,
  passSortIconFuncBackToParent,
}: IconSVGComponentProps) => {
  const AnimatedIcon = animated(IconSVG);
  //use ref for the icon poisition indicator to avoid rerenders -> this is the position according to sortMethod
  //height and width state variables for setting this height and width to the height and width of the bounding icon housings
  //this way to control the size of our icons on our page, we just control the size of the icon housings
  const position = useRef(SkillsSortingCriteria.ALPHABET);

  const [style, api] = useSpring(() => ({
    top: 0,
    left: 0,
  }));

  // sets the position of the icon without any animation. This is used for position initialization and window resizing
  function setPosition() {
    api.set({
      top: iconHousingRefs[position.current].current!.offsetTop,
      left: iconHousingRefs[position.current].current!.offsetLeft,
    });
  }

  // change position of icon depending on the sort method to change to
  const sortIcons = (sortingMethod: SkillsSortingCriteria) => {
    position.current = sortingMethod;
    api.start({
      top: iconHousingRefs[position.current].current!.offsetTop,
      left: iconHousingRefs[position.current].current!.offsetLeft,
    });
  };

  //TODO: bug check
  passSortIconFuncBackToParent(sortIcons);

  useEffect(() => {
    setPosition();

    // set up the window resize listeners to move icon to its housing position when window is resized
    window.addEventListener('resize', setPosition);
    return () => window.removeEventListener('resize', setPosition);
  });

  return (
    <AnimatedIcon
      alt={altText + ' Icon'}
      className="skillIcon"
      style={{
        top: style.top,
        left: style.left,
        height: height,
        width: width,
      }}
    />
  );
})

IconSVGComponent.displayName = "IconSVGComponent";

/**
 * Serves as the housing container for the actual Icon component. The position,  of IconHousing components 
 * effectively determines the position of the the actual Icon components
 */
const Icon = forwardRef(
  (
    {
      height,
      width,
      IconSVGComponent,
      altText,
      iconHousingRefs,
    }: ,
    ref
  ) => {
    return (
      <Container
        className="iconHousing"
        ref={ref}
        style={{
          height: height,
          width: width,
        }}
      />
    );
  }
);

IconHousing.displayName = "IconHousing";

function Heading({ setSortMethod }) {
  const backgroundColours = {
    Alphabet: '#EEF4D4',
    Type: '#DAEFB3',
    Proficiency: '#EA9E8D',
  };
  const AnimatedContainer = animated(Container);
  const [style, api] = useSpring(() => ({
    backgroundColor: backgroundColours.Alphabet,
  }));

  function onButtonClick(sortMethod) {
    api.start({
      backgroundColor: backgroundColours[sortMethod],
    });
    setSortMethod(sortMethod);
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
            {sortingCriteria.map((sortMethod) => (
              <Button
                className="sortButton"
                key={sortMethod}
                onClick={() => onButtonClick(sortMethod)}
              >
                {sortMethod}
              </Button>
            ))}
          </ButtonGroup>
        </Col>
      </Row>
    </AnimatedContainer>
  );
}

function SkillIcons({ sortMethod }) {
  const iconHousings = {};
  const iconCallbacks = new Map();
  for (const skill in skills) {
    //set up the object of skills to their object of refs for each sorted type
    iconHousings[skill] = {};
    for (const sortingMethod of sortingCriteria) {
      //ref object for each sorted position of icon housing for each icon
      iconHousings[skill][sortingMethod] = { current: null };
    }
  }

  //create a ref object for all the icon housing refs
  const iconHousingRefs = useRef(iconHousings);
  //ref object for all icon change position callbacks
  const iconChangePositionCallbacks = useRef(iconCallbacks);

  function iconChangePositionCallbackFunc(skill, callback) {
    //set the position change callback of the icon
    iconChangePositionCallbacks.current.set(skill, callback);
  }
  //wrap iconChangepositionCallbackFunc in a ref, so it doesnet get redeclared across renders, so that we do not unecessarily rerender
  //the IconWrapper, due to change in this function which achieves nothing.
  const iconChangePositionCallback = useRef(iconChangePositionCallbackFunc);

  //icon dimension state variables
  //controls the heights of iconHousings and icons themselves, through props
  const [iconHeight, setIconHeight] = useState();
  const [iconWidth, setIconWidth] = useState();

  useEffect(() => {
    sizeIconAccordingToScreenSize();
    //event listener to change icon size when screen is resized
    window.addEventListener('resize', sizeIconAccordingToScreenSize);
    return () =>
      window.removeEventListener('resize', sizeIconAccordingToScreenSize);
  });

  //trigger the iconChangeposition callbacks for each icon only when the sort method changes

  //sizing according to bootstrap standard sizes
  function sizeIconAccordingToScreenSize() {
    const width = window.innerWidth;
    //md and above
    if (width >= 992) {
      setIconHeight(100);
      setIconWidth(100);
      //sm
    } else if (width >= 768) {
      setIconHeight(80);
      setIconWidth(80);
      //xs
    } else {
      setIconHeight(50);
      setIconWidth(50);
    }
  }

  const skillContainerRef = useRef();
  return (
    <Container ref={skillContainerRef} className="skills p-0">
      <IconsWrapper
        skillContainerRef={skillContainerRef}
        iconHousingRefs={iconHousingRefs}
        height={iconHeight}
        width={iconWidth}
        callbackToPassChangePositionToParent={
          iconChangePositionCallback.current
        }
      />
      <SkillContainerIconHousings
        iconChangePositionCallbacksRef={iconChangePositionCallbacks}
        iconHeight={iconHeight}
        iconWidth={iconWidth}
        sortingMethod={sortMethod}
        iconHousingRefs={iconHousingRefs}
      />
    </Container>
  );
}

function SkillContainerIconHousings({
  iconHeight,
  iconWidth,
  sortingMethod,
  iconHousingRefs,
  iconChangePositionCallbacksRef,
}) {
  useEffect(() => {
    for (const skill in skills) {
      iconChangePositionCallbacksRef.current.get(skill)(sortingMethod);
    }
  }, [sortingMethod, iconChangePositionCallbacksRef]);

  if (sortingMethod === 'Alphabet') {
    return (
      <Container fluid className="p-0">
        <Row className="m-0">
          {Object.keys(skills).map((skill) => (
            <Col key={skill} className="col-3 p-3">
              <IconHousing
                ref={iconHousingRefs.current[skill][sortingMethod]}
                height={iconHeight}
                width={iconWidth}
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
      if (sortingMethodKey === sortingMethod) {
        //go through each sorting cat in the array of sortingCategories for this sortingMethod
        return (
          <Container fluid className="p-0">
            {sortingCategories[sortingMethodKey].map((cat) => (
              <Row key={cat} className="p-0 m-0">
                <Row className="m-0 my-2 p-0">
                  <Col className="p-0">
                    <h4>{cat}</h4>
                  </Col>
                </Row>
                <Row className="m-0">
                  {Object.keys(skills).map((skill) =>
                    skills[skill][sortingMethodKey] !== cat ? null : (
                      <Col key={skill} className="col-3 p-3">
                        <IconHousing
                          ref={iconHousingRefs.current[skill][sortingMethodKey]}
                          height={iconHeight}
                          width={iconWidth}
                        />
                        <p className="fs-6 text-wrap">{skill}</p>
                      </Col>
                    )
                  )}
                </Row>
              </Row>
            ))}
          </Container>
        );
      }
    }
  }
}

const Skills = forwardRef((props, ref) => {
  const [sortMethod, setSortMethod] = useState('Alphabet');
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
export default React.memo(Skills);
