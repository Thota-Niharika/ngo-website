package com.hopehands.ngo.model;

import jakarta.persistence.*;

@Entity
@Table(name = "causes")
public class Cause {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @Column(length = 1000)
    private String description;

    private String icon;
    private Double raised;
    private Double goal;
    private Integer donors;
    private String color;
    private Boolean active;

    public Cause() {}

    public Cause(String title, String description, String icon, Double raised, Double goal, Integer donors, String color) {
        this.title = title;
        this.description = description;
        this.icon = icon;
        this.raised = raised;
        this.goal = goal;
        this.donors = donors;
        this.color = color;
        this.active = true;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public String getIcon() { return icon; }
    public void setIcon(String icon) { this.icon = icon; }
    public Double getRaised() { return raised; }
    public void setRaised(Double raised) { this.raised = raised; }
    public Double getGoal() { return goal; }
    public void setGoal(Double goal) { this.goal = goal; }
    public Integer getDonors() { return donors; }
    public void setDonors(Integer donors) { this.donors = donors; }
    public String getColor() { return color; }
    public void setColor(String color) { this.color = color; }
    public Boolean getActive() { return active; }
    public void setActive(Boolean active) { this.active = active; }
}
