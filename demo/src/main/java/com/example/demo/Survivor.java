package com.example.demo;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
public class Survivor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String img;
    private String nombre;
    @Lob
    private String descripcion;
    private LocalDate fecha;
    private String imgCapitulo;
    private String capitulo;
    @Lob
    private String capituloTexto;

    public Survivor(){}
    public Survivor(String img, String nombre, String descripcion, LocalDate fecha, String imgCapitulo,
                    String capitulo, String capituloTexto) {
        this.img = img; this.nombre = nombre;
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.imgCapitulo = imgCapitulo;
        this.capitulo = capitulo;
        this.capituloTexto = capituloTexto; }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getImg() { return img; }
    public void setImg(String img) { this.img = img; }
    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }
    public String getDescripcion() { return descripcion; }
    public void setDescripcion(String descripcion) { this.descripcion = descripcion; }
    public LocalDate getFecha() { return fecha; }
    public void setFecha(LocalDate fecha) { this.fecha = fecha; }
    public String getImgCapitulo() { return imgCapitulo; }
    public void setImgCapitulo(String imgCapitulo) { this.imgCapitulo = imgCapitulo; }
    public String getCapitulo() { return capitulo; }
    public void setCapitulo(String capitulo) { this.capitulo = capitulo; }
    public String getCapituloTexto() { return capituloTexto; }
    public void setCapituloTexto(String capituloTexto) { this.capituloTexto = capituloTexto; }
}
