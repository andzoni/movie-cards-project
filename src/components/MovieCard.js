import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Button} from 'react-bootstrap';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, title, storyline, imagePath } = movie;
    return (
      <div className='d-flex justify-content-center' data-testid="movie-details">
        <Card style={{ width: '28rem' }}>
          <Card.Title className='d-flex justify-content-center'>{ title }</Card.Title>
          <Card.Img variant="top" alt={ `Capa do filme ${title}` } src={ imagePath } />
          <Card.Body>
            <Card.Text className='d-flex justify-content-center'>
            { storyline }
            </Card.Text>
          </Card.Body>
          <Card.Body className="d-flex bd-highlight example-parent" >
            <Button variant="secondary" type="button" className="p-2 flex-fill bd-highlight col-example">
              <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={ `movies/${id}` }>DETAILS</Link>
            </Button>
          </Card.Body>
          <Card.Body>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    imagePath: PropTypes.string,
    storyline: PropTypes.string,
    id: PropTypes.string,
  }),
}.isRequired;

export default MovieCard;
