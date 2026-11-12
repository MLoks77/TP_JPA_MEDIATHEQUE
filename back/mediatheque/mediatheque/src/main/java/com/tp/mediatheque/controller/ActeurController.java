package com.tp.mediatheque.controller;

import com.tp.mediatheque.model.Acteur;
import com.tp.mediatheque.repository.ActeurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/acteurs")
@CrossOrigin(origins = "*")
public class ActeurController {

    @Autowired
    private ActeurRepository acteurRepository;

    @GetMapping
    public List<Acteur> getAllActeurs() {
        return acteurRepository.findAll();
    }

    @GetMapping("/{code}")
    public Acteur getActeurByCode(@PathVariable String code) {
        return acteurRepository.findById(code).orElse(null);
    }

}