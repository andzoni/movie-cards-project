import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';
import { Container, Navbar, Card } from 'react-bootstrap';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie).then(() => {
      this.setState({
        shouldRedirect: true,
      });
    });
  }

  render() {
    const { shouldRedirect } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }
    return (
      <div data-testid="new-movie">
        <Navbar bg="dark" variant="dark">
          <Container className="d-flex justify-content-center">
            <Navbar.Brand 
              className="p-2 col-example text-left" 
              href="/">
              Project Movie List
            </Navbar.Brand>
          </Container>
        </Navbar>
        <br/>
        <br/>
        <div className="d-flex justify-content-center">
          <Card 
            className="mb-2 card bg-secondary text-white"
            style={{ width: '28rem' }}>
            <Card.Body className="align-self-center p-2 bd-highlight col-example">
              <h1>Insira seu filme</h1>
            </Card.Body>
          </Card>
        </div>
        <br/>
        <div className='d-flex justify-content-center' data-testid="movie-details">
          <Card 
            className="mb-2 card bg-secondary text-white"
            style={{ width: '28rem' }}>
            <Card.Body>
              <MovieForm onSubmit={ this.handleSubmit } />
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}
export default NewMovie;
