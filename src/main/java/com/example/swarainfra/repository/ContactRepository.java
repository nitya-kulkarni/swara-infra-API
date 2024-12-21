
package com.example.swarainfra.repository;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.swarainfra.model.Contact;

public interface ContactRepository extends MongoRepository<Contact, String> {
}