package com.tp.mediatheque.controller;

import com.tp.mediatheque.model.Genre;
import com.tp.mediatheque.repository.GenreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/genres")
@CrossOrigin(origins = "*")
public class GenreController {

    @Autowired
    private GenreRepository genreRepository;

    @GetMapping
    public List<Genre> getAllGenres() {
        return genreRepository.findAll();
    }

    @GetMapping("/{code}")
    public Genre getGenreByCode(@PathVariable String code) {
        return genreRepository.findById(code).orElse(null);
    }

}