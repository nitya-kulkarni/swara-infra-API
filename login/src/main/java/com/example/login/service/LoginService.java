package com.example.login.service;

import com.example.login.model.Login;
import com.example.login.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LoginService {

    @Autowired
    private LoginRepository loginRepository;

    // Save a login
    public Login saveLogin(Login login) {
        return loginRepository.save(login);
    }

    // Retrieve all logins
    public List<Login> getAllLogins() {
        return loginRepository.findAll();
    }
}
