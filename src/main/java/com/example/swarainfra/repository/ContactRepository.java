
package com.example.swarainfra.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.example.swarainfra.model.Contact;

import java.util.List;

@Repository
public interface ContactRepository extends MongoRepository<Contact, String> {

    // Custom query to fetch all contacts (optional, as findAll() already exists)
    List<Contact> findAll();

	

    
}
