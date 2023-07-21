import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;
function getMovies() {
  return async (dispatch) => {
    const popularMovieApi = await api.get(
      `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
    const topRatedApi = await api.get(
      `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    );
    const upComingApi = await api.get(
      `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
    );

    let data = Promise.all([popularMovieApi,topRatedApi,upComingApi])
  };
}
export const movieAction = { getMovies };