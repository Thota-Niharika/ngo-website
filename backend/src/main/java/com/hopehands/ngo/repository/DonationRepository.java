package com.hopehands.ngo.repository;

import com.hopehands.ngo.model.Donation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface DonationRepository extends JpaRepository<Donation, Long> {
    List<Donation> findByCause(String cause);

    @Query("SELECT SUM(d.amount) FROM Donation d")
    Double getTotalDonations();

    @Query("SELECT COUNT(DISTINCT d.email) FROM Donation d")
    Long getUniqueDonorCount();
}
