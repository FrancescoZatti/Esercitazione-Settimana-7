import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CardImg from '../components/CardImg';
import { Key, LOTR } from '../data';



export default class MyTrending extends Component {

  state = {
    movies: [],
};

componentDidMount() {
    fetch(Key + LOTR)
        .then((response) => response.json())
        .then((data) => this.setState({ movies: data.Search.map((movie) => movie.Poster) }))
        .catch((error) => console.log(error));
}

render() {
  console.log(this.state.movies)
  return (
    <div>
      <h4 className='px-4'>Lord of the Rings</h4>
      <Container fluid className="mb-4 no-gutters text-center px-5">
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6">
           <CardImg movies={this.state.movies} />
        </Row>
      </Container>
    </div>
  );
}
  
};





