import React from "react";

const MovieCard = () => {
  return (
    <div
      className="movie-card"
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg` +
          ")",
      }}
    ></div>
  );
};

export default MovieCard;
