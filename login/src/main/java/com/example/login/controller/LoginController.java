package com.example.login.controller;

import com.example.login.model.Login;
import com.example.login.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/login")
public class LoginController {

    @Autowired
    private LoginService loginService;

    // Handles form-data input for submitting a single login
    @PostMapping("/submit")
    public ResponseEntity<?> submitForm(
            @RequestParam("name") String name,
            @RequestParam("email") String email,
            @RequestParam("phoneNumber") String phoneNumber) {

        // Create a new Login object and set its fields
        Login login = new Login();
        login.setName(name);
        login.setEmail(email);
        login.setPhoneNumber(phoneNumber);

        // Save the login to the database
        Login savedLogin = loginService.saveLogin(login);
        return ResponseEntity.ok(savedLogin);
    }

    // Fetches all login details from MongoDB using POST method
    @PostMapping("/all")
    public ResponseEntity<?> fetchAllLogins() {
        // Retrieve all logins from the database
        List<Login> logins = loginService.getAllLogins();

        // Return the list of logins
        return ResponseEntity.ok(logins);
    }
}
