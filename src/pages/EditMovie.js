import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';
import { Container, Navbar, Card } from 'react-bootstrap';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id).then((data) => {
      this.setState({
        movie: data,
        status: 'loaded',
      });
    });
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie).then(() => {
      this.setState({
        shouldRedirect: true,
      });
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return (
        <Redirect to="/" />
      );
    }

    if (status === 'loading') {
      return (
        <Loading />
      );
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
              <h1>Modifique</h1>
            </Card.Body>
          </Card>
        </div>
        <br/>
        <div className='d-flex justify-content-center' data-testid="movie-details">
          <Card 
            className="mb-2 card bg-secondary text-white"
            style={{ width: '28rem' }}>
            <Card.Body>
              <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />  
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default EditMovie;
