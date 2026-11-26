package com.tp.mediatheque.repository;

import com.tp.mediatheque.model.Mediatheque;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MediathequeRepository extends JpaRepository<Mediatheque, Long> {
}
