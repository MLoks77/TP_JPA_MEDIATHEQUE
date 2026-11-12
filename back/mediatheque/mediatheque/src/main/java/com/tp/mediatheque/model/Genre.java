package com.tp.mediatheque.model;

import jakarta.persistence.*;
import java.util.List;

@Entity
public class Genre {

    @Id
    private String code;

    private String libelle;

    @ManyToMany(mappedBy = "genre")
    private List<Film> films;

    public Genre() {
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getLibelle() {
        return libelle;
    }

    public void setLibelle(String libelle) {
        this.libelle = libelle;
    }
}