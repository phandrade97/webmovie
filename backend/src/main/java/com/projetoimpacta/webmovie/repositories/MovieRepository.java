package com.projetoimpacta.webmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projetoimpacta.webmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long>{
	
	

}
