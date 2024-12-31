package com.example.swarainfra.repository;

import com.example.swarainfra.model.Contact;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ContactRepository extends MongoRepository<Contact, String> {
}

