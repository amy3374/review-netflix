import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MoviePoster from "../components/MoviePoster";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/actions/movieAction";

const Movies = () => {
  const dispatch = useDispatch();
  const { popularMovies } = useSelector((state) => state.movie);
  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);
  return (
    <Container>
      <Row>
        <Col lg={4}></Col>
        <Col lg={8}>
          <Row>
            {popularMovies.results &&
              popularMovies.results.map((item) => (
                <Col lg={6}>
                  <MoviePoster item={item} />
                </Col>
              ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Movies;
