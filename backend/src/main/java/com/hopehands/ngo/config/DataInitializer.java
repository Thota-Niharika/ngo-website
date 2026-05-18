package com.hopehands.ngo.config;

import com.hopehands.ngo.model.Cause;
import com.hopehands.ngo.repository.CauseRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner initDatabase(CauseRepository causeRepository) {
        return args -> {
            if (causeRepository.count() == 0) {
                causeRepository.save(new Cause("Education for All",
                    "Providing quality education, school supplies, and scholarships to underprivileged children.",
                    "FaGraduationCap", 75000.0, 100000.0, 1250, "#2d6a4f"));

                causeRepository.save(new Cause("Clean Water Access",
                    "Building wells and water purification systems in communities lacking safe drinking water.",
                    "FaTint", 45000.0, 80000.0, 890, "#3498db"));

                causeRepository.save(new Cause("End Hunger",
                    "Distributing nutritious meals and supporting sustainable farming initiatives.",
                    "FaUtensils", 60000.0, 90000.0, 1100, "#e67e22"));

                causeRepository.save(new Cause("Healthcare Access",
                    "Setting up mobile health clinics and providing essential medicines.",
                    "FaHeartbeat", 38000.0, 75000.0, 720, "#e74c3c"));

                causeRepository.save(new Cause("Women Empowerment",
                    "Providing vocational training and microfinance support to women.",
                    "FaFemale", 52000.0, 85000.0, 950, "#9b59b6"));

                causeRepository.save(new Cause("Environmental Conservation",
                    "Planting trees and promoting sustainable practices to combat climate change.",
                    "FaTree", 28000.0, 60000.0, 650, "#27ae60"));

                System.out.println("Sample causes initialized!");
            }
        };
    }
}
