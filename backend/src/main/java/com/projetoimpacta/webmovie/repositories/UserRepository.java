package com.projetoimpacta.webmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projetoimpacta.webmovie.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {

	User findByEmail(String email);
}