package com.hopehands.ngo.controller;

import com.hopehands.ngo.model.Cause;
import com.hopehands.ngo.service.CauseService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/causes")
public class CauseController {

    private final CauseService causeService;

    public CauseController(CauseService causeService) {
        this.causeService = causeService;
    }

    @GetMapping
    public ResponseEntity<List<Cause>> getActiveCauses() {
        return ResponseEntity.ok(causeService.getActiveCauses());
    }

    @GetMapping("/all")
    public ResponseEntity<List<Cause>> getAllCauses() {
        return ResponseEntity.ok(causeService.getAllCauses());
    }

    @PostMapping
    public ResponseEntity<Cause> createCause(@RequestBody Cause cause) {
        Cause saved = causeService.createCause(cause);
        return new ResponseEntity<>(saved, HttpStatus.CREATED);
    }
}
