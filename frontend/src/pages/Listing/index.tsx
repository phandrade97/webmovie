import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/request";
import { useMovies } from 'components/context/MovieContext';
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import axios from "axios";

function Listing() {
  const [pageNumber, setPageNumber] = useState(0);
  const [page, setPage] = useState<MoviePage>({
    content: [],
    last: true,
    totalPages: 0,
    totalElements: 0,
    size: 8,
    number: 0,
    first: true,
    numberOfElements: 0,
    empty: true,
  });

  const { movies } = useMovies();

  useEffect(() => {
    if (movies.length === 0) {
      axios.get(`${BASE_URL}/movies?size=8&page=${pageNumber}&sort=id`).then((response) => {
        const data = response.data as MoviePage;
        setPage(data);
      });
    }
  }, [pageNumber, movies]);

  const handlePageChange = (newNumber: number) => {
    setPageNumber(newNumber);
  };

  const movieList = movies.length > 0 ? movies : page.content;

  return (
    <>
      <Pagination page={page} onChange={handlePageChange} />
      <div className="row">
        {movieList.map((movie) => (
          <div key={movie.id} className="col">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Listing;