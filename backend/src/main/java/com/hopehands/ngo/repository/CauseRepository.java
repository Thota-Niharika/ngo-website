package com.hopehands.ngo.repository;

import com.hopehands.ngo.model.Cause;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface CauseRepository extends JpaRepository<Cause, Long> {
    List<Cause> findByActiveTrue();
}
