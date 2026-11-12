package com.tp.mediatheque.controller;

import com.tp.mediatheque.model.Realisateur;
import com.tp.mediatheque.repository.RealisateurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/realisateurs")
@CrossOrigin(origins = "*")
public class RealisateurController {

    @Autowired
    private RealisateurRepository realisateurRepository;

    @GetMapping
    public List<Realisateur> getAllRealisateurs() {
        return realisateurRepository.findAll();
    }

    @GetMapping("/{id}")
    public Realisateur getRealisateurById(@PathVariable Long id) {
        return realisateurRepository.findById(id).orElse(null);
    }

}