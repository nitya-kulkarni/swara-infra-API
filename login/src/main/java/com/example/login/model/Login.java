package com.example.login.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "logins")
public class Login {

    private String name;
    private String email;
    private String phoneNumber;

    // Getters and setters
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
}
