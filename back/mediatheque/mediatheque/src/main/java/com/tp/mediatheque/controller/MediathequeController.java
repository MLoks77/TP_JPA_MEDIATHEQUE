package com.tp.mediatheque.controller;

import com.tp.mediatheque.model.Mediatheque;
import com.tp.mediatheque.repository.MediathequeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/mediatheques")
@CrossOrigin(origins = "*")
public class MediathequeController {

    @Autowired
    private MediathequeRepository mediathequeRepository;

    @GetMapping // permet de récupérer toutes les médiathèques (avec leurs films)
    public List<Mediatheque> getAllMediatheques() {
        return mediathequeRepository.findAll();
    }

    @GetMapping("/{id}") // permet de récupérer une médiathèque par son id
    public Mediatheque getMediathequeById(@PathVariable Long id) {
        return mediathequeRepository.findById(id).orElse(null);
    }
}
