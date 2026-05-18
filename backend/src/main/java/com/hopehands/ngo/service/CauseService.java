package com.hopehands.ngo.service;

import com.hopehands.ngo.model.Cause;
import com.hopehands.ngo.repository.CauseRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CauseService {

    private final CauseRepository causeRepository;

    public CauseService(CauseRepository causeRepository) {
        this.causeRepository = causeRepository;
    }

    public List<Cause> getActiveCauses() {
        return causeRepository.findByActiveTrue();
    }

    public List<Cause> getAllCauses() {
        return causeRepository.findAll();
    }

    public Cause createCause(Cause cause) {
        return causeRepository.save(cause);
    }
}
