package com.example.swarainfra.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import com.example.swarainfra.model.Contact;
import com.example.swarainfra.service.ContactService;

@CrossOrigin
@RestController
@RequestMapping("/swarainfra/contact")
public class ContactController {

    @Autowired
    private ContactService contactService;

    // Handles form-data input for submitting a single contact
    @PostMapping("/submit")
    public ResponseEntity<?> submitForm(@Validated @ModelAttribute Contact contact, BindingResult result) {
        if (result.hasErrors()) {
            return ResponseEntity.badRequest().body(result.getAllErrors());
        }

        Contact savedContact = contactService.saveContact(contact);
        return ResponseEntity.ok(savedContact);
    }

    // Handles form-data input and stores it in MongoDB for the /all endpoint
    @PostMapping("/all")
    public ResponseEntity<?> getContactDetails(@ModelAttribute Contact contact) {
        // Save the contact to MongoDB
        Contact savedContact = contactService.saveContact(contact);

        // Return the saved contact as a response
        return ResponseEntity.ok(savedContact);
    }
}

