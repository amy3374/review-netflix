import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { movieAction } from "../redux/actions/movieAction";

const MovieDetail = () => {
  const dispatch = useDispatch();
  let { id } = useParams();
  console.log("id는", id);

  useEffect(() => {
    dispatch(movieAction.getMoviesDetail(id));
  }, []);

  return (
    <Container>
      <Row>
        <Col lg={6}>
          <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/542sSHOPh18wjt2nB6whOiaAKrO.jpg" />
        </Col>
        <Col lg={6}></Col>
      </Row>
    </Container>
  );
};

export default MovieDetail;
