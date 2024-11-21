import React, { useState, useEffect, useCallback } from 'react';
import { ReactComponent as ImgIcon } from 'assets/img/icons8-pesquisar.svg';
import debounce from 'lodash.debounce';
import './styles.css';
import axios from 'axios';
import { BASE_URL } from 'utils/request';
import { useMovies } from 'components/context/MovieContext';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');
  const { setMovies } = useMovies();
  const navigate = useNavigate();

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value);
  }

  const fetchMovies = useCallback(
    debounce(async (term: string) => {
      if (term) {
        try {
          const response = await axios.get(`${BASE_URL}/movies/search`, {
            params: { search: term },
          });
          setMovies(response.data.content);
        } catch (error) {
          console.error('Error fetching movies:', error);
        }
      } else {
        setMovies([]); 
      }
    }, 300),
    [setMovies]
  );

  useEffect(() => {
    fetchMovies(searchTerm);
  }, [searchTerm, fetchMovies]);

  const handleSearchSubmit = (movieId: string) => {
    setSearchTerm(''); 
    navigate(`/form/${movieId}`); 
  };

  return (
    <header>
      <nav className="container">
        <div className="webmovie-nav-content">
          <h1>Webmovie</h1>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <ImgIcon className="icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Pesquisar filme"
              value={searchTerm}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;