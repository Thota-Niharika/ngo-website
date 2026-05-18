package com.hopehands.ngo.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "donations")
public class Donation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Donor name is required")
    private String donorName;

    @NotBlank(message = "Email is required")
    @Email(message = "Please provide a valid email")
    private String email;

    private String phone;

    @NotNull(message = "Amount is required")
    @Positive(message = "Amount must be positive")
    private Double amount;

    @NotBlank(message = "Cause is required")
    private String cause;

    private String message;

    private LocalDateTime donatedAt;

    @PrePersist
    protected void onCreate() {
        donatedAt = LocalDateTime.now();
    }

    public Donation() {}

    public Donation(String donorName, String email, String phone, Double amount, String cause, String message) {
        this.donorName = donorName;
        this.email = email;
        this.phone = phone;
        this.amount = amount;
        this.cause = cause;
        this.message = message;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getDonorName() { return donorName; }
    public void setDonorName(String donorName) { this.donorName = donorName; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }
    public Double getAmount() { return amount; }
    public void setAmount(Double amount) { this.amount = amount; }
    public String getCause() { return cause; }
    public void setCause(String cause) { this.cause = cause; }
    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }
    public LocalDateTime getDonatedAt() { return donatedAt; }
    public void setDonatedAt(LocalDateTime donatedAt) { this.donatedAt = donatedAt; }
}
