package com.example.demo;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
public class Killers {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String img;
    private String nombre;
    private double velocidad;
    private double radio;
    @Lob
    private String descripcion;
    private String imgPoder;
    @Lob
    private String poder;
    private LocalDate fecha;
    @Lob
    private String capituloTexto;
    private String capitulo;
    private String capImg;

    public Killers(){

    }

    public Killers(String img, String nombre, double velocidad, double radio,
                   String descripcion, String imgPoder, String poder,
                   LocalDate fecha, String capitulo, String capImg, String capituloTexto) {

        this.img = img;
        this.nombre = nombre;
        this.velocidad = velocidad;
        this.radio = radio;
        this.descripcion = descripcion;
        this.imgPoder = imgPoder;
        this.poder = poder;
        this.fecha = fecha;
        this.capitulo = capitulo;
        this.capImg = capImg;
        this.capituloTexto = capituloTexto;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getImg() { return img; }
    public void setImg(String img) { this.img = img; }
    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }
    public double getVelocidad() { return velocidad; }
    public void setVelocidad(double velocidad) { this.velocidad = velocidad; }
    public double getRadio() { return radio; }
    public void setRadio(double radio) { this.radio = radio; }
    public String getDescripcion() { return descripcion; }
    public void setDescripcion(String descripcion) { this.descripcion = descripcion; }
    public String getImgPoder() { return imgPoder; }
    public void setImgPoder(String imgPoder) { this.imgPoder = imgPoder; }
    public String getPoder() { return poder; }
    public void setPoder(String poder) { this.poder = poder; }
    public LocalDate getFecha() { return fecha; }
    public void setFecha(LocalDate fecha) { this.fecha = fecha; }
    public String getCapitulo() { return capitulo; }
    public void setCapitulo(String capitulo) { this.capitulo = capitulo; }
    public String getCapImg() { return capImg; }
    public void setCapImg(String capImg) { this.capImg = capImg; }
    public String getCapituloTexto(){return capituloTexto;}
    public void setCapituloTexto(String capituloTexto) {
        this.capituloTexto = capituloTexto;
    }
}
