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
          `https://www.themoviedb.org/t/p/w533_and_h300_bestv2${item.poster_path}` +
          ")",
      }}
    >
      <div className="poster-info">
        <div className="poster-header">
          <img
            width={60}
            src="https://image.tmdb.org/t/p/original///iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg"
          />
          <h1>{item.title}</h1>
          <h4>{item.release_date}</h4>
          <ul className="poster-genre">
            {item.genre_ids.map((id) => (
              <li>{genreList.find((item) => item.id == id).name}</li>
            ))}
          </ul>
        </div>
        <div className="poster-overview">
          <p>{item.overview}</p>
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
