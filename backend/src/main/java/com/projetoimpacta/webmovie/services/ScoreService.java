package com.projetoimpacta.webmovie.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.projetoimpacta.webmovie.dto.MovieDTO;
import com.projetoimpacta.webmovie.dto.ScoreDTO;
import com.projetoimpacta.webmovie.entities.Movie;
import com.projetoimpacta.webmovie.entities.Score;
import com.projetoimpacta.webmovie.entities.User;
import com.projetoimpacta.webmovie.repositories.MovieRepository;
import com.projetoimpacta.webmovie.repositories.ScoreRepository;
import com.projetoimpacta.webmovie.repositories.UserRepository;

@Service
public class ScoreService {
	@Autowired
	private MovieRepository movieRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private ScoreRepository scoreRepository;
	
	@Transactional
	public MovieDTO saveScore(ScoreDTO dto) {
		
		User user =  userRepository.findByEmail(dto.getEmail());
		if(user == null) {
			user = new User();
			user.setEmail(dto.getEmail());
			user = userRepository.saveAndFlush(user);
		}
		
		Movie movie = movieRepository.findById(dto.getMovieId()).get();
		
		Score score  = new Score();
		score.setMovie(movie);		
		score.setUser(user);
		score.setScoreValue(dto.getScore());
		
		score = scoreRepository.saveAndFlush(score);
		
		double sum = 0.0;
		for (Score s: movie.getScores()) {
			sum = sum + s.getScoreValue();
		}
			
		double avg = sum/ movie.getScores().size();
		
		movie.setScore(avg);
		movie.setCount(movie.getScores().size());
		
		movie = movieRepository.save(movie);
		
		return new MovieDTO(movie);
		
	}
}
