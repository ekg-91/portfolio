import React from 'react';
import Container from 'react-bootstrap/Container';

function Content (props) {
  return (
    <Container fluid='true'>
      {/*<Row className='justify-content-center'>
              <Col md={8}>
                {props.children}
              </Col>
            </Row>*/}
    </Container>
  );
}

export default Content;
