import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

/**
 * Header component used for each page, consisting of a background image, with the header taking hup the whole height of the viewport. 
 * Takes an innercomponent for its contents
 * also this header does not rerender if no props changes, since it is a minimal component, and we dont want unecessary slowdowns in performance.
 */

 const Header = React.memo(({ backgroundImage, InnerComponent }) => {
    return (
        <Container fluid className="h-100 header-background p-0" style={{backgroundImage: `url(${backgroundImage})`}}>
            <Row className="h-100 align-items-center justify-content-center m-0">
                <Col>
                    <InnerComponent />
                </Col>
            </Row>
        </Container>
    );
});

export default Header;