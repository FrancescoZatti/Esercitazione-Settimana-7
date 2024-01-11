import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import img1 from '../assets/7.png';
import img2 from '../assets/8.png';
import img3 from '../assets/9.png';
import img4 from '../assets/10.png';
import img5 from '../assets/11.png';
import img6 from '../assets/12.png';

const MyWatched = () => {
  return (
    <div>
      <h4 className='px-4'>Watch Again</h4>
      <Container fluid className="mb-4 no-gutters text-center px-5">
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6">
          <Col className="mb-2 px-1">
            <img className="img-fluid" src={img1} alt="movie picture" />
          </Col>
          <Col className="mb-2 px-1">
            <img className="img-fluid" src={img2} alt="movie picture" />
          </Col>
          <Col className="mb-2 px-1">
            <img className="img-fluid" src={img3} alt="movie picture" />
          </Col>
          <Col className="mb-2 px-1">
            <img className="img-fluid" src={img4} alt="movie picture" />
          </Col>
          <Col className="mb-2 px-1">
            <img className="img-fluid" src={img5} alt="movie picture" />
          </Col>
          <Col className="mb-2 px-1">
            <img className="img-fluid" src={img6} alt="movie picture" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyWatched;