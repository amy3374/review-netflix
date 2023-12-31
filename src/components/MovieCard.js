import React from "react";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ item }) => {
  const { genreList } = useSelector((state) => state.movie);
  const navigate = useNavigate();
  const goToDetail = () => {
    navigate(`/movies/${item.id}`);
  };
  return (
    <div
      onClick={goToDetail}
      className="movie-card"
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item?.poster_path}` +
          ")",
      }}
    >
      <div className="overlay">
        <div className="card-head">
          <h1 className="card-title">{item?.title}</h1>
          <hr />
        </div>
        <ul className="genre">
          {item?.genre_ids.map((id) => (
            <li>{genreList.find((item) => item.id == id).name}</li>
          ))}
        </ul>
        <div className="card-info">
          <span>{item?.vote_average}</span>
          <span>{item?.adult == true ? "청불" : "Under 18"}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
