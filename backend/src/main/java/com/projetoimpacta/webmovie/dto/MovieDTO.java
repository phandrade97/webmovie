package com.projetoimpacta.webmovie.dto;

import com.projetoimpacta.webmovie.entities.Movie;

public class MovieDTO {
	
	private Long id;
	private String titulo;
	private Double score;
	private Integer count;
	private String image;
    
	public MovieDTO() {
		
	}

	public MovieDTO(Long id, String titulo, Double score, Integer count, String image) {
		this.id = id;
		this.titulo = titulo;
		this.score = score;
		this.count = count;
		this.image = image;
	}
	
	public MovieDTO(Movie movie) {
		id = movie.getId();
		titulo = movie.getTitulo();
		score = movie.getScore();
		count = movie.getCount();
		image = movie.getImage();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public Double getScore() {
		return score;
	}

	public void setScore(Double score) {
		this.score = score;
	}

	public Integer getCount() {
		return count;
	}

	public void setCount(Integer count) {
		this.count = count;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}
	
	
	
	
	
}
