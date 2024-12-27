package com.example.imageapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories(basePackages = "com.example.imageapi.repository")
public class ImageApiApplication {

    public static void main(String[] args) {
        SpringApplication.run(ImageApiApplication.class, args);
    }
}

