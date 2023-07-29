import React from "react";
import { useSelector } from "react-redux";

const MoviePoster = ({ item }) => {
  const { genreList } = useSelector((state) => state.movie);
  return (
    <div
      className="poster"
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${item.poster_path}` +
          ")",
      }}
    >
      <div className="poster-info">
        <div className="poster-header">
          <img
            width={60}
            src={`https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`}
          />
          <div>
            <h1>
              {item.title.length > 20
                ? item.title.substring(0, 20) + "..."
                : item.title}
            </h1>
            <h4>{item.release_date}</h4>
          </div>
          <ul className="poster-genre">
            {item.genre_ids.map((id) => (
              <li>{genreList.find((item) => item.id == id).name}</li>
            ))}
          </ul>
        </div>
        <div className="poster-overview">
          <p>
            {item.overview.length > 200
              ? item.overview.substring(0, 200) + "..."
              : item.overview}
          </p>
        </div>
        <div className="poster-social">
          <ul>
            <li>{item.vote_average}</li>
            <li>{item.popularity}</li>
            <li>{item?.adult == true ? "청소년 관람불가" : "Under 18"}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MoviePoster;
