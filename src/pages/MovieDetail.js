import React, { useEffect } from "react";
import { Badge, Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { movieAction } from "../redux/actions/movieAction";

const MovieDetail = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const { moviesDetail, moviesReview } = useSelector((state) => state.movie);
  console.log(moviesReview);

  useEffect(() => {
    dispatch(movieAction.getMoviesDetail(id));
  }, []);

  return (
    <Container>
      <Row>
        <Col lg={6}>
          {/* <div
            style={{
              backgroundImage:
                "url(" +
                `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gPbM0MK8CP8A174rmUwGsADNYKD.jpg` +
                ")",
            }}
          ></div> */}

          <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gPbM0MK8CP8A174rmUwGsADNYKD.jpg" />
        </Col>
        <Col lg={6}>
          <div>
            {moviesDetail &&
              moviesDetail.genres.map((item) => (
                <Badge className="detail-genre" pill bg="danger">
                  {item.name}
                </Badge>
              ))}
          </div>
          <h1>{moviesDetail.title}</h1>
          <h3>{moviesDetail.tagline}</h3>
          <div className="detail-info">
            <span>{moviesDetail.vote_average}</span>
            <span>{moviesDetail.popularity}</span>
            <span>{moviesDetail.adult ? "Under 18" : "청소년 관람 불가"}</span>
          </div>
          <div className="detail-overview">
            <p>{moviesDetail.overview}</p>
          </div>
          <div className="detail-info2">
            <div>
              <Badge bg="danger">Budget</Badge>
              <span>${moviesDetail.budget}</span>
            </div>
            <div>
              <Badge bg="danger">Revenue</Badge>
              <span>{moviesDetail.revenue}</span>
            </div>
            <div>
              <Badge bg="danger">Release Day</Badge>
              <span>{moviesDetail.release_date}</span>
            </div>
            <div>
              <Badge bg="danger">Time</Badge>
              <span>{moviesDetail.runtime}</span>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col lg={12}>
          <div className="review-btn">
            <Button variant="outline-light" size="lg">
              REVIEWS ({moviesReview.length})
            </Button>{" "}
            <Button variant="outline-light" size="lg">
              RELATED MOVIES
            </Button>
          </div>
          <div className="review-area">
            {moviesReview.map((item) => (
              <div className="review-content">
                <h4>{item.author}</h4>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetail;
