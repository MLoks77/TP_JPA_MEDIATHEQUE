package com.tp.mediatheque.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import java.util.List;

@Entity
public class Film {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String titre;
    private int anneeSortie;
    private int longueur;
    private String nationalite;
    private int nombreOscars;
    @Column(length = 1024)
    private String imageURL;

    @ManyToMany
    private List<Genre> genre;

    @ManyToMany
    private List<Realisateur> realisateur;

    @ManyToMany
    private List<Acteur> acteur;

    @ManyToOne
    @JoinColumn(name = "mediatheque_id")
    @JsonIgnoreProperties("films")
    private Mediatheque mediatheque;

    public Film() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public int getAnneeSortie() {
        return anneeSortie;
    }

    public void setAnneeSortie(int anneeSortie) {
        this.anneeSortie = anneeSortie;
    }

    public int getLongueur() {
        return longueur;
    }

    public void setLongueur(int longueur) {
        this.longueur = longueur;
    }

    public String getNationalite() {
        return nationalite;
    }

    public void setNationalite(String nationalite) {
        this.nationalite = nationalite;
    }

    public int getNombreOscars() {
        return nombreOscars;
    }

    public void setNombreOscars(int nombreOscars) {
        this.nombreOscars = nombreOscars;
    }

    public String getImageURL() {
        return imageURL;
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }

    public List<Genre> getGenre() {
        return genre;
    }

    public void setGenre(List<Genre> genre) {
        this.genre = genre;
    }

    public List<Realisateur> getRealisateur() {
        return realisateur;
    }

    public void setRealisateur(List<Realisateur> realisateur) {
        this.realisateur = realisateur;
    }

    public List<Acteur> getActeur() {
        return acteur;
    }

    public void setActeur(List<Acteur> acteur) {
        this.acteur = acteur;
    }

    public Mediatheque getMediatheque() {
        return mediatheque;
    }

    public void setMediatheque(Mediatheque mediatheque) {
        this.mediatheque = mediatheque;
    }
}