package com.projetoimpacta.webmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projetoimpacta.webmovie.entities.Score;
import com.projetoimpacta.webmovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {

}