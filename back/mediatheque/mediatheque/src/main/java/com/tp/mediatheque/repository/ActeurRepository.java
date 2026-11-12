package com.tp.mediatheque.repository;

import com.tp.mediatheque.model.Acteur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ActeurRepository extends JpaRepository<Acteur, String> {
}