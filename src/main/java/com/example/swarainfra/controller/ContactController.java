package com.example.swarainfra.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
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

    // Handles form-data inputs for submitting a single contact
    @PostMapping("/submit")
    public ResponseEntity<?> submitForm(@Validated @ModelAttribute Contact contact, BindingResult result) {
        if (result.hasErrors()) {
            return ResponseEntity.badRequest().body(result.getAllErrors());
        }

        Contact savedContact = contactService.saveContact(contact);
        return ResponseEntity.ok(savedContact);
    }

    // Returns contact details directly for form-data inputs
    @PostMapping("/all")
    public ResponseEntity<Contact> getContactDetails(@ModelAttribute Contact contact) {
        // Returns the Contact object directly
        return ResponseEntity.ok(contact);
    }
}
