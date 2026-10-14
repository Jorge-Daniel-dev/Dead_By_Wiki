package com.example.demo;
import java.util.List;

import org.springframework.web.bind.annotation.*;

import java.awt.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/Killer")
public class KillerController {
    private final KillerRepositorio repositorio;

    public KillerController(KillerRepositorio repositorio){
        this.repositorio = repositorio;
    }

    @GetMapping
    public List datos(){return repositorio.findAll();}

    @PostMapping
    public Killers crearKiller(@RequestBody Killers newKiller){return repositorio.save(newKiller);}
}
