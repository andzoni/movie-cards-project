import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormControl } from 'react-bootstrap';

class MovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props.movie };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { onSubmit } = this.props;
    onSubmit(this.state);
  }

  updateMovie(field, newValue) {
    this.setState({ [field]: newValue });
  }

  renderTitleInput() {
    const { title } = this.state;

    return (
      <Form.Group className="mb-3">
        <Form.Label htmlFor="movie_title">Título</Form.Label>
        <Form.Control
          type="text"
          placeholder="Insira o título"
          id="movie_title"
          value={ title }
          onChange={ (event) => this.updateMovie('title', event.target.value) }
        />
      </Form.Group>
    );
  }

  renderSubtitleInput() {
    const { subtitle } = this.state;

    return (
      <Form.Group className="mb-3">
        <Form.Label htmlFor="movie_subtitle">Subtítulo</Form.Label>
        <Form.Control
          placeholder="Insira o subtítulo"
          id="movie_subtitle"
          type="text"
          value={ subtitle }
          onChange={ (event) => this.updateMovie('subtitle', event.target.value) }
        />
      </Form.Group>
    );
  }

  renderImagePathInput() {
    const { imagePath } = this.state;

    return (
      <Form.Group className="mb-3">
        <Form.Label htmlFor="movie_image">Imagem</Form.Label>
        <Form.Control
          placeholder="Insira o caminho da imagem"
          id="movie_image"
          type="text"
          value={ imagePath }
          onChange={ (event) => this.updateMovie('imagePath', event.target.value) }
        />
      </Form.Group>
    );
  }

  renderStorylineInput() {
    const { storyline } = this.state;

    return (
      <Form.Group className="mb-3">
        <Form.Label htmlFor="movie_storyline">Sinopse</Form.Label>
        <FormControl
          as="textarea" 
          aria-label="With textarea"
          id="movie_storyline"
          value={ storyline }
          onChange={ (event) => this.updateMovie('storyline', event.target.value) }
        />
      </Form.Group>
    );
  }

  renderGenreSelection() {
    const { genre } = this.state;
    return (
      <Form.Group className="mb-3">
        <Form.Label htmlFor="movie_genre">Gênero</Form.Label>
        <Form.Select 
          aria-label="Default select example"
          id="movie_genre"
          value={ genre }
          onChange={ (event) => this.updateMovie('genre', event.target.value) }
        >
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
          <option value="fantasy">Fantasia</option>
        </Form.Select>
      </Form.Group>
    );
  }

  renderRatingInput() {
    const { rating } = this.state;
    return (
      <Form.Group className="mb-3">
        <Form.Label htmlFor="movie_rating">Rating</Form.Label>
        <Form.Control
          placeholder="Dê a avaliação do filme"
          id="movie_rating"
          type="number"
          step={ 0.1 }
          min={ 0 }
          max={ 5 }
          value={ rating }
          onChange={ (event) => this.updateMovie('rating', event.target.value) }
        />
      </Form.Group>
    );
  }

  renderSubmitButton() {
    return (
      <div className="d-flex justify-content-center">
        <Button 
          className="align-self-center p-2 bd-highlight col-example"
          type="button"
          onClick={ this.handleSubmit }
        >
          Submit
        </Button>
      </div>
    );
  }

  render() {
    return (
      <div>
        <Form>
          {this.renderTitleInput()}
          {this.renderSubtitleInput()}
          {this.renderImagePathInput()}
          {this.renderStorylineInput()}
          {this.renderGenreSelection()}
          {this.renderRatingInput()}
          {this.renderSubmitButton()}
        </Form>
      </div>
    );
  }
}

MovieForm.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    imagePath: PropTypes.string,
    storyline: PropTypes.string,
    genre: PropTypes.string,
    rating: PropTypes.number,
  }),
  handleSubmit: PropTypes.func,
}.isRequired;

export default MovieForm;
