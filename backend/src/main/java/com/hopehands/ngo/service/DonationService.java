package com.hopehands.ngo.service;

import com.hopehands.ngo.model.Donation;
import com.hopehands.ngo.repository.DonationRepository;
import org.springframework.stereotype.Service;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class DonationService {

    private final DonationRepository donationRepository;

    public DonationService(DonationRepository donationRepository) {
        this.donationRepository = donationRepository;
    }

    public Donation createDonation(Donation donation) {
        return donationRepository.save(donation);
    }

    public List<Donation> getAllDonations() {
        return donationRepository.findAll();
    }

    public List<Donation> getDonationsByCause(String cause) {
        return donationRepository.findByCause(cause);
    }

    public Map<String, Object> getDonationStats() {
        Map<String, Object> stats = new HashMap<>();
        stats.put("totalDonations", donationRepository.getTotalDonations());
        stats.put("totalDonors", donationRepository.getUniqueDonorCount());
        stats.put("donationCount", donationRepository.count());
        return stats;
    }
}
