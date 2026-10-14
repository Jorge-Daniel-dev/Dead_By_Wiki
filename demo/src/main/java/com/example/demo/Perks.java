package com.example.demo;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
public class Perks {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String imagen;
    private String nombre;
    @Lob
    private String descripcion;

    public Perks(){}

    public Perks(String imagen, String nombre, String descripcion){
        this.imagen = imagen;
        this.nombre = nombre;
        this.descripcion = descripcion;
    }

    public String getImagen(){return imagen;}
    public void setImagen(String imagen) {
        this.imagen = imagen;
    }

    public String getNombre(){return nombre;}

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion(){return descripcion;}

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Long getId() {
        return id;
    }
}
