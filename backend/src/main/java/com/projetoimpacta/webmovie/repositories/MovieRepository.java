package com.projetoimpacta.webmovie.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.projetoimpacta.webmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

    Page<Movie> findByTituloContainingIgnoreCase(String titulo, Pageable pageable);
}
