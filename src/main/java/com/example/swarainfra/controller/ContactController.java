package com.example.swarainfra.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.swarainfra.model.Contact;
import com.example.swarainfra.service.ContactService;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/swarainfra/contact")
public class ContactController {

    @Autowired
    private ContactService contactService;

    // Handles form-data input for submitting a single contact
    @PostMapping("/submit")
    public ResponseEntity<?> submitForm(@ModelAttribute Contact contact) {
        // Save the contact to the database
        Contact savedContact = contactService.saveContact(contact);
        return ResponseEntity.ok(savedContact);
    }

    // Fetches all contact details from MongoDB (only fetch, no saving)
    @PostMapping("/all")
    public ResponseEntity<?> fetchAllContacts() {
        // Retrieve all contacts from the database
        List<Contact> contacts = contactService.getAllContacts();

        // Return the list of contacts
        return ResponseEntity.ok(contacts);
    }
}
