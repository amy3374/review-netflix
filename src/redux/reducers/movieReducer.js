let initialState = {
  popularMovies: {},
  topRatedMovies: {},
  upComingMovies: {},
  loading: true,
  genreList: [],
  moviesDetail: {},
  moviesReview: [],
};
function movieReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "GET_MOVIES_REQUEST":
      return { ...state, loading: true };
    case "GET_MOVIES_SUCCESS":
      return {
        ...state,
        popularMovies: payload.popularMovies,
        topRatedMovies: payload.topRatedMovies,
        upComingMovies: payload.upComingMovies,
        genreList: payload.genreList,
        loading: false,
      };
    case "GET_MOVIES_DETAIL_SUCCESS":
      return {
        ...state,
        moviesDetail: payload.moviesDetail,
        moviesReview: payload.moviesReview,
      };
    case "GET_MOVIES_FAILURE":
      return {
        ...state,
        loading: false,
      };
    default:
      return {
        ...state,
      };
  }
}

export default movieReducer;
