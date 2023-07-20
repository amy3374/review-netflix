import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetail from "./pages/MovieDetail";
import Navigation from "./components/Navigation";

// 1. 3개의 페이지(홈,무비,무비 디테일)
// 2. 유저는 홈페이지에서 배너를 볼 수 있다.
// 3. 유저는 가장 인기있는 영화 리스트, 가장 평점 좋은 영화 리스트, 상영 예정작 리스트를 볼 수 있다.
// 4. 각각의 영화 리스트는 슬라이드 형태로 넘길 수 있다.
// 5. 유저는 영화에 마우스를 올려두면 영화의 제목과 장르, 평점, 인기도, 청불여부를 볼 수 있다.

// 6. 유저는 영화 카드를 클릭하면 영화의 상세 정보를 볼 수 있다.(포스터, 영화 제목, 평점, 인기도 청불여부, 줄거리 요약, 예산, 날짜, 시간 등)
// 7. trailer, 영화 리뷰, 관련된 영화도 볼 수 있음
// 8. 유저는 영화를 검색할 수 있다.
// 9. 유저는 영화를 인기도순으로 정렬할 수 있다.
// 10. 유저는 영화를 필터링 할 수 있다.(장르별, 날짜별)

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
