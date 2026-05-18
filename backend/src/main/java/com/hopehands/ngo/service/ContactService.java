package com.hopehands.ngo.service;

import com.hopehands.ngo.model.ContactMessage;
import com.hopehands.ngo.repository.ContactMessageRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ContactService {

    private final ContactMessageRepository contactRepository;

    public ContactService(ContactMessageRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    public ContactMessage saveMessage(ContactMessage message) {
        return contactRepository.save(message);
    }

    public List<ContactMessage> getAllMessages() {
        return contactRepository.findAll();
    }
}
