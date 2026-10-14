package com.example.demo;
import java.util.List;

import org.springframework.web.bind.annotation.*;

import java.awt.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/Perks")
public class PerksController {
    private final PerkRepositorio repositorio;

    public PerksController(PerkRepositorio repositorio){this.repositorio = repositorio;}

    @GetMapping
    public List allDatos(){return repositorio.findAll();}


    @PostMapping
    public Perks crearPerks(@RequestBody Perks nuevaPerk){
        return repositorio.save(nuevaPerk);
    }
}
