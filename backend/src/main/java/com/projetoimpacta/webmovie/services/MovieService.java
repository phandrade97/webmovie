package com.projetoimpacta.webmovie.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.projetoimpacta.webmovie.dto.MovieDTO;
import com.projetoimpacta.webmovie.entities.Movie;
import com.projetoimpacta.webmovie.repositories.MovieRepository;

@Service
public class MovieService {

    @Autowired
    private MovieRepository repository;
    
    @Transactional(readOnly = true)
    public Page<MovieDTO> findAll(Pageable pageable) {
        Page<Movie> result = repository.findAll(pageable);
        Page<MovieDTO> page= result.map(x -> new MovieDTO(x));
        return page;
    }
    
    @Transactional(readOnly = true)
    public MovieDTO findById(Long id) {
        Movie result = repository.findById(id).get();
        MovieDTO dto = new MovieDTO(result);
        return dto;
    }
    
    @Transactional(readOnly = true)
    public Page<MovieDTO> findByTitle(String titulo, Pageable pageable) {
        Page<Movie> result = repository.findByTituloContainingIgnoreCase(titulo, pageable);
        return result.map(x -> new MovieDTO(x));
    }
}