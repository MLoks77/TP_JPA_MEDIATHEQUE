package com.tp.mediatheque.model;

import jakarta.persistence.*;
import java.util.List;

@Entity
public class Realisateur {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom;
    private String prenom;
    private String nationalite;
    private String email;
    private int nbrFilmsRealises;
    private String imageURL;

    @ManyToMany(mappedBy = "realisateur")
    private List<Film> films;

    public Realisateur() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getNationalite() {
        return nationalite;
    }

    public void setNationalite(String nationalite) {
        this.nationalite = nationalite;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = prenom + "." + nom + "@gmail.com";
    }

    public int getNbrFilmsRealises() {
        return nbrFilmsRealises;
    }

    public void setNbrFilmsRealises(int nbrFilmsRealises) {
        this.nbrFilmsRealises = nbrFilmsRealises;
    }

    public String getImageURL() {
        return imageURL;
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }
}