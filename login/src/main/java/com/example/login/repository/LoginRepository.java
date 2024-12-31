package com.example.login.repository;

import com.example.login.model.Login;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface LoginRepository extends MongoRepository<Login, String> {
    // Additional query methods (if needed) can be defined here
}

