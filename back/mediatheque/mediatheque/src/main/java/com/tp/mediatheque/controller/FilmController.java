package com.tp.mediatheque.controller;

import com.tp.mediatheque.model.Film;
import com.tp.mediatheque.repository.FilmRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/films")
@CrossOrigin(origins = "*")
public class FilmController {

    @Autowired
    private FilmRepository filmRepository;

    @GetMapping // permet de récupérer tous les films
    public List<Film> getAllFilms() {
        return filmRepository.findAll();
    }

    @GetMapping("/{id}") // permet de récupérer un film par son id
    public Film getFilmById(@PathVariable Long id) {
        return filmRepository.findById(id).orElse(null);
    }
}