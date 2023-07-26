import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;
function getMovies() {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_MOVIES_REQUEST" });
      const popularMovieApi = api.get(
        `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
      const topRatedApi = api.get(
        `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      );
      const upComingApi = api.get(
        `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
      );
      const genreApi = api.get(
        `/genre/movie/list?api_key=${API_KEY}&language=en-US`
      );

      let [popularMovies, topRatedMovies, upComingMovies, genreList] =
        await Promise.all([
          popularMovieApi,
          topRatedApi,
          upComingApi,
          genreApi,
        ]);
      dispatch({
        type: "GET_MOVIES_SUCCESS",
        payload: {
          popularMovies: popularMovies.data,
          topRatedMovies: topRatedMovies.data,
          upComingMovies: upComingMovies.data,
          genreList: genreList.data.genres,
        },
      });
    } catch (error) {
      //에러핸들링 하는 곳
      dispatch({ type: "GET_MOVIES_FAILURE" });
    }
  };
}
function getMoviesDetail({ id }) {
  console.log("id", id);
  return async (dispatch) => {
    try {
      // dispatch({ type: "GET_MOVIES_REQUEST" });
      const moviesDetailApi = api.get(
        `/movie/${id}?api_key=${API_KEY}&language=en-US`
      );
      let [moviesDetail] = await Promise.all([moviesDetailApi]);
      console.log("movies detail", moviesDetail);
      // dispatch({
      //   type: "GET_MOVIES_DETAIL_SUCCESS",
      //   payload: {

      //   },
      // });
    } catch (error) {
      //에러핸들링 하는 곳
    }
  };
}
export const movieAction = { getMovies, getMoviesDetail };
