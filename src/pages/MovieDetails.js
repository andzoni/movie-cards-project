import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import { Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      loading: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id).then((data) => {
      this.setState({
        movie: data,
        loading: false,
      });
    });
  }

  handleClick() {
    const { match: { params: { id } } } = this.props;
    movieAPI.deleteMovie(id);
  }

  render() {
    const { movie, loading } = this.state;

    if (loading) {
      return <Loading />;
    }

    const {
      title,
      id,
      storyline,
      imagePath,
      genre,
      rating,
      subtitle } = movie;
    return (
      <div className='d-flex justify-content-center' data-testid="movie-details">
        <Card style={{ width: '28rem' }}>
          <Card.Img variant="top" alt="Movie Cover" src={ `../${imagePath}`} />
          <Card.Body>
            <Card.Title className='d-flex justify-content-center'>{ `Title: ${title}` }</Card.Title>
            <Card.Text className='d-flex justify-content-center'>{ `Subtitle: ${subtitle}` }</Card.Text>
            <Card.Text className='d-flex justify-content-center'>
              { `Storyline: ${storyline}` }
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush" >
            <ListGroupItem className='d-flex justify-content-center'>{ `Genre: ${genre}` }</ListGroupItem>
            <ListGroupItem className='d-flex justify-content-center'>{ `Rating: ${rating}` }</ListGroupItem>
          </ListGroup>
          <Card.Body className="d-flex bd-highlight example-parent" >
            <Button variant="secondary" type="button" className="p-2 flex-fill bd-highlight col-example">
              <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={ `/movies/${id}/edit` }>EDIT</Link>
            </Button>
            <Button variant="outline-secondary" type="button" className="p-2 flex-fill bd-highlight col-example">
              <Link style={{ color: 'inherit', textDecoration: 'inherit'}}to="/">BACK</Link>
            </Button>
            <Button variant="danger" type="button" onClick={ this.handleClick } className="p-2 flex-fill bd-highlight col-example">
              <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/">DELETE</Link>
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
