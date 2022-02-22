import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';
import { Nav, Navbar, Container, Carousel, CarouselItem} from 'react-bootstrap';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((data) => {
      this.setState({
        movies: [...data],
        loading: false,
      });
    });
  }

  render() {
    const { movies, loading } = this.state;

    if (loading) {
      return <Loading />;
    }

    return (
      <div data-testid="movie-list">
        <Navbar bg="dark" variant="dark">
          <Container className="d-flex justify-content-center">
            <Navbar.Brand className="p-2 col-example text-left" href="#home">Project Movie List</Navbar.Brand>
          </Container>
          <Container className="d-flex justify-content-center">
            <Navbar.Brand className="p-2 col-example text-left" href="#home">
              <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/movies/new">Add Card</Link>
            </Navbar.Brand>
          </Container>
        </Navbar>
        <br/>
        <br/>
        <Carousel variant="dark">
            { movies.map((movie) => <CarouselItem><MovieCard className="d-block w-200" key={ movie.title } movie={ movie } /></CarouselItem>) }
        </Carousel>
      </div>
    );
  }
}

export default MovieList;
