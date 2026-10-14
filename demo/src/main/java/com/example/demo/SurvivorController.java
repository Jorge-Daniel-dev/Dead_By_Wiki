package com.example.demo;
import java.util.List;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/Survivors")
public class SurvivorController {
    private final SurvivorRepositorio repositorio;

    public SurvivorController(SurvivorRepositorio repositorio){
        this.repositorio = repositorio;
    }

    @GetMapping
    public List datos(){return repositorio.findAll();}

    @PostMapping
    public Survivor createSurvivor(@RequestBody Survivor newSurvivor){return repositorio.save(newSurvivor);}
}
