package com.hopehands.ngo.controller;

import com.hopehands.ngo.model.ContactMessage;
import com.hopehands.ngo.service.ContactService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/contact")
public class ContactController {

    private final ContactService contactService;

    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @PostMapping
    public ResponseEntity<ContactMessage> sendMessage(@Valid @RequestBody ContactMessage message) {
        ContactMessage saved = contactService.saveMessage(message);
        return new ResponseEntity<>(saved, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<ContactMessage>> getAllMessages() {
        return ResponseEntity.ok(contactService.getAllMessages());
    }
}
