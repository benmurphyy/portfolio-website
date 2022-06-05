import { useSpring, animated } from 'react-spring';
import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { Container, Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import { ReactComponent as ArduinoIcon } from 'assets/icons/skills/arduino/arduino-original.svg';
import { ReactComponent as BashIcon } from 'assets/icons/skills/bash/bash-original.svg';
import { ReactComponent as BootstrapIcon } from 'assets/icons/skills/bootstrap/bootstrap-original.svg';
import { ReactComponent as CIcon } from 'assets/icons/skills/c/c-original.svg';
import { ReactComponent as CSSIcon } from 'assets/icons/skills/css3/css3-original.svg';
import { ReactComponent as DockerIcon } from 'assets/icons/skills/docker/docker-original.svg';
import { ReactComponent as GitIcon } from 'assets/icons/skills/git/git-original.svg';
import { ReactComponent as HTMLIcon } from 'assets/icons/skills/html5/html5-original.svg';
import { ReactComponent as JavaIcon } from 'assets/icons/skills/java/java-original.svg';
import { ReactComponent as JavascriptIcon } from 'assets/icons/skills/javascript/javascript-original.svg';
import { ReactComponent as KotlinIcon } from 'assets/icons/skills/kotlin/kotlin-original.svg';
import { ReactComponent as LinuxIcon } from 'assets/icons/skills/linux/linux-original.svg';
import { ReactComponent as LuaIcon } from 'assets/icons/skills/lua/lua-original.svg';
import { ReactComponent as MySqlIcon } from 'assets/icons/skills/mysql/mysql-original.svg';
import { ReactComponent as NodeJSIcon } from 'assets/icons/skills/nodejs/nodejs-original.svg';
import { ReactComponent as PythonIcon } from 'assets/icons/skills/python/python-original.svg';
import { ReactComponent as RaspberryPiIcon } from 'assets/icons/skills/raspberrypi/raspberrypi-original.svg';
import { ReactComponent as ReactIcon } from 'assets/icons/skills/react/react-original.svg';
import { ReactComponent as SpringIcon } from 'assets/icons/skills/spring/spring-original.svg';
import { ReactComponent as UnixIcon } from 'assets/icons/skills/unix/unix-original.svg';
import { ReactComponent as VimIcon } from 'assets/icons/skills/vim/vim-original.svg';
import { ReactComponent as VscodeIcon } from 'assets/icons/skills/vscode/vscode-original.svg';
import { ReactComponent as YarnIcon } from 'assets/icons/skills/yarn/yarn-original.svg';
import { ReactComponent as TypescriptIcon } from 'assets/icons/skills/typescript/typescript.svg';
import { ReactComponent as WebpackIcon } from 'assets/icons/skills/webpack/webpack.svg';
import { ReactComponent as VueJsIcon } from 'assets/icons/skills/vuejs/vuejs.svg';
import { ReactComponent as PostgreSQLIcon } from 'assets/icons/skills/postgresql/postgresql.svg';

const skills = {
    'Arduino':
    {
        icon: ArduinoIcon,
        Type: 'Miscellaneous',
        Proficiency: 'Fair'
    },
    'Bash':
    {
        icon: BashIcon,
        Type: 'Miscellaneous',
        Proficiency: 'High'
    },
    'Bootstrap':
    {
        icon: BootstrapIcon,
        Type: 'Miscellaneous',
        Proficiency: 'High'
    },
    'C':
    {
        icon: CIcon,
        Type: 'Programming Languages',
        Proficiency: 'High'
    },
    'CSS':
    {
        icon: CSSIcon,
        Type: 'Miscellaneous',
        Proficiency: 'High'
    },
    'Docker':
    {
        icon: DockerIcon,
        Type: 'Miscellaneous',
        Proficiency: 'Fair'
    },
    'Git':
    {
        icon: GitIcon,
        Type: 'Miscellaneous',
        Proficiency: 'High'
    },
    'HTML':
    {
        icon: HTMLIcon,
        Type: 'Miscellaneous',
        Proficiency: 'High'
    },
    'Java':
    {
        icon: JavaIcon,
        Type: 'Programming Languages',
        Proficiency: 'Very High'
    },
    'Javascript':
    {
        icon: JavascriptIcon,
        Type: 'Programming Languages',
        Proficiency: 'High'
    },
    'Kotlin':
    {
        icon: KotlinIcon,
        Type: 'Programming Languages',
        Proficiency: 'Fair'
    },
    'Linux':
    {
        icon: LinuxIcon,
        Type: 'Miscellaneous',
        Proficiency: 'High'
    },
    'Lua':
    {
        icon: LuaIcon,
        Type: 'Programming Languages',
        Proficiency: 'Fair'
    },
    'MySql':
    {
        icon: MySqlIcon,
        Type: 'Miscellaneous',
        Proficiency: 'Fair'
    },
    'NodeJS':
    {
        icon: NodeJSIcon,
        Type: 'Libraries, Runtimes & Frameworks',
        Proficiency: 'Fair'
    },
    'Python':
    {
        icon: PythonIcon,
        Type: 'Programming Languages',
        Proficiency: 'Very High'
    },
    'Raspberry Pi':
    {
        icon: RaspberryPiIcon,
        Type: 'Miscellaneous',
        Proficiency: 'Fair'
    },
    'React':
    {
        icon: ReactIcon,
        Type: 'Libraries, Runtimes & Frameworks',
        Proficiency: 'Very High'
    },
    'Spring':
    {
        icon: SpringIcon,
        Type: 'Libraries, Runtimes & Frameworks',
        Proficiency: 'High'
    },
    'Unix':
    {
        icon: UnixIcon,
        Type: 'Miscellaneous',
        Proficiency: 'High'
    },
    'Vim':
    {
        icon: VimIcon,
        Type: 'Miscellaneous',
        Proficiency: 'High'
    },
    'VSCode':
    {
        icon: VscodeIcon,
        Type: 'Miscellaneous',
        Proficiency: 'High'
    },
    'Yarn':
    {
        icon: YarnIcon,
        Type: 'Miscellaneous',
        Proficiency: 'High'
    },
    'Typescript':
    {
        icon: TypescriptIcon,
        Type: 'Programming Languages',
        Proficiency: 'High'
    },
    'Webpack':
    {
        icon: WebpackIcon,
        Type: 'Miscellaneous',
        Proficiency: 'High'
    },
    'Vuejs':
    {
        icon: VueJsIcon,
        Type: 'Libraries, Runtimes & Frameworks',
        Proficiency: 'High'
    },
    'PostgreSQL':
    {
        icon: PostgreSQLIcon,
        Type: 'Miscellaneous',
        Proficiency: 'High'
    }
}

const sortingCriteria = [
    "Alphabet",
    "Type",
    "Proficiency"
]

//all the sorting categories for each type of sorting criteria
const sortingCategories = {
    'Type':
        [
            "Programming Languages",
            "Libraries, Runtimes & Frameworks",
            "Miscellaneous"
        ],
    'Proficiency':
        [
            "Very High",
            "High",
            "Fair"
        ]
}


//animated icon component props are
//iconSVGComponent - the icon svg
//iconHousingRefs - object containing the refs of each possible sorted iconhousing for this icon
//all icons start at the "Alphabet" position so we position them with the Alphabet icon housing ref
//alt parameter for the icon itself
function Icon({ skillContainerRef, IconSVGComponent, alt,  iconHousingRefs, height, width, callbackToPassChangePositionToParent }) {
    const AnimatedIcon = animated(IconSVGComponent);
    //use ref for the icon poisition indicator to avoid rerenders -> this is the position according to sortMethod
    //height and width state variables for setting this height and width to the height and width of the bounding icon housings
    //this way to control the size of our icons on our page, we just control the size of the icon housings!
    const position = useRef('Alphabet');
    const [style, api] = useSpring(() => ({
        top: 0,
        left: 0
    }));

    useEffect(() => {
        //pass change position callback to parent
        callbackToPassChangePositionToParent(sortIcons);

        setPosition();

        //set up the window resize listeners to move icon accorindly when window is resized.
        window.addEventListener('resize', setPosition);
        return (() => window.removeEventListener('resize', setPosition));
    });

    //sets the position of the icon without any animation. This is used for position initialization and window resizing
    function setPosition() {
        api.set({
            top: iconHousingRefs[position.current].current.offsetTop,
            left: iconHousingRefs[position.current].current.offsetLeft
        });
    }

    //change position of icon depending on the sort method to change to
    const sortIcons = (sortingMethod) => {
        position.current = sortingMethod;
        api.start({
            top: iconHousingRefs[position.current].current.offsetTop,
            left: iconHousingRefs[position.current].current.offsetLeft
        });
    };

    return (
        <AnimatedIcon alt={alt + " Icon"} className="skillIcon" style={{
            top: style.top,
            left: style.left,
            height: height,
            width: width
        }} />
    );
}

//iconhousing component
//takes in the height and width that this iconhousing should be
const IconHousing = forwardRef(({ height, width }, ref) => {
    return (
        <Container className="iconHousing" ref={ref} style={{
            height: height,
            width: width
        }} />
    );
});



function Heading({ setSortMethod }) {
    const backgroundColours = {
        "Alphabet": "#EEF4D4",
        "Type": "#DAEFB3",
        "Proficiency": "#EA9E8D" 
    }
    const AnimatedContainer = animated(Container);
    const [style, api] = useSpring(() => ({
        "backgroundColor": backgroundColours.Alphabet
    }));

    function onButtonClick(sortMethod) {
        api.start({
                "backgroundColor": backgroundColours[sortMethod]
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
                        {sortingCriteria.map(sortMethod => (
                            <Button className="sortButton" key={sortMethod} onClick={() => onButtonClick(sortMethod)}>
                                {sortMethod}
                            </Button>
                        ))}
                    </ButtonGroup>
                </Col>
            </Row>
        </AnimatedContainer>
    )
}

//wrapper for all the skill icons being rendered in the loop, this is so we can memoize them as a whole, so they dont get rerendered upon
//change in the SkillIcons parent component.
const IconsWrapper = React.memo(function ({ skillContainerRef, iconHousingRefs, height, width, callbackToPassChangePositionToParent }) {
    return (
        <Container>
            {Object.keys(skills).map(skill => <Icon key={skill} alt={skill} skillContainerRef={skillContainerRef} IconSVGComponent={skills[skill].icon}
                iconHousingRefs={iconHousingRefs.current[skill]} height={height} width={width}
                callbackToPassChangePositionToParent={callback => callbackToPassChangePositionToParent(skill, callback)} />)}
        </Container>
    )
})

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
    const iconChangePositionCallbacks = useRef(iconCallbacks)

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
        return (() => window.removeEventListener('resize', sizeIconAccordingToScreenSize));
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
            <IconsWrapper skillContainerRef={skillContainerRef}
                iconHousingRefs={iconHousingRefs} height={iconHeight} width={iconWidth}
                callbackToPassChangePositionToParent={iconChangePositionCallback.current} />
            <SkillContainerIconHousings iconChangePositionCallbacksRef={iconChangePositionCallbacks} iconHeight={iconHeight} iconWidth={iconWidth} sortingMethod={sortMethod} iconHousingRefs={iconHousingRefs} />
        </Container>
    )
}

function SkillContainerIconHousings({ iconHeight, iconWidth, sortingMethod, iconHousingRefs, iconChangePositionCallbacksRef }) {
    useEffect(() => {
        for (const skill in skills) {
            iconChangePositionCallbacksRef.current.get(skill)(sortingMethod);
        };
    }, [sortingMethod, iconChangePositionCallbacksRef]);

    if (sortingMethod === "Alphabet") {
        return (
            <Container fluid className="p-0">
                <Row className="m-0">
                    {Object.keys(skills).map(skill =>
                        <Col key={skill} className="col-3 p-3">
                            <IconHousing ref={iconHousingRefs.current[skill][sortingMethod]} height={iconHeight} width={iconWidth} />
                            <p className="fs-6 text-wrap">{skill}</p>
                        </Col>)}
                </Row>
            </Container>
        )
    } else {
        //render each sorting category for the matching sortingMethod
        //sortingMethod must exist as key in sortingCategories 
        for (const sortingMethodKey in sortingCategories) {
            if (sortingMethodKey === sortingMethod) {
                //go through each sorting cat in the array of sortingCategories for this sortingMethod
                return (
                    <Container fluid className="p-0">
                        {sortingCategories[sortingMethodKey].map(cat =>
                            <Row key={cat} className="p-0 m-0">
                                <Row className="m-0 my-2 p-0">
                                    <Col className="p-0">
                                        <h4>{cat}</h4>
                                    </Col>
                                </Row>
                                <Row className="m-0">
                                    {Object.keys(skills).map(skill =>
                                        (skills[skill][sortingMethodKey] !== cat) ? null :
                                            <Col key={skill} className="col-3 p-3">
                                                <IconHousing ref={iconHousingRefs.current[skill][sortingMethodKey]} height={iconHeight} width={iconWidth} />
                                                <p className="fs-6 text-wrap">{skill}</p>
                                            </Col>
                                    )}
                                </Row>
                            </Row>
                        )}
                    </Container>
                )
            }
        }
    }
}


const Skills = forwardRef((props, ref) => {
    const [sortMethod, setSortMethod] = useState("Alphabet");
    return (
        <Container fluid className="background-grunge" ref={ref}>
            <Row>
                <Heading setSortMethod={setSortMethod} />
            </Row>
            <Row>
                <SkillIcons sortMethod={sortMethod} />
            </Row>
            <Row>
            </Row>
        </Container>
    );
});

//we dont want this component being unecessarily rerendered upon irrelevant state change in parent that dosent affect it.
export default React.memo(Skills);
