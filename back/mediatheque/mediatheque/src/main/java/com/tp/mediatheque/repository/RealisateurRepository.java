package com.tp.mediatheque.repository;

import com.tp.mediatheque.model.Realisateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RealisateurRepository extends JpaRepository<Realisateur, Long> {
}