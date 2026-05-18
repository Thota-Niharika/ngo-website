package com.hopehands.ngo.controller;

import com.hopehands.ngo.model.Donation;
import com.hopehands.ngo.service.DonationService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/donations")
public class DonationController {

    private final DonationService donationService;

    public DonationController(DonationService donationService) {
        this.donationService = donationService;
    }

    @PostMapping
    public ResponseEntity<Donation> createDonation(@Valid @RequestBody Donation donation) {
        Donation saved = donationService.createDonation(donation);
        return new ResponseEntity<>(saved, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Donation>> getAllDonations() {
        return ResponseEntity.ok(donationService.getAllDonations());
    }

    @GetMapping("/cause/{cause}")
    public ResponseEntity<List<Donation>> getDonationsByCause(@PathVariable String cause) {
        return ResponseEntity.ok(donationService.getDonationsByCause(cause));
    }

    @GetMapping("/stats")
    public ResponseEntity<Map<String, Object>> getDonationStats() {
        return ResponseEntity.ok(donationService.getDonationStats());
    }
}
