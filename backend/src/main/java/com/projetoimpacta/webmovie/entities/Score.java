package com.projetoimpacta.webmovie.entities;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "t_score")
public class Score {

    @EmbeddedId
    private ScorePK id = new ScorePK();

    private Double scorevalue;

    public Score() {
    }

    public void setMovie(Movie movie) {
        id.setMovie(movie);
    }

    public void setUser(User user) {
        id.setUser(user);
    }

    public ScorePK getId() {
        return id;
    }

    public void setId(ScorePK id) {
        this.id = id;
    }

    public Double getScoreValue() {
        return scorevalue;
    }

    public void setScoreValue(Double scorevalue) {
        this.scorevalue = scorevalue;
    }
}